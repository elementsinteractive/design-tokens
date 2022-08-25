import StyleDictionaryPackage from 'style-dictionary'
import { useTemplate } from '../utils'
import { TEMPLATES } from './constants'
import { colorFormatter } from './formatters/colorFormatter'
import { spacingFormatter } from './formatters/spacingFormatter'
import { typographyFormatter } from './formatters/typographyFormatter'
import { AndroidJsonOptions } from './types'

export const styleDictionaryRegistrations = (options: AndroidJsonOptions) => {
  const { theme } = options

  const templateInfo = TEMPLATES(theme)

  const {
    headerTemplate,
    colorsTemplate,
    spacingsTemplate,
    typographyTemplate,
  } = templateInfo

  const header = useTemplate(headerTemplate)()

  /**
   * Formatters
   */
  StyleDictionaryPackage.registerFormat({
    name: typographyTemplate.formatter,
    formatter: typographyFormatter({
      template: typographyTemplate.source,
      header,
      packageName: typographyTemplate.packageName,
    }),
  })

  StyleDictionaryPackage.registerFormat({
    name: spacingsTemplate.formatter,
    formatter: spacingFormatter({
      template: spacingsTemplate.source,
      header,
      packageName: spacingsTemplate.packageName,
    }),
  })

  StyleDictionaryPackage.registerFormat({
    name: colorsTemplate.formatter,
    formatter: colorFormatter({
      template: colorsTemplate.source,
      header,
      packageName: colorsTemplate.packageName,
    }),
  })

  /**
   * Filters
   */
  const registerFilter = (name, type) => {
    StyleDictionaryPackage.registerFilter({
      name,
      matcher: token => token.type === type,
    })
  }

  registerFilter(typographyTemplate.filter, 'typography')
  registerFilter(spacingsTemplate.filter, 'spacing')
  registerFilter(colorsTemplate.filter, 'color')

  StyleDictionaryPackage.registerTransformGroup({
    name: 'tokens-android',
    transforms: ['name/ti/camel'],
  })
}
