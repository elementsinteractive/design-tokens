import createDictionary from 'style-dictionary/lib/utils/createDictionary'
import createFormatArgs from 'style-dictionary/lib/utils/createFormatArgs'

import { TEMPLATES } from '../../constants'
import { FormatterConfig } from '../types'
import { spacingFormatter } from '../spacingFormatter'

describe('spacingFormatter', () => {
  it('can handle dictionary with spacing tokens', () => {
    const { headerTemplate, spacingsTemplate } = TEMPLATES('')

    const spacingConfig: FormatterConfig = {
      template: spacingsTemplate.source,
      header: headerTemplate,
      packageName: 'nl.elements.skeleton',
    }

    const properties = {
      spacings: {
        xxxs: {
          name: 'xxxs',
          value: 4,
          type: 'spacing',
          description: 'XXXS',
        },
        xxs: {
          name: 'xxs',
          value: 8,
          type: 'spacing',
          description: 'XXS',
        },
        xs: {
          name: 'xs',
          value: 12,
          type: 'spacing',
          description: 'XS',
        },
      },
    }

    const dictionary = createDictionary({ properties })
    const formatterArgs = createFormatArgs({ dictionary, platform: {} })

    const formatter = spacingFormatter(spacingConfig)(formatterArgs)

    expect(formatter).toMatchSnapshot()
  })
})
