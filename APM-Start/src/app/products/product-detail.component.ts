import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  pageTitle = 'Product Detail';
  product: Product;
  errorMessage: string;

  constructor(private activatedRoutes: ActivatedRoute) { }

  ngOnInit(): void {
    // this.activatedRoutes.data.subscribe(data => {
    //   this.product = data['productData'];
    //   this.onProductRetrieved(this.product);
    // })
    const recievedProduct: Product = this.activatedRoutes.snapshot.data['productData'];
    this.onProductRetrieved(recievedProduct);
  }

  

  onProductRetrieved(product: Product): void {
    this.product = product;

    if (this.product) {
      this.pageTitle = `Product Detail: ${this.product.productName}`;
    } else {
      this.pageTitle = 'No product found';
    }
  }
}
