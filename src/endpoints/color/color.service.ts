import {Injectable} from '@nestjs/common';
import {Color} from 'src/models';
import {ColorRepository} from './color.repository';

@Injectable()
export class ColorService {
  constructor(private colorRepository: ColorRepository) {}
  getAll(): Promise<Color[]> {
    return this.colorRepository.orm.find();
  }

  insert(row: Color) {
    return this.colorRepository.orm.insert(row);
  }

  update(row: Partial<Color>, id: string) {
    return this.colorRepository.orm.update({id: id}, row);
  }

  delete(id: string) {
    return this.colorRepository.orm.delete({id: id});
  }
}
