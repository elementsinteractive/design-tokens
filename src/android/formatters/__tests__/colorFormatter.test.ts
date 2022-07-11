import createDictionary from 'style-dictionary/lib/utils/createDictionary'
import createFormatArgs from 'style-dictionary/lib/utils/createFormatArgs'

import { TEMPLATES } from '../../constants'
import { colorFormatter } from '../colorFormatter'
import { FormatterConfig } from '../../types'
import { HEADER } from '../../../common/formatters/__tests__/constants'
import properties from '../../../common/formatters/__tests__/colorProperties'

describe('colorFormatter', () => {
  it('can handle dictionary with color tokens', () => {
    const { colorsTemplate } = TEMPLATES('')

    const colorConfig: FormatterConfig = {
      template: colorsTemplate.source,
      header: HEADER,
      packageName: 'nl.elements.skeleton',
    }

    const dictionary = createDictionary({ properties })
    const formatterArgs = createFormatArgs({ dictionary, platform: {} })

    const formatter = colorFormatter(colorConfig)(formatterArgs)

    expect(formatter).toMatchSnapshot()
  })
})
