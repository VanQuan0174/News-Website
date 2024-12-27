import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
  ValidationError,
} from '@nestjs/common';
import { ProductService } from '@/modules/services/cms-service/services/product.service';
import { Public } from '@/decorator/customize';
import { CreateProductDto } from '../dto/product/create-product';
import { UpdateProductDto } from '../dto/product/update-product';
@Controller('products')
@Public()
@UsePipes(
  new ValidationPipe({
    exceptionFactory(validationErrors: ValidationError[] = []) {
      // Đảm bảo trả về thông báo lỗi theo dạng yêu cầu
      const formattedErrors = validationErrors.reduce((acc, error) => {
        acc[error.property] = Object.values(error.constraints).join(', ');
        return acc;
      }, {});

      return new BadRequestException({ errors: formattedErrors });
    },
  }),
)
export class ProductsController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productService.findOne(id);
  }

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return await this.productService.create(createProductDto);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.destroy(id);
  }
}
