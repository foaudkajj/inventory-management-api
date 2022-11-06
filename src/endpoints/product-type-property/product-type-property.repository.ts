import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'src/base.repository';
import { ProductTypeProperty } from 'src/models/product-type-property.model';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class ProductTypePropertyRepository extends BaseRepository<ProductTypeProperty> {
    constructor(
        @InjectRepository(ProductTypeProperty)
        private _: Repository<ProductTypeProperty>,
        public dataSource: DataSource,
    ) {
        super(dataSource);
        this.orm = _;
    }
}
