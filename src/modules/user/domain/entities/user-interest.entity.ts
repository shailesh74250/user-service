import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum InterestType {
  LIKE = 'like',
  SUPER_LIKE = 'super_like',
  PASS = 'pass',
  MESSAGE = 'message'
}

export enum InterestStatus {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
  EXPIRED = 'expired'
}

@Entity('user_interests')
export class UserInterest {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  sender_id: string;

  @Column('uuid')
  receiver_id: string;

  @Column({
    type: 'enum',
    enum: InterestType
  })
  interest_type: InterestType;

  @Column({
    type: 'enum',
    enum: InterestStatus
  })
  status: InterestStatus;

  @Column('text', { nullable: true })
  message: string | null;

  @Column('timestamp')
  sent_at: Date;

  @Column('timestamp', { nullable: true })
  viewed_at: Date | null;

  @Column('timestamp', { nullable: true })
  responded_at: Date | null;

  @Column('timestamp')
  expires_at: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
