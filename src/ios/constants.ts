import { join } from 'path'

export const TEMPLATES = (destination: string) => ({
  typographyTemplate: {
    source: join(__dirname, './templates/typographies.ejs'),
    destination: `${destination}/Fonts.swift`,
    filter: 'isTypography',
    formatter: 'ios/typography',
  },
  spacingsTemplate: {
    source: join(__dirname, './templates/spacings.ejs'),
    destination: `${destination}/Spacings.swift`,
    filter: 'isSpacing',
    formatter: 'ios/spacings',
  },
  colorsTemplate: {
    source: join(__dirname, './templates/colors.ejs'),
    destination: `${destination}/Colors.swift`,
    filter: 'color',
    formatter: 'ios/colors',
  },
  headerTemplate: join(__dirname, './templates/header.ejs'),
})
