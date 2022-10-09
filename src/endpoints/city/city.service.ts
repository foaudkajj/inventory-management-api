import {Injectable} from '@nestjs/common';
import {City} from 'src/models';
import { CityRepository } from './city.repository';

@Injectable()
export class CityService {
  constructor(private cityRepository: CityRepository) {}
  getAll(): Promise<City[]> {
    return this.cityRepository.orm.find();
  }

  insert(row: City) {
    return this.cityRepository.orm.insert(row);
  }

  update(row: Partial<City>, id: string) {
    return this.cityRepository.orm.update({id: id}, row);
  }

  delete(id: string) {
    return this.cityRepository.orm.delete({id: id});
  }
}
