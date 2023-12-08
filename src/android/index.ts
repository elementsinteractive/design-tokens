import StyleDictionaryPackage from 'style-dictionary'

import { AndroidConfig } from '../design.types'
import { readJsonFileAsOptions } from './helpers'
import { createConfig } from './config'
import { styleDictionaryRegistrations } from './styleDictionaryRegistrations'
import { AndroidThemeOptions } from './types'

export const setup = (androidConfig: AndroidConfig) => {
  console.log('Setting up Android', androidConfig)

  const { configPath, input } = androidConfig

  const options = readJsonFileAsOptions<AndroidThemeOptions>(configPath)

  console.log('Android, received options:', options)

  styleDictionaryRegistrations(options)

  const StyleDictionary = StyleDictionaryPackage.extend(
    createConfig(input, options),
  )

  if (StyleDictionary === undefined) {
    throw new Error('Could not create StyleDictionary config')
  }

  console.log('Building for platform Android')

  StyleDictionary.buildPlatform('android')
}
