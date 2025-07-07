import { UserVerificationDbEntity } from '../entities/user-verification.db.entity';
import { UserVerification } from '../../../../domain/entities/user-verification.entity';

/**
 * UserVerificationMapper handles the mapping between DTOs and database entities.
 *
 * @class UserVerificationMapper
 */
export class UserVerificationMapper {
  /**
   * Maps a UserVerificationDbEntity to a UserVerification domain entity.
   *
   * @param userVerificationDbEntity - The UserVerificationDbEntity to convert
   * @returns The UserVerification domain entity
   */
  static toDomain(userVerificationDbEntity: UserVerificationDbEntity): UserVerification {
    const {
      id,
      user_id,
      verification_type,
      verification_status,
      document_url,
      verified_by,
      verified_at,
      rejection_reason,
      created_at,
      updated_at,
    } = userVerificationDbEntity;

    return new UserVerification(
      id,
      user_id,
      verification_type,
      verification_status,
      document_url,
      verified_by,
      verified_at,
      rejection_reason,
      created_at,
      updated_at,
    );
  }
}
