import { Formatter } from 'style-dictionary'
import { lowerCase } from 'lodash'
import { useTemplate } from '../../utils'
import { AndroidThemeOptions } from '../types'

export const spacingsFormatter =
  (template: string, header: string, options: AndroidThemeOptions): Formatter =>
  ({ dictionary }) => {
    const tokens = dictionary.allTokens
    const spacings = tokens.map(({ name, value }) => ({
      name: lowerCase(name.replace('Spacings', '')),
      value,
    }))

    return useTemplate(template)({
      header,
      spacings,
      packageName: options.packageName,
    })
  }
