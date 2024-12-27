import { IsNotEmpty } from 'class-validator';
import { VALIDATIONS } from '@/modules/business/cms/types/validations';

export class UpdateUserDto {
  id: string;

  @IsNotEmpty({ message: VALIDATIONS.USER.USER_NAME_REQUIRED })
  username: string;

  // @IsNotEmpty({ message: VALIDATIONS.USER.EMAIL_REQUIRED })
  // email: string;

  // @IsNotEmpty({ message: VALIDATIONS.USER.PASSWORD_REQUIRED })
  // password: string;
}
