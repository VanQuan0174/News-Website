import { Public } from '@/decorator/customize';
import { BlogsService } from '@/modules/services/cms-service/services/blog.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CreateBlogDto } from '../dto/blog/create-blog';
import { UpdateBlogDto } from '../dto/blog/update-blog';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { v4 as uuidv4 } from 'uuid';
@Controller('blogs')
@Public()
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Get()
  findAll() {
    return this.blogsService.findAll();
  }

  @Get('id')
  findOne(@Param('id') id: number) {
    return this.blogsService.findOne(id);
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads/blog', // Nơi lưu trữ ảnh
        filename: (req, file, callback) => {
          const filename = `${uuidv4()}-${file.originalname}`;
          callback(null, filename); // Lưu ảnh với tên duy nhất
        },
      }),
    }),
  )
  async create(
    @Body() createBlogDto: CreateBlogDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (file) {
      createBlogDto.image = file.filename;
    }

    return await this.blogsService.create(createBlogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.blogsService.destroy(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateBlogDto: UpdateBlogDto) {
    return this.blogsService.update(id, updateBlogDto);
  }
}
