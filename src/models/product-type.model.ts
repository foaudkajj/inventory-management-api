import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductTypeProperty } from './product-type-property.model';

@Entity()
export class ProductType {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({ required: true, format: 'uuid' })
    id: string;

    @Column({ length: 50, name: 'name' })
    @ApiProperty({ required: true, type: 'string' })
    name: string;

    @OneToMany(() => ProductTypeProperty, (productTypeProperty) => productTypeProperty.productType)
    productTypePropertyList: ProductTypeProperty[];
}
