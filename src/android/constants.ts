import { join } from 'path'

export const TEMPLATES = {
  FILES: {
    header: join(__dirname, './templates/header.ejs'),
    colorTokens: join(__dirname, './templates/colorTokens.ejs'),
    colorTokensTypes: join(__dirname, './templates/colorTokensTypes.ejs'),
    spacingsTokens: join(__dirname, './templates/spacingsTokens.ejs'),
    spacingsTokensTypes: join(__dirname, './templates/spacingTokensTypes.ejs'),
    typographies: join(__dirname, './templates/typographies.ejs'),
    typographiesTypes: join(__dirname, './templates/typographiesTypes.ejs'),
  },
  FILTERS: {
    typography: 'isTypography',
    colors: 'isColor',
    sizings: 'isSizing',
    spacings: 'spacings',
  },
  FORMATTERS: {
    colorTokens: 'android/compose/colorTokens',
    colorTokensTypes: 'android/compose/colorTokenTypes',
    spacingsTokens: 'android/compose/spacingsTokens',
    spacingsTokensTypes: 'android/compose/spacingsTokensTypes',
    typography: 'android/compose/typography',
  },
}

export const TRANSFORM_GROUP = 'tokens-android'
