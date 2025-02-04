import { Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/guards/roles.guard';
import { UseGuards } from '@nestjs/common';
import { HasRoles } from '../auth/decorators/roles.decorator';


@ApiTags('courses')
@Controller('courses')
// @UseGuards(AuthGuard('jwt'), RolesGuard)
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @ApiOperation({ summary: 'Obtener todas las categorías' })
  @ApiResponse({ status: 200, description: 'Lista de categorías', isArray: true })
  @Get('categories')
  findAllCategories() {
    return this.coursesService.findAllCategories();
  }

  @ApiOperation({ summary: 'Obtener todos los estados de inscripción' })
  @ApiResponse({ status: 200, description: 'Lista de estados de inscripción', isArray: true })
  @Get('inscription-status')
  findAllInscriptionStatus() {
    return this.coursesService.findAllInscriptionStatus();
  }

  @ApiOperation({ summary: 'Obtener todas las modalidades' })
  @ApiResponse({ status: 200, description: 'Lista de modalidades', isArray: true })
  @Get('modalities')
  findAllModalities() {
    return this.coursesService.findAllModalities();
  }

  @ApiOperation({ summary: 'Crear un nuevo curso' })
  @ApiResponse({ status: 201, description: 'Curso creado con éxito' })
  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @ApiOperation({ summary: 'Obtener todos los cursos' })
  @ApiResponse({ status: 200, description: 'Lista de cursos', isArray: true })
  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @ApiOperation({ summary: 'Obtener un curso por ID' })
  @ApiResponse({ status: 200, description: 'Detalle del curso' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(id);
  }

  @ApiOperation({ summary: 'Actualizar un curso' })
  @ApiResponse({ status: 200, description: 'Curso actualizado con éxito' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(id, updateCourseDto);
  }

  @ApiOperation({ summary: 'Eliminar un curso' })
  @ApiResponse({ status: 200, description: 'Curso eliminado con éxito' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(id);
  }
}
