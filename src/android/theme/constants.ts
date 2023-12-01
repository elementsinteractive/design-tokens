import { join } from 'path'
import { AndroidThemeOptions } from '../types'

export const PaletteFilename = 'Palette.kt'
export const SpacingFilename = 'Spacing.kt'
export const TypeFilename = 'Type.kt'
export const ColorTokensFilename = 'ColorTokens.kt'

export const THEME_TEMPLATES = (options: AndroidThemeOptions) => ({
  typographyTemplate: createTypographyTemplate(options),
  spacingsTemplate: createSpacingsTemplate(options),
  paletteTemplate: createPaletteTemplate(options),
  colorTokensTemplate: createColorTokensTemplate(options),
  headerTemplate: join(__dirname, './templates/header.ejs'),
})

const createTypographyTemplate = ({ theme }: AndroidThemeOptions) => ({
  source: join(__dirname, './templates/typographies.ejs'),
  destination: `${theme.typography.destination}/${TypeFilename}`,
  filter: 'typography',
  formatter: 'android/compose/typography',
  packageName: theme.typography.packageName,
})

const createSpacingsTemplate = (options: AndroidThemeOptions) => ({
  source: join(__dirname, './templates/base/spacings.ejs'),
  destination: `${options.theme.spacings.destination}/${SpacingFilename}`,
  filter: 'spacings',
  formatter: 'android/spacings',
  packageName: options.theme.spacings.packageName,
  sharedPackageName: options.globalPackageName,
})

const createPaletteTemplate = ({ theme }: AndroidThemeOptions) => ({
  source: join(__dirname, './templates/shared/palette.ejs'),
  destination: `${theme.palette.destination}/${PaletteFilename}`,
  filter: 'color',
  formatter: 'android/compose/palette',
  packageName: theme.palette.packageName,
  themeName: theme.name,
})

const createColorTokensTemplate = ({ theme }: AndroidThemeOptions) => ({
  source: join(__dirname, './templates/shared/colorTokens.ejs'),
  destination: `${theme.colors.destination}/${ColorTokensFilename}`,
  filter: 'color',
  formatter: 'android/compose/colorTokens',
  packageName: theme.colors.packageName,
  themeName: theme.name,
})
