import ejs from 'ejs'
import { readFileSync } from 'fs'

export const useTemplate = path => ejs.compile(readFileSync(path).toString())