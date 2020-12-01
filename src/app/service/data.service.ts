import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient: HttpClient) { }


  createquiz(quiz: JSON,username: string,password: string){
    return this.httpclient.post(
    `http://localhost:8889/api/quiz/`,quiz,this.createBasicAuthenticationHttpHeader(username,password)

    );
  }


  createBasicAuthenticationHttpHeader(username: string,password: string) {
    var headers_object = new HttpHeaders();
    headers_object.append('Content-Type', 'application/json');
    headers_object.append("Authorization", "Basic " + btoa(username+":"+password));

    const httpOptions = {
      headers: headers_object
    };
    return httpOptions;
    }
}





