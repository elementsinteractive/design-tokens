import StyleDictionaryPackage from 'style-dictionary'
import { TEMPLATES } from './constants'
import { useTemplate } from '../utils'

import { AndroidConfig } from '../design.types'
import { colorFormatter } from './formatters/colorFormatter'
import { spacingFormatter } from './formatters/spacingFormatter'
import { typographyFormatter } from './formatters/typographyFormatter'

export const setup = (config: AndroidConfig) => {
  console.log('Setting up Android', config)

  const { input, packageName, destination } = config

  const templateInfo = TEMPLATES(destination)

  const {
    headerTemplate,
    colorsTemplate,
    spacingsTemplate,
    typographyTemplate,
  } = templateInfo

  const header = useTemplate(headerTemplate)()

  /**
   * Formatters
   */
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
  const registerFilter = (name, type) => {
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

  const StyleDictionary = StyleDictionaryPackage.extend({
    source: [input],
    platforms: {
      android: {
        transformGroup: 'name/ti/camel',
        files: [
          {
            format: typographyTemplate.formatter,
            destination: typographyTemplate.destination,
            filter: typographyTemplate.filter,
          },
          {
            format: spacingsTemplate.formatter,
            destination: spacingsTemplate.destination,
            filter: spacingsTemplate.filter,
          },
          {
            format: colorsTemplate.formatter,
            destination: colorsTemplate.destination,
            filter: colorsTemplate.filter,
          },
        ],
      },
    },
  })

  console.log('Building for platform Android')

  StyleDictionary.buildPlatform('android')
}
