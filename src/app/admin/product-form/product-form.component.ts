import { Component, Input} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Product} from '../../product';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'
  })
};

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  categories$;
  product = {};
  product_id;



  constructor (private http: HttpClient,
               private route: ActivatedRoute,
               private router: Router,
               private location: Location) {

    this.http.get('http://localhost:8000/api/categories')
      .subscribe(res => {
      this.categories$ = res;
      });

    this.product_id = this.route.snapshot.paramMap.get('product_id');
    console.log('ID ' + this.product_id);
     this.getProduct(this.product_id);
  }

  save(product: Product) {
    if (this.product_id) {
       this.update(this.product_id, this.product);
     } else {
       const body = {
         product_id: product.product_id,
         title: product.title,
         price: product.price,
         category: product.category,
         imageUrl: product.imageUrl
       };

      // const body = {
      //   product_id: 3,
      //   title: 'Kiwi',
      //   price: 1,
      //   category: 'fruits',
      //   imageUrl: 'll'
      // };
      console.log('Body is ' + body.product_id);
      console.log('Body is ' + body.title);
      console.log('Body is ' + body.price);
      console.log('Body is ' + body.category);
      console.log('Body is ' + body.imageUrl);
      const url = 'http://localhost:8000/api/products';
      this.http.post<Product>(url, body, httpOptions)
        .subscribe(res => {});
      this.router.navigate(['/admin/products']);
    }

  }
  getProduct(product_id) {
    if (product_id) {
      const p = this.http
        .get('http://localhost:8000/api/products/' + product_id + '/edit');
      p.subscribe(res => {
        this.product = res;

      });
    } else {
      this.product = {};
    }

  }
  update(product_id, product) {
    const body = {
      product_id: product.product_id,
      title: product.title,
      price: product.price,
      category: product.category,
      imageUrl: product.imageUrl};
    const url = 'http://localhost:8000/api/products/' + product_id;
    this.http.put<Product>(url, body, httpOptions)
      .subscribe(res => {
        console.log(res);
      });
    this.router.navigate(['/admin/products']);
  }
  deleteProduct() {
    const url = 'http://localhost:8000/api/products/';
    if (!confirm('Are you sure you want to delete this product?')) { return; }
    console.log('ID ' + this.product_id);
      this.http.delete(url + this.product_id)
        .subscribe(res => { });
    this.router.navigate(['/admin/products']);
  }
}
