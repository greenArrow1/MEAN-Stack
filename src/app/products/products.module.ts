import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomersRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-customer-list.component';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule
  ],
  declarations: [ProductListComponent]
})
export class ProductsModule { }
