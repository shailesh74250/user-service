import { UserInterestDbEntity } from '../entities/user-interest.db.entity';
import { UserInterest } from '../../../../domain/entities/user-interest.entity';

/**
 * UserInterestMapper handles the mapping between DTOs and database entities.
 *
 * @class UserInterestMapper
 */
export class UserInterestMapper {
  /**
   * Maps a UserInterestDbEntity to a UserInterest domain entity.
   *
   * @param userInterestDbEntity - The UserInterestDbEntity to convert
   * @returns The UserInterest domain entity
   */
  static toDomain(userInterestDbEntity: UserInterestDbEntity): UserInterest {
    const {
      id,
      sender_id,
      receiver_id,
      interest_type,
      status,
      message,
      sent_at,
      viewed_at,
      responded_at,
      expires_at,
      created_at,
      updated_at,
    } = userInterestDbEntity;

    return new UserInterest(
      id,
      sender_id,
      receiver_id,
      interest_type,
      status,
      message,
      sent_at,
      viewed_at,
      responded_at,
      expires_at,
      created_at,
      updated_at,
    );
  }
}
