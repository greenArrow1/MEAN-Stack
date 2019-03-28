import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Products, Product, AddedProduct, ExampleTab } from './models/productModel';
import { catchError, retry, count } from 'rxjs/operators';
import { ErrorHandlerServiceConfigService } from './error-handler-service-config.service';
import { Observable, Observer } from 'rxjs';
import { Route, Router } from '@angular/router';
import { OrderListComponent } from 'src/app/orders/order-list/order-list.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './product-customer-list.component.html',
  styleUrls: ['./product-customer-list.component.css']
})
export class ProductListComponent implements OnInit {
  count: number;
  products: Array<any> = [];
  product: Product;
  // addedProducts: Array<Product> = [];
  // material progressbar
  color = 'primary';
  mode = 'buffer';
  value = 50;
  bufferValue = 75;
  showProgressBar = false;
  // tabs
  asyncTabs: Observable<ExampleTab[]>;
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private httpClinet: HttpClient, private errorHandler: ErrorHandlerServiceConfigService, private router: Router) {
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          { label: 'AddProduct', content: 'Content 1', path: '' },
          { label: 'Second', content: 'app-order-list', path: 'addproduct' }
        ]);
      }, 1000);
    });
    this.navLinks = [
      {
          label: 'TabTest1',
          link: 'product',
          index: 0
      }, {
          label: 'Tab Test2',
          link: 'addproduct',
          index: 1
      }
  ];
  }

  ngOnInit() {
    this.count = 0;
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
  }
  getHerokuData() {
    this.value = 75;
    this.showProgressBar = true;
    return this.httpClinet.get('https://my-node-server-one.herokuapp.com/products').subscribe((data: Products) => {
      this.count = data.count;
      this.products = data.product;
      this.value = 100;
      this.showProgressBar = false;
    });
  }
  getProductDetails(url) {
    return this.httpClinet.get(url).subscribe((product: Product) => {
      this.product = product;
    });
  }
  // postProduct(formData: any) {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Authorization': 'my-auth-token'
  //     })
  //   };
  //   console.log(formData.value);
  //   return this.httpClinet.post('https://my-node-server-one.herokuapp.com/products', formData.value, httpOptions)
  //     .subscribe((successData: AddedProduct) => {
  //       this.addedProducts.push(successData.createdProduct);
  //     }, (error) => {
  //       console.log(error);
  //     });
  // }
}
