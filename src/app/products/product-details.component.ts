import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import {ActivatedRoute, Route, Router} from '@angular/router';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailComponent {
  pageTitle: string = 'Product Detail';
  product: IProduct;
  errorMessage: string;

  constructor(private _route: ActivatedRoute, private _router: Router,
    private _productService: ProductService) {
  }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.getProduct(id);
  }

  getProduct(id: number): void {
    this._productService.getProduct(id)
      .subscribe(product => this.product = product,
      error => this.errorMessage = error);
  }
  onBack(): void {
    this._router.navigate(['/products']);
  }
}
