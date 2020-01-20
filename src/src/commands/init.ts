import * as path from "path";
import {init} from "@frenchex/config-api";

exports.command = 'init'
exports.desc = 'init Configuration'
exports.builder = {
    file: {
        default: path.join(process.cwd(), 'config', 'config.json'),
        description: 'Init file'
    }
}
exports.handler = async function (argv) {
    if (argv.help)
        return
    await init(argv.file);
}
