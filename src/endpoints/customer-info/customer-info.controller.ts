import {Controller, Get, Post, Body, Put, Param, Delete} from '@nestjs/common';
import {ApiParam} from '@nestjs/swagger';
import {CustomerInfo} from 'src/models';
import {CustomerInfoService} from './customer-info.service';

@Controller('api/customer-info')
export class CustomerInfoController {
  constructor(private readonly customerinfoService: CustomerInfoService) {}

  @Get('get')
  getAll(): Promise<CustomerInfo[]> {
    return this.customerinfoService.getAll();
  }

  @Post('insert')
  insert(@Body() row: CustomerInfo) {
    return this.customerinfoService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({name: 'id'})
  update(@Body() row: CustomerInfo, @Param('id') id: string) {
    return this.customerinfoService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({name: 'id'})
  delete(@Param('id') id: string) {
    return this.customerinfoService.delete(id);
  }
}
