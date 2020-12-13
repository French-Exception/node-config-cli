import * as Config from "@frenchex/config-api";
import * as path from "path";
import { mapEnvs } from "../lib/Helper";

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
    },
    pipe: {
        type: 'boolean',
        description: 'get input from stdin',
        default: false
    },
    json: {
        type: 'boolean',
        description: 'get input as json',
        default: false
    }

}
exports.handler = async function (argv) {
    const file = path.isAbsolute(argv.file) ? argv.file : path.normalize(path.join(process.cwd(), argv.file))
    const root = path.dirname(file);
    const env = mapEnvs(argv.env, <any>process.env);

    const payload = {
        file: file,
        root: root,
        global: { load: argv.global },
        user: { load: argv.user },
        env: env
    }

    const config = await Config.fromFile(payload);

    var hasRun = false;

    const next = async () => {
        if(hasRun){
            return;
        }
        hasRun = true;
        await config.set(argv.key, argv.value);
        const savedToFile = await config.save(file);
        return savedToFile;
    }

    var savedToFile: string = "";

    if (argv.pipe) {
        var data = "";
        var self = process.stdin;
        self.on('readable', function () {
            var chunk = this.read();
            if (chunk !== null) {
                data += chunk;
            }
        });
        self.on('end', async function () {
            if (argv.json) {
                argv.value = JSON.parse(data.trim())
            } else {
                argv.value = data.trim();
            }
            savedToFile = await next();
        });
    } else {
        savedToFile = await next();
    }

    console.log(savedToFile);
}
