import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {City} from 'src/models';
import {DataSource, Repository} from 'typeorm';

@Injectable()
export class CityRepository extends BaseRepository<City> {
  constructor(
    @InjectRepository(City)
    private _: Repository<City>,
    public dataSource: DataSource,
  ) {
    super(dataSource);
    this.orm = _;
  }
}
