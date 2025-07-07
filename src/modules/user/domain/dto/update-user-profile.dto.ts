import {
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
import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  MaritalStatus,
  Gender,
  Complexion,
  BodyType,
  ProfileVisibility,
} from '../entities/user-profile.entity';

/**
 * Data Transfer Object for updating a user profile.
 *
 * @class UpdateUserProfileDto
 */
export class UpdateUserProfileDto {
  /**
   * The first name of the user.
   *
   * @example 'John'
   */
  @ApiPropertyOptional({
    description: 'The first name of the user',
    example: 'John',
  })
  @IsString()
  @IsOptional()
  first_name?: string;

  /**
   * The last name of the user.
   *
   * @example 'Doe'
   */
  @ApiPropertyOptional({
    description: 'The last name of the user',
    example: 'Doe',
  })
  @IsString()
  @IsOptional()
  last_name?: string;

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

  /**
   * The profile completion percentage.
   *
   * @example 85.5
   */
  @ApiPropertyOptional({
    description: 'The profile completion percentage',
    example: 85.5,
    minimum: 0,
    maximum: 100,
  })
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @Max(100)
  @IsOptional()
  profile_completion_percentage?: number;
}
