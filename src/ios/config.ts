import { IOSConfig } from '../design.types'
import { TEMPLATES } from './constants'
import { statSync } from 'fs'

export const createConfig = (config: IOSConfig) => {
  const { input, destination } = config

  const templateInfo = TEMPLATES(destination)

  const { colorsTemplate, spacingsTemplate, typographyTemplate } = templateInfo

  return {
    source: [input],
    platforms: {
      ios: {
        transformGroup: 'tokens-ios',
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
