import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['src/database/entities/*.entity{.ts,.js}'], // Sử dụng đường dẫn tương đối
  migrations: ['src/database/migrations/*{.ts,.js}'],
  synchronize: false,
});
