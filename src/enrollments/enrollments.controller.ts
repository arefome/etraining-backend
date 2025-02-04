import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { EnrollmentsService } from './enrollments.service';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/guards/roles.guard';
import { UseGuards } from '@nestjs/common';
import { HasRoles } from '../auth/decorators/roles.decorator';

@ApiTags('enrollments')
@Controller('enrollments')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class EnrollmentsController {
  constructor(private readonly enrollmentsService: EnrollmentsService) {}

  @ApiOperation({ summary: 'Inscribirse a un curso' })
  @ApiResponse({ status: 201, description: 'Inscripción creada con éxito' })
  @Post()
  create(@Body() createEnrollmentDto: CreateEnrollmentDto) {
    return this.enrollmentsService.create(createEnrollmentDto);
  }

  @ApiOperation({ summary: 'Obtener todas las inscripciones' })
  @ApiResponse({ status: 200, description: 'Lista de inscripciones', isArray: true })
  @Get()
  findAll() {
    return this.enrollmentsService.findAll();
  }

  @ApiOperation({ summary: 'Obtener una inscripción por ID de usuario y curso' })
  @ApiResponse({ status: 200, description: 'Detalle de la inscripción' })
  @Get(':user_id/:course_id')
  findOne(@Param('user_id') user_id: string, @Param('course_id') course_id: string) {
    return this.enrollmentsService.findOne(user_id, course_id);
  }

  @ApiOperation({ summary: 'Actualizar una inscripción' })
  @ApiResponse({ status: 200, description: 'Inscripción actualizada con éxito' })
  @Patch(':user_id/:course_id')
  update(@Param('user_id') user_id: string, @Param('course_id') course_id: string, @Body() updateEnrollmentDto: UpdateEnrollmentDto) {
    return this.enrollmentsService.update(user_id, course_id, updateEnrollmentDto);
  }

  @ApiOperation({ summary: 'Eliminar una inscripción' })
  @ApiResponse({ status: 200, description: 'Inscripción eliminada con éxito' })
  @Delete(':user_id/:course_id')
  remove(@Param('user_id') user_id: string, @Param('course_id') course_id: string) {
    return this.enrollmentsService.remove(user_id, course_id);
  }
}
