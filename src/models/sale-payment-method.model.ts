import { ApiProperty } from '@nestjs/swagger';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { PaymentMethod } from './payment-method.model';
import { Sale } from './sale.model';

@Entity()
export class SalePaymentMethod {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({ required: true, format: 'uuid' })
    id: string;

    @Column({ name: 'amount' })
    @ApiProperty({ required: true, type: 'number', format: 'double' })
    amount: number;

    @Column({ name: 'payment_method_id' })
    @ApiProperty({ required: true, format: 'uuid' })
    paymentMethodId: string;

    @Column({ name: 'sale_id' })
    @ApiProperty({ required: true, format: 'uuid' })
    saleId: string;

    @ManyToOne(() => PaymentMethod, {
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'payment_method_id' })
    paymenMethod: PaymentMethod;

    @ManyToOne(() => Sale, {
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'sale_id' })
    sale: Sale;
}
