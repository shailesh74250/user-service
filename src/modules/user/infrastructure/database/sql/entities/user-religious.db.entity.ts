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
  Religion,
  ZodiacSign,
} from '../../../../domain/entities/user-religious.entity';

/**
 * UserReligious database entity representing a user's religious information in the database.
 *
 * @class UserReligiousDbEntity
 * @extends Model
 */
@Table({
  tableName: 'user_religious',
  timestamps: true,
})
export class UserReligiousDbEntity extends Model<UserReligiousDbEntity> {
  /**
   * The unique identifier of the user religious record.
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
   * The user ID this religious information belongs to.
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
   * The religion of the user.
   *
   * @column
   * @type {Religion}
   */
  @Column({
    type: DataType.ENUM(...Object.values(Religion)),
    allowNull: true,
  })
  religion: Religion;

  /**
   * The caste of the user.
   *
   * @column
   * @type {string}
   */
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  caste: string;

  /**
   * The sub-caste of the user.
   *
   * @column
   * @type {string}
   */
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  sub_caste: string;

  /**
   * The gothra of the user.
   *
   * @column
   * @type {string}
   */
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  gothra: string;

  /**
   * The mother tongue of the user.
   *
   * @column
   * @type {string}
   */
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  mother_tongue: string;

  /**
   * The star/nakshatra of the user.
   *
   * @column
   * @type {string}
   */
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  star: string;

  /**
   * The zodiac sign of the user.
   *
   * @column
   * @type {ZodiacSign}
   */
  @Column({
    type: DataType.ENUM(...Object.values(ZodiacSign)),
    allowNull: true,
  })
  zodiac_sign: ZodiacSign;

  /**
   * The date and time when the religious information was created.
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
   * The date and time when the religious information was last updated.
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
  static updateTimestamp(instance: UserReligiousDbEntity) {
    instance.updated_at = new Date();
  }
}

export default UserReligiousDbEntity;
