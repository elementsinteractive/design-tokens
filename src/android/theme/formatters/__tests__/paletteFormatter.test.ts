import createDictionary from 'style-dictionary/lib/utils/createDictionary'
import createFormatArgs from 'style-dictionary/lib/utils/createFormatArgs'

import { THEME_TEMPLATES } from '../../constants'
import { FormatterConfig } from '../../../types'
import {
  PROPERTIES,
  HEADER,
} from '../../../../common/formatters/__tests__/constants'
import { DUMMY_ANDROID_THEME_OPTIONS } from './constants'
import { paletteFormatter } from '../paletteFormatter'

describe('colorFormatter', () => {
  it('can handle dictionary with color tokens', () => {
    const { paletteTemplate } = THEME_TEMPLATES(DUMMY_ANDROID_THEME_OPTIONS)

    const colorConfig: FormatterConfig = {
      template: paletteTemplate.source,
      header: HEADER,
      packageName: 'nl.elements.skeleton',
    }

    const dictionary = createDictionary({ properties: PROPERTIES.colors })
    const formatterArgs = createFormatArgs({ dictionary, platform: {} })

    const formatter = paletteFormatter(colorConfig)(formatterArgs)

    expect(formatter).toMatchSnapshot()
  })
})
