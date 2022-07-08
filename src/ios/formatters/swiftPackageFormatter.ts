import Color from 'tinycolor2'
import { useTemplate } from '../../utils'
import type { Formatter } from 'style-dictionary'
import { FormatterConfig } from '../../common/types'

export const swiftPackageFormatter: (config: FormatterConfig) => Formatter =
  (config: FormatterConfig) =>
    () => {
      const { template, header, packageName } = config

      return useTemplate(template)({
        header,
        packageName,
      })
    }
