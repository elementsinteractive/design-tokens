import Color from 'tinycolor2'
import { useTemplate } from '../../../utils'
import type { Formatter } from 'style-dictionary'
import { FormatterConfig } from '../../types'

export const paletteFormatter =
  (config: FormatterConfig): Formatter =>
  ({ dictionary }) => {
    const tokens = dictionary.allTokens
    const { template, header, packageName } = config

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
