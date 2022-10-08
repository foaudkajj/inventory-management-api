import {ApiProperty} from '@nestjs/swagger';
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import { TransactionCard } from './transaction-card.model';

@Entity()
export class Currency {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({required: true, format: 'uuid'})
  id: string;

  @Column({length: 50, name: 'name'})
  @ApiProperty({required: true, type: 'string'})
  name: string;

  @OneToMany(() => TransactionCard, (transactionCard) => transactionCard.currency)
  transactionCards: TransactionCard[];
}
