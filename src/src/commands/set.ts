import * as Config from "@frenchex/config-api";

exports.command = 'set <key> <value>'
exports.desc = 'set key'
exports.builder = {
    file: {
        defaults: 'config.json',
        description: 'first file loaded'
    },
    dir: {
        default: process.cwd(),
        description: 'root path used to generate absolute paths for relatives'
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
    const loader = new Config.ConfigurationLoader();
    const config = await loader.fromFile({
        env: argv.default,
        file: argv.file,
        $: {},
        root: process.cwd()
    });


}
