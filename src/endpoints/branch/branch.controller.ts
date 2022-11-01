import {Controller, Get, Post, Body, Put, Param, Delete, UseGuards} from '@nestjs/common';
import {ApiParam} from '@nestjs/swagger';
import { Roles } from 'src/decorators/roles.decorator';
import {Branch} from 'src/models';
import { BranchService } from './branch.service';
import { Permissions } from 'src/models/enums';
import { RolesGuard } from '../auth/guards/roles.guard';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('api/branches')
export class BranchController {
  constructor(private readonly branchService: BranchService) {}

  @Roles(Permissions.SHOW_BRANCHES)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Get('get')
  getAll(): Promise<Branch[]> {
    return this.branchService.getAll();
  }

  @Roles(Permissions.ADD_BRANCHES)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Post('insert')
  insert(@Body() row: Branch) {
    return this.branchService.insert(row);
  }

  @Roles(Permissions.UPDATE_BRANCHES)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Put('update/:id')
  @ApiParam({name: 'id'})
  update(@Body() row: Branch, @Param('id') id: string) {
    return this.branchService.update(row, id);
  }

  @Roles(Permissions.DELETE_BRANCHES)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Delete('delete/:id')
  @ApiParam({name: 'id'})
  delete(@Param('id') id: string) {
    return this.branchService.delete(id);
  }
}
