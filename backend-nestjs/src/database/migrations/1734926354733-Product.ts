import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Product1734926354733 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'product',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true, // Tự động tăng
            generationStrategy: 'increment', // Cấu hình tăng tự động
          },
          {
            name: 'name',
            type: 'varchar',
            length: '250',
          },
          {
            name: 'code',
            type: 'varchar',
            isUnique: true,
            length: '50',
          },
          {
            name: 'price_in', // giá nhập vào
            type: 'decimal',
            precision: 15, // Số chữ số tối đa
            scale: 2, // Số chữ số sau dấu phẩy (ví dụ: 99999999.99)
          },
          {
            name: 'price_out', // giá bán ra
            type: 'decimal',
            precision: 15,
            scale: 2,
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['active', 'in_active'],
            default: `'active'`, // Đảm bảo giá trị mặc định là 'active'
          },
          {
            name: 'description',
            type: 'text',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('product');
  }
}
