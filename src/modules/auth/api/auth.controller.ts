import { Controller, Post, Body, UseGuards, Req, Headers } from '@nestjs/common';
import { AuthService } from '../domain/services/auth.service';
import { RegisterDto, LoginDto, ChangePasswordDto, ForgotPasswordDto, ResetPasswordDto } from '../domain/dto/login.dto';
import { JwtAuthGuard } from '../../../utils/guards/jwt-auth.guard';
import { Request } from '@nestjs/common';

interface RefreshTokenDto {
  refresh_token: string;
}

interface LogoutDto {
  refresh_token?: string;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @Post('change-password')
  @UseGuards(JwtAuthGuard)
  changePassword(@Req() req: Request, @Body() dto: ChangePasswordDto) {
    // @ts-ignore
    return this.authService.changePassword(req.user.sub, dto);
  }

  @Post('forgot-password')
  forgotPassword(@Body() dto: ForgotPasswordDto) {
    return this.authService.forgotPassword(dto);
  }

  @Post('reset-password')
  resetPassword(@Body() dto: ResetPasswordDto) {
    return this.authService.resetPassword(dto);
  }

  @Post('refresh')
  refreshToken(@Body() dto: RefreshTokenDto) {
    return this.authService.refreshToken(dto.refresh_token);
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  logout(@Headers('authorization') authHeader: string, @Body() dto: LogoutDto) {
    const token = authHeader?.replace('Bearer ', '');
    return this.authService.logout(token, dto.refresh_token);
  }
}
