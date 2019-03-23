import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Products, Product, AddedProduct } from './models/productModel';
import { catchError, retry } from 'rxjs/operators';
import { ErrorHandlerServiceConfigService } from './error-handler-service-config.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-list',
  templateUrl: './product-customer-list.component.html',
  styleUrls: ['./product-customer-list.component.css']
})
export class ProductListComponent implements OnInit {
  count: number;
  products: Array<any> = [];
  product: Product;
  addedProducts: Array<Product> = [];
  constructor(private httpClinet: HttpClient, private errorHandler: ErrorHandlerServiceConfigService) { }

  ngOnInit() {

  }
  getHerokuData() {
    return this.httpClinet.get('https://my-node-server-one.herokuapp.com/products').subscribe((data: Products) => {
      this.count = data.count;
      this.products = data.product;
    });
  }
  getProductDetails(url) {
    return this.httpClinet.get(url).subscribe((product: Product) => {
      this.product = product;
    });
  }
  postProduct(formData: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    console.log(formData.value);
    return this.httpClinet.post('https://my-node-server-one.herokuapp.com/products', formData.value, httpOptions)
      .subscribe((successData: AddedProduct) => {
        this.addedProducts.push(successData.createdProduct);
      }, (error) => {
        console.log(error);
      });
  }
}
