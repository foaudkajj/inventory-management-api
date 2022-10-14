import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { TransactionCard } from 'src/models';
import { TransactionCardService } from './transaction-card.service';

@Controller('api/transaction-cards')
export class TransactionCardController {
    constructor(private readonly transactioncardService: TransactionCardService) { }

    @Get('get')
    getAll(): Promise<TransactionCard[]> {
        return this.transactioncardService.getAll();
    }

    @Post('insert')
    insert(@Body() row: TransactionCard) {
        return this.transactioncardService.insert(row);
    }

    @Put('update/:id')
    @ApiParam({ name: 'id' })
    update(@Body() row: TransactionCard, @Param('id') id: string) {
        return this.transactioncardService.update(row, id);
    }

    @Delete('delete/:id')
    @ApiParam({ name: 'id' })
    delete(@Param('id') id: string) {
        return this.transactioncardService.delete(id);
    }
}
