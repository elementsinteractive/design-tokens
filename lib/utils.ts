import ejs from 'ejs'
import { readFileSync } from 'fs'

export const createTemplate = path => ejs.compile(readFileSync(path).toString())