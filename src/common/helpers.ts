import fs from 'fs-extra'
import { readFileSync } from 'fs'

export const clearOutput = path => fs.emptyDirSync(path)

export const fileExists = filePath => {
  try {
    return fs.statSync(filePath).isFile()
  } catch (err) {
    return false
  }
}

export const fileToJSON = path => fs.readJsonSync(path)

export const fileToString = path => readFileSync(path, 'utf8').toString()
