import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from '../shopping-cart.service';
import {UserService} from '../user.service';
/* tslint:disable */
@Component({
  selector: 'app-bs-navbar',
   templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent  implements OnInit {
  tQ1;
  loggedUser;
  constructor(private userService: UserService) {}

    ngOnInit() {
    this.tQ1 = JSON.parse(localStorage.getItem('totalQuantity'));
  }
  getUser() {
    this.userService.getLoggedUser()
      .subscribe(res => {
       this.loggedUser = Object.values(res)[1];
      });
    console.log(this.loggedUser);

  }
}
