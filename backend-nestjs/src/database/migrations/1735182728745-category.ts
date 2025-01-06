import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class Category1735182728745 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'category',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'parent_id',
            type: 'int',
            isNullable: true, // parent_id có thể null (cho danh mục cấp cao nhất)
          },
        ],
      }),
    );

    // Thêm khóa ngoại cho parent_id
    await queryRunner.createForeignKey(
      'category',
      new TableForeignKey({
        columnNames: ['parent_id'], // Cột trong bảng category
        referencedColumnNames: ['id'], // Tham chiếu tới cột id trong cùng bảng
        referencedTableName: 'category',
        onDelete: 'SET NULL', // Nếu danh mục cha bị xóa, parent_id sẽ được set NULL
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('category');
  }
}
