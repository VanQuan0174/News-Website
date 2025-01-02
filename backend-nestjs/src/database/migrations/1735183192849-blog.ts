import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class Blog1735183192849 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'blog',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'categoryId', // danh mục
            type: 'int',
          },
          {
            name: 'title',
            type: 'varchar',
            length: '250',
          },
          {
            name: 'summary', //tóm tắt
            type: 'varchar',
            length: '500',
          },
          {
            name: 'content',
            type: 'longtext',
          },
          {
            name: 'image',
            type: 'varchar',
            length: '250',
          },
          // {
          //   name: 'type', // loại bài viết
          //   type: 'enum',
          //   enum: ['Blog', 'Tin tức', 'Hướng dẫn', 'Đánh giá'],
          //   default: `'Blog'`,
          // },
          {
            name: 'priority', // mức độ ưu tiên
            type: 'int',
          },
          {
            name: 'author', // tác giả bài viết
            type: 'varchar',
            length: '250',
          },
          {
            name: 'source', // nguồn bài viết
            type: 'varchar',
            length: '250',
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
    // Thêm khóa ngoại
    await queryRunner.createForeignKey(
      'blog',
      new TableForeignKey({
        columnNames: ['categoryId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'category',
        onDelete: 'CASCADE', // Xử lý khi xóa dữ liệu
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Xóa khóa ngoại
    const table = await queryRunner.getTable('blog');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('categoryId') !== -1,
    );
    await queryRunner.dropForeignKey('blog', foreignKey);

    // Xóa bảng
    await queryRunner.dropTable('blog');
  }
}
