import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import {ActivatedRoute, Params} from '@angular/router';
import { CustomerService } from '../services/customer.service';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetail: Product;
  products: Product[] = [];


  constructor(
    private productService: ProductService,
    private customerService: CustomerService,
    private route: ActivatedRoute) 
    {productService.getProducts().subscribe(products => {
      this.products = products;
    })}

  ngOnInit() {
    this.route.params.subscribe((params: Params): void => {
      const id = params['id']
      

      this.productService.getProductsId(id).subscribe(product => {
        this.productDetail = product;
      })}
    
  )}

  isTheLast(product: Product): boolean {
    return this.productService.isTheLast(product);
  }

  isAvailable(product: Product): boolean {
    return this.productService.isAvailable(product);
  }
  
  addToBasket(event: Product): void {
    this.customerService.addProduct(event);
    this.productService.decreaseStock(event);
  }

  priceIsInferior(product: Product, productDetail: Product): boolean {
    return this.productService.priceIsInferior(product, productDetail);
  }
}

