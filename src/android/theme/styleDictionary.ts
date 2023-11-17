import StyleDictionaryPackage from 'style-dictionary'

import { useTemplate } from '../../utils'
import { AndroidThemeOptions } from '../types'

import { THEME_TEMPLATES } from './constants'
import { spacingFormatter } from './formatters/spacingFormatter'
import { typographyFormatter } from './formatters/typographyFormatter'
import { paletteFormatter } from './formatters/paletteFormatter'

export const themeSDRegisters = (options: AndroidThemeOptions) => {
  const templateInfo = THEME_TEMPLATES(options)

  const {
    headerTemplate,
    paletteTemplate,
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
    formatter: spacingFormatter(
      {
        template: spacingsTemplate.source,
        header,
        packageName: spacingsTemplate.packageName,
      },
      spacingsTemplate.sharedPackageName,
    ),
  })

  StyleDictionaryPackage.registerFormat({
    name: paletteTemplate.formatter,
    formatter: paletteFormatter({
      template: paletteTemplate.source,
      header,
      packageName: paletteTemplate.packageName,
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
  registerFilter(paletteTemplate.filter, 'color')

  StyleDictionaryPackage.registerTransformGroup({
    name: 'tokens-android',
    transforms: ['name/ti/camel'],
  })
}
