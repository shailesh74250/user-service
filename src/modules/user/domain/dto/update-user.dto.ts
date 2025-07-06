import { IsEmail, IsOptional, IsString, MinLength, IsPhoneNumber, IsBoolean, IsEnum } from 'class-validator';
import { AccountStatus, RegistrationFor } from '../entities/user.entity';

/**
 * Data Transfer Object for updating a user.
 *
 * @class UpdateUserDto
 */
export class UpdateUserDto {
  /**
   * The email of the user.
   *
   * @example 'john.doe@example.com'
   */
  @IsEmail()
  @IsOptional()
  email?: string;

  /**
   * The password of the user.
   *
   * @example 'password123'
   */
  @IsString()
  @MinLength(6)
  @IsOptional()
  password?: string;

  /**
   * The phone number of the user.
   *
   * @example '+1234567890'
   */
  @IsPhoneNumber()
  @IsOptional()
  phone?: string;

  /**
   * Whether the email is verified.
   *
   * @example false
   */
  @IsBoolean()
  @IsOptional()
  email_verified?: boolean;

  /**
   * Whether the phone is verified.
   *
   * @example false
   */
  @IsBoolean()
  @IsOptional()
  phone_verified?: boolean;

  /**
   * The account status of the user.
   *
   * @example 'active'
   */
  @IsEnum(AccountStatus)
  @IsOptional()
  account_status?: AccountStatus;

  /**
   * The registration purpose of the user.
   *
   * @example 'business'
   */
  @IsEnum(RegistrationFor)
  @IsOptional()
  registration_for?: RegistrationFor;
}
