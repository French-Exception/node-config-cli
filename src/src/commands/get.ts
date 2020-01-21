import * as Config from "@frenchex/config-api";
import * as path from "path"
import {mapEnvs} from "./../lib/Helper"

exports.command = 'get <key>'
exports.desc = 'get key'
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
}
exports.handler = async function (argv: ConfigGetHandlerInterface) {
    const file = path.isAbsolute(argv.file) ? argv.file : path.normalize(path.join(process.cwd(), argv.file))
    const root = path.dirname(file);
    const env = mapEnvs(argv.env, <any>process.env);

    const payload = {
        file: file,
        root: root,
        global: {load: !!argv.global, path: argv.global},
        user: {load: !!argv.user, path: argv.user},
        env: env
    }

    const config = await Config.fromFile(payload)

    const value = await (async () => {
        if (argv.raw)
            return await config.getRaw(<string>await config.interpolateString<string>(argv.key))
        else
            return await config.get<any>(argv.key)

    })()

    console.log(value);
}

export interface ConfigGetHandlerInterface {
    key?: string
    file?: string
    env?: Array<string>
    user?: boolean
    global?: boolean
    raw?: boolean
}
