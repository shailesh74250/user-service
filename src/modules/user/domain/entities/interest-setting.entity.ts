import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('interest_settings')
export class InterestSetting {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  user_id: string;

  @Column('boolean', { default: true })
  receive_interests: boolean;

  @Column('boolean', { default: false })
  auto_decline_outside_prefrence: boolean;

  @Column('int', { default: 10 })
  max_interests_per_day: number;

  @Column('boolean', { default: false })
  require_preminum_to_send: boolean;

  @Column('boolean', { default: true })
  notification_enabled: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
