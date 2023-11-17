import { AndroidConfig } from '../design.types'
import { getThemeSD } from './theme'

export const setup = (androidConfig: AndroidConfig) => {
  console.log('Setting up Android', androidConfig)

  const { configPath, input } = androidConfig

  let StyleDictionary

  if (androidConfig.type == 'theme') {
    StyleDictionary = getThemeSD(configPath, input)
  }

  if (StyleDictionary === undefined) {
    throw new Error('Could not create StyleDictionary config')
  }

  console.log('Building for platform Android')

  StyleDictionary.buildPlatform('android')
}
