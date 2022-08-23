import StyleDictionaryPackage from 'style-dictionary'
import { IOSConfig } from '../design.types'
import { useTemplate } from '../utils'
import { TEMPLATES } from './constants'
import { colorFormatter } from './formatters/colorFormatter'
import { spacingFormatter } from './formatters/spacingFormatter'
import { typographyFormatter } from './formatters/typographyFormatter'

export const styleDictionaryRegistrations = (config: IOSConfig) => {
  const { input, themeName, destination } = config

  const templateInfo = TEMPLATES(destination)

  const {
    headerTemplate,
    colorsTemplate,
    spacingsTemplate,
    typographyTemplate,
  } = templateInfo

  const header = useTemplate(headerTemplate)()

  StyleDictionaryPackage.registerFormat({
    name: typographyTemplate.formatter,
    formatter: typographyFormatter({
      template: typographyTemplate.source,
      header,
      themeName,
    }),
  })

  StyleDictionaryPackage.registerFormat({
    name: spacingsTemplate.formatter,
    formatter: spacingFormatter({
      template: spacingsTemplate.source,
      header,
      themeName,
    }),
  })

  StyleDictionaryPackage.registerFormat({
    name: colorsTemplate.formatter,
    formatter: colorFormatter({
      template: colorsTemplate.source,
      header,
      themeName,
    }),
  })

  /**
   * Filters
   */
  const registerFilter = (name: string, type?: string) => {
    StyleDictionaryPackage.registerFilter({
      name,
      matcher: token => {
        return token.type === type
      },
    })
  }

  registerFilter(typographyTemplate.filter, 'typography')
  registerFilter(spacingsTemplate.filter, 'spacing')
  registerFilter(colorsTemplate.filter, 'color')

  StyleDictionaryPackage.registerTransformGroup({
    name: 'tokens-ios',
    transforms: ['name/ti/camel'],
  })
}
