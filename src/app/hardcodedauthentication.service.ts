import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CREATE_QUIZ, API_URL } from './app.constants';

@Injectable({
  providedIn: 'root'
})
export class HardcodedauthenticationService {

  constructor(private http: HttpClient) { }
  authenticate(username: string,password: string)  {
    sessionStorage.setItem('authenticatedUser',username);
    if (username === 'test@test.com' && password === 'test@test.com'){
      return true;
    }

    return false;
  }

  authenticate2(username: string,password: string)   {
    sessionStorage.setItem('authenticatedUser',username);
    // if (username === 'test@test.com' && password === 'test@test.com'){
    //   return true;
    // }

     let basicAuthHeaderString = this.createBasicAuthenticationHeader();

     let headers = new HttpHeaders({
         Authorization: basicAuthHeaderString
       })


    console.log(API_URL+'api/users/test@gmail.com');
    this.http.get<any>(API_URL+'api/users/test@gmail.com',this.createBasicAuthenticationHttpHeader('test@gmail.com','secret')).subscribe(
      (response: Response) => {console.log(response);},
      (error: Error) => {console.log(error);}

    );


     return false;
  }


  createBasicAuthenticationHeader() {
      let username = 'test@gmail.com'
      let password = 'secret'
      let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
      return basicAuthHeaderString;
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

  isUserLoggedIn() : boolean{
   let user = sessionStorage.getItem('authenticatedUser');
   return !(user === null);
  }
}
