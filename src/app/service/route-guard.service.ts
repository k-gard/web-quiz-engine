import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedauthenticationService } from '../hardcodedauthentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {


  constructor(private hardcodedAuthenticationService: HardcodedauthenticationService,
    private router : Router) { }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot){
    if (this.hardcodedAuthenticationService.isUserLoggedIn()){

      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
