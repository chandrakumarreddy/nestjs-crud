import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [LoginService],
  controllers: [LoginController],
  imports: [AuthModule],
})
export class LoginModule {}
