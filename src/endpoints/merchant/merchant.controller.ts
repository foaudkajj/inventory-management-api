import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  
  } from '@nestjs/common';
  import {ApiParam} from '@nestjs/swagger';
  import {Merchant} from 'src/models';
  import {MerchantService} from './merchant.service';
  
  @Controller('merchant')
  export class MerchantController {
    constructor(private readonly merchantService: MerchantService) {}
  
    @Get('get')
    getAll(): Promise<Merchant[]> {
      return this.merchantService.getAll();
    }
  
    @Post('insert')
    insert(@Body() row: Merchant) {
      return this.merchantService.insert(row);
    }
  
    @Put('update/:id')
    @ApiParam({name: 'id'})
    update(@Body() row: Merchant, @Param('id') id: string) {
      return this.merchantService.update(row, id);
    }
  
    @Delete('delete/:id')
    @ApiParam({name: 'id'})
    delete(@Param('id') id: string) {
      return this.merchantService.delete(id);
    }
  }