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
  async findOne(id: number): Promise<CategoryEntity> {
    return await this.categotiesRepository.findOne({
      where: { id: id },
    });
  }
  async create(createCategoryDto: CreateCategoryDto): Promise<CategoryEntity> {
    const { name } = createCategoryDto;
    // Kiểm tra danh mục đã tồn tại chưa
    const existingCategory = await this.categotiesRepository.findOne({
      where: { name },
    });
    if (existingCategory) {
      throw new BadRequestException(`danh mục '${name}' đã tồn tại.`);
    }
    const newCategory = this.categotiesRepository.create({
      name,
    });

    return this.categotiesRepository.save(newCategory);
  }
  async update(
    id: string,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<string> {
    const category = await this.categotiesRepository.findOne({
      where: { id: Number(id) },
    });
    if (!category) {
      throw new NotFoundException(`Không tìm thấy danh mục với id: ${id}`);
    }
    Object.assign(category, updateCategoryDto);
    await this.categotiesRepository.save(category);
    return ` cập nhật danh mục:${id} thành công`;
  }

  async destroy(id: string): Promise<string> {
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
