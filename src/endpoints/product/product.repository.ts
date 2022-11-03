import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {Product} from 'src/models';
import {DataSource, Repository} from 'typeorm';

@Injectable()
export class ProductRepository extends BaseRepository<Product> {
  constructor(
    @InjectRepository(Product)
    private _: Repository<Product>,
    public dataSource: DataSource,
  ) {
    super(dataSource);
    this.orm = _;
  }
}
