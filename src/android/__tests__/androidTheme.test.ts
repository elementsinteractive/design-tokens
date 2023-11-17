import StyleDictionaryPackage from 'style-dictionary'
import { clearOutput, fileExists, fileToString } from '../../common/helpers'
import { createThemeConfig } from '../theme/config'
import {
  PaletteFilename,
  SpacingFilename,
  TypeFilename,
} from '../theme/constants'
import { readJsonFileAsOptions } from '../helpers'
import { AndroidThemeOptions } from '../types'
import { themeSDRegisters } from '../theme/styleDictionary'

describe('android', () => {
  var config = {
    configPath: 'src/android/__tests__/config.json',
    input: 'src/__tests__/tokens.json',
  }

  let StyleDictionaryExtended

  let options: AndroidThemeOptions

  beforeAll(() => {
    const { input, configPath } = config

    options = readJsonFileAsOptions(configPath)

    themeSDRegisters(options)

    StyleDictionaryExtended = StyleDictionaryPackage.extend(
      createThemeConfig(input, options),
    )
  })

  beforeEach(() => {
    clearOutput('src/android/__tests__/__output')
  })

  it('can setup with global config', () => {
    StyleDictionaryExtended.buildPlatform('android')

    expect(
      StyleDictionaryExtended.transformGroup['tokens-android'],
    ).toMatchSnapshot()

    const colorFile = `${options.theme.colors.destination}/${PaletteFilename}`
    const spacingFile = `${options.theme.spacings.destination}/${SpacingFilename}`
    const typeFile = `${options.theme.typography.destination}/${TypeFilename}`

    const files = [colorFile, spacingFile, typeFile]

    files.forEach(path => {
      expect(fileExists(path)).toBeTruthy()
      expect(fileToString(path)).toMatchSnapshot()
    })
  })
})
