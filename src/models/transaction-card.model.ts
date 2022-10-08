import {ApiProperty} from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {Currency} from './currency.model';

@Entity()
export class TransactionCard {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({required: true, format: 'uuid'})
  id: string;

  @Column({name: 'create_date'})
  @ApiProperty({required: true})
  createDate: Date;

  @Column({length: 50, name: 'code'})
  @ApiProperty({required: false, type: 'string'})
  code: string;

  @Column({length: 50, name: 'owner_name'})
  @ApiProperty({required: false, type: 'string'})
  ownerName: string;

  @Column({length: 50, name: 'gsm'})
  @ApiProperty({required: false, type: 'string'})
  gsm: string;

  @Column({name: 'currency_id'})
  @ApiProperty({required: true, format: 'uuid'})
  currencyId: string;

  @ManyToOne(() => Currency, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({name: 'currency_id'})
  currency: Currency;
}
