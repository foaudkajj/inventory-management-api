import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {ProductType} from 'src/models';
import {DataSource, Repository} from 'typeorm';

@Injectable()
export class ProductTypeRepository extends BaseRepository<ProductType> {
  constructor(
    @InjectRepository(ProductType)
    private _: Repository<ProductType>,
    public dataSource: DataSource,
  ) {
    super(dataSource);
    this.orm = _;
  }
}
