import StyleDictionary from 'style-dictionary'

import { TRANSFORM_GROUP, TEMPLATES } from './constants'
import { AndroidThemeOptions } from './types'
import { registerFormatters } from './formatter'

export const styleDictionaryRegistrations = (options: AndroidThemeOptions) => {
  registerFilters()
  registerTransformGroup()
  registerFormatters(options)
}

export const registerTransformGroup = () => {
  StyleDictionary.registerTransformGroup({
    name: TRANSFORM_GROUP,
    transforms: ['name/ti/camel'],
  })
}

export const registerFilter = (name, type) => {
  StyleDictionary.registerFilter({
    name,
    matcher: token => token.type === type,
  })
}

const registerFilters = () => {
  registerFilter(TEMPLATES.FILTERS.colors, 'color')
  registerFilter(TEMPLATES.FILTERS.sizings, 'spacing')
  registerFilter(TEMPLATES.FILTERS.typography, 'typography')
  registerFilter(TEMPLATES.FILTERS.spacings, 'spacing')
}
