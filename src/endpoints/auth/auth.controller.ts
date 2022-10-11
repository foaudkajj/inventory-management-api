import { Controller, Request, Post, Body, UseGuards } from '@nestjs/common';
import { LoginRequest } from 'src/models/requests/login.request';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }
    
    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Request() req, @Body() loginRequest: LoginRequest) {
        console.log(req.user);
        return this.authService.login(req.user);
    }
}
