import { IsEmail, IsNotEmpty, IsString, MinLength, IsPhoneNumber, IsBoolean, IsEnum } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AccountStatus, RegistrationFor } from '../entities/user.entity';

/**
 * Data Transfer Object for creating a user.
 *
 * @class CreateUserDto
 */
export class CreateUserDto {
  /**
   * The email of the user.
   *
   * @example 'john.doe@example.com'
   */
  @ApiProperty({
    description: 'The email of the user',
    example: 'john.doe@example.com',
    format: 'email'
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  /**
   * The password of the user.
   *
   * @example 'password123'
   */
  @ApiProperty({
    description: 'The password of the user',
    example: 'password123',
    minLength: 6
  })
  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  password: string;

  /**
   * The phone number of the user.
   *
   * @example '+1234567890'
   */
  @ApiProperty({
    description: 'The phone number of the user',
    example: '+1234567890'
  })
  @IsPhoneNumber()
  @IsNotEmpty()
  phone: string;

  /**
   * Whether the email is verified.
   *
   * @example false
   */
  @ApiPropertyOptional({
    description: 'Whether the email is verified',
    example: false,
    default: false
  })
  @IsBoolean()
  email_verified?: boolean;

  /**
   * Whether the phone is verified.
   *
   * @example false
   */
  @ApiPropertyOptional({
    description: 'Whether the phone is verified',
    example: false,
    default: false
  })
  @IsBoolean()
  phone_verified?: boolean;

  /**
   * The account status of the user.
   *
   * @example 'pending'
   */
  @ApiProperty({
    description: 'The account status of the user',
    enum: AccountStatus,
    example: AccountStatus.PENDING
  })
  @IsEnum(AccountStatus)
  @IsNotEmpty()
  account_status: AccountStatus;

  /**
   * The registration purpose of the user.
   *
   * @example 'personal'
   */
  @ApiProperty({
    description: 'The registration purpose of the user',
    enum: RegistrationFor,
    example: RegistrationFor.PERSONAL
  })
  @IsEnum(RegistrationFor)
  @IsNotEmpty()
  registration_for: RegistrationFor;
}
