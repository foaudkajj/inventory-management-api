import { ApiProperty } from '@nestjs/swagger';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { PaymentMethod } from './payment-method.model';
import { TransactionCard } from './transaction-card.model';

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({ required: true, format: 'uuid' })
    id: string;

    @Column({ name: 'transaction_date' })
    @ApiProperty({ required: true })
    transactionDate: Date;

    @Column({ name: 'transaction_type' })
    @ApiProperty({ required: true, type: 'integer' })
    transactionType: number;

    @Column({ name: 'amount' })
    @ApiProperty({ required: true, type: 'number', format: 'double' })
    amount: number;

    @Column({ length: 1000, name: 'description' })
    @ApiProperty({ required: false, type: 'string' })
    description: string;

    @Column({ name: 'payment_method_id' })
    @ApiProperty({ required: true, format: 'uuid' })
    paymentMethodId: string;

    @Column({ name: 'transaction_card_id' })
    @ApiProperty({ required: true, format: 'uuid' })
    transactionCardId: string;

    @ManyToOne(() => PaymentMethod, {
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'payment_method_id' })
    paymentMethod: PaymentMethod;
    
    @ManyToOne(() => TransactionCard, {
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'transaction_card_id' })
    transactionCard: TransactionCard;
}
