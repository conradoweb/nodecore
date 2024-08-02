import { Module, Global } from "@nestjs/common";

import { LoggingInterceptor } from "./logger.interceptor";
import { FilteredLogger } from "./filtered-logger.class";

@Module({
  providers: [FilteredLogger, LoggingInterceptor],
  exports: [FilteredLogger],
})
export class CustomLoggerModule {}
