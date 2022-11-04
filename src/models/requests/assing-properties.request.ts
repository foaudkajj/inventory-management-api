import {ApiProperty} from '@nestjs/swagger';

export class AssignProperties {
  @ApiProperty({
    required: true,
    type: 'array',
    items: {type: 'string', format: 'uuid'},
  })
  productPropertyIds: string[];

  @ApiProperty({required: true, type: 'string'})
  productTypeId: string;
}
