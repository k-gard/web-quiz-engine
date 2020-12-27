import { BasicAuthenticationService } from './basicauthentication.service';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor(private basicauthenticationservice: BasicAuthenticationService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let username = this.basicauthenticationservice.getAuthenticatedUser();
    let BasicAuthHeaderString = this.basicauthenticationservice.getAuthenticatedToken();
    console.log(username);
    if (username && BasicAuthHeaderString) {
    req = req.clone({setHeaders: {Authorization: BasicAuthHeaderString}});
  }


    return next.handle(req);

  }

  createBasicAuthenticationHttpHeader(username: string, password: string) {
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('Authorization', 'Basic ' + window.btoa(username + ':' + password));
    console.log(username + ':' + password);
    console.log(httpHeaders);
    const httpOptions = {
      headers: httpHeaders
    };
    return httpOptions;
    }






}

