import StyleDictionaryPackage, { Platform, File } from 'style-dictionary'
import { TEMPLATES } from './constants'
import { useTemplate } from '../utils'

import { IOSConfig } from '../design.types'
import { colorFormatter } from './formatters/colorFormatter'
import { spacingFormatter } from './formatters/spacingFormatter'
import { typographyFormatter } from './formatters/typographyFormatter'

export const setup = (config: IOSConfig) => {
  console.log('Setting up iOS', config)

  const { input, themeName, destination } = config

  const templateInfo = TEMPLATES(destination)

  const {
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
      themeName,
    }),
  })

  StyleDictionaryPackage.registerFormat({
    name: spacingsTemplate.formatter,
    formatter: spacingFormatter({
      template: spacingsTemplate.source,
      header,
      themeName,
    }),
  })

  StyleDictionaryPackage.registerFormat({
    name: colorsTemplate.formatter,
    formatter: colorFormatter({
      template: colorsTemplate.source,
      header,
      themeName,
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

  StyleDictionaryPackage.registerTransformGroup({
    name: 'tokens-ios',
    transforms: ['name/ti/camel'],
  })

  const StyleDictionary = StyleDictionaryPackage.extend({
    source: [input],
    platforms: {
      ios: {
        transformGroup: 'tokens-ios',
        files: [typographyTemplate, spacingsTemplate, colorsTemplate].map(
          template => ({
            format: template.formatter,
            destination: template.destination,
            filter: template.filter,
          }),
        ),
      },
    },
  })

  console.log('Building for platform iOS')

  StyleDictionary.buildPlatform('ios')
}
