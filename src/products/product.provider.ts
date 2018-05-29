import { Connection } from 'mongoose';
import { ProductSchema } from './product.schema';
import { PRODUCT_MODEL_TOKEN, DB_CONNECTION_TOKEN } from '../constants';

export const productsProviders = [
  {
    provide: PRODUCT_MODEL_TOKEN,
    useFactory: (connection: Connection) =>
      connection.model('Product', ProductSchema),
    inject: [DB_CONNECTION_TOKEN],
  },
];
