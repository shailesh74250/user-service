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
import { MaritalStatus } from '../../../../domain/entities/user-profile.entity';
import { Religion } from '../../../../domain/entities/user-religious.entity';
import { HighestEducation } from '../../../../domain/entities/user-education.entity';
import { Diet } from '../../../../domain/entities/user-lifestyle.entity';

/**
 * UserPartnerPreference database entity representing a user's partner preference in the database.
 *
 * @class UserPartnerPreferenceDbEntity
 * @extends Model
 */
@Table({
  tableName: 'user_partner_preferences',
  timestamps: true,
})
export class UserPartnerPreferenceDbEntity extends Model<UserPartnerPreferenceDbEntity> {
  /**
   * The unique identifier of the user partner preference record.
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
   * The user ID this partner preference belongs to.
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
   * The minimum age preference for partner.
   *
   * @column
   * @type {number}
   */
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  min_age: number;

  /**
   * The maximum age preference for partner.
   *
   * @column
   * @type {number}
   */
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  max_age: number;

  /**
   * The minimum height preference for partner in centimeters.
   *
   * @column
   * @type {number}
   */
  @Column({
    type: DataType.DECIMAL(5, 2),
    allowNull: true,
  })
  min_height: number;

  /**
   * The maximum height preference for partner in centimeters.
   *
   * @column
   * @type {number}
   */
  @Column({
    type: DataType.DECIMAL(5, 2),
    allowNull: true,
  })
  max_height: number;

  /**
   * The marital status preference for partner.
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
   * The religion preferences for partner.
   *
   * @column
   * @type {Religion[]}
   */
  @Column({
    type: DataType.JSON,
    allowNull: true,
  })
  religion: Religion[];

  /**
   * The caste preferences for partner.
   *
   * @column
   * @type {string[]}
   */
  @Column({
    type: DataType.JSON,
    allowNull: true,
  })
  caste: string[];

  /**
   * The mother tongue preferences for partner.
   *
   * @column
   * @type {string[]}
   */
  @Column({
    type: DataType.JSON,
    allowNull: true,
  })
  mother_tongue: string[];

  /**
   * The education preferences for partner.
   *
   * @column
   * @type {HighestEducation[]}
   */
  @Column({
    type: DataType.JSON,
    allowNull: true,
  })
  education: HighestEducation[];

  /**
   * The occupation preferences for partner.
   *
   * @column
   * @type {string[]}
   */
  @Column({
    type: DataType.JSON,
    allowNull: true,
  })
  occupation: string[];

  /**
   * The location preferences for partner.
   *
   * @column
   * @type {string[]}
   */
  @Column({
    type: DataType.JSON,
    allowNull: true,
  })
  location: string[];

  /**
   * The income range preference for partner.
   *
   * @column
   * @type {string}
   */
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  income_range: string;

  /**
   * The diet preferences for partner.
   *
   * @column
   * @type {Diet[]}
   */
  @Column({
    type: DataType.JSON,
    allowNull: true,
  })
  diet_preference: Diet[];

  /**
   * The date and time when the partner preference was created.
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
   * Hook to update the updated_at field before updating the record.
   */
  @BeforeUpdate
  static updateTimestamp(instance: UserPartnerPreferenceDbEntity) {
    instance.updated_at = new Date();
  }
}

export default UserPartnerPreferenceDbEntity;
