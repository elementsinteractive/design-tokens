import Color from 'tinycolor2'
import { useTemplate } from '../../utils'
import type { Formatter } from 'style-dictionary'
import { FormatterConfig } from './types'

export const colorFormatter: (config: FormatterConfig) => Formatter =
  (config: FormatterConfig) =>
  ({ dictionary }) => {
    const { template, header, packageName } = config

    const tokens = dictionary.allTokens

    const toArgb = color => {
      const colorStr = Color(color).toHex8()

      return colorStr.slice(6) + colorStr.slice(0, 6)
    }

    const colors = tokens.map(({ name, value }) => ({
      name,
      value: toArgb(value),
    }))

    return useTemplate(template)({
      header,
      colors,
      packageName,
    })
  }
