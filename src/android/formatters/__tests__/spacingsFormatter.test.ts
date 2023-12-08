import createDictionary from 'style-dictionary/lib/utils/createDictionary'
import createFormatArgs from 'style-dictionary/lib/utils/createFormatArgs'

import { TEMPLATES } from '../../constants'
import { options } from './constants'
import { PROPERTIES } from '../../../common/formatters/__tests__/constants'
import { spacingsFormatter } from '../spacingsFormatter'

describe('spacingsFormatter', () => {
  it('can format spacings tokens', () => {
    const dictionary = createDictionary({ properties: PROPERTIES.spacings })
    const formatterArgs = createFormatArgs({ dictionary, platform: {} })

    const result = spacingsFormatter(
      TEMPLATES.FILES.spacingsTokens,
      'header',
      options,
    )(formatterArgs)

    expect(result).toMatchSnapshot()
  })
})
