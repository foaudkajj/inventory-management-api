import {ApiProperty} from '@nestjs/swagger';
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Merchant {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({required: true, format:'uuid'})
  id: string;

  @Column({length: 100, name: 'title'})
  @ApiProperty({required: true, type: 'string'})
  title: string;

  @Column({length: 50, name: 'company_type'})
  @ApiProperty({required: false, type: 'string'})
  companyType: string;

  @Column({name: 'founding_date'})
  @ApiProperty({required: false})
  foundingDate: Date;

  @Column({length: 200, name: 'tax_office'})
  @ApiProperty({required: false, type: 'string'})
  taxOffice: string;

  @Column({length: 10, name: 'tax_number'})
  @ApiProperty({required: false, type: 'string'})
  taxNumber: string;

  @Column({length: 20, name: 'phone'})
  @ApiProperty({required: false, type: 'string'})
  phone: string;

  @Column({length: 100, name: 'website'})
  @ApiProperty({required: false, type: 'string'})
  website: string;
}
