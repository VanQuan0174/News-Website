import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { UsersService } from '@/modules/services/cms-service/services/user.service';
import { CreateUserDto } from '../dto/user/user-create';
import { UpdateUserDto } from '../dto/user/user-update';
import { Public } from '@/decorator/customize';

import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid'; // Để tạo tên tệp duy nhất
@Controller('users')
@Public()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(+id);
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads/user', // Nơi lưu trữ ảnh
        filename: (req, file, callback) => {
          const filename = `${uuidv4()}-${file.originalname}`;
          callback(null, filename); // Lưu ảnh với tên duy nhất
        },
      }),
    }),
  )
  async create(
    @Body() createUserDto: CreateUserDto,
    @UploadedFile() file: Express.Multer.File, // Nhận tệp ảnh
  ) {
    // Nếu có tệp ảnh, lưu tên tệp vào DTO
    if (file) {
      createUserDto.image = file.filename;
    }

    return this.usersService.create(createUserDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.destroy(id);
  }
}
