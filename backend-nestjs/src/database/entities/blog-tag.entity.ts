import {
  BaseEntity,
  Entity,
  PrimaryColumn,
} from 'typeorm';

export const TABLE_BLOG_TAG = 'blog_tag';

@Entity(TABLE_BLOG_TAG)
export class BlogTagEntity extends BaseEntity {
  // Khóa chính đầu tiên: blogId
  @PrimaryColumn({ type: 'int' })
  blogId: number;

  // Khóa chính thứ hai: tagId
  @PrimaryColumn({ type: 'int' })
  tagId: number;

  // // Quan hệ với BlogEntity
  // @ManyToOne(() => BlogEntity, (blog) => blog.blogTags, { eager: true })
  // @JoinColumn({ name: 'blogId' })
  // blog: BlogEntity;

  // // Quan hệ với TagEntity
  // @ManyToOne(() => TagEntity, (tag) => tag.blogTags, { eager: true })
  // @JoinColumn({ name: 'tagId' })
  // tag: TagEntity;
}
