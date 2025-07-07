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
 * InterestSetting database entity representing interest settings in the database.
 *
 * @class InterestSettingDbEntity
 * @extends Model
 */
@Table({
  tableName: 'interest_settings',
  timestamps: true,
})
export class InterestSettingDbEntity extends Model<InterestSettingDbEntity> {
  /**
   * The unique identifier of the interest setting.
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
   * The user ID this setting belongs to.
   *
   * @column
   * @type {string}
   */
  @ForeignKey(() => UserDbEntity)
  @Column({
    type: DataType.UUID,
    allowNull: false,
    unique: true,
  })
  user_id: string;

  /**
   * Whether the user receives interests.
   *
   * @column
   * @type {boolean}
   */
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  receive_interests: boolean;

  /**
   * Auto decline interests outside preference.
   *
   * @column
   * @type {boolean}
   */
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  auto_decline_outside_prefrence: boolean;

  /**
   * Maximum interests per day.
   *
   * @column
   * @type {number}
   */
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 10,
  })
  max_interests_per_day: number;

  /**
   * Require premium to send interests.
   *
   * @column
   * @type {boolean}
   */
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  require_preminum_to_send: boolean;

  /**
   * Whether notifications are enabled.
   *
   * @column
   * @type {boolean}
   */
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  notification_enabled: boolean;

  /**
   * The date and time when the setting was created.
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
   * The date and time when the setting was last updated.
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
   * Hook to update the updated_at field before updating the record.
   */
  @BeforeUpdate
  static updateTimestamp(instance: InterestSettingDbEntity) {
    instance.updated_at = new Date();
  }
}

export default InterestSettingDbEntity;
