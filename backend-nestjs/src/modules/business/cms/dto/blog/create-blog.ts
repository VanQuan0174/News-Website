import {
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { VALIDATIONS } from '@/modules/business/cms/types/validations';
// import { BlogType } from '@/database/entities/blog.entity';
import { Type } from 'class-transformer';

export class CreateBlogDto {
  @IsInt()
  @Type(() => Number) // Chuyển đổi dữ liệu đầu vào thành số
  @IsNotEmpty()
  categoryId: number; // ID của danh mục

  @IsNotEmpty({ message: VALIDATIONS.BLOG.TITLE_REQUIRED })
  title: string;

  @IsNotEmpty({ message: VALIDATIONS.BLOG.SUMMARY_REQUIRED })
  summary: string;

  @IsNotEmpty({ message: VALIDATIONS.BLOG.CONTENT_REQUIRED })
  content: string;

  @IsNotEmpty({ message: VALIDATIONS.BLOG.AUTHOR_REQUIRED })
  author: string;

  @IsNotEmpty({ message: VALIDATIONS.BLOG.SOURCE_REQUIRED })
  source: string;

  @IsOptional()
  image: string; // ảnh, nếu có

  // @IsEnum(BlogType)
  // @IsNotEmpty({ message: VALIDATIONS.BLOG.TYPE_REQUIRED })
  // type: BlogType;

  @IsInt()
  @Type(() => Number)
  @IsNotEmpty({ message: VALIDATIONS.BLOG.PRIORITY_REQUIRED })
  priority: number; // mức độ ưu tiên

  @IsOptional() // Chỉ cần nếu có tagIds trong body
  tagIds: number[];
}
