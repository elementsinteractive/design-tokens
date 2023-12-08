import StyleDictionary from 'style-dictionary'
import { useTemplate } from '../utils'
import { TEMPLATES } from './constants'
import { colorFormatter } from './formatters/colorFormatter'
import { spacingsFormatter } from './formatters/spacingsFormatter'
import { colorTypesFormatter } from './formatters/colorTypesFormatter'
import { typographyFormatter } from './formatters/typographyFormatter'
import { AndroidThemeOptions } from './types'

export const registerFormatters = (options: AndroidThemeOptions) => {
  const header = useTemplate(TEMPLATES.FILES.header)()

  const formatters = [
    {
      formatter: colorFormatter(TEMPLATES.FILES.colorTokens, header, options),
      name: TEMPLATES.FORMATTERS.colorTokens,
    },
    {
      formatter: colorTypesFormatter(
        TEMPLATES.FILES.colorTokensTypes,
        header,
        options,
      ),
      name: TEMPLATES.FORMATTERS.colorTokensTypes,
    },
    {
      formatter: spacingsFormatter(
        TEMPLATES.FILES.spacingsTokens,
        header,
        options,
      ),
      name: TEMPLATES.FORMATTERS.spacingsTokens,
    },
    {
      formatter: spacingsFormatter(
        TEMPLATES.FILES.spacingsTokensTypes,
        header,
        options,
      ),
      name: TEMPLATES.FORMATTERS.spacingsTokensTypes,
    },
    {
      formatter: typographyFormatter(
        TEMPLATES.FILES.typographies,
        header,
        options,
      ),
      name: TEMPLATES.FORMATTERS.typography,
    },
  ]

  formatters.map(format => {
    StyleDictionary.registerFormat(format)
  })
}
