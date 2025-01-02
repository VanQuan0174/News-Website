import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BlogEntity } from './blog.entity';

export const TABLE_TAGS = 'tag'; // Sửa tên biến để đúng chính tả

@Entity(TABLE_TAGS)
export class TagEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true }) // Đảm bảo tên tag là duy nhất
  name: string;

  @ManyToMany(() => BlogEntity, (blog) => blog.tags) // Đảm bảo mối quan hệ với `tags` trong `BlogEntity`
  blogs: BlogEntity[]; // Mối quan hệ với blogs
}
