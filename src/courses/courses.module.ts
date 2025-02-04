import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { CoursesRepository } from './courses.repository';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService, CoursesRepository],
  imports: [PrismaModule],
})
export class CoursesModule {}
