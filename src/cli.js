#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs");
yargs
    .commandDir('./commands', {})
    .help()
    .version()
    .demandCommand(1)
    .argv;
//# sourceMappingURL=cli.js.map