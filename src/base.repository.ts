import {Injectable} from '@nestjs/common';
import {DataSource, ObjectLiteral, Repository} from 'typeorm';

@Injectable()
export class BaseRepository<Entity extends ObjectLiteral> {
  public orm: Repository<Entity>;

  constructor(public dataSource: DataSource) {}
}
