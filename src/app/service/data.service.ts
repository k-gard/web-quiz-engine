import { API_ALL_QUIZZES, API_CREATE_QUIZ, API_GET_QUIZZES_PAGE, API_QUIZ_BY_ID, API_USER_QUIZZES_PAGE, GET_SOLVED_QUIZZES } from './../app.constants';
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


  createquiz(quiz: any): any{
    return this.http.post(
    API_URL + API_CREATE_QUIZ, quiz
    );
  }

    registerUser(user: User): Observable<any> {
      const httpheaders = { 'content-type': 'application/json'} ;
      const body = JSON.stringify(user);
      console.log(API_URL + API_REGISTER_USER);
      return this.http.post(API_URL + API_REGISTER_USER, body, {headers : httpheaders});
    }

    getQuizzesPageNumber(pageNumber: number): Observable<any>{
      return this.http.get<any>(API_URL + API_GET_QUIZZES_PAGE + pageNumber );

    }

    getAllQuizzes(): Observable<any>{
      return this.http.get<any>(API_URL + API_ALL_QUIZZES );

    }

    getUsersQuizzes(pageNumber: number): Observable<any>{
      return this.http.get<any>(API_URL + API_USER_QUIZZES_PAGE + pageNumber );

    }

    getSolvedQuizzes(pageNumber: number): Observable<any>{
      return this.http.get<any>(API_URL + GET_SOLVED_QUIZZES /*+ pageNumber*/ );

    }

    getQuizzById(id: number): Observable<any>{
      return this.http.get<any>(API_URL + API_QUIZ_BY_ID + id );
    }

    solveQuiz(id: number, ans: number[]): Observable<any>{
      return this.http.post<any>(API_URL + API_QUIZ_BY_ID + id + '/solve', {answer: ans});
    }

    deleteQuiz(id: number): Observable<any>{
      return this.http.delete<any>(API_URL + API_QUIZ_BY_ID + id, {observe: 'response'});
    }

}





