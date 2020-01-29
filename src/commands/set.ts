import * as Config from "@frenchex/config-api";
import * as path from "path";
import {mapEnvs} from "../lib/Helper";

exports.command = 'set <key> <value>'
exports.desc = 'set key'
exports.builder = {
    file: {
        default: path.join(process.cwd(), 'config', 'config.json'),
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
    const file = path.isAbsolute(argv.file) ? argv.file : path.normalize(path.join(process.cwd(), argv.file))
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

    await config.set(argv.key, argv.value);

    const savedToFile = await config.save(file);

    console.log(savedToFile);
}