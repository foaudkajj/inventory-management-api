import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from 'src/base.repository';
import {Branch} from 'src/models';
import {Repository} from 'typeorm';

@Injectable()
export class BranchRepository extends BaseRepository<Branch> {
  constructor(
    @InjectRepository(Branch)
    private _: Repository<Branch>,
  ) {
    super();
    this.orm = _;
  }
}
