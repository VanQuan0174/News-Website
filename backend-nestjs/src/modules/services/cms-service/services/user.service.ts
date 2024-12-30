import { UserEntity } from '@/database/entities/user.entity';
import { CreateUserDto } from '@/modules/business/cms/dto/user/user-create';
import { UpdateUserDto } from '@/modules/business/cms/dto/user/user-update';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { hashPasswordHelper } from '@/helpers/util';
import { unlink } from 'fs/promises'; // Import phương thức để xóa file

//destroy : xóa
//create : thêm
//update : sửa

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity) // Tiêm User repository
    private usersRepository: Repository<UserEntity>,
  ) {}
  async findAll(): Promise<UserEntity[]> {
    return await this.usersRepository.find();
  }
  async findOne(id: number): Promise<UserEntity> {
    return await this.usersRepository.findOne({
      where: { id: id },
    });
  }

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const { username, image, email, password } = createUserDto;

    // Kiểm tra email đã tồn tại
    const isEmailExist = await this.usersRepository.findOneBy({ email });
    if (isEmailExist) {
      throw new BadRequestException(
        `Email đã tồn tại: ${email} - Vui lòng sử dụng email khác`,
      );
    }

    // Hash password
    const hashPassword = await hashPasswordHelper(password);

    // Tạo đối tượng UserEntity từ dữ liệu CreateUserDto
    const entity = this.usersRepository.create({
      username,
      email,
      password: hashPassword,
      image, // Có thể là null nếu không có ảnh
    });

    // Lưu đối tượng vào cơ sở dữ liệu và trả về kết quả đã lưu
    return this.usersRepository.save(entity);
  }
  async update(id: string, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    const user = await this.usersRepository.findOneBy({ id: Number(id) });
    if (!user) {
      throw new NotFoundException(`Không tìm thấy người dùng với ID: ${id}`);
    }
    Object.assign(user, updateUserDto); // Gán các giá trị từ DTO vào đối tượng người dùng

    // Lưu lại người dùng sau khi cập nhật
    return await this.usersRepository.save(user);
  }
  // xóa người dùng
  async destroy(id: string): Promise<UserEntity> {
    const user = await this.usersRepository.findOneBy({ id: Number(id) });
    if (!user) {
      throw new NotFoundException(`Không tìm thấy người dùng với ID: ${id}`);
    }
    // Kiểm tra và xóa ảnh nếu có
    if (user.image) {
      const imagePath = `./uploads/user/${user.image}`; // Đường dẫn tới file ảnh
      try {
        await unlink(imagePath); // Xóa file từ hệ thống
        console.log(`Ảnh đã được xóa: ${imagePath}`);
      } catch (error) {
        console.error(`Lỗi khi xóa ảnh: ${error.message}`);
      }
    }

    await this.usersRepository.delete(id); // Xóa người dùng
    return user;
  }
}