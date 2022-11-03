import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {Permission} from 'src/models';
import {DataSource, Repository} from 'typeorm';

@Injectable()
export class PermissionRepository extends BaseRepository<Permission> {
  constructor(
    @InjectRepository(Permission)
    private _: Repository<Permission>,
    public dataSource: DataSource,
  ) {
    super(dataSource);
    this.orm = _;
  }
}
