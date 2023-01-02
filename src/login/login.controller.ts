import { AuthService } from './../auth/auth.service';
import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { Public } from 'src/helpers/custom-decorators';

@Controller('login')
export class LoginController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post()
  @UseGuards(LocalAuthGuard)
  login(@Request() req): any {
    return this.authService.login(req.user);
  }
}
