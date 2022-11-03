import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {Branch} from 'src/models';
import {DataSource, Repository} from 'typeorm';

@Injectable()
export class BranchRepository extends BaseRepository<Branch> {
  constructor(
    @InjectRepository(Branch)
    private _: Repository<Branch>,
    public dataSource: DataSource,
  ) {
    super(dataSource);
    this.orm = _;
  }
}
