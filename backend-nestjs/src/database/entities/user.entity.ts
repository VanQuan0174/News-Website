import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

export const TABLE_USERS = 'user';
@Entity(TABLE_USERS)
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ nullable: true, default: null })
  image: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  refresh_token?: string;

  @Column({
    type: 'enum',
    enum: ['active', 'in_active'],
    default: 'active', // Đảm bảo giá trị mặc định là 'active' (chuỗi)
  })
  status: 'active' | 'in_active';

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;
}
