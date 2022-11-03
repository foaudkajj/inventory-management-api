import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {Country} from 'src/models';
import {DataSource, Repository} from 'typeorm';

@Injectable()
export class CountryRepository extends BaseRepository<Country> {
  constructor(
    @InjectRepository(Country)
    private _: Repository<Country>,
    public dataSource: DataSource,
  ) {
    super(dataSource);
    this.orm = _;
  }
}
