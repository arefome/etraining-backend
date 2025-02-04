import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';


export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsOptional()
    @Type(() => Date)
    @IsString()
    verified_email_at?: Date;
}
