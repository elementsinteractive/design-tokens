import StyleDictionaryPackage from 'style-dictionary'

import { useTemplate } from '../../utils'
import { AndroidGlobalOptions } from '../types'
import { GLOBAL_TEMPLATES } from './constants'
import { colorTypeFormatter } from './formatters/colorTypeFormatter'
import { spacingFormatter } from '../theme/formatters/spacingFormatter'

export const globalSDRegisters = (options: AndroidGlobalOptions) => {
  const templateInfo = GLOBAL_TEMPLATES(options)

  const { headerTemplate, spacingsTypeTemplate, colorsTypeTemplate } =
    templateInfo

  const header = useTemplate(headerTemplate)()

  /**
   * Global formatters
   */
  StyleDictionaryPackage.registerFormat({
    name: colorsTypeTemplate.formatter,
    formatter: colorTypeFormatter({
      template: colorsTypeTemplate.source,
      packageName: colorsTypeTemplate.packageName,
      header,
    }),
  })

  StyleDictionaryPackage.registerFormat({
    name: spacingsTypeTemplate.formatter,
    formatter: spacingFormatter(
      {
        template: spacingsTypeTemplate.source,
        packageName: spacingsTypeTemplate.packageName,
        header,
      },
      spacingsTypeTemplate.packageName,
    ),
  })
}
