import { SolvedQuiz } from './../models/solvedQuiz';
import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from '../models/quiz';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-solvedquizzes',
  templateUrl: './solvedquizzes.component.html',
  styleUrls: ['./solvedquizzes.component.css']
})
export class SolvedquizzesComponent implements OnInit {



  constructor(private dataservice: DataService , private router: Router) { }

  list: SolvedQuiz[] = [];
  allQuizzesList: Quiz[] = [];
  page = 0;
  totalPages = 0;
  myquizzes = false;
  pages: number[] = [];
  displayedColumns = ['id', 'text', 'title'];
  quizId = -1;



  ngOnInit(): void {


    this.getSolvedQuizzes(0);
    this.getQuizzes(this.list);

  }

  getQuizzes(list: SolvedQuiz[]): void{
  for (const sq of list){
    this.dataservice.getQuizzById(sq.quizId).subscribe( response => {
      console.log(response);
      const quiz = new Quiz(response.title, response.text, response.options, response.answer);
      quiz.id = sq.quizId;
      sq.quiz = quiz;  });
  }

  }




  getSolvedQuizzes(pageNumber: number): void{
    this.dataservice.getSolvedQuizzes(pageNumber).subscribe(
      (response: any) => { this.list = response.content;

                           console.log(this.list);
                           this.totalPages = response.totalPages;
                           this.pages = Array(this.totalPages).fill(null).map((x, i) => i);
                           console.log(this.pages);
                           console.log(this.list);
                           this.getQuizzes(this.list);
                           console.log(this.list);
                          }
    );

}







}
