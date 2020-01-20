#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var yargs = require("yargs");
yargs
    .commandDir('./commands', {})
    .help()
    .version()
    .demandCommand(1)
    .argv;
//# sourceMappingURL=cli.js.map