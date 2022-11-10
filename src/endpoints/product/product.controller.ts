import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { Product } from 'src/models';
import { ProductService } from './product.service';

@Controller('api/products')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Get('get')
  getAll(): Promise<Product[]> {
    return this.productService.getAll();
  }

  @Post('insert')
  insert(@Body() row: Product) {
    return this.productService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({ name: 'id' })
  update(@Body() row: Product, @Param('id') id: string) {
    return this.productService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({ name: 'id' })
  delete(@Param('id') id: string) {
    return this.productService.delete(id);
  }
  
  @Get('get-by-barcode/:barcode')
  @ApiParam({ name: 'barcode' })
  getByBarcode(@Param('barcode') barcode: string) {
    return this.productService.getByBarcode(barcode);
  }
}
