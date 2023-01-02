import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [LoginController],
  imports: [AuthModule],
})
export class LoginModule {}
