import StyleDictionaryPackage from 'style-dictionary'

import { readJsonFileAsOptions } from '../helpers'
import { AndroidGlobalOptions, AndroidThemeOptions } from '../types'
import { globalSDRegisters } from './styleDictionary'
import { createGlobalConfig } from './config'

export const getGlobalSD = (configPath: string, input: string) => {
  const options = readJsonFileAsOptions<AndroidGlobalOptions>(configPath)

  console.log('Retrieving global SD using options', options)

  globalSDRegisters(options)

  return StyleDictionaryPackage.extend(createGlobalConfig(input, options))
}
