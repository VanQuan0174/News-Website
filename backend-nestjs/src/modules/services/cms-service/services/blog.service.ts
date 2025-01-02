import { BlogEntity } from '@/database/entities/blog.entity';
import { CategoryEntity } from '@/database/entities/category.entity';
import { CreateBlogDto } from '@/modules/business/cms/dto/blog/create-blog';
import { UpdateBlogDto } from '@/modules/business/cms/dto/blog/update-blog';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { unlink } from 'fs/promises'; // Import phương thức để xóa file

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
    // Tìm CategoryEntity dựa trên categoryId
    const category = await this.categotiesRepository.findOne({
      where: { id: Number(createBlogDto.categoryId) },
    });

    if (!category) {
      throw new NotFoundException('Danh mục không tồn tại');
    }

    // Tạo mới BlogEntity và gán đối tượng category vào blog
    const newBlog = this.blogsRepository.create({
      ...createBlogDto, // Gán tất cả các trường từ createBlogDto
    });

    // Lưu BlogEntity vào cơ sở dữ liệu
    return this.blogsRepository.save(newBlog);
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
    const { categoryId, title, summary, content, image, priority } =
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
