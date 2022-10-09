import {Injectable} from '@nestjs/common';
import {Branch} from 'src/models';
import { BranchRepository } from './branch.repository';

@Injectable()
export class BranchService {
  constructor(private branchRepository: BranchRepository) {}
  getAll(): Promise<Branch[]> {
    return this.branchRepository.orm.find();
  }

  insert(row: Branch) {
    return this.branchRepository.orm.insert(row);
  }

  update(row: Partial<Branch>, id: string) {
    return this.branchRepository.orm.update({id: id}, row);
  }

  delete(id: string) {
    return this.branchRepository.orm.delete({id: id});
  }
}
