import { UserLifestyle } from '../../../../domain/entities/user-lifestyle.entity';

/**
 * UserLifestyleMapper handles the mapping between DTOs and database entities.
 *
 * @class UserLifestyleMapper
 */
export class UserLifestyleMapper {
  /**
   * Maps a UserLifestyleDbEntity to a UserLifestyle domain entity.
   *
   * @param userLifestyleDbEntity - The UserLifestyleDbEntity to convert
   * @returns The UserLifestyle domain entity
   */
  static toDomain(userLifestyleDbEntity: any): UserLifestyle {
    const {
      id,
      user_id,
      diet,
      smoking,
      drinking,
      hobbies,
      interests,
      sports,
      music_preference,
      created_at,
      updated_at,
    } = userLifestyleDbEntity;

    return new UserLifestyle(
      id,
      user_id,
      diet,
      smoking,
      drinking,
      hobbies,
      interests,
      sports,
      music_preference,
      created_at,
      updated_at,
    );
  }
}
