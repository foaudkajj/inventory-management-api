import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {Transaction} from 'src/models';
import {Repository} from 'typeorm';

@Injectable()
export class TransactionRepository extends BaseRepository<Transaction> {
  constructor(
    @InjectRepository(Transaction)
    private _: Repository<Transaction>,
  ) {
    super();
    this.orm = _;
  }
}
