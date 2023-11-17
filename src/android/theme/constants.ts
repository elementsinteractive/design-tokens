import { join } from 'path'
import {
  AndroidGlobalOptions,
  AndroidThemeOptions,
  AndroidTheme,
} from '../types'

export const PaletteFilename = 'Palette.kt'
export const SpacingFilename = 'Spacing.kt'
export const TypeFilename = 'Type.kt'

export const THEME_TEMPLATES = (options: AndroidThemeOptions) => ({
  typographyTemplate: createTypographyTemplate(options),
  spacingsTemplate: createSpacingsTemplate(options),
  paletteTemplate: createPaletteTemplate(options),
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
  sharedPackageName: options.basePackageName,
})

const createPaletteTemplate = ({ theme }: AndroidThemeOptions) => ({
  source: join(__dirname, './templates/shared/palette.ejs'),
  destination: `${theme.colors.destination}/${PaletteFilename}`,
  filter: 'palette',
  formatter: 'android/compose/palette',
  packageName: theme.colors.packageName,
  themeName: theme.name,
})
