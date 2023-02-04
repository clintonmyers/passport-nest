import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { GoogleOAuthGuard } from 'src/google-oauth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @UseGuards(GoogleOAuthGuard)
  async googleAuth(@Request() req: any) {
    console.log(req);
  }

  @Get('google-redirect')
  @UseGuards(GoogleOAuthGuard)
  googleAuthRedirect(@Request() req: any) {
    return this.authService.googleLogin(req);
  }
}
