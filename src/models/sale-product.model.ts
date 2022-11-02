import { ApiProperty } from '@nestjs/swagger';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Operation } from './enums';
import { Product } from './product.model';
import { Sale } from './sale.model';

@Entity()
export class SaleProduct {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({ required: true, format: 'uuid' })
    id: string;

    @Column({ name: 'price' })
    @ApiProperty({ required: true, type: 'number', format: 'double' })
    price: number;

    @Column({ name: 'product_count' })
    @ApiProperty({ required: true, type: 'integer' })
    productCount: number;

    @Column({ name: 'selling_price' })
    @ApiProperty({ required: true, type: 'number', format: 'double' })
    sellingPrice: number;

    @Column({ name: 'operation', type: 'enum', enum: Operation})
    @ApiProperty({ required: true, enum: Operation})
    operation: Operation;

    @Column({ name: 'last_operation', type: 'enum', enum: Operation})
    @ApiProperty({ required: true, enum: Operation})
    lastOperation: Operation;

    @Column({ name: 'product_id' })
    @ApiProperty({ required: true, format: 'uuid' })
    productId: string;

    @Column({ name: 'sale_id' })
    @ApiProperty({ required: true, format: 'uuid' })
    saleId: string;

    @ManyToOne(() => Product, {
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'product_id' })
    product: Product;

    @ManyToOne(() => Sale, {
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'sale_id' })
    sale: Sale;
}
