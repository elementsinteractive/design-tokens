import Color from 'tinycolor2'
import { useTemplate } from '../../../utils'
import type { Formatter } from 'style-dictionary'
import { FormatterConfig } from '../../types'

export const colorTypeFormatter =
  (config: FormatterConfig): Formatter =>
  ({ dictionary }) => {
    const tokens = dictionary.allTokens
    const { template, header, packageName } = config

    const colors = tokens.map(({ name }) => ({
      name,
    }))

    return useTemplate(template)({
      header,
      colors,
      packageName,
    })
  }
