import StyleDictionaryPackage from 'style-dictionary'

import { IOSConfig } from '../design.types'
import { createConfig } from './config'
import { styleDictionaryRegistrations } from './styleDictionaryRegistrations'

export const setup = (config: IOSConfig) => {
  console.log('Setting up iOS', config)

  styleDictionaryRegistrations(config)

  const StyleDictionary = StyleDictionaryPackage.extend(createConfig(config))

  console.log('Building for platform iOS')

  StyleDictionary.buildPlatform('ios')
}
