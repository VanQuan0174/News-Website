import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

export const TABLE_PRODUCTS = 'product';
@Entity(TABLE_PRODUCTS)
export class ProductEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 250 })
  name: string;

  @Column({ type: 'varchar', length: 50 })
  code: string;

  @Column({ type: 'decimal', precision: 15, scale: 2 })
  price_in: number;

  @Column({ type: 'decimal', precision: 15, scale: 2 })
  price_out: number;

  @Column({
    type: 'enum',
    enum: ['active', 'in_active'],
    default: 'active', // Đảm bảo giá trị mặc định là 'active' (chuỗi)
  })
  status: 'active' | 'in_active';

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;
}
