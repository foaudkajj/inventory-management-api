import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {City} from 'src/models';
import {Repository} from 'typeorm';

@Injectable()
export class CityRepository extends BaseRepository<City> {
  constructor(
    @InjectRepository(City)
    private _: Repository<City>,
  ) {
    super();
    this.orm = _;
  }
}
