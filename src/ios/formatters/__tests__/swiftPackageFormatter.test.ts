import createDictionary from 'style-dictionary/lib/utils/createDictionary'
import createFormatArgs from 'style-dictionary/lib/utils/createFormatArgs'

import { TEMPLATES } from '../../constants'
import { swiftPackageFormatter } from '../swiftPackageFormatter'
import { FormatterConfig } from '../../../common/types'
import { HEADER } from './constants'

describe('swiftPackageFormatter', () => {
  it('creates Package.swift file', () => {
    const { packageTemplate } = TEMPLATES('', 'DesignSystem')

    const swiftPackageConfig: FormatterConfig = {
      template: packageTemplate.source,
      header: HEADER,
      packageName: 'DesignSystem',
    }

    const dictionary = createDictionary({})
    const formatterArgs = createFormatArgs({ dictionary, platform: {} })

    const formatter = swiftPackageFormatter(swiftPackageConfig)(formatterArgs)

    expect(formatter).toMatchSnapshot()
  })
})
