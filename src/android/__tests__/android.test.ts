import StyleDictionaryPackage from 'style-dictionary'
import { clearOutput, fileExists, fileToString } from '../../common/helpers'
import { createConfig } from '../config'
import { styleDictionaryRegistrations } from '../styleDictionaryRegistrations'

const androidColorFile = 'src/android/__tests__/__output/Color.kt'
const androidSpacingFile = 'src/android/__tests__/__output/Spacing.kt'
const androidTypeFile = 'src/android/__tests__/__output/Type.kt'

describe('android', () => {
  var config = {
    packageName: 'nl.makerstreet.design',
    input: 'src/android/__tests__/tokens.json',
    destination: 'src/android/__tests__/__output',
  }

  let StyleDictionaryExtended

  beforeAll(() => {
    styleDictionaryRegistrations(config)

    StyleDictionaryExtended = StyleDictionaryPackage.extend(
      createConfig(config),
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

    const files = [androidColorFile, androidSpacingFile, androidTypeFile]

    files.forEach(path => {
      expect(fileExists(path)).toBeTruthy()
      expect(fileToString(path)).toMatchSnapshot()
    })
  })
})
