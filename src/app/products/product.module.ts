import {NgModule} from '@angular/core';
import {ConvertToSpacesPipe} from '../shared/convert-to-space.pipe';
import { ProductGaurdService } from './product-gaurd.service';
import {ProductService} from './product.service';
import {SharedModule} from '../shared/shared.module';
import {ProductRoutingModule} from './product-routing.module';
import {ProductListComponent} from './product-list.component';
import {ProductDetailComponent} from './product-details.component';

@NgModule({
  imports: [
    ProductRoutingModule,
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe
  ],
  providers: [
    ProductGaurdService,
    ProductService
  ]
})

export class ProductModule {
}
