import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {Color} from 'src/models';
import {DataSource, Repository} from 'typeorm';

@Injectable()
export class ColorRepository extends BaseRepository<Color> {
  constructor(
    @InjectRepository(Color)
    private _: Repository<Color>,
    public dataSource: DataSource,
  ) {
    super(dataSource);
    this.orm = _;
  }
}
