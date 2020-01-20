import * as Config from "@frenchex/config-api";

export async function fromFile(request: Config.ConfigurationLoadingRequestInterface): Promise<Config.Config.ConfigurationInterface> {
    const payload: Config.ConfigurationLoadingRequestInterface = {
        configuration: request.configuration,
        env: request.env,
        file: request.file,
        $: request.$,
        declaration: {
            imports: []
        },
        user: {path: null, load: true},
        global: {path: null, load: true}
    }

    return await Config.fromFile(payload)
}

export function mapEnvs(envs: any, processEnv: Array<string>): object {
    return (() => {
        const _return = {};
        envs.forEach((key, index) => {
            const _value = processEnv[key];
            _return[key] = _value;
        });
        return _return;
    })();
}
