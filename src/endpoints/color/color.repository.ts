import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {Color} from 'src/models';
import {Repository} from 'typeorm';

@Injectable()
export class ColorRepository extends BaseRepository<Color> {
  constructor(
    @InjectRepository(Color)
    private _: Repository<Color>,
  ) {
    super();
    this.orm = _;
  }
}
