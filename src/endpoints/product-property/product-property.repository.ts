import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {ProductProperty} from 'src/models';
import {Repository} from 'typeorm';

@Injectable()
export class ProductPropertyRepository extends BaseRepository<ProductProperty> {
  constructor(
    @InjectRepository(ProductProperty)
    private _: Repository<ProductProperty>,
  ) {
    super();
    this.orm = _;
  }
}
