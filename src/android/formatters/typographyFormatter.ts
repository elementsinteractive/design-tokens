import { Formatter, TransformedToken } from 'style-dictionary'
import { camelCase } from 'lodash'

import { useTemplate } from '../../utils'

export const typographyFormatter =
  (template, header, packageName): Formatter =>
  ({ dictionary }) => {
    const tokens = dictionary.allTokens

    const mapFontWeight = weight => {
      const mapping = {
        Regular: 'Normal',
      }

      return mapping[weight] ?? weight
    }

    const typographies = tokens.map(token => {
      const tokenName = token.name
      const value = token.value

      return {
        ...value,
        name: camelCase(tokenName),
        fontWeight: mapFontWeight(value.fontWeight),
      }
    })

    console.log(typographies)

    return useTemplate(template)({
      typographies,
      header,
      packageName,
    })
  }
