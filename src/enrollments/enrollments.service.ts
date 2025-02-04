import { Injectable } from '@nestjs/common';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';
import { EnrollmentsRepository } from './enrollments.repository';

@Injectable()
export class EnrollmentsService {
  
  constructor(private readonly enrollmentsRepository: EnrollmentsRepository) {}

  create(createEnrollmentDto: CreateEnrollmentDto) {
    return this.enrollmentsRepository.create(createEnrollmentDto);
  }

  findAll() {
    return this.enrollmentsRepository.findAll();
  }

  findOne(user_id: string, course_id: string) {
    return this.enrollmentsRepository.findOne(user_id, course_id);
  }

  update(user_id: string, course_id: string, updateEnrollmentDto: UpdateEnrollmentDto) {
    return this.enrollmentsRepository.update(user_id, course_id, updateEnrollmentDto);
  }

  remove(user_id: string, course_id: string) {
    return this.enrollmentsRepository.remove(user_id, course_id);
  }
}
