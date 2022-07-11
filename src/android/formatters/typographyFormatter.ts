import type { Formatter } from 'style-dictionary'
import { toLower } from 'lodash'

import { FormatterConfig } from './types'

import { useTemplate } from '../../utils'

export const typographyFormatter: (config: FormatterConfig) => Formatter =
  (config: FormatterConfig) =>
  ({ dictionary }) => {
    const { template, header, packageName } = config

    const mapFontWeight = weight => {
      const mapping = {
        Regular: 'Normal',
      }

      return mapping[weight] ?? weight
    }

    const tokens = dictionary.tokens

    const typographies = Object.keys(tokens).map(token => ({
      name: toLower(token),
      ...tokens[token].value,
      fontWeight: mapFontWeight(tokens[token].value.fontWeight),
    }))

    return useTemplate(template)({
      typographies,
      header,
      packageName,
    })
  }
