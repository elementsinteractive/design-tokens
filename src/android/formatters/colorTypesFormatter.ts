import { Formatter } from 'style-dictionary'
import { camelCase } from 'lodash'
import { useTemplate } from '../../utils'

export const colorTypesFormatter =
  (template, header, packageName): Formatter =>
  ({ dictionary }) => {
    const tokens = dictionary.allTokens
    const colors = tokens.map(({ name }) => ({
      name: camelCase(name.replace('Colors', '')),
    }))

    return useTemplate(template)({
      header,
      colors,
      packageName,
    })
  }
