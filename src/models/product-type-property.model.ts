import {ApiProperty} from '@nestjs/swagger';
import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import { ProductProperty } from './product-property.model';
import { ProductType } from './product-type.model';

@Entity()
export class ProductTypeProperty {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({required: true, format: 'uuid'})
  id: string;

  @Column({name: 'product_type_id'})
  @ApiProperty({required: true, format: 'uuid'})
  productTypeId: string;

  @Column({name: 'product_property_id'})
  @ApiProperty({required: true, format: 'uuid'})
  productPropertyId: string;

  @ManyToOne(() => ProductType, (productType) => productType.productTypePropertyList, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({name: 'product_type_id'})
  productType: ProductType;

  @ManyToOne(() => ProductProperty, (productProperty) => productProperty.productTypePropertyList, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({name: 'product_property_id'})
  productProperty: ProductProperty;
}
