import { BlogTagEntity } from '@/database/entities/blog-tag.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class BlogTagService {
  constructor(
    @InjectRepository(BlogTagEntity) // Inject repository
    private blogTagRepository: Repository<BlogTagEntity>,
  ) {}

  async addTagsToBlog(blogId: number, tagIds: number[]): Promise<void> {
    if (!Array.isArray(tagIds)) {
      throw new Error('tagIds is not an array');
    }

    const blogTags = tagIds.map((tagId) => {
      return this.blogTagRepository.create({
        blogId,
        tagId,
      });
    });

    await this.blogTagRepository.save(blogTags);
  }
}
