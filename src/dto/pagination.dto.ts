import { IsEnum, IsInt, IsNumber, IsOptional, Min } from "class-validator";
import { Type } from "class-transformer";
export enum SortOrder {
  ASC = "ASC",
  DESC = "DESC",
}
export class PaginationDto {
  @IsInt()
  @Min(1)
  @Type(() => Number)
  @IsNumber({}, { message: ' "page" atrribute should be a number' })
  public page = 1;

  @IsInt()
  @Min(1)
  @Type(() => Number)
  @IsNumber({}, { message: ' "pageSize" attribute should be a number ' })
  public pageSize = 10;

  @IsOptional()
  public orderBy?: string;

  @IsEnum(SortOrder)
  @IsOptional()
  public sortOrder?: SortOrder = SortOrder.DESC;
}
