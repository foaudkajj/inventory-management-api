import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Country } from './country.model';

@Entity()
export class City {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ required: true, format: 'uuid' })
  id: string;

  @Column({ length: 50, name: 'name' })
  @ApiProperty({ required: true, type: 'string' })
  name: string;

  @Column({ name: 'country_id' })
  @ApiProperty({ required: true, format: 'uuid' })
  countryId: string;

  @ManyToOne(() => Country, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'country_id' })
  country: Country;
}
