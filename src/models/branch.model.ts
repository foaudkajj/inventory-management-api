import { ApiProperty } from '@nestjs/swagger';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { City } from './city.model';
import { Country } from './country.model';
import { Merchant } from './merchant.model';
import { Product } from './product.model';
import { Sale } from './sale.model';
import { User } from './user.model';

@Entity()
export class Branch {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({ required: true, format: 'uuid' })
    id: string;

    @Column({ length: 50, name: 'name' })
    @ApiProperty({ required: true, type: 'string' })
    name: string;

    @Column({ name: 'city_id' })
    @ApiProperty({ required: true, format: 'uuid' })
    cityId: string;

    @Column({ name: 'country_id' })
    @ApiProperty({ required: true, format: 'uuid' })
    countryId: string;

    @Column({ name: 'merchant_id' })
    @ApiProperty({ required: true, format: 'uuid' })
    merchantId: string;

    @ManyToOne(() => City, {
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'city_id' })
    city: City;

    @ManyToOne(() => Country, {
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'country_id' })
    country: Country;

    @ManyToOne(() => Merchant, {
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'merchant_id' })
    merchant: Merchant;

    @OneToMany(() => User, (user) => user.branch)
    users: User[];

    @OneToMany(() => Sale, (sale) => sale.branch)
    saleList: Sale[];

    @OneToMany(() => Product, (product) => product.branch)
    productList: Product[];
}
