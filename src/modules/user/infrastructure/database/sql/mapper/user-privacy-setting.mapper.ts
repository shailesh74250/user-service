import { UserPrivacySetting } from '../../../../domain/entities/user-privacy-setting.entity';

/**
 * UserPrivacySettingMapper handles the mapping between DTOs and database entities.
 *
 * @class UserPrivacySettingMapper
 */
export class UserPrivacySettingMapper {
  /**
   * Maps a UserPrivacySettingDbEntity to a UserPrivacySetting domain entity.
   *
   * @param userPrivacySettingDbEntity - The UserPrivacySettingDbEntity to convert
   * @returns The UserPrivacySetting domain entity
   */
  static toDomain(userPrivacySettingDbEntity: any): UserPrivacySetting {
    const {
      id,
      user_id,
      show_contact_info,
      show_photos,
      receive_messages,
      profile_visitors_visible,
      last_seen_visible,
      created_at,
      updated_at,
    } = userPrivacySettingDbEntity;

    return new UserPrivacySetting(
      id,
      user_id,
      show_contact_info,
      show_photos,
      receive_messages,
      profile_visitors_visible,
      last_seen_visible,
      created_at,
      updated_at,
    );
  }
}
