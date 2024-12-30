import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { CategoryEntity } from './category.entity';

export enum BlogType {
  BLOG = 'Blog',
  TIN_TUC = 'Tin tức',
  HUONG_DAN = 'Hướng dẫn',
  DANH_GIA = 'Đánh giá',
}

export const TABLE_BLOGS = 'blog';
@Entity(TABLE_BLOGS)
export class BlogEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // Quan hệ nhiều - một (Nhiều bài viết có chung 1 danh mục)
  @ManyToOne(() => CategoryEntity, (category) => category.blogs)
  @JoinColumn({ name: 'categoryId' }) // Chỉ định chính xác tên cột
  category: CategoryEntity;

  @Column()
  categoryId: number;

  @Column()
  title: string;

  @Column()
  summary: string;

  @Column('longtext')
  content: string;

  @Column({ nullable: true, default: null })
  image: string;

  @Column({
    type: 'enum', // Định nghĩa kiểu enum cho cột type
    enum: BlogType, // Liệt kê các giá trị hợp lệ cho enum
    default: BlogType.BLOG, // Mặc định là 'Blog' nếu không có giá trị
  })
  type: string;

  @Column({ type: 'int' })
  priority: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;
}
