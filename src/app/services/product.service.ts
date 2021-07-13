import {Injectable} from '@angular/core';

import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/rest/products');
  }

  getProductsId(id: string): Observable<Product> {
    return this.http.get<Product>('http://localhost:8080/rest/products/' + id);
  }

  isTheLast(product: Product): boolean {
    return product.stock === 1;
  }

  isAvailable(product: Product): boolean {
    return product.stock !== 0;
  }

  decreaseStock(product: Product) {
    product.stock -= 1;
  }

  priceIsInferior(product: Product, productDetail: Product): boolean {
    return product.price < productDetail.price;
  }

}
