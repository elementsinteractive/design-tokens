#!/usr/bin/env node

import yargs from 'yargs/yargs'

import { hideBin } from 'yargs/helpers'

import { setup as setupAndroid } from './android'
import { setup as setupIOS } from './ios'

/**
 * CLI arguments
 */
yargs(hideBin(process.argv))
  .command({
    command: 'android <input>',
    describe: 'Create design tokens for Android',
    builder: yargs =>
      yargs
        .option('input', {
          type: 'string',
          demandOption: true,
          describe: 'Tokens file',
          alias: 'i',
        })
        .choices('type', ['global', 'theme'])
        .alias('t', 'type')
        .option('config', {
          type: 'string',
          demandOption: true,
          describe: 'Options file',
          alias: 'c',
        }),
    handler: argv => {
      setupAndroid({
        type: argv.type,
        input: argv.input,
        configPath: argv.config,
      })
    },
  })
  .command({
    command: 'ios <input>',
    describe: 'Create design tokens for iOS',
    builder: yargs =>
      yargs
        .option('input', {
          type: 'string',
          demandOption: true,
          describe: 'Tokens file',
          alias: 'i',
        })
        .option('theme', {
          type: 'string',
          demandOption: true,
          describe: 'Theme name, ex. "DarkTheme"',
          alias: 't',
        })
        .option('destination', {
          type: 'string',
          demandOption: true,
          describe: 'Destination folder to write the files to',
          alias: 'd',
        }),
    handler: argv => {
      setupIOS({
        input: argv.input,
        themeName: argv.theme,
        destination: argv.destination,
      })
    },
  })
  .demandCommand()

  .help()
  .version()
  .parseSync()
