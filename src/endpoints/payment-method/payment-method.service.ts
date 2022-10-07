import {Injectable} from '@nestjs/common';
import {PaymentMethod} from 'src/models';
import { PaymentMethodRepository } from './payment-method.repository';

@Injectable()
export class PaymentMethodService {
  constructor(private paymentmethodRepository: PaymentMethodRepository) {}
  getAll(): Promise<PaymentMethod[]> {
    return this.paymentmethodRepository.orm.find();
  }

  insert(row: PaymentMethod) {
    return this.paymentmethodRepository.orm.insert(row);
  }

  update(row: Partial<PaymentMethod>, id: string) {
    return this.paymentmethodRepository.orm.update({id: id}, row);
  }

  delete(id: string) {
    return this.paymentmethodRepository.orm.delete({id: id});
  }
}
