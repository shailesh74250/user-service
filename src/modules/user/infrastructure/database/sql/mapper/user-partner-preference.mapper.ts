import { UserPartnerPreference } from '../../../../domain/entities/user-partner-preference.entity';

/**
 * UserPartnerPreferenceMapper handles the mapping between DTOs and database entities.
 *
 * @class UserPartnerPreferenceMapper
 */
export class UserPartnerPreferenceMapper {
  /**
   * Maps a UserPartnerPreferenceDbEntity to a UserPartnerPreference domain entity.
   *
   * @param userPartnerPreferenceDbEntity - The UserPartnerPreferenceDbEntity to convert
   * @returns The UserPartnerPreference domain entity
   */
  static toDomain(userPartnerPreferenceDbEntity: any): UserPartnerPreference {
    const {
      id,
      user_id,
      min_age,
      max_age,
      min_height,
      max_height,
      marital_status,
      religion,
      caste,
      mother_tongue,
      education,
      occupation,
      location,
      income_range,
      diet_preference,
      created_at,
      updated_at,
    } = userPartnerPreferenceDbEntity;

    return new UserPartnerPreference(
      id,
      user_id,
      min_age,
      max_age,
      min_height,
      max_height,
      marital_status,
      religion,
      caste,
      mother_tongue,
      education,
      occupation,
      location,
      income_range,
      diet_preference,
      created_at,
      updated_at,
    );
  }
}
