import { Injectable } from '@nestjs/common';
import { ProductProperty } from 'src/models';
import { ProductPropertyRepository } from './product-property.repository';

@Injectable()
export class ProductPropertyService {
  constructor(private productPropertyRepository: ProductPropertyRepository) { }
  getAll(): Promise<ProductProperty[]> {
    return this.productPropertyRepository.orm.find();
  }

  insert(row: ProductProperty) {
    return this.productPropertyRepository.orm.insert(row);
  }

  update(row: Partial<ProductProperty>, id: string) {
    return this.productPropertyRepository.orm.update({ id: id }, row);
  }

  delete(id: string) {
    return this.productPropertyRepository.orm.delete({ id: id });
  }
}
