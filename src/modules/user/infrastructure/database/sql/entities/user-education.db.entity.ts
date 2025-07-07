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
  HighestEducation,
} from '../../../../domain/entities/user-education.entity';

/**
 * UserEducation database entity representing a user's educational and professional information in the database.
 *
 * @class UserEducationDbEntity
 * @extends Model
 */
@Table({
  tableName: 'user_educations',
  timestamps: true,
})
export class UserEducationDbEntity extends Model<UserEducationDbEntity> {
  /**
   * The unique identifier of the user education record.
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
   * The user ID this education information belongs to.
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
   * The highest education level of the user.
   *
   * @column
   * @type {HighestEducation}
   */
  @Column({
    type: DataType.ENUM(...Object.values(HighestEducation)),
    allowNull: true,
  })
  heighest_education: HighestEducation;

  /**
   * Detailed education information of the user.
   *
   * @column
   * @type {string}
   */
  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  education_details: string;

  /**
   * The occupation of the user.
   *
   * @column
   * @type {string}
   */
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  occupation: string;

  /**
   * The organization where the user works.
   *
   * @column
   * @type {string}
   */
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  organization: string;

  /**
   * The annual income of the user.
   *
   * @column
   * @type {string}
   */
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  annual_income: string;

  /**
   * The work location of the user.
   *
   * @column
   * @type {string}
   */
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  work_location: string;

  /**
   * The number of years of experience.
   *
   * @column
   * @type {number}
   */
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  experience_years: number;

  /**
   * The date and time when the education information was created.
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
   * The date and time when the education information was last updated.
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
  static updateTimestamp(instance: UserEducationDbEntity) {
    instance.updated_at = new Date();
  }
}

export default UserEducationDbEntity;
