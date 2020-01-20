import * as Config from "@frenchex/config-api";
import * as path from "path"
import {mapEnvs} from "./../lib/Helper"

exports.command = 'get <key>'
exports.desc = 'get key'
exports.builder = {
    file: {
        defaults: 'config.json',
        description: 'first file loaded, will be root'
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

    const file = path.isAbsolute(argv.config) ? argv.config : path.normalize(path.join(process.cwd(), argv.config))
    const root = path.dirname(file);
    const env = mapEnvs(argv.env, <any>process.env);

    const payload = {
        file: file,
        root: root,
        global: {load: argv.global},
        user: {load: argv.user},
        env: env
    }

    const config = await Config.fromFile(payload)

    const value = await config.get<any>(argv.key)

    console.log(value);
}

export interface ConfigGetHandlerInterface {
    key?: string
    config?: string
    env?: Array<string>
    user?: boolean
    global?: boolean
    dir?: string
}
