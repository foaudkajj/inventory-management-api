import { ApiProperty } from '@nestjs/swagger';
import {
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductTypeProperty } from './product-type-property.model';

@Entity()
export class ProductProperty {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({ required: true, format: 'uuid' })
    id: string;

    @Column({ length: 10, name: 'type' })
    @ApiProperty({ required: false, type: 'string' })
    type: string;

    @Column({ length: 100, name: 'translate' })
    @ApiProperty({ required: false, type: 'string' })
    translate: string;

    @Column({ length: 15, name: 'data_field' })
    @ApiProperty({ required: false, type: 'string' })
    dataField: string;

    @Column({ length: 30, name: 'editor_type' })
    @ApiProperty({ required: false, type: 'string' })
    editorType: string;

    @Column({ length: 65535, name: 'validation' })
    @ApiProperty({ required: false, type: 'string' })
    validation: string;

    @Column({ length: 65535, name: 'form_item_editor_options' })
    @ApiProperty({ required: false, type: 'string' })
    formItemEditorOptions: string;

    @Column({ length: 65535, name: 'grid_column_editor_options' })
    @ApiProperty({ required: false, type: 'string' })
    gridColumnEditorOptions: string;

    @Column({ length: 65535, name: 'grid_column_conf' })
    @ApiProperty({ required: false, type: 'string' })
    gridColumnConf: string;

    @OneToMany(() => ProductTypeProperty, (productTypeProperty) => productTypeProperty.productProperty)
    productTypePropertyList: ProductTypeProperty[];
}
