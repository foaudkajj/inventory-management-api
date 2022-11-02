import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { ProductProperty } from 'src/models';
import { ProductPropertyService } from './product-property.service';

@Controller('api/product-properties')
export class ProductPropertyController {
  constructor(private readonly productPropertyService: ProductPropertyService) { }

  @Get('get')
  getAll(): Promise<ProductProperty[]> {
    return this.productPropertyService.getAll();
  }

  @Post('insert')
  insert(@Body() row: ProductProperty) {
    return this.productPropertyService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({ name: 'id' })
  update(@Body() row: ProductProperty, @Param('id') id: string) {
    return this.productPropertyService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({ name: 'id' })
  delete(@Param('id') id: string) {
    return this.productPropertyService.delete(id);
  }
}
