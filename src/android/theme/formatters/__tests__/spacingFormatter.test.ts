import createDictionary from 'style-dictionary/lib/utils/createDictionary'
import createFormatArgs from 'style-dictionary/lib/utils/createFormatArgs'

import { THEME_TEMPLATES } from '../../constants'
import { FormatterConfig } from '../../../types'
import { spacingFormatter } from '../spacingFormatter'
import {
  PROPERTIES,
  HEADER,
} from '../../../../common/formatters/__tests__/constants'
import { DUMMY_ANDROID_THEME_OPTIONS } from './constants'

describe('spacingFormatter', () => {
  it('can handle dictionary with spacing tokens', () => {
    const { spacingsTemplate } = THEME_TEMPLATES(DUMMY_ANDROID_THEME_OPTIONS)

    const spacingConfig: FormatterConfig = {
      template: spacingsTemplate.source,
      header: HEADER,
      packageName: 'nl.elements.skeleton',
    }

    const dictionary = createDictionary({ properties: PROPERTIES.spacings })
    const formatterArgs = createFormatArgs({ dictionary, platform: {} })

    const formatter = spacingFormatter(
      spacingConfig,
      DUMMY_ANDROID_THEME_OPTIONS.basePackageName,
    )(formatterArgs)

    expect(formatter).toMatchSnapshot()
  })
})
