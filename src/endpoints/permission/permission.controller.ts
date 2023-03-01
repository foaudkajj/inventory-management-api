import {Controller, Get, Post, Body, Put, Param, Delete} from '@nestjs/common';
import {ApiParam} from '@nestjs/swagger';
import {Permission} from 'src/models';
import {PermissionService} from './permission.service';

@Controller('api/permissions')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Get('get')
  getAll(): Promise<Permission[]> {
    return this.permissionService.getAll();
  }

  @Post('insert')
  insert(@Body() row: Permission) {
    return this.permissionService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({name: 'id'})
  update(@Body() row: Permission, @Param('id') id: string) {
    return this.permissionService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({name: 'id'})
  delete(@Param('id') id: string) {
    return this.permissionService.delete(id);
  }
}
