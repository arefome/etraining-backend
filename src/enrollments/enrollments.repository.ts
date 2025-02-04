import { Injectable } from '@nestjs/common';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class EnrollmentsRepository {
    constructor(private readonly prisma: PrismaService) {}

    async findAll() {
        return this.prisma.userCourse.findMany(
            {
              select: {
                user_id: true,
                course_id: true,
                inscription_status: { select: { id: true, name: true } },
                created_at: true,
                updated_at: true,
              }
            }
        );
    }

    async findOne(user_id: string, course_id: string) {
        const userCourse = await this.prisma.userCourse.findUnique({
          where: {
            user_id_course_id: { user_id, course_id },
          },
          include: {
            user: true,
            course: true,
            inscription_status: true,
          },
        });
    
        if (!userCourse) {
          throw new NotFoundException('Inscripción no encontrada.');
        }
        return userCourse;
    }

    async create(createEnrollmentDto: CreateEnrollmentDto) {
        return this.prisma.userCourse.create({
            data: createEnrollmentDto
        });
    }

    async update(user_id: string, course_id: string, data: UpdateEnrollmentDto) {
        const userCourse = await this.prisma.userCourse.findUnique({
          where: {
            user_id_course_id: { user_id, course_id },
          },
        });
    
        if (!userCourse) {
          throw new NotFoundException('Inscripción no encontrada.');
        }
    
        return await this.prisma.userCourse.update({
          where: {
            user_id_course_id: { user_id, course_id },
          },
          data,
        });
      }

    async remove(user_id: string, course_id: string) {
        const userCourse = await this.prisma.userCourse.findUnique({
            where: {
              user_id_course_id: { user_id, course_id },
            },
          });
      
          if (!userCourse) {
            throw new NotFoundException('Inscripción no encontrada.');
          }
      
          return await this.prisma.userCourse.delete({
            where: {
              user_id_course_id: { user_id, course_id },
            },
          });
    }
}