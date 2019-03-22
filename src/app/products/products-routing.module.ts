import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-customer-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  }, {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
