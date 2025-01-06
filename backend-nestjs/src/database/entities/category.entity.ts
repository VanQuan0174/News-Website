import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { BlogEntity } from './blog.entity';

export const TABLE_CATEGORIS = 'category';
@Entity(TABLE_CATEGORIS)
export class CategoryEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // Đảm bảo parent_id có thể là null
  @Column({ type: 'int', nullable: true })
  parent_id: number | null;

  // // Quan hệ nhiều - một (Danh mục con tham chiếu danh mục cha)
  // @ManyToOne(() => CategoryEntity, (category) => category.children, {
  //   nullable: true,
  // })
  // parent: CategoryEntity;

  // // Quan hệ một - nhiều (Danh mục cha có thể có nhiều danh mục con)
  // @OneToMany(() => CategoryEntity, (category) => category.parent)
  // children: CategoryEntity[];

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
