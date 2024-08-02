import { ParseUUIDPipe } from "@nestjs/common/pipes/parse-uuid.pipe";
export declare class AppParseUUIDPipe extends ParseUUIDPipe {
    constructor(version?: "3" | "4" | "5");
}
