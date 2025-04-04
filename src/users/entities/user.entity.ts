import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';

@Entity({
  name: 'user',
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: String, unique: true, nullable: true })
  email: string | null;

  @Column({ type: String, unique: true, nullable: true })
  phone: string | null;

  @Index()
  @Column({ type: String, nullable: true })
  firstName: string | null;

  @Index()
  @Column({ type: String, nullable: true })
  lastName: string | null;

  @Column({ type: String, nullable: true })
  photo?: string | null;

  @Column({ type: String, nullable: true })
  role?: string | null;

  @Column({ type: String, nullable: true })
  status?: string;  // 'active', 'inactive', 'banned', 'pending', 'deleted'

  @Column({ type: String, unique: true, nullable: true })
  dob: string | null;

  @Column({ type: String, unique: true, nullable: true })
  gender: string | null;

  @Column({ type: String, unique: true, nullable: true })
  language: string | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
