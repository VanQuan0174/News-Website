import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class BlogTag1735785363756 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Tạo bảng `blog_tag`
    await queryRunner.createTable(
      new Table({
        name: 'blog_tag',
        columns: [
          {
            name: 'blogId',
            type: 'int',
          },
          {
            name: 'tagId',
            type: 'int',
          },
        ],
        // Thiết lập khóa chính tổng hợp
        uniques: [
          {
            columnNames: ['blogId', 'tagId'],
          },
        ],
      }),
    );

    // Thêm khóa ngoại cho `blogId` (liên kết đến bảng `blogs`)
    await queryRunner.createForeignKey(
      'blog_tag',
      new TableForeignKey({
        columnNames: ['blogId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'blogs',
        onDelete: 'CASCADE', // Xóa liên kết khi bài viết bị xóa
      }),
    );

    // Thêm khóa ngoại cho `tagId` (liên kết đến bảng `tags`)
    await queryRunner.createForeignKey(
      'blog_tag',
      new TableForeignKey({
        columnNames: ['tagId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tags',
        onDelete: 'CASCADE', // Xóa liên kết khi tag bị xóa
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Xóa bảng `blog_tag`
    await queryRunner.dropTable('blog_tag');
  }
}
