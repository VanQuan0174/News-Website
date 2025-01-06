import { UserEntity } from '@/database/entities/user.entity';
import { CreateAuthDto } from '@/modules/business/cms/dto/auth/auth-create';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { comparePasswordHelper, hashPasswordHelper } from '@/helpers/util';
import { JwtService } from '@nestjs/jwt';

export class AuthService {
  constructor(
    @InjectRepository(UserEntity) // Tiêm User repository
    private usersRepository: Repository<UserEntity>,
    private jwtService: JwtService,
  ) {}
  async validateUser(email: string, password: string): Promise<any> {
    // Tìm người dùng theo email
    const user = await this.usersRepository.findOne({ where: { email } });

    // Nếu không tìm thấy user trả về null
    if (!user) return null;

    // So sánh mật khẩu nhập vào với hash lưu trong cơ sở dữ liệu
    const isPassword = await comparePasswordHelper(password, user.password);

    // Nếu mật khẩu không hợp lệ, trả về null
    if (!isPassword) return null;

    return user;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async handleRegister(registerDto: CreateAuthDto): Promise<UserEntity> {
    const { email, password } = registerDto;

    // Kiểm tra email đã tồn tại
    const isEmail = await this.usersRepository.findOneBy({ email });
    if (isEmail) {
      //throw: Từ khóa này được sử dụng để ném ra một ngoại lệ, làm dừng quá trình thực thi của hàm hiện tại và chuyển đến xử lý lỗi.
      //BadRequestException: Đây là một lớp ngoại lệ do NestJS cung cấp, tương ứng với mã trạng thái HTTP 400 (Bad Request)
      throw new BadRequestException(
        `Email đã tồn tại : ${email} - Vui lòng sử dụng email khác`,
      );
    }
    // hash password
    const hashPassword = await hashPasswordHelper(password);

    // Khởi tạo đối tượng UserEntity từ dữ liệu của CreateUserDto
    const entity = this.usersRepository.create({
      email,
      password: hashPassword,
    });

    // Lưu đối tượng vào cơ sở dữ liệu và trả về kết quả đã lưu
    return await this.usersRepository.save(entity);
  }
}

// async login(loginDto: LoginDto): Promise<any> {
//   const { email, password } = loginDto;

//   // Tìm người dùng theo email
//   const user = await this.usersRepository.findOne({ where: { email } });
//   if (!user) {
//     throw new BadRequestException(`Email không tồn tại`);
//   }
//   //So sánh mật khẩu nhập vào với hash lưu trong cơ sở dữ liệu
//   const isPassword = await comparePasswordHelper(password, user.password);
//   if (!isPassword) {
//     return { message: 'Mật khẩu không chính xác', statusCode: 404 };
//   }

//   const payload = { sub: user.id, username: user.username };
//   return {
//     access_token: await this.jwtService.signAsync(payload),
//   };
// }
