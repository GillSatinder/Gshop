import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './product';
import {ActivatedRoute, Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'
  })
};



@Injectable()
export class ProductService {
product: Product;
  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private router: Router) { }

  getAllProducts() {
   return this.http.get('http://ec2-13-236-67-227.ap-southeast-2.compute.amazonaws.com/api/products');
  }

  getProductById(id) {
    if (id) {

      this.http.get('http://localhost:8000/api/products/' + id)
        .subscribe((result: any) => {
          this.product = result;
        });
      console.log('Here is the product' + this.product.title);
      return this.product;
    } else {
      this.product = null;
      return this.product;
    }
  }


}
