export interface ConfigGetHandlerInterface {
    key?: string;
    config?: string;
    env?: Array<string>;
    user?: boolean;
    global?: boolean;
    dir?: string;
}
