import { BlogEntity } from '@/database/entities/blog.entity';
import { CategoryEntity } from '@/database/entities/category.entity';
import { CreateBlogDto } from '@/modules/business/cms/dto/blog/create-blog';
import { UpdateBlogDto } from '@/modules/business/cms/dto/blog/update-blog';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class BlogsService {
  constructor(
    @InjectRepository(BlogEntity) // Tiêm User repository
    private blogsRepository: Repository<BlogEntity>,

    @InjectRepository(CategoryEntity)
    private categotiesRepository: Repository<CategoryEntity>,
  ) {}

  async findAll(): Promise<BlogEntity[]> {
    return await this.blogsRepository.find();
  }

  async findOne(id: number): Promise<BlogEntity> {
    return await this.blogsRepository.findOne({
      where: { id: id },
    });
  }

  async create(createBlogDto: CreateBlogDto): Promise<BlogEntity> {
    const { categoryId, title, summary, content, image, type, priority } =
      createBlogDto;

    // Tìm CategoryEntity dựa trên categoryId
    const category = await this.categotiesRepository.findOne({
      where: { id: Number(categoryId) },
    });
    if (!category) {
      throw new NotFoundException('Danh mục không tồn tại'); // Thêm xử lý lỗi nếu danh mục không tồn tại
    }

    // Tạo mới BlogEntity
    const newBlog = this.blogsRepository.create({
      title,
      summary,
      content,
      image,
      type,
      priority,
      categoryId, // Gán toàn bộ đối tượng category vào blog
    });

    // Lưu BlogEntity vào cơ sở dữ liệu
    return this.blogsRepository.save(newBlog);
  }

  async destroy(id: number): Promise<string> {
    const blog = await this.blogsRepository.findOne({
      where: { id: Number(id) },
    });
    if (!blog) {
      throw new BadRequestException(` không tìm thấy bài viết với id: ${id}`);
    }
    await this.blogsRepository.delete(id);
    return `Xóa thành công bài viết id: ${id}`;
  }

  async update(id: number, updateBlogDto: UpdateBlogDto): Promise<BlogEntity> {
    const { categoryId, title, summary, content, image, type, priority } =
      updateBlogDto;

    // Kiểm tra blog có tồn tại không
    const blog = await this.blogsRepository.findOne({ where: { id } });
    if (!blog) {
      throw new NotFoundException(`Blog với ID ${id} không tồn tại`);
    }

    // Nếu có categoryId, kiểm tra danh mục tồn tại
    if (categoryId) {
      const category = await this.categotiesRepository.findOne({
        where: { id: categoryId },
      });
      if (!category) {
        throw new NotFoundException(
          `Danh mục với ID ${categoryId} không tồn tại`,
        );
      }
      blog.category = category;
    }

    // Cập nhật các trường khác

    Object.assign(blog, updateBlogDto);
    return this.blogsRepository.save(blog);
  }
}
