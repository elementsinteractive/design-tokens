import createDictionary from 'style-dictionary/lib/utils/createDictionary'
import createFormatArgs from 'style-dictionary/lib/utils/createFormatArgs'

import { TEMPLATES } from '../../constants'
import { FormatterConfig } from '../types'
import { typographyFormatter } from '../typographyFormatter'
import { HEADER } from './constants'

describe('typographyFormatter', () => {
  it('can handle dictionary with typography tokens', () => {
    const { typographyTemplate } = TEMPLATES('')

    const typographyConfig: FormatterConfig = {
      template: typographyTemplate.source,
      header: HEADER,
      packageName: 'nl.elements.skeleton',
    }

    const properties = {
      H1: {
        value: {
          fontFamily: 'Roboto',
          fontWeight: 'Light',
          lineHeight: 'AUTO',
          fontSize: 96,
          letterSpacing: -1.5,
          paragraphSpacing: 0,
          textDecoration: 'none',
          textCase: 'none',
        },
        type: 'typography',
        description: 'Header',
      },
      H2: {
        value: {
          fontFamily: 'Roboto',
          fontWeight: 'Light',
          lineHeight: 'AUTO',
          fontSize: 60,
          letterSpacing: -0.5,
          paragraphSpacing: 0,
          textDecoration: 'none',
          textCase: 'none',
        },
        type: 'typography',
        description: 'Header',
      },
    }

    const dictionary = createDictionary({ properties })
    const formatterArgs = createFormatArgs({ dictionary, platform: {} })

    const formatter = typographyFormatter(typographyConfig)(formatterArgs)

    expect(formatter).toMatchSnapshot()
  })
})
