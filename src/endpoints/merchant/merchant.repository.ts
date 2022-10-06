import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {Merchant} from 'src/models';
import {Repository} from 'typeorm';

@Injectable()
export class MerchantRepository extends BaseRepository<Merchant> {
  constructor(
    @InjectRepository(Merchant)
    private _: Repository<Merchant>,
  ) {
    super();
    this.orm = _;
  }
}
