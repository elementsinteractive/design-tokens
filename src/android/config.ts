import { AndroidConfig } from '../design.types'
import { TEMPLATES } from './constants'
import { AndroidJsonOptions } from './types'

export const createConfig = (input: string, options: AndroidJsonOptions) => {
  const { theme } = options

  const { colorsTemplate, spacingsTemplate, typographyTemplate } =
    TEMPLATES(theme)

  return {
    source: [input],
    platforms: {
      android: {
        transformGroup: 'tokens-android',
        files: [typographyTemplate, spacingsTemplate, colorsTemplate].map(
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
