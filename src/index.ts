#!/usr/bin/env node

import yargs from 'yargs/yargs'

import { hideBin } from 'yargs/helpers'

import { setup as setupAndroid } from './android'

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
        .option('package', {
          type: 'string',
          demandOption: true,
          describe: 'Package name',
          alias: 'p',
        })
        .option('destination', {
          type: 'string',
          demandOption: true,
          describe: 'Destination folder to write the files to',
          alias: 'd',
        }),
    handler: argv => {
      setupAndroid({
        input: argv.input,
        packageName: argv.package,
        destination: argv.destination,
      })
    },
  })
  .demandCommand()

  .help()
  .version()
  .parseSync()
