import { join } from 'path'
import { AndroidTheme } from './types'

export const ColorFilename = 'Color.kt'
export const SpacingFilename = 'Spacing.kt'
export const TypeFilename = 'Type.kt'

export const TEMPLATES = (theme: AndroidTheme) => ({
  typographyTemplate: {
    source: join(__dirname, './templates/typographies.ejs'),
    destination: `${theme.typography.destination}/${TypeFilename}`,
    filter: 'isTypography',
    formatter: 'android/compose/typography',
    packageName: theme.typography.packageName,
  },
  spacingsTemplate: {
    source: join(__dirname, './templates/spacings.ejs'),
    destination: `${theme.spacings.destination}/${SpacingFilename}`,
    filter: 'isSpacing',
    formatter: 'android/spacings',
    packageName: theme.spacings.packageName,
  },
  colorsTemplate: {
    source: join(__dirname, './templates/colors.ejs'),
    destination: `${theme.colors.destination}/${ColorFilename}`,
    filter: 'color',
    formatter: 'android/compose/colors',
    packageName: theme.colors.packageName,
  },
  headerTemplate: join(__dirname, './templates/header.ejs'),
})
