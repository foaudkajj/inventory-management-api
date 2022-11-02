import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { ProductType } from 'src/models';
import { ProductTypeService } from './product-type.service';

@Controller('api/product-types')
export class ProductTypeController {
  constructor(private readonly productTypeService: ProductTypeService) { }

  @Get('get')
  getAll(): Promise<ProductType[]> {
    return this.productTypeService.getAll();
  }

  @Post('insert')
  insert(@Body() row: ProductType) {
    return this.productTypeService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({ name: 'id' })
  update(@Body() row: ProductType, @Param('id') id: string) {
    return this.productTypeService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({ name: 'id' })
  delete(@Param('id') id: string) {
    return this.productTypeService.delete(id);
  }
}
