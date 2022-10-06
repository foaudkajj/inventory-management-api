import { Controller, Get, Post, Body, Put, Param, Delete } from "@nestjs/common";
import { ApiParam } from "@nestjs/swagger";
import { Unit } from "src/models";
import { UnitService } from "./unit.service";

@Controller('unit')
export class UnitController {
    constructor(private readonly unitService: UnitService) { }

    @Get('get')
    getAll(): Promise<Unit[]> {
        return this.unitService.getAll();
    }

    @Post('insert')
    insert(@Body() row: Unit) {
        return this.unitService.insert(row);
    }

    @Put('update/:id')
    @ApiParam({ name: 'id' })
    update(@Body() row: Unit, @Param('id') id: string) {
        return this.unitService.update(row, id);
    }

    @Delete('delete/:id')
    @ApiParam({ name: 'id' })
    delete(@Param('id') id: string) {
        return this.unitService.delete(id);
    }
}