import { UserFamily } from '../../../../domain/entities/user-family.entity';

/**
 * UserFamilyMapper handles the mapping between DTOs and database entities.
 *
 * @class UserFamilyMapper
 */
export class UserFamilyMapper {
  /**
   * Maps a UserFamilyDbEntity to a UserFamily domain entity.
   *
   * @param userFamilyDbEntity - The UserFamilyDbEntity to convert
   * @returns The UserFamily domain entity
   */
  static toDomain(userFamilyDbEntity: any): UserFamily {
    const {
      id,
      user_id,
      father_name,
      father_occupation,
      mother_name,
      mother_occupation,
      brothers_count,
      sisters_count,
      brothers_married,
      sisters_married,
      family_type,
      family_status,
      family_value,
      created_at,
      updated_at,
    } = userFamilyDbEntity;

    return new UserFamily(
      id,
      user_id,
      father_name,
      father_occupation,
      mother_name,
      mother_occupation,
      brothers_count,
      sisters_count,
      brothers_married,
      sisters_married,
      family_type,
      family_status,
      family_value,
      created_at,
      updated_at,
    );
  }
}
