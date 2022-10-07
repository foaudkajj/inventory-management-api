import {Controller, Get, Post, Body, Put, Param, Delete} from '@nestjs/common';
import {ApiParam} from '@nestjs/swagger';
import {Currency} from 'src/models';
import {CurrencyService} from './currency.service';

@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get('get')
  getAll(): Promise<Currency[]> {
    return this.currencyService.getAll();
  }

  @Post('insert')
  insert(@Body() row: Currency) {
    return this.currencyService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({name: 'id'})
  update(@Body() row: Currency, @Param('id') id: string) {
    return this.currencyService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({name: 'id'})
  delete(@Param('id') id: string) {
    return this.currencyService.delete(id);
  }
}
