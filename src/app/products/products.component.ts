import {Component, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../product';
import 'rxjs/add/operator/switchMap';
import {ProductService} from '../product.service';
import {ShoppingCartService} from '../shopping-cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products: Product [] = [];
@Input() categories;
filteredProducts: Product [];
cart: any;
category: string;
  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private shoppingCartService: ShoppingCartService) {

    this.productService.getAllProducts()
      .switchMap(products => {this.products = Object.values(products);
      return route.queryParamMap; })
      .subscribe(params => {
        this.category = params.get('category');
        this.filteredProducts = (this.category) ?
          this.products.filter(p => p.category === this.category) : this.products;
      });
  }
  ngOnInit() {
    this.cart = localStorage.getItem('cart');
  }

}























// this.http.get('http://localhost:8000/api/products')
//   .switchMap(products => {this.products = Object.values(products);
//   return route.queryParamMap; })
//   .subscribe(params => {
//       this.category = params.get('category');
//
//       this.filteredProducts = (this.category) ?
//         this.products.filter(p => p.category === this.category) : this.products;
//   });
//

// this.http.get('http://localhost:8000/api/categories')
//   .subscribe(res => {
//     this.categories = res;
//   });
