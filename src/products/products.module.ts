import { Module, HttpModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductSchema } from './schemas/product.schema';
import { ProductService } from './product.service';
import { ProductsController } from './products.controller';

@Module({
  imports: [
  MongooseModule.forFeature([
      {
        name: 'Product',
        schema: ProductSchema,
      },
    ]),
    HttpModule,
  ],
  controllers: [ProductsController],
  providers: [ProductService],
})
export class ProductsModule {}
