import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {ProductProperty} from 'src/models';
import {DataSource, Repository} from 'typeorm';

@Injectable()
export class ProductPropertyRepository extends BaseRepository<ProductProperty> {
  constructor(
    @InjectRepository(ProductProperty)
    private _: Repository<ProductProperty>,
    public dataSource: DataSource,
  ) {
    super(dataSource);
    this.orm = _;
  }
}
