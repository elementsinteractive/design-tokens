import createDictionary from 'style-dictionary/lib/utils/createDictionary'
import createFormatArgs from 'style-dictionary/lib/utils/createFormatArgs'

import { TEMPLATES } from '../../constants'
import { colorFormatter } from '../colorFormatter'
import { options } from './constants'
import { PROPERTIES } from '../../../common/formatters/__tests__/constants'
import { colorTypesFormatter } from '../colorTypesFormatter'

describe('colorFormatter', () => {
  it('can format color tokens', () => {
    const dictionary = createDictionary({ properties: PROPERTIES.colors })
    const formatterArgs = createFormatArgs({ dictionary, platform: {} })

    const result = colorFormatter(
      TEMPLATES.FILES.colorTokens,
      'header',
      options,
    )(formatterArgs)

    expect(result).toMatchSnapshot()
  })

  it('can format color tokens types', () => {
    const dictionary = createDictionary({ properties: PROPERTIES.colors })
    const formatterArgs = createFormatArgs({ dictionary, platform: {} })

    const result = colorTypesFormatter(
      TEMPLATES.FILES.colorTokensTypes,
      'header',
      options,
    )(formatterArgs)

    expect(result).toMatchSnapshot()
  })
})
