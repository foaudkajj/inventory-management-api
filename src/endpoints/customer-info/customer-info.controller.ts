import { Controller, Get, Post, Body, Put, Param, Delete } from "@nestjs/common";
import { ApiParam } from "@nestjs/swagger";
import { CustomerInfo } from "src/models";
import { CustomerInfoService } from "./customer-info.service";

@Controller('customer_info')
export class CustomerInfoController {
    constructor(private readonly customer_infoService: CustomerInfoService) { }

    @Get('get')
    getAll(): Promise<CustomerInfo[]> {
        return this.customer_infoService.getAll();
    }

    @Post('insert')
    insert(@Body() row: CustomerInfo) {
        return this.customer_infoService.insert(row);
    }

    @Put('update/:id')
    @ApiParam({ name: 'id' })
    update(@Body() row: CustomerInfo, @Param('id') id: string) {
        return this.customer_infoService.update(row, id);
    }

    @Delete('delete/:id')
    @ApiParam({ name: 'id' })
    delete(@Param('id') id: string) {
        return this.customer_infoService.delete(id);
    }
}