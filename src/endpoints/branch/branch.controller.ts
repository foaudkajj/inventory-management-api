import {Controller, Get, Post, Body, Put, Param, Delete} from '@nestjs/common';
import {ApiParam} from '@nestjs/swagger';
import {Branch} from 'src/models';
import { BranchService } from './branch.service';

@Controller('api/branches')
export class BranchController {
  constructor(private readonly branchService: BranchService) {}

  @Get('get')
  getAll(): Promise<Branch[]> {
    return this.branchService.getAll();
  }

  @Post('insert')
  insert(@Body() row: Branch) {
    return this.branchService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({name: 'id'})
  update(@Body() row: Branch, @Param('id') id: string) {
    return this.branchService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({name: 'id'})
  delete(@Param('id') id: string) {
    return this.branchService.delete(id);
  }
}
