import { Router } from '@angular/router';
import { AppModule } from './../app.module';
import { MatTableModule, MatTableDataSource  } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models/quiz';
import { DataService } from '../services/data.service';
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-myquizzes',
  templateUrl: './myquizzes.component.html',
  styleUrls: ['./myquizzes.component.css']
})
export class MyquizzesComponent implements OnInit {

  constructor(private dataservice: DataService , private router: Router) { }

  list: Quiz[] = [];
  allQuizzesList: Quiz[] = [];
  page = 0;
  totalPages = 0;
  myquizzes = false;
  pages: number[] = [];
  displayedColumns = ['id', 'text', 'title'];
  quizId = -1;
  selectedPage =0


  ngOnInit(): void {


    this.getUserQuizzes(0);

  }



  getUserQuizzes(pageNumber: number): void{
    this.dataservice.getUsersQuizzes(pageNumber).subscribe(
      (response: any) => { console.log(response);
                           this.list = response.content;
                           console.log(this.list);
                           this.totalPages = response.totalPages;

                           this.pages = Array(this.totalPages).fill(null).map((x, i) => i);
                           this.selectedPage = pageNumber;
                           console.log(this.pages);
                          }
    );

}

setQuizID(id: number | undefined): void{
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
