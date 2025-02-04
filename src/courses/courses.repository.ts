import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CoursesRepository {

    constructor(private readonly prisma: PrismaService) {}

    async findAll() {
        return this.prisma.course.findMany();
    }

    async findOne(id: string) {
        return this.prisma.course.findUnique({
            where: {
                id: id
            }
        });
    }

    async create(createCourseDto: CreateCourseDto) {
        return this.prisma.course.create({
            data: createCourseDto
        });
    }

    async update(id: string, updateCourseDto: UpdateCourseDto) {
        return this.prisma.course.update({
            where: {
                id: id
            },
            data: {...updateCourseDto}
        });
    }

    async remove(id: string) {
        return this.prisma.course.delete({
            where: {
                id: id
            }
        });
    }

    async findAllCategories() {
        return this.prisma.category.findMany();
    }

    async findAllInscriptionStatus() {
        return this.prisma.inscriptionStatus.findMany();
    }

    async findAllModalities() {
        return this.prisma.modality.findMany();
    }

}