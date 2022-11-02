import { Injectable } from '@nestjs/common';
import { ProductType } from 'src/models';
import { ProductTypeRepository } from './product-type.repository';

@Injectable()
export class ProductTypeService {
  constructor(private productTypeRepository: ProductTypeRepository) { }
  getAll(): Promise<ProductType[]> {
    return this.productTypeRepository.orm.find();
  }

  insert(row: ProductType) {
    return this.productTypeRepository.orm.insert(row);
  }

  update(row: Partial<ProductType>, id: string) {
    return this.productTypeRepository.orm.update({ id: id }, row);
  }

  delete(id: string) {
    return this.productTypeRepository.orm.delete({ id: id });
  }
}
