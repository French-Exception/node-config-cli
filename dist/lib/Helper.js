"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Config = require("@frenchex/config-api.ts");
async function fromFile(request) {
    const payload = {
        configuration: request.configuration,
        env: request.env,
        file: request.file,
        $: request.$,
        declaration: {
            imports: []
        },
        user: { path: null, load: true },
        global: { path: null, load: true }
    };
    return await Config.fromFile(payload);
}
exports.fromFile = fromFile;
function mapEnvs(envs, processEnv) {
    return (() => {
        const _return = {};
        envs.forEach((key, index) => {
            const _value = processEnv[key];
            _return[key] = _value;
        });
        return _return;
    })();
}
exports.mapEnvs = mapEnvs;
//# sourceMappingURL=Helper.js.map