import * as mongoose from 'mongoose';
import { DB_CONNECTION_TOKEN } from '../constants';

export const databaseProviders = [
  {
    provide: DB_CONNECTION_TOKEN,
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(
        'mongodb://db_admin:admin@ds237620.mlab.com:37620/store',
      ),
  },
];
