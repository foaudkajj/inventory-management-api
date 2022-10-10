import { ApiProperty } from '@nestjs/swagger';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Branch } from './branch.model';
import { Color } from './color.model';
import { Merchant } from './merchant.model';
import { ProductType } from './product-type.model';
import { Unit } from './unit.model';

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({ required: true, format: 'uuid' })
    id: string;

    @Column({ length: 100, name: 'name' })
    @ApiProperty({ required: true, type: 'string' })
    name: string;

    @Column({ length: 100, name: 'barcode' })
    @ApiProperty({ required: false, type: 'string' })
    barcode: string;

    @Column({ length: 100, name: 'code' })
    @ApiProperty({ required: false, type: 'string' })
    code: string;

    @Column({ length: 50, name: 'gender' })
    @ApiProperty({ required: true, type: 'string' })
    gender: string;

    @Column({ name: 'price' })
    @ApiProperty({ required: true, type: 'number', format: 'double' })
    price: number;

    @Column({ length: 100, name: 'year' })
    @ApiProperty({ required: false, type: 'string' })
    year: string;

    @Column({ name: 'size' })
    @ApiProperty({ required: true, type: 'integer' })
    size: number;

    @Column({ name: 'quantity' })
    @ApiProperty({ required: true, type: 'integer' })
    quantity: number;

    @Column({ name: 'selling_price' })
    @ApiProperty({ required: true, type: 'number', format: 'double' })
    sellingPrice: number;

    @Column({ name: 'merchant_id' })
    @ApiProperty({ required: true, format: 'uuid' })
    merchantId: string;

    @Column({ name: 'color_id' })
    @ApiProperty({ required: true, format: 'uuid' })
    colorId: string;

    @Column({ name: 'branch_id' })
    @ApiProperty({ required: true, format: 'uuid' })
    branchId: string;

    @Column({ name: 'unit_id' })
    @ApiProperty({ required: true, format: 'uuid' })
    unitId: string;

    @Column({ name: 'product_type_id' })
    @ApiProperty({ required: true, format: 'uuid' })
    productTypeId: string;

    @ManyToOne(() => ProductType, (productType) => productType.products, {
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'product_type_id' })
    productType: ProductType;

    @ManyToOne(() => Merchant, {
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'merchant_id' })
    merchant: Merchant;

    @ManyToOne(() => Color, {
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'color_id' })
    color: Color;

    @ManyToOne(() => Branch, (branch) => branch.productList, {
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'branch_id' })
    branch: Branch;

    @ManyToOne(() => Unit, {
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'unit_id' })
    unit: Unit;
}
