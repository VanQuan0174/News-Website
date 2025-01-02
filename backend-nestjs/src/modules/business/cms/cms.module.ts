import { Module } from '@nestjs/common';
import { UsersController } from './controller/user.controller';
import { AuthController } from './controller/auth.controller';
import { CmsServiceModule } from '@/modules/services/cms-service/cms-service.module';
import { CategoriesController } from './controller/category.controller';
import { BlogsController } from './controller/blog.controller';
import { TagsController } from './controller/tag.controller';

@Module({
  imports: [CmsServiceModule],
  controllers: [
    UsersController,
    AuthController,
    CategoriesController,
    BlogsController,
    TagsController
  ], // Khai báo các controller sử dụng trong CmsModule
})
export class CmsModule {}
