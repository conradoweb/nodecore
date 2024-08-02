export declare const getEnvironment: (key: string, throwException?: boolean) => string | null;
export declare const hasMinimumEnvironment: (minimumEnvs: string[]) => Promise<{
    ok: boolean;
    message: string;
}>;
export declare const defaultRequestCodeResponse: (method: string, code: number) => number;
