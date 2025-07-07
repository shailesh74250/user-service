import { UserLocation } from '../../../../domain/entities/user-location.entity';

/**
 * UserLocationMapper handles the mapping between DTOs and database entities.
 *
 * @class UserLocationMapper
 */
export class UserLocationMapper {
  /**
   * Maps a UserLocationDbEntity to a UserLocation domain entity.
   *
   * @param userLocationDbEntity - The UserLocationDbEntity to convert
   * @returns The UserLocation domain entity
   */
  static toDomain(userLocationDbEntity: any): UserLocation {
    const {
      id,
      user_id,
      current_country,
      current_state,
      current_city,
      current_address,
      permanent_country,
      permanent_state,
      permanent_city,
      permanent_address,
      willing_to_relocate,
      created_at,
      updated_at,
    } = userLocationDbEntity;

    return new UserLocation(
      id,
      user_id,
      current_country,
      current_state,
      current_city,
      current_address,
      permanent_country,
      permanent_state,
      permanent_city,
      permanent_address,
      willing_to_relocate,
      created_at,
      updated_at,
    );
  }
}
