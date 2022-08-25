import { AndroidConfig } from '../design.types'
import { TEMPLATES } from './constants'

export const createConfig = (config: AndroidConfig) => {
  const { input, destination } = config

  const templateInfo = TEMPLATES(destination)

  const { colorsTemplate, spacingsTemplate, typographyTemplate } = templateInfo

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
