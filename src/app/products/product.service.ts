import {IProduct} from './product';
import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import {HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  private _productUrl  =  'api/products/products.json';
  constructor (private _http: HttpClient) {
  }
  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._productUrl)
      .do(data => console.log('All' + JSON.stringify(data)))
      .catch(this.handleError);
  }
  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return Observable.throw(error);
  }

  getProduct(id: number): Observable<IProduct> {
    return this.getProducts()
      .map((products: IProduct[]) => products.find(p => p.productId === id));
  }
}


