import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: any) {
    if (!payload.type || payload.type !== 'access_token') {
      throw new UnauthorizedException('Tipo de token inválido');
    }
    
    return { 
      id: payload.sub, 
      email: payload.email, 
      role: payload.role || 'UNKNOWN'
    };
  }
}
