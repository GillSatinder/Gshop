import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {User} from '../User';
/* tslint:disable */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean;
  user: any;

  constructor(private userService: UserService,
              private router: Router) { }

  loginUser(f) {
    const email = Object.values(f)[0];
    const password = Object.values(f)[1];
    const x = this.userService.checkUser(email, password);
    x.subscribe(res => {
      this.user = res;
    });
    if (this.user)
    {
      this.router.navigate(['/']);
      this.userService.setUserLoggedIn();
    }
    else
    {
      this.router.navigate(['/login']);
      this.invalidLogin = true;
    }

  }
}
