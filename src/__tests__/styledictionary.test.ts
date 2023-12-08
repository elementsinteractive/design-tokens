import { styleDictionaryRegistrations } from '../android/styleDictionaryRegistrations'
import { join } from 'path'
import { AndroidThemeOptions } from '../android/types'
import { fileToString } from '../common/helpers'
import { createConfig } from '../android/config'
import StyleDictionary from 'style-dictionary'

const input = join(__dirname, './tokens.json')
const options: AndroidThemeOptions = {
  themeName: 'light',
  packageName: 'nl.elements.designsystem',
  colorTokensDestination: join(__dirname, '__output/ColorTokens.kt'),
  colorTokensTypesDestination: join(__dirname, '__output/ColorTokensTypes.kt'),
  spacingsTokensDestination: join(__dirname, '__output/SpacingsTokens.kt'),
  spacingsTokensTypesDestination: join(
    __dirname,
    '__output/SpacingsTokensTypes.kt',
  ),
  typographiesDestination: join(__dirname, '__output/Type.kt'),
}

describe('android styledictionary', () => {
  let StyleDictionaryExtended

  beforeAll(() => {
    styleDictionaryRegistrations(options)

    StyleDictionaryExtended = StyleDictionary.extend(
      createConfig(input, options),
    )
  })

  it('can build platform android', () => {
    StyleDictionaryExtended.buildPlatform('android')

    const files = [
      options.colorTokensDestination,
      options.colorTokensTypesDestination,
      options.spacingsTokensDestination,
      options.spacingsTokensTypesDestination,
      options.typographiesDestination,
    ]

    files.map(file => {
      expect(fileToString(file)).toMatchSnapshot()
    })
  })
})
