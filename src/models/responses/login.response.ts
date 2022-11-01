import {ApiProperty} from '@nestjs/swagger';
import { UserStatus } from '../enums';

export class LoginResponse {
  @ApiProperty({type: 'token'})
  token: string;

  @ApiProperty({type: 'string'})
  username: string;

  @ApiProperty({enum: UserStatus})
  status: UserStatus;

  @ApiProperty({type: 'string'})
  firstName: string;

  @ApiProperty({type: 'string'})
  lastName: string;

  @ApiProperty({type: 'string'})
  role: string;
}
