import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { User } from 'src/models';
import { AuthService } from '../auth/auth.service';
import { UserService } from './user.service';

@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService, private authService: AuthService) { }

  @Get('get')
  getAll(): Promise<User[]> {
    return this.userService.getAll();
  }

  @Post('insert')
  insert(@Body() row: User) {
    return this.userService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({ name: 'id' })
  update(@Body() row: User, @Param('id') id: string) {
    return this.userService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({ name: 'id' })
  delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
