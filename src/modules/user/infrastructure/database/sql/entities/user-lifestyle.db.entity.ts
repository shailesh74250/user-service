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
  Diet,
  Smoking,
  Drinking,
} from '../../../../domain/entities/user-lifestyle.entity';

/**
 * UserLifestyle database entity representing a user's lifestyle information in the database.
 *
 * @class UserLifestyleDbEntity
 * @extends Model
 */
@Table({
  tableName: 'user_lifestyles',
  timestamps: true,
})
export class UserLifestyleDbEntity extends Model<UserLifestyleDbEntity> {
  /**
   * The unique identifier of the user lifestyle record.
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
   * The user ID this lifestyle information belongs to.
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
   * The diet preference of the user.
   *
   * @column
   * @type {Diet}
   */
  @Column({
    type: DataType.ENUM(...Object.values(Diet)),
    allowNull: true,
  })
  diet: Diet;

  /**
   * The smoking habits of the user.
   *
   * @column
   * @type {Smoking}
   */
  @Column({
    type: DataType.ENUM(...Object.values(Smoking)),
    allowNull: true,
  })
  smoking: Smoking;

  /**
   * The drinking habits of the user.
   *
   * @column
   * @type {Drinking}
   */
  @Column({
    type: DataType.ENUM(...Object.values(Drinking)),
    allowNull: true,
  })
  drinking: Drinking;

  /**
   * The hobbies of the user.
   *
   * @column
   * @type {string[]}
   */
  @Column({
    type: DataType.JSON,
    allowNull: true,
  })
  hobbies: string[];

  /**
   * The interests of the user.
   *
   * @column
   * @type {string[]}
   */
  @Column({
    type: DataType.JSON,
    allowNull: true,
  })
  interests: string[];

  /**
   * The sports activities of the user.
   *
   * @column
   * @type {string[]}
   */
  @Column({
    type: DataType.JSON,
    allowNull: true,
  })
  sports: string[];

  /**
   * The music preferences of the user.
   *
   * @column
   * @type {string[]}
   */
  @Column({
    type: DataType.JSON,
    allowNull: true,
  })
  music_preference: string[];

  /**
   * The date and time when the lifestyle information was created.
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
   * The date and time when the lifestyle information was last updated.
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
  static updateTimestamp(instance: UserLifestyleDbEntity) {
    instance.updated_at = new Date();
  }
}

export default UserLifestyleDbEntity;
