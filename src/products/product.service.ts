import { HttpService, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductService {
  constructor(private readonly http: HttpService) {}

  url = 'http://localhost:3000/products';

  create(product: Product): Observable<AxiosResponse<Product>> {
    return this.http
      .post(this.url, product)
      .pipe(map(response => response.data));
  }

  findAll(): Observable<AxiosResponse<Array<Product>>> {
    return this.http.get(this.url).pipe(map(response => response.data));
  }
}
