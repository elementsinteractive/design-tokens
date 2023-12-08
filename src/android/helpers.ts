import { fileToJSON } from '../common/helpers'
import Color from 'tinycolor2'

export const readJsonFileAsOptions = <T>(configPath: string) =>
  fileToJSON(configPath) as T

export const toArgb = color => {
  const colorStr = Color(color).toHex8()

  return colorStr.slice(6) + colorStr.slice(0, 6)
}

export const capitalizeWord = word =>
  word.charAt(0).toUpperCase() + word.slice(1)
