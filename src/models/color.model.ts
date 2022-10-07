import {ApiProperty} from '@nestjs/swagger';
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Color {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({required: true, format: 'uuid'})
  id: string;

  @Column({length: 50, name: 'name'})
  @ApiProperty({required: true, type: 'string'})
  name: string;

  @Column({length: 30, name: 'code'})
  @ApiProperty({required: false, type: 'string'})
  code: string;
}
