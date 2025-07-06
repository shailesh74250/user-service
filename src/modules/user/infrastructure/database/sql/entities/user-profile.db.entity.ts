import {
  Table,
  Column,
  Model,
  DataType,
  BeforeUpdate,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import {
  MaritalStatus,
  Gender,
  Complexion,
  BodyType,
  ProfileVisibility,
} from '../../../domain/entities/user-profile.entity';
import { UserDbEntity } from './user.db.entity';

/**
 * UserProfile database entity representing a user profile in the database.
 *
 * @class UserProfileDbEntity
 * @extends Model
 */
@Table({
  tableName: 'user_profiles',
  timestamps: true,
})
export class UserProfileDbEntity extends Model<UserProfileDbEntity> {
  /**
   * The unique identifier of the user profile.
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
   * The user ID this profile belongs to.
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
   * The first name of the user.
   *
   * @column
   * @type {string}
   */
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  first_name: string;

  /**
   * The last name of the user.
   *
   * @column
   * @type {string}
   */
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  last_name: string;

  /**
   * The display name of the user.
   *
   * @column
   * @type {string}
   */
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  display_name: string;

  /**
   * The date of birth of the user.
   *
   * @column
   * @type {Date}
   */
  @Column({
    type: DataType.DATEONLY,
    allowNull: true,
  })
  dob: Date;

  /**
   * The gender of the user.
   *
   * @column
   * @type {Gender}
   */
  @Column({
    type: DataType.ENUM(...Object.values(Gender)),
    allowNull: true,
  })
  gender: Gender;

  /**
   * The marital status of the user.
   *
   * @column
   * @type {MaritalStatus}
   */
  @Column({
    type: DataType.ENUM(...Object.values(MaritalStatus)),
    allowNull: true,
  })
  marital_status: MaritalStatus;

  /**
   * The height of the user in centimeters.
   *
   * @column
   * @type {number}
   */
  @Column({
    type: DataType.DECIMAL(5, 2),
    allowNull: true,
  })
  height: number;

  /**
   * The weight of the user in kilograms.
   *
   * @column
   * @type {number}
   */
  @Column({
    type: DataType.DECIMAL(5, 2),
    allowNull: true,
  })
  weight: number;

  /**
   * The complexion of the user.
   *
   * @column
   * @type {Complexion}
   */
  @Column({
    type: DataType.ENUM(...Object.values(Complexion)),
    allowNull: true,
  })
  complexion: Complexion;

  /**
   * The body type of the user.
   *
   * @column
   * @type {BodyType}
   */
  @Column({
    type: DataType.ENUM(...Object.values(BodyType)),
    allowNull: true,
  })
  body_type: BodyType;

  /**
   * The profile photo URL of the user.
   *
   * @column
   * @type {string}
   */
  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  profile_photo_url: string;

  /**
   * About me description of the user.
   *
   * @column
   * @type {string}
   */
  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  about_me: string;

  /**
   * The user ID who created this profile.
   *
   * @column
   * @type {string}
   */
  @ForeignKey(() => UserDbEntity)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  created_by: string;

  /**
   * The profile visibility setting.
   *
   * @column
   * @type {ProfileVisibility}
   */
  @Column({
    type: DataType.ENUM(...Object.values(ProfileVisibility)),
    allowNull: false,
    defaultValue: ProfileVisibility.PUBLIC,
  })
  profile_visibility: ProfileVisibility;

  /**
   * The profile completion percentage.
   *
   * @column
   * @type {number}
   */
  @Column({
    type: DataType.DECIMAL(5, 2),
    allowNull: false,
    defaultValue: 0,
  })
  profile_completion_percentage: number;

  /**
   * The last active timestamp.
   *
   * @column
   * @type {Date}
   */
  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  last_active: Date;

  /**
   * The date and time when the profile was created.
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
   * The date and time when the profile was last updated.
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
   * Belongs to User relationship for creator
   */
  @BelongsTo(() => UserDbEntity, 'created_by')
  creator: UserDbEntity;

  /**
   * Hook to update the updated_at field before updating the record.
   */
  @BeforeUpdate
  static updateTimestamp(instance: UserProfileDbEntity) {
    instance.updated_at = new Date();
  }
}

export default UserProfileDbEntity;
