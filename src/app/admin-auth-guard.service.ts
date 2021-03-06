import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
@Injectable()
export class AdminAuthGuardService implements CanActivate{

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate() {
    return this.auth.user$.switchMap(user => {
    return this.userService.getUser();
    })
    .map(appUser => appUser.isAdmin);
  }

}
