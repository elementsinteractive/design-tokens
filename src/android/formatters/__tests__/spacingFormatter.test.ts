import createDictionary from 'style-dictionary/lib/utils/createDictionary'
import createFormatArgs from 'style-dictionary/lib/utils/createFormatArgs'

import { TEMPLATES } from '../../constants'
import { FormatterConfig } from '../../types'
import { spacingFormatter } from '../spacingFormatter'
import { HEADER } from '../../../common/formatters/__tests__/constants'
import properties from '../../../common/formatters/__tests__/spacingProperties'

describe('spacingFormatter', () => {
  it('can handle dictionary with spacing tokens', () => {
    const { spacingsTemplate } = TEMPLATES('')

    const spacingConfig: FormatterConfig = {
      template: spacingsTemplate.source,
      header: HEADER,
      packageName: 'nl.elements.skeleton',
    }

    const dictionary = createDictionary({ properties })
    const formatterArgs = createFormatArgs({ dictionary, platform: {} })

    const formatter = spacingFormatter(spacingConfig)(formatterArgs)

    expect(formatter).toMatchSnapshot()
  })
})
