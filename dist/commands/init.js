"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const config_api_1 = require("@frenchex/config-api");
exports.command = 'init';
exports.desc = 'init Configuration';
exports.builder = {
    file: {
        default: path.join(process.cwd(), 'config', 'config.json'),
        description: 'Init file'
    }
};
exports.handler = async function (argv) {
    if (argv.help)
        return;
    await config_api_1.init(argv.file);
};
//# sourceMappingURL=init.js.map