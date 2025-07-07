import { CreateUserProfileDto } from '../../../../domain/dto/create-user-profile.dto';
import { UpdateUserProfileDto } from '../../../../domain/dto/update-user-profile.dto';
import { UserProfileDbEntity } from '../entities/user-profile.db.entity';
import { UserProfile } from '../../../../domain/entities/user-profile.entity';

/**
 * UserProfileMapper handles the mapping between DTOs and database entities.
 *
 * @class UserProfileMapper
 */
export class UserProfileMapper {
  /**
   * Maps a CreateUserProfileDto to a UserProfileDbEntity.
   *
   * @param createUserProfileDto - Data Transfer Object for creating a user profile
   * @returns A partial UserProfileDbEntity with the mapped properties
   */
  static toDbEntityFromCreateDto(
    createUserProfileDto: CreateUserProfileDto,
  ): Partial<UserProfileDbEntity> {
    return {
      user_id: createUserProfileDto.user_id,
      first_name: createUserProfileDto.first_name,
      last_name: createUserProfileDto.last_name,
      display_name: createUserProfileDto.display_name,
      dob: createUserProfileDto.dob ? new Date(createUserProfileDto.dob) : undefined,
      gender: createUserProfileDto.gender,
      marital_status: createUserProfileDto.marital_status,
      height: createUserProfileDto.height,
      weight: createUserProfileDto.weight,
      complexion: createUserProfileDto.complexion,
      body_type: createUserProfileDto.body_type,
      profile_photo_url: createUserProfileDto.profile_photo_url,
      about_me: createUserProfileDto.about_me,
      created_by: createUserProfileDto.created_by,
      profile_visibility: createUserProfileDto.profile_visibility,
    };
  }

  /**
   * Maps an UpdateUserProfileDto to a UserProfileDbEntity.
   *
   * @param updateUserProfileDto - Data Transfer Object for updating a user profile
   * @returns A partial UserProfileDbEntity with the mapped properties
   */
  static toDbEntityFromUpdateDto(
    updateUserProfileDto: UpdateUserProfileDto,
  ): Partial<UserProfileDbEntity> {
    return {
      first_name: updateUserProfileDto.first_name,
      last_name: updateUserProfileDto.last_name,
      display_name: updateUserProfileDto.display_name,
      dob: updateUserProfileDto.dob ? new Date(updateUserProfileDto.dob) : undefined,
      gender: updateUserProfileDto.gender,
      marital_status: updateUserProfileDto.marital_status,
      height: updateUserProfileDto.height,
      weight: updateUserProfileDto.weight,
      complexion: updateUserProfileDto.complexion,
      body_type: updateUserProfileDto.body_type,
      profile_photo_url: updateUserProfileDto.profile_photo_url,
      about_me: updateUserProfileDto.about_me,
      profile_visibility: updateUserProfileDto.profile_visibility,
      profile_completion_percentage: updateUserProfileDto.profile_completion_percentage,
    };
  }

  /**
   * Maps a UserProfileDbEntity to a UserProfile domain entity.
   *
   * @param userProfileDbEntity - The UserProfileDbEntity to convert
   * @returns The UserProfile domain entity
   */
  static toDomain(userProfileDbEntity: UserProfileDbEntity): UserProfile {
    const {
      id,
      user_id,
      first_name,
      last_name,
      display_name,
      dob,
      gender,
      marital_status,
      height,
      weight,
      complexion,
      body_type,
      profile_photo_url,
      about_me,
      created_by,
      profile_visibility,
      profile_completion_percentage,
      last_active,
      created_at,
      updated_at,
    } = userProfileDbEntity;

    return new UserProfile(
      id,
      user_id,
      first_name,
      last_name,
      display_name,
      dob,
      gender,
      marital_status,
      height,
      weight,
      complexion,
      body_type,
      profile_photo_url,
      about_me,
      created_by,
      profile_visibility,
      profile_completion_percentage,
      last_active,
      created_at,
      updated_at,
    );
  }
}
