import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersRepository {

    constructor(private readonly prisma: PrismaService) {}

    async findAll() {
        return this.prisma.user.findMany({
            include: {
                role: true,
                courses: true,
            }
        });
    }

    async findOne(id: string) {
        return this.prisma.user.findUnique({
            where: {
                id: id
            },
            include: {
                courses: {
                    select: {
                        course: true,
                        inscription_status: { select: { name: true } }
                    }
                }
            }
        });
    }

    async findByEmail(email: string) {
        return this.prisma.user.findUnique({
            where: {
                email: email
            },
            include: {
                role: true
            }
        });
    }

    async create(createUserDto: CreateUserDto) {
        return this.prisma.user.create({
            data: createUserDto
        });
    }

    async update(id: string, updateUserDto: UpdateUserDto) {
        return this.prisma.user.update({
            where: {
                id: id
            },
            data: {...updateUserDto},
            include: {
                role: true
            }
        });
    }

    async remove(id: string) {
        return this.prisma.user.delete({
            where: {
                id: id
            }
        });
    }

    async getRoles() {
        return this.prisma.role.findMany();
    }

}