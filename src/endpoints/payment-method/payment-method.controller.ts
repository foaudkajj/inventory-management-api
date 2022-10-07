import {Controller, Get, Post, Body, Put, Param, Delete} from '@nestjs/common';
import {ApiParam} from '@nestjs/swagger';
import {PaymentMethod} from 'src/models';
import { PaymentMethodService } from './payment-method.service';

@Controller('payment_method')
export class PaymentMethodController {
  constructor(private readonly paymentmethodService: PaymentMethodService) {}

  @Get('get')
  getAll(): Promise<PaymentMethod[]> {
    return this.paymentmethodService.getAll();
  }

  @Post('insert')
  insert(@Body() row: PaymentMethod) {
    return this.paymentmethodService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({name: 'id'})
  update(@Body() row: PaymentMethod, @Param('id') id: string) {
    return this.paymentmethodService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({name: 'id'})
  delete(@Param('id') id: string) {
    return this.paymentmethodService.delete(id);
  }
}
