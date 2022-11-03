import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {TransactionCard} from 'src/models';
import {DataSource, Repository} from 'typeorm';

@Injectable()
export class TransactionCardRepository extends BaseRepository<TransactionCard> {
  constructor(
    @InjectRepository(TransactionCard)
    private _: Repository<TransactionCard>,
    public dataSource: DataSource,
  ) {
    super(dataSource);
    this.orm = _;
  }
}
