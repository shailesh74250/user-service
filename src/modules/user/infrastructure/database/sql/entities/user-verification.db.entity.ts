import {
  Table,
  Column,
  Model,
  DataType,
  BeforeUpdate,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { UserDbEntity } from './user.db.entity';
import {
  VerificationType,
  VerificationStatus,
} from '../../../../domain/entities/user-verification.entity';

/**
 * UserVerification database entity representing a user verification record in the database.
 *
 * @class UserVerificationDbEntity
 * @extends Model
 */
@Table({
  tableName: 'user_verifications',
  timestamps: true,
})
export class UserVerificationDbEntity extends Model<UserVerificationDbEntity> {
  /**
   * The unique identifier of the user verification record.
   *
   * @column
   * @type {string}
   */
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  declare id: string;

  /**
   * The user ID this verification belongs to.
   *
   * @column
   * @type {string}
   */
  @ForeignKey(() => UserDbEntity)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  user_id: string;

  /**
   * The type of verification.
   *
   * @column
   * @type {VerificationType}
   */
  @Column({
    type: DataType.ENUM(...Object.values(VerificationType)),
    allowNull: false,
  })
  verification_type: VerificationType;

  /**
   * The status of the verification.
   *
   * @column
   * @type {VerificationStatus}
   */
  @Column({
    type: DataType.ENUM(...Object.values(VerificationStatus)),
    allowNull: false,
    defaultValue: VerificationStatus.PENDING,
  })
  verification_status: VerificationStatus;

  /**
   * The URL of the document uploaded for verification.
   *
   * @column
   * @type {string}
   */
  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  document_url: string;

  /**
   * The admin/staff ID who verified this document.
   *
   * @column
   * @type {string}
   */
  @ForeignKey(() => UserDbEntity)
  @Column({
    type: DataType.UUID,
    allowNull: true,
  })
  verified_by: string;

  /**
   * The date and time when the verification was approved/rejected.
   *
   * @column
   * @type {Date}
   */
  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  verified_at: Date;

  /**
   * The reason for rejection if the verification was rejected.
   *
   * @column
   * @type {string}
   */
  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  rejection_reason: string;

  /**
   * The date and time when the verification record was created.
   *
   * @column
   * @type {Date}
   */
  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  declare created_at: Date;

  /**
   * The date and time when the verification record was last updated.
   *
   * @column
   * @type {Date}
   */
  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  declare updated_at: Date;

  /**
   * Belongs to User relationship
   */
  @BelongsTo(() => UserDbEntity, 'user_id')
  user: UserDbEntity;

  /**
   * Belongs to Verifier relationship
   */
  @BelongsTo(() => UserDbEntity, 'verified_by')
  verifier: UserDbEntity;

  /**
   * Hook to update the updated_at field before updating the record.
   */
  @BeforeUpdate
  static updateTimestamp(instance: UserVerificationDbEntity) {
    instance.updated_at = new Date();
  }
}

export default UserVerificationDbEntity;
