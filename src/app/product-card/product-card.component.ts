import {Component, OnInit, Input, Output} from '@angular/core';
import {Product} from '../product';
import {Item} from '../Item';
import 'rxjs/add/operator/map';
import {ShoppingCartService} from '../shopping-cart.service';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  @Input() showActions = true;
  @Output() items: Item[];
  @Input() shoppingCart;

  constructor (private cartService: ShoppingCartService) {

  }

  addToCart (product: Product) {
    this.cartService.addToCart(product);
  }

  deleteFromCart (product: Product) {
    this.cartService.deleteFromCart(product);
  }

  ngOnInit () {}

  getQuantity(id) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (id && cart) {
      for (let x = 0; x < cart.length; ++x) {
        const item = JSON.parse(cart[x]);
        if (item.product.product_id === id) {
          return item.quantity;
        }
      }
    }
  }

}
