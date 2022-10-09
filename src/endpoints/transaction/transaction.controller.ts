import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { Transaction } from 'src/models';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
    constructor(private readonly transactionService: TransactionService) { }

    @Get('get')
    getAll(): Promise<Transaction[]> {
        return this.transactionService.getAll();
    }

    @Post('insert')
    insert(@Body() row: Transaction) {
        return this.transactionService.insert(row);
    }

    @Put('update/:id')
    @ApiParam({ name: 'id' })
    update(@Body() row: Transaction, @Param('id') id: string) {
        return this.transactionService.update(row, id);
    }

    @Delete('delete/:id')
    @ApiParam({ name: 'id' })
    delete(@Param('id') id: string) {
        return this.transactionService.delete(id);
    }
}
