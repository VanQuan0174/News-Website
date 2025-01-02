import { IsNotEmpty } from 'class-validator';

export class CreateTagBto {
  @IsNotEmpty()
  // @IsUnique() // Kiểm tra tính duy nhất
  name: string;
}
