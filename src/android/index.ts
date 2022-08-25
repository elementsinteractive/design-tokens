import StyleDictionaryPackage from 'style-dictionary'

import { AndroidConfig } from '../design.types'
import { createConfig } from './config'
import { styleDictionaryRegistrations } from './styleDictionaryRegistrations'

export const setup = (config: AndroidConfig) => {
  console.log('Setting up Android', config)

  styleDictionaryRegistrations(config)

  const StyleDictionary = StyleDictionaryPackage.extend(createConfig(config))

  console.log('Building for platform Android')

  StyleDictionary.buildPlatform('android')
}
