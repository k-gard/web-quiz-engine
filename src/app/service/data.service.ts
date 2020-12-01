import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  createquiz(quiz: any, username: string, password: string): any{
    return this.http.post(
    `http://localhost:8889/api/quiz/`, quiz, this.createBasicAuthenticationHttpHeader(username, password)
    );
  }

    registerUser(user: User): any {
      const httpheaders = { 'content-type': 'application/json'} ;
      const body = JSON.stringify(user);
      console.log(body);
      return this.http.post('http://localhost:8889/api/register', body, {headers : httpheaders});


      // return this.httpclient.post(
      //   `http://localhost:8889/api/register`, user
      //   );
    }

    createBasicAuthenticationHttpHeader(username: string, password: string): object {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-Type', 'application/json');
    httpHeaders.append('Authorization', 'Basic ' + btoa(username + ':' + password));

    const httpOptions = {
      headers: httpHeaders
    };
    return httpOptions;
    }
}





