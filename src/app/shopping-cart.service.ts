import { Injectable, Input, Output } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {Product} from './product';
import {Item} from './Item';
/* tslint:disable */
const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'
  })};
@Injectable()
export class ShoppingCartService {
  @Input() product: Product;
  @Input() showActions = true;
  @Output() items: Item[] = [];
  @Input() shoppingCart;
  private totalQuantity = 0;
  private total = 0;
  constructor() {
    console.log('These are the items ' + this.items);
  }


  loadCart(): void {
    this.items = [];
    this.total = 0;
    this.totalQuantity = 0;
    const cart = JSON.parse(localStorage.getItem('cart'));
    for (let i = 0; i < cart.length; ++i) {
      const item = JSON.parse(cart[i]);
      this.items.push({
        product: item.product,
        quantity: item.quantity
      });
      this.total += item.product.price * item.quantity;
      this.totalQuantity += item.quantity;
      localStorage.setItem('totalQuantity', JSON.stringify(this.totalQuantity));
    }
  }
  addToCart(product: Product) {
    const product_id = product.product_id;
    if (product_id) {
        let item: Item = {
            product: product,
            quantity: 1
          };
      if (localStorage.getItem('cart') == null) {
        const cart: any = [];
        cart.push(JSON.stringify(item));
        localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        const cart: any = JSON.parse(localStorage.getItem('cart'));
        let index = -1;
        for (let i = 0; i < cart.length; i++ ) {
          const citem = JSON.parse(cart[i]);
          if (citem.product.product_id === product_id) {
            index = i;
            break;
          }
        }
        if (index === -1) {
          cart.push(JSON.stringify(item));
          localStorage.setItem('cart', JSON.stringify(cart));
        } else {
          item = JSON.parse(cart[index]);
          item.quantity = item.quantity + 1;
          cart[index] = JSON.stringify(item);
          localStorage.setItem('cart', JSON.stringify(cart));
        }
      }

      this.loadCart();
    } else {
       this.loadCart();
      }

  }
  deleteFromCart(product: Product) {
    const product_id = product.product_id;
    if (product_id)  {
      let item: Item = {
        product: product,
        quantity: -1
      };
      if (localStorage.getItem('cart') == null) {
        const cart: any = [];
        cart.push(JSON.stringify(item));
        localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        const cart: any = JSON.parse(localStorage.getItem('cart'));
        let index = -1;
        for (let i = 0; i < cart.length; i++ ) {
          const citem = JSON.parse(cart[i]);
          if (citem.product.product_id === product_id) {
            index = i;
            break;
          }
        }
        if (index === -1) {
          cart.push(JSON.stringify(item));
          localStorage.setItem('cart', JSON.stringify(cart));
        } else {
          item = JSON.parse(cart[index]);
          item.quantity = item.quantity - 1;
          cart[index] = JSON.stringify(item);
          localStorage.setItem('cart', JSON.stringify(cart));
        }
      }

      this.loadCart();
    } else {
      this.loadCart();
    }

  }
}
