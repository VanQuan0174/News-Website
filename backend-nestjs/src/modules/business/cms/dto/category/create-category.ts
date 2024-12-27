import { IsNotEmpty } from 'class-validator';
import { VALIDATIONS } from '@/modules/business/cms/types/validations';

export class CreateCategoryDto {
  @IsNotEmpty({ message: VALIDATIONS.CATEGORY.NAME_REQUIRED })
  name: string;
}
