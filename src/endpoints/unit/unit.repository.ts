import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import { Unit } from 'src/models';
import {Repository} from 'typeorm';

@Injectable()
export class UnitRepository extends BaseRepository<Unit> {
  constructor(
    @InjectRepository(Unit)
    private _: Repository<Unit>,
  ) {
    super();
    this.orm = _;
  }
}
