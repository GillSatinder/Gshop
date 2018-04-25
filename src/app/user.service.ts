import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {User} from './User';

/* tslint:disable */
const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'
  })
};



@Injectable()
export class UserService {
  private isUserLoggedIn;
  private userInformation;
  constructor(private http: HttpClient) {
    this.isUserLoggedIn = false;
  }


  saveUser(user: User) {
    const body = {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: user.password,
      isAdmin: user.isAdmin
    };
    const url = 'http://localhost:8000/api/users';
    this.http.post<User>(url, body, httpOptions)
       .subscribe(res => {});
  }
  checkUser(email, password)
  {
    const url = 'http://localhost:8000/api/auth';
    const body = { email: email, password: password };
    this.userInformation = this.http.post(url,body,httpOptions);
    return this.http.post(url,body,httpOptions);

  }
  setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }
  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }
  getLoggedUser() {
    return this.userInformation;
  }
  getUser() {
    return this.getLoggedUser();
  }
  save() {
    return null;
  }
}
