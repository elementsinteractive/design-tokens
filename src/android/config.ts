import StyleDictionary from 'style-dictionary'

import { TRANSFORM_GROUP, TEMPLATES } from './constants'

const { FORMATTERS, FILTERS } = TEMPLATES

import { AndroidThemeOptions } from './types'

export const createConfig = (input: string, options: AndroidThemeOptions) => {
  const config = {
    source: [input],
    platforms: {
      android: {
        transformGroup: TRANSFORM_GROUP,
        files: [
          {
            format: FORMATTERS.colorTokens,
            destination: options.colorTokensDestination,
            filter: FILTERS.colors,
          },
          {
            format: FORMATTERS.colorTokensTypes,
            destination: options.colorTokensTypesDestination,
            filter: FILTERS.colors,
          },
          {
            format: FORMATTERS.spacingsTokens,
            destination: options.spacingsTokensDestination,
            filter: FILTERS.spacings,
          },
          {
            format: FORMATTERS.spacingsTokensTypes,
            destination: options.spacingsTokensTypesDestination,
            filter: FILTERS.spacings,
          },
          {
            format: FORMATTERS.typography,
            destination: options.typographiesDestination,
            filter: FILTERS.typography,
          },
        ],
      },
    },
  }

  return config
}
