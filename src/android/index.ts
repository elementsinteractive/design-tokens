import StyleDictionaryPackage from 'style-dictionary'
import { readFileSync } from 'fs'

import { TEMPLATES } from './constants'
import { useTemplate } from '../utils'

import { AndroidConfig } from '../design.types'
import { colorFormatter } from './formatters/colorFormatter'
import { spacingFormatter } from './formatters/spacingFormatter'
import { typographyFormatter } from './formatters/typographyFormatter'
import { JsonConfigOptions } from './types'

export const setup = (androidConfig: AndroidConfig) => {
  console.log('Setting up Android', androidConfig)

  const { input, configPath } = androidConfig

  const config = JSON.parse(
    readFileSync(configPath).toString(),
  ) as JsonConfigOptions
  const { theme } = config

  const templateInfo = TEMPLATES(theme)

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
      packageName: typographyTemplate.packageName,
    }),
  })

  StyleDictionaryPackage.registerFormat({
    name: spacingsTemplate.formatter,
    formatter: spacingFormatter({
      template: spacingsTemplate.source,
      header,
      packageName: spacingsTemplate.packageName,
    }),
  })

  StyleDictionaryPackage.registerFormat({
    name: colorsTemplate.formatter,
    formatter: colorFormatter({
      template: colorsTemplate.source,
      header,
      packageName: colorsTemplate.packageName,
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
