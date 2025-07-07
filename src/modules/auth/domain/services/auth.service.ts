import { Injectable, UnauthorizedException, BadRequestException, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/sequelize';
import { UserDbEntity } from 'src/modules/user/infrastructure/database/sql/entities/user.db.entity';
import { RegisterDto, LoginDto, ChangePasswordDto, ForgotPasswordDto, ResetPasswordDto } from '../dto/login.dto';
import { AccountStatus, RegistrationFor } from '../../../user/domain/entities/user.entity';
import { Op } from 'sequelize';

@Injectable()
export class AuthService {
  private tokenBlacklist = new Set<string>(); // For logout
  private refreshTokenBlacklist = new Set<string>(); // For refresh token blacklist

  constructor(
    @InjectModel(UserDbEntity)
    private readonly userModel: typeof UserDbEntity,
    private readonly jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    // Check if email or phone already exists
    const existingUser = await this.userModel.findOne({ 
      where: { 
        [Op.or]: [
          { email: dto.email },
          { phone: dto.phone }
        ]
      } 
    });
    
    if (existingUser) {
      if (existingUser.email === dto.email) {
        throw new BadRequestException('Email already registered');
      }
      if (existingUser.phone === dto.phone) {
        throw new BadRequestException('Phone number already registered');
      }
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);
    
    const user = await this.userModel.create({
      email: dto.email,
      password: hashedPassword,
      phone: dto.phone,
      registration_for: dto.registration_for || RegistrationFor.PERSONAL,
      account_status: dto.account_status || AccountStatus.PENDING,
      email_verified: false,
      phone_verified: false,
    } as any);

    return { 
      message: 'Registration successful',
      user: {
        id: user.id,
        email: user.email,
        phone: user.phone,
        account_status: user.account_status,
        registration_for: user.registration_for,
        created_at: user.created_at
      }
    };
  }

  async login(dto: LoginDto) {
    const user = await this.userModel.findOne({ where: { email: dto.email } });
    if (!user || !user.password) throw new UnauthorizedException('Invalid credentials');
    const valid = await bcrypt.compare(dto.password, user.password);
    if (!valid) throw new UnauthorizedException('Invalid credentials');
    
    const payload = { sub: user.id, email: user.email };
    const jwtOptions = { 
      secret: process.env.JWT_SECRET || 'a-string-secret-at-least-256-bits-long',
      algorithm: 'HS256' as const
    };
    
    const accessToken = await this.jwtService.signAsync(payload, { 
      ...jwtOptions, 
      expiresIn: '15m' 
    });
    const refreshToken = await this.jwtService.signAsync(payload, { 
      ...jwtOptions, 
      expiresIn: '7d' 
    });
    
    return { 
      access_token: accessToken,
      refresh_token: refreshToken,
      token_type: 'Bearer',
      expires_in: 900, // 15 minutes in seconds
      user: {
        id: user.id,
        email: user.email,
        phone: user.phone,
        account_status: user.account_status,
        registration_for: user.registration_for
      }
    };
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

  async refreshToken(refreshToken: string) {
    if (this.refreshTokenBlacklist.has(refreshToken)) {
      throw new UnauthorizedException('Refresh token has been revoked');
    }

    let payload: any;
    try {
      payload = await this.jwtService.verifyAsync(refreshToken);
    } catch {
      throw new UnauthorizedException('Invalid or expired refresh token');
    }

    const user = await this.userModel.findByPk(payload.sub);
    if (!user) throw new NotFoundException('User not found');

    const newPayload = { sub: user.id, email: user.email };
    const newAccessToken = await this.jwtService.signAsync(newPayload, { expiresIn: '15m' });
    const newRefreshToken = await this.jwtService.signAsync(newPayload, { expiresIn: '7d' });

    // Blacklist the old refresh token
    this.refreshTokenBlacklist.add(refreshToken);

    return {
      access_token: newAccessToken,
      refresh_token: newRefreshToken,
      token_type: 'Bearer',
      expires_in: 900
    };
  }

  async logout(token: string, refreshToken?: string) {
    this.tokenBlacklist.add(token);
    if (refreshToken) {
      this.refreshTokenBlacklist.add(refreshToken);
    }
    return { message: 'Logged out successfully' };
  }

  async isTokenBlacklisted(token: string): Promise<boolean> {
    return this.tokenBlacklist.has(token);
  }

  async isRefreshTokenBlacklisted(refreshToken: string): Promise<boolean> {
    return this.refreshTokenBlacklist.has(refreshToken);
  }
}

