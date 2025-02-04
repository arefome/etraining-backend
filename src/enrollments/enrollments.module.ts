import { Module } from '@nestjs/common';
import { EnrollmentsService } from './enrollments.service';
import { EnrollmentsController } from './enrollments.controller';
import { EnrollmentsRepository } from './enrollments.repository';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [EnrollmentsController],
  providers: [EnrollmentsService, EnrollmentsRepository],
  imports: [PrismaModule],
})
export class EnrollmentsModule {}
