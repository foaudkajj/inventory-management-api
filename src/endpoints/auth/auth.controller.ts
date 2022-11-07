import {Body, Controller, Post, Request, UseGuards} from '@nestjs/common';
import {AllowAnonymous} from 'src/decorators/public.decorator';
import {LoginRequest} from 'src/models/requests/login.request';
import {AuthService} from './auth.service';
import {LocalAuthGuard} from './guards/local-auth.guard';

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @AllowAnonymous()
  @UseGuards(LocalAuthGuard)
  login(@Request() req, @Body() loginRequest: LoginRequest) {
    return this.authService.login(req.user);
  }
}
