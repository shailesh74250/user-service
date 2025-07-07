import {
  IsUUID,
  IsNotEmpty,
  IsString,
  IsOptional,
  IsDateString,
  IsEnum,
  IsNumber,
  Min,
  Max,
  IsUrl,
  MaxLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  MaritalStatus,
  Gender,
  Complexion,
  BodyType,
  ProfileVisibility,
} from '../entities/user-profile.entity';

/**
 * Data Transfer Object for creating a user profile.
 *
 * @class CreateUserProfileDto
 */
export class CreateUserProfileDto {
  /**
   * The user ID this profile belongs to.
   *
   * @example '123e4567-e89b-12d3-a456-426614174000'
   */
  @ApiProperty({
    description: 'The user ID this profile belongs to',
    example: '123e4567-e89b-12d3-a456-426614174000',
    format: 'uuid',
  })
  @IsUUID()
  @IsNotEmpty()
  user_id: string;

  /**
   * The first name of the user.
   *
   * @example 'John'
   */
  @ApiProperty({
    description: 'The first name of the user',
    example: 'John',
  })
  @IsString()
  @IsNotEmpty()
  first_name: string;

  /**
   * The last name of the user.
   *
   * @example 'Doe'
   */
  @ApiProperty({
    description: 'The last name of the user',
    example: 'Doe',
  })
  @IsString()
  @IsNotEmpty()
  last_name: string;

  /**
   * The display name of the user.
   *
   * @example 'Johnny'
   */
  @ApiPropertyOptional({
    description: 'The display name of the user',
    example: 'Johnny',
  })
  @IsString()
  @IsOptional()
  display_name?: string;

  /**
   * The date of birth of the user.
   *
   * @example '1990-01-01'
   */
  @ApiPropertyOptional({
    description: 'The date of birth of the user',
    example: '1990-01-01',
    format: 'date',
  })
  @IsDateString()
  @IsOptional()
  dob?: string;

  /**
   * The gender of the user.
   *
   * @example 'male'
   */
  @ApiPropertyOptional({
    description: 'The gender of the user',
    enum: Gender,
    example: Gender.MALE,
  })
  @IsEnum(Gender)
  @IsOptional()
  gender?: Gender;

  /**
   * The marital status of the user.
   *
   * @example 'single'
   */
  @ApiPropertyOptional({
    description: 'The marital status of the user',
    enum: MaritalStatus,
    example: MaritalStatus.SINGLE,
  })
  @IsEnum(MaritalStatus)
  @IsOptional()
  marital_status?: MaritalStatus;

  /**
   * The height of the user in centimeters.
   *
   * @example 175.5
   */
  @ApiPropertyOptional({
    description: 'The height of the user in centimeters',
    example: 175.5,
    minimum: 50,
    maximum: 300,
  })
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(50)
  @Max(300)
  @IsOptional()
  height?: number;

  /**
   * The weight of the user in kilograms.
   *
   * @example 70.5
   */
  @ApiPropertyOptional({
    description: 'The weight of the user in kilograms',
    example: 70.5,
    minimum: 10,
    maximum: 500,
  })
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(10)
  @Max(500)
  @IsOptional()
  weight?: number;

  /**
   * The complexion of the user.
   *
   * @example 'fair'
   */
  @ApiPropertyOptional({
    description: 'The complexion of the user',
    enum: Complexion,
    example: Complexion.FAIR,
  })
  @IsEnum(Complexion)
  @IsOptional()
  complexion?: Complexion;

  /**
   * The body type of the user.
   *
   * @example 'athletic'
   */
  @ApiPropertyOptional({
    description: 'The body type of the user',
    enum: BodyType,
    example: BodyType.ATHLETIC,
  })
  @IsEnum(BodyType)
  @IsOptional()
  body_type?: BodyType;

  /**
   * The profile photo URL of the user.
   *
   * @example 'https://example.com/photo.jpg'
   */
  @ApiPropertyOptional({
    description: 'The profile photo URL of the user',
    example: 'https://example.com/photo.jpg',
    format: 'url',
  })
  @IsUrl()
  @IsOptional()
  profile_photo_url?: string;

  /**
   * About me description of the user.
   *
   * @example 'I love hiking and photography'
   */
  @ApiPropertyOptional({
    description: 'About me description of the user',
    example: 'I love hiking and photography',
    maxLength: 1000,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  about_me?: string;

  /**
   * The user ID who created this profile.
   *
   * @example '123e4567-e89b-12d3-a456-426614174000'
   */
  @ApiProperty({
    description: 'The user ID who created this profile',
    example: '123e4567-e89b-12d3-a456-426614174000',
    format: 'uuid',
  })
  @IsUUID()
  @IsNotEmpty()
  created_by: string;

  /**
   * The profile visibility setting.
   *
   * @example 'public'
   */
  @ApiPropertyOptional({
    description: 'The profile visibility setting',
    enum: ProfileVisibility,
    example: ProfileVisibility.PUBLIC,
  })
  @IsEnum(ProfileVisibility)
  @IsOptional()
  profile_visibility?: ProfileVisibility;
}
