import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {Customer_info} from 'src/models';
import {Repository} from 'typeorm';

@Injectable()
export class CustomerInfoRepository extends BaseRepository<Customer_info> {
  constructor(
    @InjectRepository(Customer_info)
    private _: Repository<Customer_info>,
  ) {
    super();
    this.orm = _;
  }
}
