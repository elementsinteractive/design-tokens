import { fileToJSON } from '../common/helpers'

export const readJsonFileAsOptions = <T>(configPath: string) =>
  fileToJSON(configPath) as T
