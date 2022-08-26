import StyleDictionaryPackage from 'style-dictionary'

import { AndroidConfig } from '../design.types'
import { createConfig } from './config'
import { readJsonFileAsOptions } from './helpers'
import { styleDictionaryRegistrations } from './styleDictionaryRegistrations'

export const setup = (androidConfig: AndroidConfig) => {
  console.log('Setting up Android', androidConfig)

  const { configPath, input } = androidConfig

  const options = readJsonFileAsOptions(configPath)

  console.log('Using options', options)

  styleDictionaryRegistrations(options)

  const StyleDictionary = StyleDictionaryPackage.extend(
    createConfig(input, options),
  )

  console.log('Building for platform Android')

  StyleDictionary.buildPlatform('android')
}
