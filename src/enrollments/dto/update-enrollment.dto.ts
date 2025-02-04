import { IsUUID, IsOptional } from 'class-validator';

export class UpdateEnrollmentDto {
  @IsUUID()
  @IsOptional()
  inscription_status_id?: string;
}
