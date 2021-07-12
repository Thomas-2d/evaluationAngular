import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product[] = [];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute) 
    {
    
   }

  ngOnInit() {
    this.route.params.subscribe((params: Params): void => {
      const id = params['id']
      console.log(params)
      console.log(params['id'])
      this.productService.getProductsId(id).subscribe(product => {
        this.product = product;
      })}
    
  })
  
}
