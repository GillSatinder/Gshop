import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../user.service';
import {User} from '../User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {

  user = {};
  constructor(private userService: UserService) { }


  signUp(user: User) {
  this.userService.saveUser(user);
  }
}
