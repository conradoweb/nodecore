import { AppErrorResult } from "../models/app-error-result.model";
export const getEnvironment = (
  key: string,
  throwException = false
): string | null => {
  const env = process.env[key];
  if (env === null || env === undefined) {
    if (throwException) {
      throw new AppErrorResult(`Environment ${key} not found.`);
    }
    return null;
  }
  return env;
};

export const hasMinimumEnvironment = async (
  minimumEnvs: string[]
): Promise<{ ok: boolean; message: string }> => {
  for await (const env of minimumEnvs) {
    if (getEnvironment(env) == null) {
      return { ok: false, message: `Environment key '${env}' is not defined` };
    }
  }
  return { ok: true, message: "Every Environment keys are defined" };
};

export const defaultRequestCodeResponse = (
  method: string,
  code: number
): number => {
  switch (method.toLowerCase()) {
    case "post":
      return 201;
    case "put":
      return 200;
    case "delete":
      return 204;
    case "get":
      return 200;
    default:
      return code;
  }
};
