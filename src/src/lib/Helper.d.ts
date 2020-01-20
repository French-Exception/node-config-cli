import * as Config from "@frenchex/config-api";
export declare function fromFile(request: Config.ConfigurationLoadingRequestInterface): Promise<Config.Config.ConfigurationInterface>;
export declare function mapEnvs(envs: any, processEnv: Array<string>): object;
