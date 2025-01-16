import { BlogEntity } from '@/database/entities/blog.entity';
import { CategoryEntity } from '@/database/entities/category.entity';
import { CreateBlogDto } from '@/modules/business/cms/dto/blog/create-blog';
import { UpdateBlogDto } from '@/modules/business/cms/dto/blog/update-blog';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { unlink } from 'fs/promises'; // Import phương thức để xóa file
import { BlogTagEntity } from '@/database/entities/blog-tag.entity';
import { TagEntity } from '@/database/entities/tag.entity';
import { BlogTagService } from './blog-tag.service';

export class BlogsService {
  constructor(
    @InjectRepository(BlogEntity) // Tiêm User repository
    private blogsRepository: Repository<BlogEntity>,

    @InjectRepository(CategoryEntity)
    private categotiesRepository: Repository<CategoryEntity>,

    @InjectRepository(BlogTagEntity)
    private blogTagRepository: Repository<BlogTagEntity>,

    @InjectRepository(TagEntity)
    private tagRepository: Repository<TagEntity>,

    private blogTagService: BlogTagService,
  ) {}

  async findAll(): Promise<BlogEntity[]> {
    return await this.blogsRepository.find();
  }

  async findOne(id: number): Promise<BlogEntity> {
    return await this.blogsRepository.findOne({
      where: { id: id },
    });
  }

  async create(
    createBlogDto: CreateBlogDto,
    tagIds: number[],
  ): Promise<BlogEntity> {
    const category = await this.categotiesRepository.findOne({
      where: { id: Number(createBlogDto.categoryId) },
    });

    if (!category) {
      throw new NotFoundException('Danh mục không tồn tại');
    }

    const newBlog = this.blogsRepository.create({
      ...createBlogDto,
    });
    const savedBlog = await this.blogsRepository.save(newBlog);

    // Kiểm tra xem tagIds có tồn tại trong bảng tag không
    if (tagIds && tagIds.length > 0) {
      const tags = await this.tagRepository.findByIds(tagIds);

      if (tags.length !== tagIds.length) {
        throw new NotFoundException('Một số tag không tồn tại');
      }

      await this.blogTagService.addTagsToBlog(savedBlog.id, tagIds);
    }

    return savedBlog;
  }

  async destroy(id: number): Promise<string> {
    const blog = await this.blogsRepository.findOne({
      where: { id: Number(id) },
    });

    if (!blog) {
      throw new BadRequestException(`Không tìm thấy bài viết với id: ${id}`);
    }

    // Xóa ảnh đại diện nếu có
    if (blog.image) {
      const imagePath = `./uploads/blog/${blog.image}`;
      try {
        await unlink(imagePath);
        console.log(`Ảnh đại diện đã được xóa: ${imagePath}`);
      } catch (error) {
        console.error(
          `Lỗi khi xóa ảnh đại diện: ${imagePath} - ${error.message}`,
        );
      }
    }

    // Xóa các ảnh trong nội dung bài viết
    const imagePaths = this.extractImagePaths(blog.content); // Hàm trích xuất các đường dẫn ảnh trong nội dung
    for (const imagePath of imagePaths) {
      const absolutePath =
        './' + imagePath.replace('http://localhost:8080/', ''); // Chuyển đổi URL trực tiếp
      try {
        await unlink(absolutePath); // Xóa file
        console.log(`Ảnh trong nội dung bài viết đã được xóa: ${absolutePath}`);
      } catch (error) {
        if (error.code === 'ENOENT') {
          console.warn(`File không tồn tại, bỏ qua: ${absolutePath}`);
        } else {
          console.error(
            `Lỗi khi xóa ảnh trong nội dung: ${absolutePath} - ${error.message}`,
          );
        }
      }
    }

    // Xóa bài viết
    await this.blogsRepository.delete(id);
    return `Xóa thành công bài viết với id: ${id}`;
  }

  // Trích xuất các đường dẫn ảnh từ nội dung HTML
  private extractImagePaths(content: string): string[] {
    const imageUrls: string[] = [];
    const regex = /<img[^>]+src="([^">]+)"/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
      imageUrls.push(match[1]);
    }
    return imageUrls;
  }

  async update(id: number, updateBlogDto: UpdateBlogDto): Promise<BlogEntity> {
    // Kiểm tra blog có tồn tại không
    const blog = await this.blogsRepository.findOne({ where: { id } });
    if (!blog) {
      throw new NotFoundException(`Blog với ID ${id} không tồn tại`);
    }

    // // Nếu có categoryId, kiểm tra danh mục tồn tại
    // if (categoryId) {
    //   const category = await this.categotiesRepository.findOne({
    //     where: { id: categoryId },
    //   });
    //   if (!category) {
    //     throw new NotFoundException(
    //       `Danh mục với ID ${categoryId} không tồn tại`,
    //     );
    //   }
    //   blog.category = category;
    // }

    // Cập nhật các trường khác

    Object.assign(blog, updateBlogDto);
    return this.blogsRepository.save(blog);
  }

  async findBlogsByCategory (categoryId: number): Promise<BlogEntity[]> {
    return this.blogsRepository.find({
      where: { categoryId: categoryId },
      order: {
        priority: 'ASC',
      },
    });
  }

  // Hàm lấy tất cả danh mục con (đệ quy nếu cần)
  async findCategoryWithChildren(categoryId: number): Promise<number[]> {
    const categories = await this.categotiesRepository.find();
    const categoryMap = new Map<number, number[]>();

    // Tạo danh sách danh mục cha-con
    categories.forEach((category) => {
      const parentId = category.parent_id || 0;
      if (!categoryMap.has(parentId)) {
        categoryMap.set(parentId, []);
      }
      categoryMap.get(parentId).push(category.id);
    });

    // Đệ quy tìm danh mục con
    const findChildren = (id: number): number[] => {
      const children = categoryMap.get(id) || [];
      return children.reduce((acc, childId) => {
        return acc.concat(findChildren(childId));
      }, children);
    };

    return [categoryId, ...findChildren(categoryId)];
  }

  // Hàm lấy bài viết theo danh sách ID danh mục
  async findBlogsByCategories(categoryIds: number[]): Promise<BlogEntity[]> {
    return this.blogsRepository.find({
      where: { categoryId: In(categoryIds) },
      order: {
        priority: 'ASC',
      },
    });
  }

  // Kết hợp: Lấy bài viết theo danh mục cha
  async findBlogsByParentCategory(
    parentCategoryId: number,
  ): Promise<BlogEntity[]> {
    const categoryIds = await this.findCategoryWithChildren(parentCategoryId);
    return this.findBlogsByCategories(categoryIds);
  }
}
