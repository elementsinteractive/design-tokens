import Color from 'tinycolor2'
import { useTemplate } from '../../utils'
import type { Formatter } from 'style-dictionary'
import { FormatterConfig } from '../types'

export const colorFormatter: (config: FormatterConfig) => Formatter =
  (config: FormatterConfig) =>
    ({ dictionary }) => {
      const { template, header, themeName } = config

      const tokens = dictionary.allTokens

      const colors = tokens.map(({ name, value }) => ({
        name,
        value: Color(value).toHex8(),
      }))

      return useTemplate(template)({
        header,
        colors,
        themeName,
      })
    }
