import { Controller, Post, Body, Query, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody, ApiQuery } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginRequestDto } from './dto/login.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Enviar enlace de inicio de sesión' })
  @ApiBody({ type: LoginRequestDto })
  @Post('login')
  async login(@Body() loginDto: LoginRequestDto) {
    return this.authService.sendLoginLink(loginDto.email);
  }

  @ApiOperation({ summary: 'Verificar email' })
  @ApiBody({ type: Object })
  @Post('verify')
  async verifyEmail(@Body() { token }: { token: string }) {
    return this.authService.verifyEmailToken(token);
  }
}
