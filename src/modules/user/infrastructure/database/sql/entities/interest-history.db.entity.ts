import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { UserDbEntity } from './user.db.entity';

/**
 * Enum for action type
 */
export enum ActionType {
  LIKE = 'like',
  SUPER_LIKE = 'super_like',
  PASS = 'pass',
  BLOCK = 'block',
  REPORT = 'report',
  VIEW_PROFILE = 'view_profile',
}

/**
 * InterestHistory database entity representing interest history in the database.
 *
 * @class InterestHistoryDbEntity
 * @extends Model
 */
@Table({
  tableName: 'interest_history',
  timestamps: false,
})
export class InterestHistoryDbEntity extends Model<InterestHistoryDbEntity> {
  /**
   * The unique identifier of the interest history.
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
   * The user ID who performed the action.
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
   * The type of action performed.
   *
   * @column
   * @type {ActionType}
   */
  @Column({
    type: DataType.ENUM(...Object.values(ActionType)),
    allowNull: false,
  })
  action_type: ActionType;

  /**
   * The target user ID.
   *
   * @column
   * @type {string}
   */
  @ForeignKey(() => UserDbEntity)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  target_user_id: string;

  /**
   * The date when the action was performed.
   *
   * @column
   * @type {Date}
   */
  @Column({
    type: DataType.DATEONLY,
    allowNull: false,
  })
  action_date: Date;

  /**
   * The date and time when the history was created.
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
   * Belongs to User relationship
   */
  @BelongsTo(() => UserDbEntity, 'user_id')
  user: UserDbEntity;

  /**
   * Belongs to Target User relationship
   */
  @BelongsTo(() => UserDbEntity, 'target_user_id')
  targetUser: UserDbEntity;
}

export default InterestHistoryDbEntity;
