import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {Merchant} from 'src/models';
import {DataSource, Repository} from 'typeorm';

@Injectable()
export class MerchantRepository extends BaseRepository<Merchant> {
  constructor(
    @InjectRepository(Merchant)
    private _: Repository<Merchant>,
    public dataSource: DataSource,
  ) {
    super(dataSource);
    this.orm = _;
  }
}
