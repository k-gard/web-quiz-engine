import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { User } from '../models/user';
import { API_REGISTER_USER, API_URL } from '../app.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  createquiz(quiz: any, username: string, password: string): any{
    return this.http.post(
    `http://localhost:8889/api/quizzes/`, quiz, this.createBasicAuthenticationHttpHeader(username, password)
    );
  }

    registerUser(user: User): Observable<any> {
      const httpheaders = { 'content-type': 'application/json'} ;
      const body = JSON.stringify(user);
      console.log(API_URL+API_REGISTER_USER);
      return this.http.post(API_URL+API_REGISTER_USER, body, {headers : httpheaders});


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





