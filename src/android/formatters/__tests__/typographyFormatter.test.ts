import createDictionary from 'style-dictionary/lib/utils/createDictionary'
import createFormatArgs from 'style-dictionary/lib/utils/createFormatArgs'

import { TEMPLATES } from '../../constants'
import { FormatterConfig } from '../../types'
import { typographyFormatter } from '../typographyFormatter'
import { PROPERTIES, HEADER } from '../../../common/formatters/__tests__/constants'

describe('typographyFormatter', () => {
  it('can handle dictionary with typography tokens', () => {
    const { typographyTemplate } = TEMPLATES('')

    const typographyConfig: FormatterConfig = {
      template: typographyTemplate.source,
      header: HEADER,
      packageName: 'nl.elements.skeleton',
    }

    const dictionary = createDictionary({ properties: PROPERTIES.typography })
    const formatterArgs = createFormatArgs({ dictionary, platform: {} })

    const formatter = typographyFormatter(typographyConfig)(formatterArgs)

    expect(formatter).toMatchSnapshot()
  })
})
