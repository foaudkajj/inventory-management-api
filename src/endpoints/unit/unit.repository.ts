import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {Unit} from 'src/models';
import {DataSource, Repository} from 'typeorm';

@Injectable()
export class UnitRepository extends BaseRepository<Unit> {
  constructor(
    @InjectRepository(Unit)
    private _: Repository<Unit>,
    public dataSource: DataSource,
  ) {
    super(dataSource);
    this.orm = _;
  }
}
