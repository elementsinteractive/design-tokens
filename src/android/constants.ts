import { join } from 'path'
import { AndroidTheme } from './types'

export const TEMPLATES = (theme: AndroidTheme) => ({
  typographyTemplate: {
    source: join(__dirname, './templates/typographies.ejs'),
    destination: `${theme.typography}/Type.kt`,
    filter: 'isTypography',
    formatter: 'android/compose/typography',
    packageName: theme.typography.packageName,
  },
  spacingsTemplate: {
    source: join(__dirname, './templates/spacings.ejs'),
    destination: `${theme.spacings}/Spacing.kt`,
    filter: 'isSpacing',
    formatter: 'android/spacings',
    packageName: theme.spacings.packageName,
  },
  colorsTemplate: {
    source: join(__dirname, './templates/colors.ejs'),
    destination: `${theme.colors}/Color.kt`,
    filter: 'color',
    formatter: 'android/compose/colors',
    packageName: theme.colors.packageName,
  },
  headerTemplate: join(__dirname, './templates/header.ejs'),
})
