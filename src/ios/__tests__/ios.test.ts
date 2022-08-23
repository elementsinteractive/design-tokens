import StyleDictionaryPackage from 'style-dictionary'
import { clearOutput, fileExists, fileToString } from '../../common/helpers'
import { createConfig } from '../config'
import { styleDictionaryRegistrations } from '../styleDictionaryRegistrations'

const iosColorFile = 'src/ios/__tests__/__output/Colors.swift'
const iosFontsFile = 'src/ios/__tests__/__output/Fonts.swift'
const iosSpacingsFile = 'src/ios/__tests__/__output/Spacings.swift'

describe('ios', () => {
  var config = {
    input: 'src/ios/__tests__/tokens.json',
    destination: 'src/ios/__tests__/__output',
    themeName: 'jest',
  }

  let StyleDictionaryExtended

  beforeAll(() => {
    styleDictionaryRegistrations(config)

    StyleDictionaryExtended = StyleDictionaryPackage.extend(
      createConfig(config),
    )
  })

  beforeEach(() => {
    clearOutput('src/ios/__tests__/__output')
  })

  it('can setup with default config', () => {
    StyleDictionaryExtended.buildPlatform('ios')

    expect(
      StyleDictionaryExtended.transformGroup['tokens-ios'],
    ).toMatchSnapshot()

    const files = [iosColorFile, iosFontsFile, iosSpacingsFile]

    files.forEach(path => {
      expect(fileExists(path)).toBeTruthy()
      expect(fileToString(path)).toMatchSnapshot()
    })
  })
})
