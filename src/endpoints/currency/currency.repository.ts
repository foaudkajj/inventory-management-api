import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {Currency} from 'src/models';
import {Repository} from 'typeorm';

@Injectable()
export class CurrencyRepository extends BaseRepository<Currency> {
  constructor(
    @InjectRepository(Currency)
    private _: Repository<Currency>,
  ) {
    super();
    this.orm = _;
  }
}
