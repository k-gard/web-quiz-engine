import { BasicAuthenticationService } from './basicauthentication.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedauthenticationService } from '../hardcodedauthentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {


  constructor(private basicAuthenticationService: BasicAuthenticationService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot){
    if (this.basicAuthenticationService.isUserLoggedIn()){

      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
