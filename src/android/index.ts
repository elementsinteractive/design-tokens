import StyleDictionaryPackage from 'style-dictionary'

import { AndroidConfig } from '../design.types'
import { createConfig } from './config'
import { readOptionsAsJson } from './helpers'
import { styleDictionaryRegistrations } from './styleDictionaryRegistrations'

export const setup = (androidConfig: AndroidConfig) => {
  console.log('Setting up Android', androidConfig)

  const { configPath, input } = androidConfig

  const config = readOptionsAsJson(configPath)

  console.log('Using options')

  styleDictionaryRegistrations(config)

  const StyleDictionary = StyleDictionaryPackage.extend(
    createConfig(input, config),
  )

  console.log('Building for platform Android')

  StyleDictionary.buildPlatform('android')
}
