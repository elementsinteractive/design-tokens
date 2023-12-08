import { Formatter } from 'style-dictionary'
import { camelCase, lowerCase } from 'lodash'

import { useTemplate } from '../../utils'
import { capitalizeWord, toArgb } from '../helpers'
import { AndroidThemeOptions } from '../types'

export const colorFormatter =
  (template: string, header: string, options: AndroidThemeOptions): Formatter =>
  ({ dictionary }) => {
    const tokens = dictionary.allTokens

    const colors = tokens.map(({ name, value }) => ({
      name: camelCase(name.replace('Colors', '')),
      value: toArgb(value),
    }))

    return useTemplate(template)({
      header,
      colors,
      packageName: options.packageName,
      themeName: capitalizeWord(options.themeName),
      themePackageName: lowerCase(options.themeName),
    })
  }
