import StyleDictionaryPackage from 'style-dictionary'
import { clearOutput, fileExists, fileToString } from '../../../common/helpers'
import { createThemeConfig } from '../config'
import { PaletteFilename, SpacingFilename, TypeFilename } from '../constants'
import { readJsonFileAsOptions } from '../../helpers'
import { AndroidThemeOptions } from '../../types'
import { getThemeSD } from '..'

describe('android', () => {
  var config = {
    configPath: 'src/android/theme/__tests__/darkThemeConfig.json',
    input: 'src/android/theme/__tests__/darkThemeTokens.json',
  }

  let StyleDictionaryExtended

  beforeAll(() => {
    const { input, configPath } = config

    StyleDictionaryExtended = getThemeSD(configPath, input)
  })

  beforeEach(() => {
    clearOutput('src/android/theme/__tests__/__output')
  })

  it('can setup with theme specific config', () => {
    StyleDictionaryExtended.buildPlatform('android')

    expect(
      StyleDictionaryExtended.transformGroup['tokens-android'],
    ).toMatchSnapshot()

    const options = readJsonFileAsOptions<AndroidThemeOptions>(
      config.configPath,
    )

    const paletteFile = `${options.theme.palette.destination}/${PaletteFilename}`
    const typeFile = `${options.theme.typography.destination}/${TypeFilename}`

    const files = [paletteFile, typeFile]

    files.forEach(path => {
      console.log('path', path)
      expect(fileExists(path)).toBeTruthy()
      expect(fileToString(path)).toMatchSnapshot()
    })
  })
})
