import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {TransactionCard} from 'src/models';
import {Repository} from 'typeorm';

@Injectable()
export class TransactionCardRepository extends BaseRepository<TransactionCard> {
  constructor(
    @InjectRepository(TransactionCard)
    private _: Repository<TransactionCard>,
  ) {
    super();
    this.orm = _;
  }
}
