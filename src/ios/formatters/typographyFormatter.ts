import { useTemplate } from '../../utils'
import type { Formatter } from 'style-dictionary'
import { FormatterConfig } from '../types'

export const typographyFormatter: (config: FormatterConfig) => Formatter =
  (config: FormatterConfig) =>
    ({ dictionary }) => {
      const { template, header, themeName } = config

      const tokens = dictionary.tokens

      const typographies = Object.keys(tokens).map(token => ({
        name: token,
        ...tokens[token].value,
      }))

      return useTemplate(template)({
        typographies,
        header,
        themeName,
      })
    }
