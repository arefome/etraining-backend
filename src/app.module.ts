import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { EnrollmentsModule } from './enrollments/enrollments.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, CoursesModule, EnrollmentsModule, AuthModule, PrismaModule],
})
export class AppModule {}
