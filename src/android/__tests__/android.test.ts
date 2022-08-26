import StyleDictionaryPackage from 'style-dictionary'
import { clearOutput, fileExists, fileToString } from '../../common/helpers'
import { createConfig } from '../config'
import { ColorFilename, SpacingFilename, TypeFilename } from '../constants'
import { readJsonFileAsOptions } from '../helpers'
import { styleDictionaryRegistrations } from '../styleDictionaryRegistrations'
import { AndroidJsonOptions } from '../types'

describe('android', () => {
  var config = {
    configPath: 'src/android/__tests__/config.json',
    input: 'src/__tests__/tokens.json',
  }

  let StyleDictionaryExtended

  let options: AndroidJsonOptions

  beforeAll(() => {
    const { input, configPath } = config

    options = readJsonFileAsOptions(configPath)

    styleDictionaryRegistrations(options)

    StyleDictionaryExtended = StyleDictionaryPackage.extend(
      createConfig(input, options),
    )
  })

  beforeEach(() => {
    clearOutput('src/android/__tests__/__output')
  })

  it('can setup with default config', () => {
    StyleDictionaryExtended.buildPlatform('android')

    expect(
      StyleDictionaryExtended.transformGroup['tokens-android'],
    ).toMatchSnapshot()

    const colorFile = `${options.theme.colors.destination}/${ColorFilename}`
    const spacingFile = `${options.theme.spacings.destination}/${SpacingFilename}`
    const typeFile = `${options.theme.typography.destination}/${TypeFilename}`

    const files = [colorFile, spacingFile, typeFile]

    files.forEach(path => {
      expect(fileExists(path)).toBeTruthy()
      expect(fileToString(path)).toMatchSnapshot()
    })
  })
})
