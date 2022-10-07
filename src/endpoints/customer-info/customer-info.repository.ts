import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {CustomerInfo} from 'src/models';
import {Repository} from 'typeorm';

@Injectable()
export class CustomerInfoRepository extends BaseRepository<CustomerInfo> {
  constructor(
    @InjectRepository(CustomerInfo)
    private _: Repository<CustomerInfo>,
  ) {
    super();
    this.orm = _;
  }
}
