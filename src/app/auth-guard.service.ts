import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import 'rxjs/add/operator/map';
import {UserService} from './user.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private user: UserService, private router: Router) {}


 canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.router.navigate(['login']);
    return this.user.getUserLoggedIn();
 }









  // canActivate(route, state: RouterStateSnapshot) {
  //   return this.auth.user$.map(user => {
  //     if (user) { return true; }
  //
  //     this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
  //     return false;
  //   });}

}
