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
  FamilyType,
  FamilyStatus,
  FamilyValue,
} from '../../../../domain/entities/user-family.entity';

/**
 * UserFamily database entity representing a user's family information in the database.
 *
 * @class UserFamilyDbEntity
 * @extends Model
 */
@Table({
  tableName: 'user_families',
  timestamps: true,
})
export class UserFamilyDbEntity extends Model<UserFamilyDbEntity> {
  /**
   * The unique identifier of the user family record.
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
   * The foreign key reference to the user.
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
   * The name of the father.
   *
   * @column
   * @type {string}
   */
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  father_name: string;

  /**
   * The occupation of the father.
   *
   * @column
   * @type {string}
   */
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  father_occupation: string;

  /**
   * The name of the mother.
   *
   * @column
   * @type {string}
   */
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  mother_name: string;

  /**
   * The occupation of the mother.
   *
   * @column
   * @type {string}
   */
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  mother_occupation: string;

  /**
   * The number of brothers.
   *
   * @column
   * @type {number}
   */
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  brothers_count: number;

  /**
   * The number of sisters.
   *
   * @column
   * @type {number}
   */
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  sisters_count: number;

  /**
   * Whether any brothers are married.
   *
   * @column
   * @type {boolean}
   */
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  brothers_married: boolean;

  /**
   * Whether any sisters are married.
   *
   * @column
   * @type {boolean}
   */
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  sisters_married: boolean;

  /**
   * The type of family.
   *
   * @column
   * @type {FamilyType}
   */
  @Column({
    type: DataType.ENUM(...Object.values(FamilyType)),
    allowNull: true,
  })
  family_type: FamilyType;

  /**
   * The status of the family.
   *
   * @column
   * @type {FamilyStatus}
   */
  @Column({
    type: DataType.ENUM(...Object.values(FamilyStatus)),
    allowNull: true,
  })
  family_status: FamilyStatus;

  /**
   * The values of the family.
   *
   * @column
   * @type {FamilyValue}
   */
  @Column({
    type: DataType.ENUM(...Object.values(FamilyValue)),
    allowNull: true,
  })
  family_value: FamilyValue;

  /**
   * The date and time when the family record was created.
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
   * The date and time when the family record was last updated.
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
  static updateTimestamp(instance: UserFamilyDbEntity) {
    instance.updated_at = new Date();
  }
}

export default UserFamilyDbEntity;
