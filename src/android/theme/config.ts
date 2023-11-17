import { THEME_TEMPLATES } from './constants'
import { AndroidThemeOptions } from '../types'

export const createThemeConfig = (
  input: string,
  options: AndroidThemeOptions,
) => {
  const { paletteTemplate, spacingsTemplate, typographyTemplate } =
    THEME_TEMPLATES(options)

  return {
    source: [input],
    platforms: {
      android: {
        transformGroup: 'tokens-android',
        files: [typographyTemplate, spacingsTemplate, paletteTemplate].map(
          template => ({
            format: template.formatter,
            destination: template.destination,
            filter: template.filter,
          }),
        ),
      },
    },
  }
}
