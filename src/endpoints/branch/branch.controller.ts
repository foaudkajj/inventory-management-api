import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import {ApiParam} from '@nestjs/swagger';
import {Roles} from 'src/decorators/roles.decorator';
import {Branch} from 'src/models';
import {BranchService} from './branch.service';
import {Permissions} from 'src/models/enums';

@Controller('api/branches')
export class BranchController {
  constructor(private readonly branchService: BranchService) {}

  @Roles(Permissions.SHOW_BRANCHES)
  @Get('get')
  getAll(): Promise<Branch[]> {
    return this.branchService.getAll();
  }

  @Roles(Permissions.ADD_BRANCHES)
  @Post('insert')
  insert(@Body() row: Branch) {
    return this.branchService.insert(row);
  }

  @Roles(Permissions.UPDATE_BRANCHES)
  @Put('update/:id')
  @ApiParam({name: 'id'})
  update(@Body() row: Branch, @Param('id') id: string) {
    return this.branchService.update(row, id);
  }

  @Roles(Permissions.DELETE_BRANCHES)
  @Delete('delete/:id')
  @ApiParam({name: 'id'})
  delete(@Param('id') id: string) {
    return this.branchService.delete(id);
  }
}
