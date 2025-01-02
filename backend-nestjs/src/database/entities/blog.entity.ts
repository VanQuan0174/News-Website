import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { CategoryEntity } from './category.entity';
import { TagEntity } from './tag.entity';

export const TABLE_BLOGS = 'blog';
@Entity(TABLE_BLOGS)
export class BlogEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // Quan hệ nhiều - một (Nhiều bài viết có chung 1 danh mục)
  @ManyToOne(() => CategoryEntity, (category) => category.blogs)
  @JoinColumn({ name: 'categoryId' }) // Chỉ định chính xác tên cột
  category: CategoryEntity;

  @ManyToMany(() => TagEntity, (tag) => tag.blogs) // Sử dụng đúng mối quan hệ "blogs"
  @JoinTable({
    name: 'blog_tag', // Bảng trung gian giữa Blog và Tag
    joinColumn: { name: 'blogId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'tagId', referencedColumnName: 'id' },
  })
  tags: TagEntity[]; // Quan hệ với tags

  @Column() // danh mục bìa viết
  categoryId: number;

  @Column() // tiêu đề của bài viết
  title: string;

  @Column() // tóm tắt bài viết
  summary: string;

  @Column('longtext')
  content: string; // nội dung bài viết

  @Column({ nullable: true, default: null })
  image: string; // ảnh đại diện cho bài viết

  @Column({ type: 'int' })
  priority: number; // mức độ ưu tiên của bài viết

  @Column() // tác giả bài viết
  author: string;

  @Column() // nguồn bài viết
  source: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;
}
