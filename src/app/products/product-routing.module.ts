import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductListComponent} from './product-list.component';
import {ProductDetailComponent} from './product-details.component';
import {ProductGaurdService} from './product-gaurd.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id',
        canActivate: [ ProductGaurdService ], component: ProductDetailComponent}
    ])
  ],
  exports: [RouterModule]
})

export class ProductRoutingModule {

}
