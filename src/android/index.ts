import StyleDictionaryPackage from 'style-dictionary'
import { TEMPLATES } from './constants'
import { camelCase } from 'lodash'
import { createTemplate } from '../utils'
import Color from 'tinycolor2'
import { AndroidConfig } from '../design.types'

export const setup = (config: AndroidConfig) => {
  console.log('Setting up Android', config);

  const { input, packageName, destination } = config

  const header = createTemplate(TEMPLATES.header)

  const colorsTemplate = TEMPLATES.colors(destination)

  /**
   * Formatters
   */
  StyleDictionaryPackage.registerFormat({
    name: TEMPLATES.typography.formatter,
    formatter: ({ dictionary }) => {
      const mapFontWeight = weight => {
        const mapping = {
          Regular: 'Normal',
        }

        return mapping[weight] ?? weight
      }

      const tokens = dictionary.tokens
      const typographies = Object.keys(tokens).map(token => ({
        name: (token),
        ...tokens[token].value,
        fontWeight: mapFontWeight(tokens[token].value.fontWeight),
      }))

      return createTemplate(TEMPLATES.typography.source)({
        typographies,
        header,
        packageName,
      })
    },
  })

  StyleDictionaryPackage.registerFormat({
    name: TEMPLATES.spacings.formatter,
    formatter: ({ dictionary }) => {
      const tokens = dictionary.tokens.spacings

      const spacings = Object.entries(tokens).map(([key, item]) => ({
        name: key,
        value: item.value,
      }))

      return createTemplate(TEMPLATES.spacings.source)({
        header,
        spacings,
        packageName,
      })
    },
  })

  StyleDictionaryPackage.registerFormat({
    name: colorsTemplate.formatter,
    formatter: ({ dictionary }) => {
      const tokens = dictionary.tokens

      const toArgb = color => {
        const colorStr = Color(color).toHex8()

        return colorStr.slice(6) + colorStr.slice(0, 6)
      }

      const colors = Object.entries(tokens).map(([key, item]) => ({
        name: key,
        value: toArgb(item.value),
      }))

      return createTemplate(colorsTemplate.source)({
        header,
        colors,
        packageName,
      })
    },
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

  // registerFilter(TEMPLATES.typography.filter, 'typography')
  // registerFilter(TEMPLATES.spacings.filter, 'spacing')
  registerFilter(colorsTemplate.filter, 'color')

  return StyleDictionaryPackage.extend({
    source: [input],
    platforms: {
      android: {
        files: [
          // {
          //   format: TEMPLATES.typography.formatter,
          //   destination: TEMPLATES.typography.destination,
          //   filter: TEMPLATES.typography.filter,
          // },
          // {
          //   format: TEMPLATES.spacings.formatter,
          //   destination: TEMPLATES.spacings.destination,
          //   filter: TEMPLATES.spacings.filter,
          // },
          {
            format: colorsTemplate.formatter,
            destination: colorsTemplate.destination,
            filter: colorsTemplate.filter,
          },
        ],
      },
    },
  })

  StyleDictionaryPackage.buildPlatform('android')
}