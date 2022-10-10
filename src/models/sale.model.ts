import { ApiProperty } from '@nestjs/swagger';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Branch } from './branch.model';
import { CustomerInfo } from './customer-info.model';
import { Merchant } from './merchant.model';
import { User } from './user.model';

@Entity()
export class Sale {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({ required: true, format: 'uuid' })
    id: string;

    @Column({ name: 'date' })
    @ApiProperty({ required: true })
    date: Date;

    @Column({ name: 'total' })
    @ApiProperty({ required: true, type: 'number', format: 'double' })
    total: number;

    @Column({ name: 'refund_amount' })
    @ApiProperty({ required: true, type: 'number', format: 'double' })
    refundAmount: number;

    @Column({ name: 'user_id' })
    @ApiProperty({ required: true, format: 'uuid' })
    userId: string;

    @Column({ name: 'merchant_id' })
    @ApiProperty({ required: true, format: 'uuid' })
    merchantId: string;

    @Column({ name: 'branch_id' })
    @ApiProperty({ required: true, format: 'uuid' })
    branchId: string;

    @Column({ name: 'customer_info_id' })
    @ApiProperty({ required: true, format: 'uuid' })
    customerInfoId: string;

    @ManyToOne(() => User, (user) => user.saleList, {
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Merchant, {
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'merchant_id' })
    merchant: Merchant;

    @ManyToOne(() => Branch, (branch) => branch.saleList, {
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'branch_id' })
    branch: Branch;

    @ManyToOne(() => CustomerInfo, {
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'customer_info_id' })
    customerInfo: CustomerInfo;
}

