import type { Formatter } from 'style-dictionary'
import { toLower } from 'lodash'

import { FormatterConfig } from '../../types'

import { useTemplate } from '../../../utils'

export const typographyFormatter =
  (config: FormatterConfig): Formatter =>
  ({ dictionary }) => {
    const { template, header, packageName } = config

    const mapFontWeight = weight => {
      const mapping = {
        Regular: 'Normal',
      }

      return mapping[weight] ?? weight
    }

    const tokens = dictionary.allTokens

    const typographies = tokens.map(token => ({
      name: token.name,
      ...token.value,
      fontWeight: mapFontWeight(token.value.fontWeight),
    }))

    return useTemplate(template)({
      typographies,
      header,
      packageName,
    })
  }
