import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {User} from 'src/models';
import {DataSource, Repository} from 'typeorm';

@Injectable()
export class UserRepository extends BaseRepository<User> {
  constructor(
    @InjectRepository(User)
    private _: Repository<User>,
    public dataSource: DataSource,
  ) {
    super(dataSource);
    this.orm = _;
  }
}
