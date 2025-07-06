import { IsEmail, IsNotEmpty, IsString, MinLength, IsPhoneNumber, IsOptional, IsBoolean, IsEnum } from 'class-validator';
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
  @IsEmail()
  @IsNotEmpty()
  email: string;

  /**
   * The password of the user.
   *
   * @example 'password123'
   */
  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  password: string;

  /**
   * The phone number of the user.
   *
   * @example '+1234567890'
   */
  @IsPhoneNumber()
  @IsNotEmpty()
  phone: string;

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
   * @example 'pending'
   */
  @IsEnum(AccountStatus)
  @IsNotEmpty()
  account_status: AccountStatus;

  /**
   * The registration purpose of the user.
   *
   * @example 'personal'
   */
  @IsEnum(RegistrationFor)
  @IsNotEmpty()
  registration_for: RegistrationFor;
}
