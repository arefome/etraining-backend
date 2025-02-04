import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CoursesRepository } from './courses.repository';

@Injectable()
export class CoursesService {

  constructor(private readonly coursesRepository: CoursesRepository) {}

  create(createCourseDto: CreateCourseDto) {
    return this.coursesRepository.create(createCourseDto);
  }

  findAll() {
    return this.coursesRepository.findAll();
  }

  findOne(id: string) {
    return this.coursesRepository.findOne(id);
  }

  update(id: string, updateCourseDto: UpdateCourseDto) {
    return this.coursesRepository.update(id, updateCourseDto);
  }

  remove(id: string) {
    return this.coursesRepository.remove(id);
  }

  findAllCategories() {
    return this.coursesRepository.findAllCategories();
  }

  findAllInscriptionStatus() {
    return this.coursesRepository.findAllInscriptionStatus();
  }

  findAllModalities() {
    return this.coursesRepository.findAllModalities();
  }
}
