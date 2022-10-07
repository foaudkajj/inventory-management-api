import {Injectable} from '@nestjs/common';
import {Unit} from 'src/models';
import {UnitRepository} from './unit.repository';

@Injectable()
export class UnitService {
  constructor(private unitRepository: UnitRepository) {}
  getAll(): Promise<Unit[]> {
    return this.unitRepository.orm.find();
  }

  insert(row: Unit) {
    return this.unitRepository.orm.insert(row);
  }

  update(row: Partial<Unit>, id: string) {
    return this.unitRepository.orm.update({id: id}, row);
  }

  delete(id: string) {
    return this.unitRepository.orm.delete({id: id});
  }
}
