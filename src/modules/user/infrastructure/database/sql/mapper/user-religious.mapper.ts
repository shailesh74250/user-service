import { UserReligious } from '../../../../domain/entities/user-religious.entity';

/**
 * UserReligiousMapper handles the mapping between DTOs and database entities.
 *
 * @class UserReligiousMapper
 */
export class UserReligiousMapper {
  /**
   * Maps a UserReligiousDbEntity to a UserReligious domain entity.
   *
   * @param userReligiousDbEntity - The UserReligiousDbEntity to convert
   * @returns The UserReligious domain entity
   */
  static toDomain(userReligiousDbEntity: any): UserReligious {
    const {
      id,
      user_id,
      religion,
      caste,
      sub_caste,
      gothra,
      mother_tongue,
      star,
      zodiac_sign,
      created_at,
      updated_at,
    } = userReligiousDbEntity;

    return new UserReligious(
      id,
      user_id,
      religion,
      caste,
      sub_caste,
      gothra,
      mother_tongue,
      star,
      zodiac_sign,
      created_at,
      updated_at,
    );
  }
}
