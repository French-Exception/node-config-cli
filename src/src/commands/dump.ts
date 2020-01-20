import * as Config from "@frenchex/config-api";
import * as path from "path";
import {mapEnvs} from "../lib/Helper";

exports.command = 'dump'
exports.desc = 'dump configuration as json'
exports.builder = {
    raw: {
        default: false,
        description: 'do not resolve',
        type: 'boolean'
    },
    file: {
        defaults: 'config.json',
        description: 'first file loaded'
    },
    user: {
        type: 'boolean',
        description: 'import user config'
    },
    global: {
        type: 'boolean',
        description: 'import system config'
    },
    env: {
        type: 'array',
        description: 'environment variables for loading',
        default: []
    }

}
exports.handler = async function (argv) {
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

    const dump = await config.dump(argv.raw);

    console.log(JSON.stringify(dump, null, 2));
}
