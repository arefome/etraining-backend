import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async sendLoginLink(email: string) {
    try {
      const user = await this.usersService.findByEmail(email);
      
      if (!user) throw new NotFoundException('Usuario no encontrado');

      const verificationToken = this.jwtService.sign(
        {
          sub: user.id,
          email,
          type: 'email_verification',
          role: user.role.name,
        },
        {
          secret: process.env.JWT_SECRET || 'secretKey',
          expiresIn: '1h',
        }
      );

      return { verification_token: verificationToken };
    } catch (error) {
      console.error('Error al enviar el enlace de inicio de sesión:', error);
      throw new UnauthorizedException('Error al procesar la solicitud');
    }
  }

  async verifyEmailToken(token: string) {
    if (!token) {
      throw new UnauthorizedException('Token no proporcionado');
    }

    try {
      const payload = this.jwtService.verify(token, {
        secret: process.env.JWT_SECRET || 'secretKey',
      });

      if (payload.type !== 'email_verification') {
        throw new UnauthorizedException('Tipo de token inválido');
      }

      const user = await this.usersService.update(payload.sub, {
        verified_email_at: new Date(),
      });

      if (!user) {
        throw new UnauthorizedException('Usuario no encontrado');
      }

      const accessToken = this.jwtService.sign(
        {
          sub: user.id,
          email: user.email,
          role: user.role.name,
          type: 'access_token',
        },
        {
          secret: process.env.JWT_SECRET || 'secretKey',
          expiresIn: '7d',
        }
      );

      return { access_token: accessToken, user };
    } catch (error) {
      console.error('Error al verificar el token:', error);
      throw new UnauthorizedException('Token inválido o expirado');
    }
  }
}
