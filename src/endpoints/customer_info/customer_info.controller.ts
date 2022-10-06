import { Controller, Get, Post, Body, Put, Param, Delete } from "@nestjs/common";
import { ApiParam } from "@nestjs/swagger";
import { Customer_info } from "src/models";
import { CustomerInfoService } from "./customer_info.service";

@Controller('customer_info')
export class CustomerInfoController {
    constructor(private readonly customer_infoService: CustomerInfoService) { }

    @Get('get')
    getAll(): Promise<Customer_info[]> {
        return this.customer_infoService.getAll();
    }

    @Post('insert')
    insert(@Body() row: Customer_info) {
        return this.customer_infoService.insert(row);
    }

    @Put('update/:id')
    @ApiParam({ name: 'id' })
    update(@Body() row: Customer_info, @Param('id') id: string) {
        return this.customer_infoService.update(row, id);
    }

    @Delete('delete/:id')
    @ApiParam({ name: 'id' })
    delete(@Param('id') id: string) {
        return this.customer_infoService.delete(id);
    }
}