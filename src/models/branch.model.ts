import { ApiProperty } from '@nestjs/swagger';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { City } from './city.model';
import { Country } from './country.model';
import { Merchant } from './merchant.model';

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
}
