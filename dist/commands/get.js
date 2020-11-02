"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConfigApi = require("@frenchex/config-api.ts");
const path = require("path");
const Helper_1 = require("./../lib/Helper");
exports.command = 'get <key>';
exports.desc = 'get key';
exports.builder = {
    file: {
        default: path.join(process.cwd(), 'config', 'config.json'),
        description: 'first file loaded, will be root'
    },
    raw: {
        default: false,
        description: "return raw value",
        type: "boolean"
    },
    user: {
        type: 'boolean',
        description: 'import user config'
    },
    global: {
        type: 'boolean',
        description: 'import global config'
    },
    env: {
        type: 'array',
        description: 'environment variables for loading, VAR=VALUE',
        default: []
    },
    string: {
        type: 'boolean',
        description: 'output is a string',
        default: null
    },
    object: {
        type: 'object',
        description: 'output is an object',
        default: null,
    },
    array: {
        type: 'array',
        description: 'output is an array'
    }
};
exports.handler = async function (argv) {
    const file = path.isAbsolute(argv.file) ? argv.file : path.normalize(path.join(process.cwd(), argv.file));
    const root = path.dirname(file);
    const env = Helper_1.mapEnvs(argv.env, process.env);
    const payload = {
        file: file,
        root: root,
        global: { load: !!argv.global, path: argv.global },
        user: { load: !!argv.user, path: argv.user },
        env: env
    };
    const config = await ConfigApi.fromFile(payload);
    const value = await (async () => {
        if (argv.raw)
            return await config.getRaw(await config.interpolateString(argv.key));
        else
            return await config.get(argv.key);
    })();
    console.log(value);
};
//# sourceMappingURL=get.js.map