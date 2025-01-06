import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';
import { VALIDATIONS } from '@/modules/business/cms/types/validations';

export class CreateCategoryDto {
  @IsNotEmpty({ message: VALIDATIONS.CATEGORY.NAME_REQUIRED })
  name: string;

  @IsOptional()
  parent_id: number;
}
