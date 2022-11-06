import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AssignProperties, ProductType } from 'src/models';
import { DataSource, FindOptionsRelations } from 'typeorm';
import { ProductTypePropertyRepository } from '../product-type-property/product-type-property.repository';
import { ProductTypeRepository } from './product-type.repository';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ProductTypeService {
  constructor(private productTypeRepository: ProductTypeRepository,
    private dataSource: DataSource,
    private productTypePropertyRepository: ProductTypePropertyRepository) { }
  getAll(relations: FindOptionsRelations<ProductType>): Promise<ProductType[]> {
    return this.productTypeRepository.find(relations);
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

  async assignProperties(request: AssignProperties) {
    const isExist = await this.productTypeRepository.orm.findOneBy({ id: request.productTypeId });
    if (!isExist) {
      throw new HttpException(
        'ERROR.NOT_FOUND',
        HttpStatus.BAD_REQUEST,
      );
    }

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await this.productTypePropertyRepository.orm.delete({ productTypeId: request.productTypeId });
      if (request.productPropertyIds?.length > 0) {
        const productProperties = request.productPropertyIds.map(productPropertyId => {
          return { id: uuid(), productTypeId: request.productTypeId, productPropertyId: productPropertyId };
        });

        await this.productTypePropertyRepository.orm.insert(productProperties);
      }
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
}