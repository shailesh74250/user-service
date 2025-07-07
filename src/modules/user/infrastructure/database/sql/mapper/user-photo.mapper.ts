import { UserPhotoDbEntity } from '../entities/user-photo.db.entity';
import { UserPhoto } from '../../../../domain/entities/user-photo.entity';

/**
 * UserPhotoMapper handles the mapping between DTOs and database entities.
 *
 * @class UserPhotoMapper
 */
export class UserPhotoMapper {
  /**
   * Maps a UserPhotoDbEntity to a UserPhoto domain entity.
   *
   * @param userPhotoDbEntity - The UserPhotoDbEntity to convert
   * @returns The UserPhoto domain entity
   */
  static toDomain(userPhotoDbEntity: UserPhotoDbEntity): UserPhoto {
    const {
      id,
      user_id,
      photo_url,
      photo_type,
      is_primary,
      is_approved,
      display_order,
      uploaded_at,
    } = userPhotoDbEntity;

    return new UserPhoto(
      id,
      user_id,
      photo_url,
      photo_type,
      is_primary,
      is_approved,
      display_order,
      uploaded_at,
    );
  }
}
