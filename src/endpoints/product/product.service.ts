import { Injectable } from '@nestjs/common';
import { Product } from 'src/models';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(private productRepository: ProductRepository) { }
  getAll(): Promise<Product[]> {
    return this.productRepository.orm.find();
  }

  insert(row: Product) {
    return this.productRepository.orm.insert(row);
  }

  update(row: Partial<Product>, id: string) {
    return this.productRepository.orm.update({ id: id }, row);
  }

  delete(id: string) {
    return this.productRepository.orm.delete({ id: id });
  }
}
