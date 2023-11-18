import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { ProductsModifyComponent } from './products-modify/products-modify.component';
import { ProductsListComponent } from './products-list/products-list.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ProductsDetailComponent,
    ProductsModifyComponent,
    ProductsListComponent
  ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        FormsModule
    ]
})
export class ProductsModule { }
