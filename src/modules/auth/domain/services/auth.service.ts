import { Injectable, UnauthorizedException, BadRequestException, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/sequelize';
import { UserDbEntity } from 'src/modules/user/infrastructure/database/sql/entities/user.db.entity';
import { RegisterDto, LoginDto, ChangePasswordDto, ForgotPasswordDto, ResetPasswordDto } from '../dto/login.dto';

@Injectable()
export class AuthService {
  private tokenBlacklist = new Set<string>(); // For logout

  constructor(
    @InjectModel(UserDbEntity)
    private readonly userModel: typeof UserDbEntity,
    private readonly jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const exists = await this.userModel.findOne({ where: { email: dto.email } });
    if (exists) throw new BadRequestException('Email already registered');
    const hash = await bcrypt.hash(dto.password, 10);
    // const user = this.userModel.build({
    //   email: dto.email,
    //   password: hash,
    // });
    // await user.save();
    return { message: 'Registration successful' };
  }

  async login(dto: LoginDto) {
    const user = await this.userModel.findOne({ where: { email: dto.email } });
    if (!user || !user.password) throw new UnauthorizedException('Invalid credentials');
    const valid = await bcrypt.compare(dto.password, user.password);
    if (!valid) throw new UnauthorizedException('Invalid credentials');
    const payload = { sub: user.id, email: user.email };
    const token = await this.jwtService.signAsync(payload);
    return { access_token: token };
  }

  async changePassword(userId: string, dto: ChangePasswordDto) {
    const user = await this.userModel.findByPk(userId);
    if (!user || !user.password) throw new NotFoundException('User not found');
    const valid = await bcrypt.compare(dto.oldPassword, user.password);
    if (!valid) throw new UnauthorizedException('Old password incorrect');
    user.password = await bcrypt.hash(dto.newPassword, 10);
    await user.save();
    return { message: 'Password changed successfully' };
  }

  async forgotPassword(dto: ForgotPasswordDto) {
    const user = await this.userModel.findOne({ where: { email: dto.email } });
    if (!user) throw new NotFoundException('User not found');
    const resetToken = await this.jwtService.signAsync({ sub: user.id, email: user.email }, { expiresIn: '15m' });
    // TODO: Send resetToken via email
    return { message: 'Reset token generated', resetToken };
  }

  async resetPassword(dto: ResetPasswordDto) {
    let payload: any;
    try {
      payload = await this.jwtService.verifyAsync(dto.token);
    } catch {
      throw new BadRequestException('Invalid or expired token');
    }
    const user = await this.userModel.findByPk(payload.sub);
    if (!user) throw new NotFoundException('User not found');
    user.password = await bcrypt.hash(dto.newPassword, 10);
    await user.save();
    return { message: 'Password reset successful' };
  }

  async logout(token: string) {
    this.tokenBlacklist.add(token);
    return { message: 'Logged out successfully' };
  }

  async isTokenBlacklisted(token: string): Promise<boolean> {
    return this.tokenBlacklist.has(token);
  }
}
