import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express'; // Import từ @nestjs/platform-express
import { join } from 'path'; // Import để xử lý đường dẫn tĩnh

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule); // Sử dụng NestExpressApplication

  // Kích hoạt ValidationPipe
  app.useGlobalPipes(
    new ValidationPipe({
      // Cấu hình ValidationPipe
      whitelist: true, // Loại bỏ các thuộc tính không nằm trong DTO
      forbidNonWhitelisted: true, // Ngăn chặn các thuộc tính không nằm trong DTO
      transform: true, // Tự động chuyển đổi kiểu dữ liệu
    }),
  );

  // Cấu hình CORS kết nối với front-end
  app.enableCors();

  // Thiết lập global prefix cho toàn bộ API
  app.setGlobalPrefix('api', { exclude: [''] });

  // Cấu hình để phục vụ tệp tĩnh từ thư mục "uploads"
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads', // URL để truy cập tệp, ví dụ: http://localhost:8080/uploads/filename.png
  });
  // Thiết lập cổng từ biến môi trường hoặc giá trị mặc định là 8080
  const port = process.env.PORT ?? 8080;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}/api`);

  // Hot module replacement (HMR) để reload ứng dụng khi code thay đổi
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
