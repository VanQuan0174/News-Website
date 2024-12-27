import { IsNotEmpty, IsNumber } from 'class-validator';
import { VALIDATIONS } from '@/modules/business/cms/types/validations';

export class UpdateProductDto {
  @IsNotEmpty({ message: VALIDATIONS.PRODUCT.NAME_REQUIRED })
  name: string;

  @IsNotEmpty({ message: VALIDATIONS.PRODUCT.CODE_REQUIRED })
  code: string;

  @IsNotEmpty({ message: VALIDATIONS.PRODUCT.PRICE_IN_REQUIRED })
  price_in: number;

  @IsNotEmpty({ message: VALIDATIONS.PRODUCT.PRICE_OUT_REQUIRED })
  price_out: number;

  @IsNotEmpty({ message: VALIDATIONS.PRODUCT.DESCRIPTION_REQUIRED })
  description: string;
}
