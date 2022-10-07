import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {PaymentMethod} from 'src/models';
import {Repository} from 'typeorm';

@Injectable()
export class PaymentMethodRepository extends BaseRepository<PaymentMethod> {
  constructor(
    @InjectRepository(PaymentMethod)
    private _: Repository<PaymentMethod>,
  ) {
    super();
    this.orm = _;
  }
}
