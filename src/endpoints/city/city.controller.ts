import {Controller, Get, Post, Body, Put, Param, Delete} from '@nestjs/common';
import {ApiParam} from '@nestjs/swagger';
import {City} from 'src/models';
import { CityService } from './city.service';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get('get')
  getAll(): Promise<City[]> {
    return this.cityService.getAll();
  }

  @Post('insert')
  insert(@Body() row: City) {
    return this.cityService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({name: 'id'})
  update(@Body() row: City, @Param('id') id: string) {
    return this.cityService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({name: 'id'})
  delete(@Param('id') id: string) {
    return this.cityService.delete(id);
  }
}
