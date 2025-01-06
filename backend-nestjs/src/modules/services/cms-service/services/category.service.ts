import { CategoryEntity } from '@/database/entities/category.entity';
import { CreateCategoryDto } from '@/modules/business/cms/dto/category/create-category';
import { UpdateCategoryDto } from '@/modules/business/cms/dto/category/update-category';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
//destroy : xóa
//create : thêm
//update : sửa
@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoryEntity) // Tiêm User repository
    private categotiesRepository: Repository<CategoryEntity>,
  ) {}
  async findAll(): Promise<CategoryEntity[]> {
    return await this.categotiesRepository.find();
  }

  // Hàm lấy tất cả danh mục và xây dựng cấu trúc cây
  async menu(): Promise<CategoryEntity[]> {
    // 1. Lấy tất cả danh mục từ cơ sở dữ liệu
    const categories = await this.categotiesRepository.find({
      relations: ['children'], // Đảm bảo lấy cả các danh mục con
    });

    // 2. Xây dựng cấu trúc cây từ các danh mục
    return this.buildCategoryTree(categories);
  }

  // Hàm đệ quy để xây dựng cấu trúc cây
  private buildCategoryTree(categories: CategoryEntity[]): CategoryEntity[] {
    // Mảng chứa các danh mục gốc (parent_id === null)
    const tree: CategoryEntity[] = [];

    // Dùng một bản đồ (map) để tra cứu nhanh các danh mục theo id
    const categoryMap: { [key: number]: CategoryEntity } = {};

    // Tạo bản đồ các danh mục
    categories.forEach((category) => {
      categoryMap[category.id] = category;
      category.children = []; // Khởi tạo mảng children
    });

    // Xây dựng cây danh mục bằng cách lặp qua danh sách danh mục
    categories.forEach((category) => {
      if (category.parent_id === null) {
        // Nếu không có parent_id, đây là danh mục gốc
        tree.push(category);
      } else {
        // Nếu có parent_id, tìm danh mục cha và thêm vào danh sách con
        const parentCategory = categoryMap[category.parent_id];
        if (parentCategory) {
          parentCategory.children.push(category);
        }
      }
    });

    return tree; // Trả về cây danh mục
  }

  async findOne(id: number): Promise<CategoryEntity> {
    return await this.categotiesRepository.findOne({
      where: { id: id },
    });
  }
  async create(createCategoryDto: CreateCategoryDto): Promise<CategoryEntity> {
    // Kiểm tra danh mục đã tồn tại
    const existingCategory = await this.categotiesRepository.findOneBy({
      name: createCategoryDto.name.trim(), // Trim để tránh lỗi nhập khoảng trắng dư thừa
    });

    if (existingCategory) {
      throw new BadRequestException(
        `Danh mục '${createCategoryDto.name}' đã tồn tại.`,
      );
    }

    let parentCategory: CategoryEntity | null = null;
    if (createCategoryDto.parent_id) {
      parentCategory = await this.categotiesRepository.findOneBy({
        id: createCategoryDto.parent_id,
      });

      if (!parentCategory) {
        throw new BadRequestException('Danh mục cha không tồn tại.');
      }
    }

    // Tạo và lưu danh mục mới
    const newCategory = this.categotiesRepository.create(createCategoryDto);
    return await this.categotiesRepository.save(newCategory);
  }
  async update(
    id: number,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<string> {
    // Kiểm tra danh mục có tồn tại không
    const category = await this.categotiesRepository.findOneBy({
      id: Number(id),
    });

    if (!category) {
      throw new NotFoundException(`Không tìm thấy danh mục với id: ${id}`);
    }

    // Cập nhật thông tin danh mục
    Object.assign(category, updateCategoryDto);

    // Lưu thay đổi vào cơ sở dữ liệu
    await this.categotiesRepository.save(category);

    return `Cập nhật danh mục với id: ${id} thành công.`;
  }

  async destroy(id: number): Promise<string> {
    const category = await this.categotiesRepository.findOne({
      where: { id: Number(id) },
    });
    if (!category) {
      throw new NotFoundException(`Không tìm thấy danh mục với id là ${id}`);
    }
    // Xóa danh mục khỏi cơ sở dữ liệu
    await this.categotiesRepository.delete(id);

    return `Xóa thành công danh mục : ${category.name}`;
  }
}
