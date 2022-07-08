import { join } from 'path'

export const TEMPLATES = (destination: string, packageName: string) => ({
  packageTemplate: {
    source: join(__dirname, './templates/swiftpackage.ejs'),
    destination: `${destination}/Package.swift`,
    filter: 'package',
    formatter: 'ios/swiftPackage',
  },
  typographyTemplate: {
    source: join(__dirname, './templates/typographies.ejs'),
    destination: `${destination}/Sources/${packageName}/Fonts.swift`,
    filter: 'isTypography',
    formatter: 'ios/typography',
  },
  spacingsTemplate: {
    source: join(__dirname, './templates/spacings.ejs'),
    destination: `${destination}/Sources/${packageName}/Spacings.swift`,
    filter: 'isSpacing',
    formatter: 'ios/spacings',
  },
  colorsTemplate: {
    source: join(__dirname, './templates/colors.ejs'),
    destination: `${destination}/Sources/${packageName}/Colors.swift`,
    filter: 'color',
    formatter: 'ios/colors',
  },
  headerTemplate: join(__dirname, './templates/header.ejs'),
})
