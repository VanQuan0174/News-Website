import { IsNotEmpty, IsOptional } from 'class-validator';
import { VALIDATIONS } from '@/modules/business/cms/types/validations';

export class CreateUserDto {
  @IsNotEmpty({ message: VALIDATIONS.USER.USER_NAME_REQUIRED })
  username: string;

  @IsOptional()
  image: string; // Trường ảnh, nếu có

  @IsNotEmpty({ message: VALIDATIONS.USER.EMAIL_REQUIRED })
  email: string;

  @IsNotEmpty({ message: VALIDATIONS.USER.PASSWORD_REQUIRED })
  password: string;
}
