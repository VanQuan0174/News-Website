import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { BlogEntity } from './blog.entity';

export const TABLE_CATEGORIS = 'category';
@Entity(TABLE_CATEGORIS)
export class CategoryEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // Quan hệ một - nhiều (Một danh mục có thể có nhiều bài viết)
  @OneToMany(() => BlogEntity, (blog) => blog.category)
  blogs: BlogEntity[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;
}
