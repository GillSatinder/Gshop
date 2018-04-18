import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AppUser} from './model/app-user';
import {UserService} from './user.service';
import 'rxjs/add/observable/of';


@Injectable()
export class AuthService {
user$;

constructor(private afAuth: AngularFireAuth,
            private route: ActivatedRoute,
            private userService: UserService) {

            this.user$ = afAuth.authState;
           }

  login() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    const x = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithRedirect(x);
  }
  logout() {
    this.afAuth.auth.signOut();
  }
  get appUser$(): Observable<AppUser> {
  return this.user$.switchMap(user => {
    if (user) {
      // return this.userService.getUser(user.uid);
    }

    return Observable.of(null);
  });

  }
}
