import { SetMetadata } from '@nestjs/common';
import { RolesEnum } from '../enums/roles.enum';

export const HasRoles = (...roles: RolesEnum[]) => SetMetadata('roles', roles);