import {Injectable} from '@nestjs/common';
import {
  DataSource,
  FindOptionsRelations,
  ObjectLiteral,
  Repository,
} from 'typeorm';

@Injectable()
export class BaseRepository<Entity extends ObjectLiteral> {
  public orm: Repository<Entity>;

  constructor(public dataSource: DataSource) {}

  find(relations?: FindOptionsRelations<Entity>) {
    if (relations) {
      return this.orm.find({
        relations: relations,
      });
    } else {
      return this.orm.find();
    }
  }
}
