import { IsString, IsInt, IsUUID, Min, MaxLength } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  @MaxLength(255)
  name: string;

  @IsUUID()
  category_id: string;

  @IsUUID()
  modality_id: string;

  @IsInt()
  @Min(1)
  duration: number;

  @IsInt()
  @Min(5)
  quota: number;
}