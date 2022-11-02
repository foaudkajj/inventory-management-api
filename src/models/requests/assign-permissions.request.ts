import {ApiProperty} from '@nestjs/swagger';

export class AssignPermissions {
  @ApiProperty({
    required: true,
    type: 'array',
    items: {type: 'string', format: 'uuid'},
  })
  permissionIds: string[];

  @ApiProperty({required: true, type: 'string'})
  roleId: string;
}
