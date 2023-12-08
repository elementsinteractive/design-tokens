import { TRANSFORM_GROUP } from './constants'

import { TEMPLATES } from './constants'
import StyleDictionaryPackage from 'style-dictionary'
import { AndroidThemeOptions } from './types'
import { registerFormatters } from './formatter'

const { FORMATTERS, FILTERS } = TEMPLATES

export const registerSD = (options: AndroidThemeOptions) => {
  registerFilters()
  registerTransformGroup()
  registerFormatters(options)
}

export const getSDConfig = (input: string, options: AndroidThemeOptions) => {
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

  return StyleDictionaryPackage.extend(config)
}

export const registerTransformGroup = () => {
  StyleDictionaryPackage.registerTransformGroup({
    name: TRANSFORM_GROUP,
    transforms: ['name/ti/camel'],
  })
}

export const registerFilter = (name, type) => {
  StyleDictionaryPackage.registerFilter({
    name,
    matcher: token => {
      return token.type === type
    },
  })
}

const registerFilters = () => {
  registerFilter(TEMPLATES.FILTERS.colors, 'color')
  registerFilter(TEMPLATES.FILTERS.sizings, 'spacing')
  registerFilter(TEMPLATES.FILTERS.typography, 'typography')
  registerFilter(TEMPLATES.FILTERS.spacings, 'spacing')
}
