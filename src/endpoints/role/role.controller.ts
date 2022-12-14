import {Controller, Get, Post, Body, Put, Param, Delete} from '@nestjs/common';
import {ApiParam} from '@nestjs/swagger';
import {AssignPermissions, Role} from 'src/models';
import { RoleService } from './role.service';

@Controller('api/roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get('get')
  getAll(): Promise<Role[]> {
    return this.roleService.getAll();
  }

  @Post('insert')
  insert(@Body() row: Role) {
    return this.roleService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({name: 'id'})
  update(@Body() row: Role, @Param('id') id: string) {
    return this.roleService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({name: 'id'})
  delete(@Param('id') id: string) {
    return this.roleService.delete(id);
  }

  @Get('get-role-permissions/:role_id')
  @ApiParam({name: 'role_id'})
  getRolePermissions(@Param('role_id') roleId:string){
    return this.roleService.getRolePermissions(roleId);
  }

  @Post('assign-permissions')
  assignPermissions(@Body() request: AssignPermissions){
    return this.roleService.assignPermissions(request);
  }
}
