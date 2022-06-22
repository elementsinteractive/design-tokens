import createDictionary from 'style-dictionary/lib/utils/createDictionary'
import createFormatArgs from 'style-dictionary/lib/utils/createFormatArgs'

import { TEMPLATES } from '../../constants'
import { colorFormatter } from '../colorFormatter'
import { FormatterConfig } from '../types'

describe('colorFormatter', () => {
  xit('can handle dictionary with color tokens', () => {
    const { headerTemplate, colorsTemplate } = TEMPLATES('')

    const colorConfig: FormatterConfig = {
      template: colorsTemplate.source,
      header: headerTemplate,
      packageName: 'nl.elements.skeleton',
    }

    const properties = {
      colors: {
        primary: {
          name: 'primary',
          value: '#fff',
          type: 'color',
        },
        background: {
          name: 'background',
          value: '#F4F4F4FF',
          type: 'color',
        },
        primaryVariant: {
          name: 'primaryVariant',
          value: '#000',
          type: 'color',
        },
        secondary: {
          name: 'secondary',
          value: '#FF495BFF',
          type: 'color',
        },
      },
    }

    const dictionary = createDictionary({ properties })
    const formatterArgs = createFormatArgs({ dictionary, platform: {} })

    const formatter = colorFormatter(colorConfig)(formatterArgs)

    expect(formatter).toMatchSnapshot()
  })
})