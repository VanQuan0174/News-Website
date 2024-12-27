import { ProductEntity } from '@/database/entities/product.entity';
import { CreateProductDto } from '@/modules/business/cms/dto/product/create-product';
import { UpdateProductDto } from '@/modules/business/cms/dto/product/update-product';

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
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity) // Tiêm User repository
    private productsRepository: Repository<ProductEntity>,
  ) {}
  async findAll(): Promise<ProductEntity[]> {
    return await this.productsRepository.find();
  }
  async findOne(id: number): Promise<ProductEntity> {
    return await this.productsRepository.findOne({
      where: { id: id },
    });
  }

  async create(createProductDto: CreateProductDto): Promise<ProductEntity> {
    const { name, code, price_in, price_out, description } = createProductDto;
    // Kiểm tra sản phẩm có tồn tại với mã sản phẩm (code)
    const existingProduct = await this.productsRepository.findOne({
      where: { code },
    });
    if (existingProduct) {
      throw new BadRequestException(`Sản phẩm với mã '${code}' đã tồn tại.`);
    }

    // Tạo một đối tượng sản phẩm mới
    const newProduct = this.productsRepository.create({
      name,
      code,
      price_in,
      price_out,
      description,
    });

    // Lưu vào cơ sở dữ liệu
    return this.productsRepository.save(newProduct);
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<ProductEntity> {
    const product = await this.productsRepository.findOne({
      where: { id: Number(id) },
    });
    if (!product) {
      throw new NotFoundException(`không tìm thấy sản phẩm với id: ${id}`);
    }
    // Cập nhật thông tin sản phẩm
    Object.assign(product, updateProductDto);

    // Lưu sản phẩm đã cập nhật
    return this.productsRepository.save(product);
  }

  async destroy(id: string): Promise<string> {
    const product = await this.productsRepository.findOne({
      where: { id: Number(id) },
    });
    if (!product) {
      throw new NotFoundException(`Không tìm thấy sản phẩm với ID: ${id}`);
    }
    await this.productsRepository.delete(id);
    return `Xóa thành công sản phẩm với id ${id}`;
  }
}
