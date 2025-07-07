import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  BeforeUpdate,
} from 'sequelize-typescript';
import { UserDbEntity } from './user.db.entity';
import { PhotoType } from '../../../../domain/entities/user-photo.entity';

/**
 * UserPhoto database entity representing a user photo in the database.
 *
 * @class UserPhotoDbEntity
 * @extends Model
 */
@Table({
  tableName: 'user_photos',
  timestamps: false,
})
export class UserPhotoDbEntity extends Model<UserPhotoDbEntity> {
  /**
   * The unique identifier of the user photo.
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
   * The user ID this photo belongs to.
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
   * The photo URL.
   *
   * @column
   * @type {string}
   */
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  photo_url: string;

  /**
   * The photo type.
   *
   * @column
   * @type {PhotoType}
   */
  @Column({
    type: DataType.ENUM(...Object.values(PhotoType)),
    allowNull: false,
  })
  photo_type: PhotoType;

  /**
   * Whether this photo is the primary/profile photo.
   *
   * @column
   * @type {boolean}
   */
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  is_primary: boolean;

  /**
   * Whether the photo is approved.
   *
   * @column
   * @type {boolean}
   */
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  is_approved: boolean;

  /**
   * The display order of the photo.
   *
   * @column
   * @type {number}
   */
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  display_order: number;

  /**
   * The date and time when the photo was uploaded.
   *
   * @column
   * @type {Date}
   */
  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  uploaded_at: Date;

  /**
   * The date and time when the partner preference was last updated.
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
   * Belongs to Uploader relationship
   */
  @BelongsTo(() => UserDbEntity, 'uploaded_by')
  uploader: UserDbEntity;

  /**
   * Hook to update the updated_at field before updating the record.
   */
  @BeforeUpdate
  static updateTimestamp(instance: UserPhotoDbEntity) {
    instance.updated_at = new Date();
  }
}

export default UserPhotoDbEntity;
