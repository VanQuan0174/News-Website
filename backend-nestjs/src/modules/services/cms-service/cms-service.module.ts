import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '@/database/entities/user.entity';
import { UsersService } from './services/user.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './services/auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from '../../../auth/passport/local.strategy';
import { JwtStrategy } from '@/auth/passport/jwt.strategy';
import { CategoriesService } from './services/category.service';
import { CategoryEntity } from '@/database/entities/category.entity';
import { BlogEntity } from '@/database/entities/blog.entity';
import { BlogsService } from './services/blog.service';
import { TagEntity } from '@/database/entities/tag.entity';
import { TagsService } from './services/tag.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      CategoryEntity,
      BlogEntity,
      TagEntity,
    ]),
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        global: true,
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: configService.get<string>('JWT_ACCESS_TOKEN_EXPIRED'),
        },
      }),
      inject: [ConfigService],
    }),
    PassportModule,
  ],
  providers: [
    AuthService,
    UsersService,
    LocalStrategy,
    JwtStrategy,
    CategoriesService,
    BlogsService,
    TagsService,
  ],
  exports: [
    AuthService,
    UsersService,
    CategoriesService,
    BlogsService,
    TagsService,
  ],
})
export class CmsServiceModule {}
