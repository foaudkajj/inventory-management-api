import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {Currency} from 'src/models';
import {DataSource, Repository} from 'typeorm';

@Injectable()
export class CurrencyRepository extends BaseRepository<Currency> {
  constructor(
    @InjectRepository(Currency)
    private _: Repository<Currency>,
    public dataSource: DataSource,
  ) {
    super(dataSource);
    this.orm = _;
  }
}
