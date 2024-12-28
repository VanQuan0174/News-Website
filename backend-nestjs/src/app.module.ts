import { Module } from '@nestjs/common';
import { CmsModule } from './modules/business/cms/cms.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './database/entities/user.entity';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { CategoryEntity } from './database/entities/category.entity';
import { BlogEntity } from './database/entities/blog.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'news-website-nestjs',
      entities: [UserEntity, CategoryEntity, BlogEntity],
      synchronize: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true, // Cho phép ConfigModule có thể được sử dụng toàn cục
    }),
    CmsModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
