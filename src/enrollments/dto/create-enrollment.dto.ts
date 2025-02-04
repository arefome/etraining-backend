import { IsUUID } from "class-validator";
export class CreateEnrollmentDto {
    @IsUUID()
    user_id: string;
    @IsUUID()
    course_id: string;
    @IsUUID()
    inscription_status_id: string;
}
