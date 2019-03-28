import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Product, AddedProduct } from '../product-list/models/productModel';
import { ErrorHandlerServiceConfigService } from '../product-list/error-handler-service-config.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  addedProducts: Array<Product> = [];
  constructor(private httpClinet: HttpClient, private errorHandler: ErrorHandlerServiceConfigService) { }

  ngOnInit() {
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
