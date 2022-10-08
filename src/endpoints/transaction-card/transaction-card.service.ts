import {Injectable} from '@nestjs/common';
import {TransactionCard} from 'src/models';
import { TransactionCardRepository } from './transaction-card.repository';

@Injectable()
export class TransactionCardService {
  constructor(private transactioncardRepository: TransactionCardRepository) {}
  getAll(): Promise<TransactionCard[]> {
    return this.transactioncardRepository.orm.find();
  }

  insert(row: TransactionCard) {
    return this.transactioncardRepository.orm.insert(row);
  }

  update(row: Partial<TransactionCard>, id: string) {
    return this.transactioncardRepository.orm.update({id: id}, row);
  }

  delete(id: string) {
    return this.transactioncardRepository.orm.delete({id: id});
  }
}
