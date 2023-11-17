import { join } from 'path'

import { AndroidGlobalOptions } from '../types'

export const ColorTypeFilename = 'ColorTokens.kt'

export const SpacingTypeFilename = 'SpacingTokens.kt'

export const GLOBAL_TEMPLATES = (options: AndroidGlobalOptions) => ({
  colorsTypeTemplate: createColorsTypeTemplate(options),
  spacingsTypeTemplate: createSpacingsTypeTemplate(options),
  headerTemplate: join(__dirname, './templates/header.ejs'),
})

const createSpacingsTypeTemplate = (options: AndroidGlobalOptions) => ({
  source: join(__dirname, './templates/spacingTokens.ejs'),
  destination: `${options.destination}/${SpacingTypeFilename}`,
  filter: 'spacingsType',
  formatter: 'android/spacingsType',
  packageName: options.packageName,
})

const createColorsTypeTemplate = (options: AndroidGlobalOptions) => ({
  source: join(__dirname, './templates/colorTokens.ejs'),
  destination: `${options.destination}/${ColorTypeFilename}`,
  filter: 'colorsType',
  formatter: 'android/compose/colorsType',
  packageName: options.packageName,
})
