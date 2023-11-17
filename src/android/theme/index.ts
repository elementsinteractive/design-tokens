import StyleDictionaryPackage from 'style-dictionary'

import { readJsonFileAsOptions } from '../helpers'
import { AndroidThemeOptions } from '../types'
import { themeSDRegisters } from './styleDictionary'
import { createThemeConfig } from './config'

export const getThemeSD = (configPath: string, input: string) => {
  const options = readJsonFileAsOptions<AndroidThemeOptions>(configPath)

  console.log('Retrieving theme SD using options', options)

  themeSDRegisters(options)

  return StyleDictionaryPackage.extend(createThemeConfig(input, options))
}
