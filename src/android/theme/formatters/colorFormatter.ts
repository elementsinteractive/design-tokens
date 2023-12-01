import Color from 'tinycolor2'
import { Formatter } from 'style-dictionary'

import { FormatterConfig } from '../../types'
import { useTemplate } from '../../../utils'

export const colorFormatter =
  (
    config: FormatterConfig,
    globalPackageName: string,
    themeName: string,
  ): Formatter =>
  ({ dictionary }) => {
    const tokens = dictionary.allTokens
    const { template, header, packageName } = config

    const colors = tokens.map(({ name, value }) => ({
      colorName: name,
    }))

    return useTemplate(template)({
      header,
      colors,
      packageName,
      globalPackageName,
      themeName,
    })
  }
