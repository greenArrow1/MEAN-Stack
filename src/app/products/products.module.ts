import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomersRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-customer-list.component';
import { CustomMatertialModuleModule } from '../custom-matertial-module/custom-matertial-module.module';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,
    CustomMatertialModuleModule
  ],
  declarations: [ProductListComponent]
})
export class ProductsModule { }
