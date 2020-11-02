import * as Config from "@frenchex/config-api.ts";
export declare function fromFile(request: Config.ConfigurationLoadingRequestInterface): Promise<Config.Config.ConfigurationInterface>;
export declare function mapEnvs(envs: any, processEnv: Array<string>): object;
