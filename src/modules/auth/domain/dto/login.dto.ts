import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength, IsPhoneNumber, IsOptional, IsEnum } from 'class-validator';
import { AccountStatus, RegistrationFor } from '../../../user/domain/entities/user.entity';

export class LoginDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;
}

export class RegisterDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @MinLength(6)
  password: string;

  @ApiProperty()
  @IsPhoneNumber()
  phone: string;

  @ApiProperty({ enum: RegistrationFor, default: RegistrationFor.PERSONAL })
  @IsEnum(RegistrationFor)
  @IsOptional()
  registration_for?: RegistrationFor;

  @ApiProperty({ enum: AccountStatus, default: AccountStatus.PENDING })
  @IsEnum(AccountStatus)
  @IsOptional()
  account_status?: AccountStatus;
}

export class ChangePasswordDto {
  @ApiProperty()
  @IsNotEmpty()
  oldPassword: string;

  @ApiProperty()
  @MinLength(6)
  newPassword: string;
}

export class ForgotPasswordDto {
  @ApiProperty()
  @IsEmail()
  email: string;
}

export class ResetPasswordDto {
  @ApiProperty()
  @IsNotEmpty()
  token: string;

  @ApiProperty()
  @MinLength(6)
  newPassword: string;
}
