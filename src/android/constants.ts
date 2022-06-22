import { join } from 'path'

export const TEMPLATES = {
  typography: {
    source: join(__dirname, './templates/android/typographies.ejs'),
    destination: join(
      __dirname,
      '../shared/presentation/src/main/java/nl/elements/skeleton/presentation/compose/theme/Type.kt',
    ),
    filter: 'isTypography',
    formatter: 'android/compose/typography',
  },
  spacings: {
    source: join(__dirname, './templates/android/spacings.ejs'),
    destination: join(
      __dirname,
      '../shared/presentation/src/main/java/nl/elements/skeleton/presentation/compose/theme/Spacings.kt',
    ),
    filter: 'isSpacing',
    formatter: 'android/spacings',
  },
  colors: (destination: string) => ({
    source: join(__dirname, './templates/android/colors.ejs'),
    destination: `${destination}/Colors.kt`,
    filter: 'color',
    formatter: 'android/compose/colors',
  }),
  header: join(__dirname, './templates/android/header.ejs'),
}
