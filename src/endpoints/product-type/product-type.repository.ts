import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {ProductType} from 'src/models';
import {Repository} from 'typeorm';

@Injectable()
export class ProductTypeRepository extends BaseRepository<ProductType> {
  constructor(
    @InjectRepository(ProductType)
    private _: Repository<ProductType>,
  ) {
    super();
    this.orm = _;
  }
}
