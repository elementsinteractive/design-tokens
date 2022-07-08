import Color from 'tinycolor2'
import { useTemplate } from '../../utils'
import type { Dictionary, Formatter } from 'style-dictionary'
import { FormatterConfig } from '../../common/types'

export const typographyFormatter: (config: FormatterConfig) => Formatter =
  (config: FormatterConfig) =>
    ({ dictionary }) => {
      const { template, header, packageName } = config

      const mapFontWeight = weight => {
        const mapping = {
          // Regular: 'Normal',
        }

        return mapping[weight] ?? weight
      }

      const tokens = dictionary.tokens

      const typographies = Object.keys(tokens).map(token => ({
        name: token,
        ...tokens[token].value,
        fontWeight: mapFontWeight(tokens[token].value.fontWeight),
      }))

      return useTemplate(template)({
        typographies,
        header,
        packageName,
      })
    }
