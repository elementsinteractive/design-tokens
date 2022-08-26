import { fileToJSON } from '../common/helpers'
import { AndroidJsonOptions } from './types'

export const readJsonFileAsOptions = (configPath: string) =>
  fileToJSON(configPath) as AndroidJsonOptions
