#!/usr/bin/env node

import * as yargs from "yargs";

yargs
    .commandDir('./commands', {})
    .help('h')
    .version()
    .demandCommand()
    .argv
