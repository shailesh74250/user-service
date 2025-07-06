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
  @IsUUID()
  @IsNotEmpty()
  user_id: string;

  /**
   * The first name of the user.
   *
   * @example 'John'
   */
  @IsString()
  @IsNotEmpty()
  first_name: string;

  /**
   * The last name of the user.
   *
   * @example 'Doe'
   */
  @IsString()
  @IsNotEmpty()
  last_name: string;

  /**
   * The display name of the user.
   *
   * @example 'Johnny'
   */
  @IsString()
  @IsOptional()
  display_name?: string;

  /**
   * The date of birth of the user.
   *
   * @example '1990-01-01'
   */
  @IsDateString()
  @IsOptional()
  dob?: string;

  /**
   * The gender of the user.
   *
   * @example 'male'
   */
  @IsEnum(Gender)
  @IsOptional()
  gender?: Gender;

  /**
   * The marital status of the user.
   *
   * @example 'single'
   */
  @IsEnum(MaritalStatus)
  @IsOptional()
  marital_status?: MaritalStatus;

  /**
   * The height of the user in centimeters.
   *
   * @example 175.5
   */
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
  @IsEnum(Complexion)
  @IsOptional()
  complexion?: Complexion;

  /**
   * The body type of the user.
   *
   * @example 'athletic'
   */
  @IsEnum(BodyType)
  @IsOptional()
  body_type?: BodyType;

  /**
   * The profile photo URL of the user.
   *
   * @example 'https://example.com/photo.jpg'
   */
  @IsUrl()
  @IsOptional()
  profile_photo_url?: string;

  /**
   * About me description of the user.
   *
   * @example 'I love hiking and photography'
   */
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  about_me?: string;

  /**
   * The user ID who created this profile.
   *
   * @example '123e4567-e89b-12d3-a456-426614174000'
   */
  @IsUUID()
  @IsNotEmpty()
  created_by: string;

  /**
   * The profile visibility setting.
   *
   * @example 'public'
   */
  @IsEnum(ProfileVisibility)
  @IsOptional()
  profile_visibility?: ProfileVisibility;
}
