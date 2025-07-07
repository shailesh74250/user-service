import { UserEducationDbEntity } from '../entities/user-education.db.entity';
import { UserEducation } from '../../../../domain/entities/user-education.entity';

/**
 * UserEducationMapper handles the mapping between DTOs and database entities.
 *
 * @class UserEducationMapper
 */
export class UserEducationMapper {
  /**
   * Maps a UserEducationDbEntity to a UserEducation domain entity.
   *
   * @param userEducationDbEntity - The UserEducationDbEntity to convert
   * @returns The UserEducation domain entity
   */
  static toDomain(userEducationDbEntity: UserEducationDbEntity): UserEducation {
    const {
      id,
      user_id,
      heighest_education,
      education_details,
      occupation,
      organization,
      annual_income,
      work_location,
      experience_years,
      created_at,
      updated_at,
    } = userEducationDbEntity;

    return new UserEducation(
      id,
      user_id,
      heighest_education,
      education_details,
      occupation,
      organization,
      annual_income,
      work_location,
      experience_years,
      created_at,
      updated_at,
    );
  }
}
