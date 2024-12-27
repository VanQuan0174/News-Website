import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from '@/modules/services/cms-service/services/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from '@/auth/guards/local-auth.guard';
import { JwtAuthGuard } from '@/auth/guards/jwt-auth.guard';
import { Public } from '@/decorator/customize';
import { CreateAuthDto } from '../dto/auth/auth-create';

@Public()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  // @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('register')
  register(@Body() registerDto: CreateAuthDto) {
    return this.authService.handleRegister(registerDto);
  }
}
