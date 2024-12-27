import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class User1730365702911 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true, // Tự động tăng
            generationStrategy: 'increment', // Cấu hình tăng tự động
          },
          {
            name: 'username',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'image',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true, // Đảm bảo email là duy nhất
            length: '255',
          },
          {
            name: 'password',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'refresh_token',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['active', 'in_active'],
            default: `'active'`, // Đảm bảo giá trị mặc định là 'active'
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
    await queryRunner.dropTable('user');
  }
}
