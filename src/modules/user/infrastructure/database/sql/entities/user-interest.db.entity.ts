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

/**
 * Enum for interest type
 */
export enum InterestType {
  LIKE = 'like',
  SUPER_LIKE = 'super_like',
  PASS = 'pass',
  MESSAGE = 'message',
}

/**
 * Enum for interest status
 */
export enum InterestStatus {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
  EXPIRED = 'expired',
}

/**
 * UserInterest database entity representing user interests in the database.
 *
 * @class UserInterestDbEntity
 * @extends Model
 */
@Table({
  tableName: 'user_interests',
  timestamps: true,
})
export class UserInterestDbEntity extends Model<UserInterestDbEntity> {
  /**
   * The unique identifier of the user interest.
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
   * The sender user ID.
   *
   * @column
   * @type {string}
   */
  @ForeignKey(() => UserDbEntity)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  sender_id: string;

  /**
   * The receiver user ID.
   *
   * @column
   * @type {string}
   */
  @ForeignKey(() => UserDbEntity)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  receiver_id: string;

  /**
   * The type of interest.
   *
   * @column
   * @type {InterestType}
   */
  @Column({
    type: DataType.ENUM(...Object.values(InterestType)),
    allowNull: false,
  })
  interest_type: InterestType;

  /**
   * The status of the interest.
   *
   * @column
   * @type {InterestStatus}
   */
  @Column({
    type: DataType.ENUM(...Object.values(InterestStatus)),
    allowNull: false,
    defaultValue: InterestStatus.PENDING,
  })
  status: InterestStatus;

  /**
   * The message content.
   *
   * @column
   * @type {string}
   */
  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  message: string;

  /**
   * The date and time when the interest was sent.
   *
   * @column
   * @type {Date}
   */
  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  sent_at: Date;

  /**
   * The date and time when the interest was viewed.
   *
   * @column
   * @type {Date}
   */
  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  viewed_at: Date;

  /**
   * The date and time when the interest was responded to.
   *
   * @column
   * @type {Date}
   */
  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  responded_at: Date;

  /**
   * The date and time when the interest expires.
   *
   * @column
   * @type {Date}
   */
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  expires_at: Date;

  /**
   * The date and time when the interest was created.
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
   * The date and time when the interest was last updated.
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
   * Belongs to Sender relationship
   */
  @BelongsTo(() => UserDbEntity, 'sender_id')
  sender: UserDbEntity;

  /**
   * Belongs to Receiver relationship
   */
  @BelongsTo(() => UserDbEntity, 'receiver_id')
  receiver: UserDbEntity;

  /**
   * Hook to update the updated_at field before updating the record.
   */
  @BeforeUpdate
  static updateTimestamp(instance: UserInterestDbEntity) {
    instance.updated_at = new Date();
  }
}

export default UserInterestDbEntity;
