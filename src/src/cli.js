#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var yargs = require("yargs");
yargs
    .commandDir('./commands', {})
    .help('h')
    .version()
    .demandCommand()
    .argv;
//# sourceMappingURL=cli.js.map