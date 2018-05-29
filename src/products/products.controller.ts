import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './interfaces/product.interface';
import { ProductService } from './product.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id) {
    return `this action returns a product by id: #${{ id }}`;
  }

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    this.productService.create(createProductDto);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() updateProductDto) {
    return 'this action updates a product';
  }

  @Delete(':id')
  async remove(@Param('id') id) {
    return 'this action removes a product';
  }
}
