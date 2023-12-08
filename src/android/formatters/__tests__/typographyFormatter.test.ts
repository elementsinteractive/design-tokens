import createDictionary from 'style-dictionary/lib/utils/createDictionary'
import createFormatArgs from 'style-dictionary/lib/utils/createFormatArgs'

import { typographyFormatter } from '../typographyFormatter'
import { options } from './constants'
import { TEMPLATES } from '../../constants'
import { PROPERTIES } from '../../../common/formatters/__tests__/constants'

describe('typographyFormatter', () => {
  it('can handle dictionary with typography tokens', () => {
    const dictionary = createDictionary({ properties: PROPERTIES.typography })
    const formatterArgs = createFormatArgs({ dictionary, platform: {} })

    const result = typographyFormatter(
      TEMPLATES.FILES.typographies,
      'header',
      options,
    )(formatterArgs)

    expect(result).toMatchSnapshot()
  })
})
