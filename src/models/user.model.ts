import { ApiProperty } from '@nestjs/swagger';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Branch } from './branch.model';
import { UserStatus } from './enums';
import { Merchant } from './merchant.model';
import { Role } from './role.model';
import { Sale } from './sale.model';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({ required: true, format: 'uuid' })
    id: string;

    @Column({ length: 50, name: 'first_name' })
    @ApiProperty({ required: true, type: 'string' })
    firstName: string;

    @Column({ length: 50, name: 'last_name' })
    @ApiProperty({ required: true, type: 'string' })
    lastName: string;

    @Column({ length: 50, name: 'username' })
    @ApiProperty({ required: true, type: 'string' })
    username: string;

    @Column({ name: 'status', type: 'enum', enum: UserStatus, default: UserStatus.Active })
    @ApiProperty({ required: false, enum: UserStatus, default: UserStatus.Active })
    status: UserStatus;

    @Column({ length: 200, name: 'password' })
    @ApiProperty({ required: false, type: 'string' })
    password: string;

    @Column({ length: 200, name: 'picture_url' })
    @ApiProperty({ required: false, type: 'string' })
    pictureUrl: string;

    @Column({ length: 50, name: 'email' })
    @ApiProperty({ required: false, type: 'string' })
    email: string;

    @Column({ length: 30, name: 'gsm' })
    @ApiProperty({ required: false, type: 'string' })
    gsm: string;

    @Column({ length: 100, name: 'salt' })
    @ApiProperty({ required: false, type: 'string' })
    salt: string;

    @Column({ name: 'branch_id' })
    @ApiProperty({ required: true, format: 'uuid' })
    branchId: string;

    @Column({ name: 'role_id' })
    @ApiProperty({ required: true, format: 'uuid' })
    roleId: string;

    @Column({ name: 'merchant_id' })
    @ApiProperty({ required: true, format: 'uuid' })
    merchantId: string;

    @ManyToOne(() => Branch, (branch) => branch.users, {
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'branch_id' })
    branch: Branch;

    @ManyToOne(() => Role, {
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'role_id' })
    role: Role;

    @ManyToOne(() => Merchant, {
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'merchant_id' })
    merchant: Merchant;

    @OneToMany(() => Sale, (sale) => sale.user)
    saleList: Sale[];
}
