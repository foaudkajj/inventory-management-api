import {Injectable} from '@nestjs/common';
import {Transaction} from 'src/models';
import { TransactionRepository } from './transaction.repository';

@Injectable()
export class TransactionService {
  constructor(private transactionRepository: TransactionRepository) {}
  getAll(): Promise<Transaction[]> {
    return this.transactionRepository.orm.find();
  }

  insert(row: Transaction) {
    return this.transactionRepository.orm.insert(row);
  }

  update(row: Partial<Transaction>, id: string) {
    return this.transactionRepository.orm.update({id: id}, row);
  }

  delete(id: string) {
    return this.transactionRepository.orm.delete({id: id});
  }
}
