import { AndroidGlobalOptions } from '../types'
import { GLOBAL_TEMPLATES } from './constants'

export const createGlobalConfig = (
  input: string,
  options: AndroidGlobalOptions,
) => {
  const { spacingsTypeTemplate, colorsTypeTemplate } = GLOBAL_TEMPLATES(options)

  return {
    source: [input],
    platforms: {
      android: {
        transformGroup: 'tokens-android',
        files: [spacingsTypeTemplate, colorsTypeTemplate].map(template => ({
          format: template.formatter,
          destination: template.destination,
          filter: template.filter,
        })),
      },
    },
  }
}
