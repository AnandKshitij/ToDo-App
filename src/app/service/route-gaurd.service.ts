import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root',
})
export class RouteGaurdService implements CanActivate {
  constructor(
    private hardcodedAuthentication: HardcodedAuthenticationService,
    private router: Router
  ) {}


  // route will be activated only when the user is logged in
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcodedAuthentication.isUserLoggedIn()){
      return true;
    } 
    else{
      this.router.navigate(['login']);
      return false;
    }
  }
}
