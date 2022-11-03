import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {PaymentMethod} from 'src/models';
import {DataSource, Repository} from 'typeorm';

@Injectable()
export class PaymentMethodRepository extends BaseRepository<PaymentMethod> {
  constructor(
    @InjectRepository(PaymentMethod)
    private _: Repository<PaymentMethod>,
    public dataSource: DataSource,
  ) {
    super(dataSource);
    this.orm = _;
  }
}
