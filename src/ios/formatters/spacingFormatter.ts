import { Formatter } from 'style-dictionary'
import { useTemplate } from '../../utils'
import { FormatterConfig } from '../types'

export const spacingFormatter: (config: FormatterConfig) => Formatter =
  (config: FormatterConfig) =>
    ({ dictionary }) => {
      const { template, header, themeName } = config

      const tokens = dictionary.allTokens

      const spacings = tokens.map(({ name, value }) => ({
        name,
        value,
      }))

      return useTemplate(template)({
        header,
        spacings,
        themeName,
      })
    }
