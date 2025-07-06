import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

export enum ActionType {
  LIKE = 'like',
  SUPER_LIKE = 'super_like',
  PASS = 'pass',
  BLOCK = 'block',
  REPORT = 'report',
  VIEW_PROFILE = 'view_profile'
}

@Entity('interest_history')
export class InterestHistory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  user_id: string;

  @Column({
    type: 'enum',
    enum: ActionType
  })
  action_type: ActionType;

  @Column('uuid')
  target_user_id: string;

  @Column('date')
  action_date: Date;

  @CreateDateColumn()
  created_at: Date;
}
