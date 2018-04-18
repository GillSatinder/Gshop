import {Component, Input, OnDestroy, OnInit, Output} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../product';
import {Subscription} from 'rxjs/Subscription';
import { DataTableResource } from 'angular-4-data-table';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
   @Output() @Input() products: Product [];
   subscription: Subscription;
   filteredProducts: Product [];


  constructor(private http: HttpClient) {
   this.subscription = this.http.get('http://localhost:8000/api/products')
      .subscribe(res => {
        this.filteredProducts = this.products = Object.values(res);
      });

  }
  ngOnInit() {
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  filter(query) {
    // this.filteredProducts = (query) ?
     //  this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : this.products;

     if (query) {
       this.filteredProducts = this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase()));
     } else {
       this.filteredProducts = this.products;
     }
  }

}
