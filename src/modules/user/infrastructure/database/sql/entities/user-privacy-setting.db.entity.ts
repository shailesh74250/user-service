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
  ContactInfoVisibility,
  PhotoVisibility,
  MessageReceivePreference,
} from '../../../../domain/entities/user-privacy-setting.entity';

/**
 * UserPrivacySetting database entity representing a user's privacy settings in the database.
 *
 * @class UserPrivacySettingDbEntity
 * @extends Model
 */
@Table({
  tableName: 'user_privacy_settings',
  timestamps: true,
})
export class UserPrivacySettingDbEntity extends Model<UserPrivacySettingDbEntity> {
  /**
   * The unique identifier of the user privacy setting record.
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
   * The user ID this privacy setting belongs to.
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
   * Who can see the user's contact information.
   *
   * @column
   * @type {ContactInfoVisibility}
   */
  @Column({
    type: DataType.ENUM(...Object.values(ContactInfoVisibility)),
    allowNull: false,
    defaultValue: ContactInfoVisibility.PREMIUM_MEMBERS,
  })
  show_contact_info: ContactInfoVisibility;

  /**
   * Who can see the user's photos.
   *
   * @column
   * @type {PhotoVisibility}
   */
  @Column({
    type: DataType.ENUM(...Object.values(PhotoVisibility)),
    allowNull: false,
    defaultValue: PhotoVisibility.PREMIUM_MEMBERS,
  })
  show_photos: PhotoVisibility;

  /**
   * Who can send messages to the user.
   *
   * @column
   * @type {MessageReceivePreference}
   */
  @Column({
    type: DataType.ENUM(...Object.values(MessageReceivePreference)),
    allowNull: false,
    defaultValue: MessageReceivePreference.PREMIUM_MEMBERS,
  })
  receive_messages: MessageReceivePreference;

  /**
   * Whether profile visitors are visible to the user.
   *
   * @column
   * @type {boolean}
   */
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  profile_visitors_visible: boolean;

  /**
   * Whether the user's last seen status is visible to others.
   *
   * @column
   * @type {boolean}
   */
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  last_seen_visible: boolean;

  /**
   * The date and time when the privacy setting was created.
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
   * The date and time when the privacy setting was last updated.
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
  static updateTimestamp(instance: UserPrivacySettingDbEntity) {
    instance.updated_at = new Date();
  }
}

export default UserPrivacySettingDbEntity;
