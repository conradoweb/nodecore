export declare class AppErrorResult {
    code: number | undefined;
    message: string;
    nativeMessage: string | undefined;
    trackId: string | undefined;
    parameters: string | undefined;
    constructor(message: string, code?: number, nativeMessage?: string, trackId?: string, parameters?: string);
}
