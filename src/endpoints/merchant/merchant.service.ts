import {Injectable} from '@nestjs/common';
import {Merchant} from 'src/models';
import {MerchantRepository} from './merchant.repository';

@Injectable()
export class MerchantService {
  constructor(private merchantRepository: MerchantRepository) {}
  getAll(): Promise<Merchant[]> {
    return this.merchantRepository.orm.find();
  }

  insert(row: Merchant) {
    return this.merchantRepository.orm.insert(row);
  }

  update(row: Partial<Merchant>, id: string) {
    return this.merchantRepository.orm.update({id: id}, row);
  }

  delete(id: string) {
    return this.merchantRepository.orm.delete({id: id});
  }
}
