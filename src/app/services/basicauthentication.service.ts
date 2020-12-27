import { API_LOGIN, API_URL, AUTHENTICATED_USER, TOKEN } from '../app.constants';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {


  constructor(private http: HttpClient) { }
  authenticate(username: string, password: string): any  {
   console.log(username);
   return this.http.get<ResponseEntity>(API_URL + API_LOGIN, this.createBasicAuthenticationHttpHeader(username , password)).pipe(
    map(data => {
      sessionStorage.setItem(AUTHENTICATED_USER, username);
      sessionStorage.setItem(TOKEN, 'Basic ' + window.btoa(username + ':' + password));
      return data; }
    )
      );

  }

  getAuthenticatedUser(): string|null {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken(): string|null {
    if (this.getAuthenticatedUser()){
      return sessionStorage.getItem(TOKEN);
  }
    return null;
}

  isUserLoggedIn(): boolean {
    const user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  logout(): void{
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }



  createBasicAuthenticationHttpHeader(username: string, password: string): any {
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('Content-Type', 'application/json');
    httpHeaders = httpHeaders.append('Authorization', 'Basic ' + window.btoa(username + ':' + password));
    const httpOptions = {
      headers: httpHeaders
    };
    return httpOptions;
    }

  }

export class ResponseEntity{
  constructor(public message: string){}
}
