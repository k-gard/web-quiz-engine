import { Router } from '@angular/router';
import { AppModule } from './../app.module';
import { MatTableModule, MatTableDataSource  } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models/quiz';
import { DataService } from '../service/data.service';
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-viewquizzes',
  templateUrl: './viewquizzes.component.html',
  styleUrls: ['./viewquizzes.component.css']
})
export class ViewquizzesComponent implements OnInit {

  constructor(private dataservice: DataService , private router: Router) { }

  list: Quiz[] = [];
  allQuizzesList: Quiz[] = [];
  page = 0;
  totalPages = 0;
  myquizzes = false;
  pages: number[] = [];
  displayedColumns = ['id', 'text', 'title'];
  quizId = -1;



  ngOnInit(): void {
    if (this.router.url.includes('myquizzes')){
    this.myquizzes = true;
    this.getUserQuizzes(0);
    }else{
    this.getQuizzesPage(0);
    this.myquizzes = false;
    }

  }
  getQuizzesPage(pageNumber: number): void{
    this.dataservice.getQuizzesPageNumber(pageNumber).subscribe(
      (response: any) => { this.list = response.content;
                           console.log(this.list);
                           this.totalPages = response.totalPages;
                           this.pages = Array(this.totalPages).fill(null).map((x, i) => i);
                          }
    );
  }


  getUserQuizzes(pageNumber: number): void{
    this.dataservice.getUsersQuizzes(pageNumber).subscribe(
      (response: any) => { this.list = response.content;
                           console.log(this.list);
                           this.totalPages = response.totalPages;
                           this.pages = Array(this.totalPages).fill(null).map((x, i) => i);
                          }
    );

}

setQuizID(id: number | undefined){
  if (typeof id === 'number'){
  this.quizId = id; }
}


deleteQuiz(id: number|undefined): void{
  console.log(id);
  if ( typeof id === 'number') {
  this.dataservice.deleteQuiz(id).subscribe(
    (response: HttpResponse<any>) => {if (response.status === 204){
      this.list.splice(this.list.findIndex(q => q.id === id), 1);
    } }
  );
  }

}
}
