import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './interfaces/product.interface';
import { ProductService } from './product.service';
import { Observable, of } from 'rxjs';
import { AxiosResponse } from 'axios';
import { Db } from 'mongodb';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {
  }

  @Get()
  findAll() {
    // return of([
    //   {
    //     name: 'test',
    //     description: 'test123',
    //     price: 12,
    //   },
    // ]);

    return this.productService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id) {
    return `this action returns a product by id: #${{ id }}`;
  }

  @Post()
  create(product: Product) {
    this.productService.create(product);
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
