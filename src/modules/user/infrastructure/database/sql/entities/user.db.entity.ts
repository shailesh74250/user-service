import {
  Table,
  Column,
  Model,
  DataType,
  BeforeUpdate,
} from 'sequelize-typescript';
// Update the import path below if the file exists elsewhere, or create the file if missing.
import { AccountStatus, RegistrationFor } from '../../../../domain/entities/user.entity';

/**
 * User database entity representing a user in the database.
 *
 * @class UserDbEntity
 * @extends Model
 */
@Table({
  tableName: 'users',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class UserDbEntity extends Model<UserDbEntity> {
  /**
   * The unique identifier of the user.
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
   * The email of the user.
   *
   * @column
   * @type {string}
   */
  @Column({
    type: DataType.STRING,
    allowNull: true,
    unique: true,
  })
  declare email: string;

  /**
   * The password of the user.
   *
   * @column
   * @type {string}
   */
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare password: string;

  /**
   * The phone number of the user.
   *
   * @column
   * @type {string}
   */
  @Column({
    type: DataType.STRING,
    allowNull: true,
    unique: true,
  })
  declare phone: string;

  /**
   * Whether the email is verified.
   *
   * @column
   * @type {boolean}
   */
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  declare email_verified: boolean;

  /**
   * Whether the phone is verified.
   *
   * @column
   * @type {boolean}
   */
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  declare phone_verified: boolean;

  /**
   * The account status of the user.
   *
   * @column
   * @type {AccountStatus}
   */
  @Column({
    type: DataType.ENUM(...Object.values(AccountStatus)),
    allowNull: false,
    defaultValue: AccountStatus.PENDING,
  })
  declare account_status: AccountStatus;

  /**
   * The registration purpose of the user.
   *
   * @column
   * @type {RegistrationFor}
   */
  @Column({
    type: DataType.ENUM(...Object.values(RegistrationFor)),
    allowNull: false,
    defaultValue: RegistrationFor.PERSONAL,
  })
  declare registration_for: RegistrationFor;

  /**
   * The date and time when the user was created.
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
   * The date and time when the user was last updated.
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
   * Hook to update the updated_at field before updating the record.
   */
  @BeforeUpdate
  static updateTimestamp(instance: UserDbEntity) {
    instance.updated_at = new Date();
  }
}

export default UserDbEntity;
