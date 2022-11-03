import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {Role} from 'src/models';
import {DataSource, Repository} from 'typeorm';

@Injectable()
export class RoleRepository extends BaseRepository<Role> {
  constructor(
    @InjectRepository(Role)
    private _: Repository<Role>,
    public dataSource: DataSource,
  ) {
    super(dataSource);
    this.orm = _;
  }
}
