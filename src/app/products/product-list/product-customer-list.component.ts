import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products, Product } from './models/productModel';

@Component({
  selector: 'app-customer-list',
  templateUrl: './product-customer-list.component.html',
  styleUrls: ['./product-customer-list.component.css']
})
export class ProductListComponent implements OnInit {
  count: number;
  products: Array<any>;
  product: Product;
  constructor(private httpClinet: HttpClient) { }

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

}
