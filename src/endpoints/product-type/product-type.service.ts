import {Injectable} from '@nestjs/common';
import {ProductType} from 'src/models';
import {FindOptionsRelations} from 'typeorm';
import {ProductTypeRepository} from './product-type.repository';

@Injectable()
export class ProductTypeService {
  constructor(private productTypeRepository: ProductTypeRepository) {}
  getAll(relations: FindOptionsRelations<ProductType>): Promise<ProductType[]> {
    return this.productTypeRepository.find(relations);
  }

  insert(row: ProductType) {
    return this.productTypeRepository.orm.insert(row);
  }

  update(row: Partial<ProductType>, id: string) {
    return this.productTypeRepository.orm.update({id: id}, row);
  }

  delete(id: string) {
    return this.productTypeRepository.orm.delete({id: id});
  }
}
