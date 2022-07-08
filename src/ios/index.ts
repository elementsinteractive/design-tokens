import StyleDictionaryPackage, { Platform, File } from 'style-dictionary'
import createDictionary from 'style-dictionary/lib/utils/createDictionary'
import createFormatArgs from 'style-dictionary/lib/utils/createFormatArgs'
import { TEMPLATES } from './constants'
import { useTemplate } from '../utils'
import { writeFile, rm } from 'fs/promises'

import { IOSConfig } from '../design.types'
import { colorFormatter } from './formatters/colorFormatter'
import { spacingFormatter } from './formatters/spacingFormatter'
import { typographyFormatter } from './formatters/typographyFormatter'
import { swiftPackageFormatter } from './formatters/swiftPackageFormatter'
import { FormatterConfig } from '../common/types'

export const setup = (config: IOSConfig) => {
  console.log('Setting up iOS', config)

  const { input, packageName, destination } = config

  const templateInfo = TEMPLATES(destination, packageName)

  const {
    packageTemplate,
    headerTemplate,
    colorsTemplate,
    spacingsTemplate,
    typographyTemplate,
  } = templateInfo

  const header = useTemplate(headerTemplate)()

  StyleDictionaryPackage.registerFormat({
    name: typographyTemplate.formatter,
    formatter: typographyFormatter({
      template: typographyTemplate.source,
      header,
      packageName,
    }),
  })

  StyleDictionaryPackage.registerFormat({
    name: spacingsTemplate.formatter,
    formatter: spacingFormatter({
      template: spacingsTemplate.source,
      header,
      packageName,
    }),
  })

  StyleDictionaryPackage.registerFormat({
    name: colorsTemplate.formatter,
    formatter: colorFormatter({
      template: colorsTemplate.source,
      header,
      packageName,
    }),
  })

  /**
   * Filters
   */
  const registerFilter = (name: string, type?: string) => {
    StyleDictionaryPackage.registerFilter({
      name,
      matcher: token => {
        return token.type === type
      },
    })
  }

  registerFilter(typographyTemplate.filter, 'typography')
  registerFilter(spacingsTemplate.filter, 'spacing')
  registerFilter(colorsTemplate.filter, 'color')

  // Add a workaround to generate file with no tokens.
  StyleDictionaryPackage.registerAction({
    name: 'generate_swift_package',
    do: async function (dictionary, config) {
      console.log(`Generating Package.swift...`);

      const swiftPackageConfig: FormatterConfig = {
        template: packageTemplate.source,
        header,
        packageName: 'DesignSystem',
      };

      const formatterArgs = createFormatArgs({
        dictionary: createDictionary({}),
        platform: {}
      })

      const packageFile = swiftPackageFormatter(swiftPackageConfig)(formatterArgs);
      await writeFile(packageTemplate.destination, packageFile, 'utf-8');
    },
    undo: function (dictionary, config) {
      console.log(`Removing Package.swift...`);
      rm(packageTemplate.destination);
    }
  })

  const StyleDictionary = StyleDictionaryPackage.extend({
    source: [input],
    platforms: {
      ios: {
        files: [typographyTemplate, spacingsTemplate, colorsTemplate]
          .map((template) => ({
            format: template.formatter,
            destination: template.destination,
            filter: template.filter,
          })
          ),
        actions: ['generate_swift_package']
      },
    },
  })

  console.log('Building for platform iOS')

  StyleDictionary.buildPlatform('ios')
}
