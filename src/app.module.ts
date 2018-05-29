import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from 'products/products.module';
import { Mongoose } from 'mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://localhost/store',

    ),
    ProductsModule,
  ],
})
export class AppModule {}
