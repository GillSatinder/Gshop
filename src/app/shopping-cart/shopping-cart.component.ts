import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import {ShoppingCartService} from '../shopping-cart.service';
import {ProductService} from '../product.service';
import {ActivatedRoute} from '@angular/router';
import {Item} from '../Item';
/* tslint:disable */

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{

  @Input() product: Product;
  @Input() showActions = true;
  items: Item [] = [];
  cart: any = [];
  private total = 0;

  constructor() {}

  ngOnInit()
  {
    if (this.cart.length)
      console.log('Whats is this ' + this.cart.length);
    this.cart = JSON.parse(localStorage.getItem('cart'));
    for (var x = 0 ; x < this.cart.length; ++x )
    {
      this.items[x] = JSON.parse(this.cart[x]);
      this.total += this.items[x].quantity * this.items[x].product.price;

    }

  }
}

