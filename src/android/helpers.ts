import { readFileSync } from 'fs'
import { fileToJSON } from '../common/helpers'
import { AndroidJsonOptions } from './types'

export const readOptionsAsJson = (configPath: string) =>
  fileToJSON(configPath) as AndroidJsonOptions
