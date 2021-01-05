import { QuizSet } from './../models/quizSet';
import { ComponentdataService } from './../services/componentdata.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppModule } from './../app.module';
import { MatTableModule, MatTableDataSource  } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models/quiz';
import { DataService } from '../services/data.service';
import { HttpResponse } from '@angular/common/http';



@Component({
  selector: 'app-view-quiz-sets',
  templateUrl: './view-quiz-sets.component.html',
  styleUrls: ['./view-quiz-sets.component.css']
})
export class ViewQuizSetsComponent implements OnInit {

  constructor(private dataservice: DataService , private router: Router ,private componentData: ComponentdataService ,private activatedRoute: ActivatedRoute) { }

  list: QuizSet[] = [];
  allQuizzesList: Quiz[] = [];
  page = 0;
  totalPages = 0;
  pages: number[] = [];
  quizId = -1;
  selected: boolean[] = [];
  q : boolean[] =[];
  quizSet: QuizSet[] = [];
  addedToSet: boolean[] = [];
  selectedPage : number = 0
  totalElements = 0;
  selectedIndexes: number[] = [];

  ngOnInit(): void {

    this.getQuizzSetsPage(0);
    this.selected = Array(this.totalElements).fill(false);
    this.componentData.currentSelected.subscribe(selected => this.selected = selected);
    //this.componentData.currentSelectedIndexes.subscribe(selected => this.selectedIndexes = selected);
  }


  getQuizzSetsPage(pageNumber: number): void{
    this.dataservice.getQuizSetsPaged(pageNumber).subscribe(
      (response: any) => { this.list = response.content;
                     //      console.log(this.list);
                           this.totalPages = response.totalPages;
                           this.totalElements = response.totalElements;
                           this.pages = Array(this.totalPages).fill(null).map((x, i) => i);

                           this.selectedPage = pageNumber;

                          }
    );
  }




  getUserQuizzes(pageNumber: number): void{
    this.dataservice.getUsersQuizzes(pageNumber).subscribe(
      (response: any) => { this.list = response.content;
                   //        console.log(this.list);
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

solveQuizSet(quizSet: QuizSet): void{
  //console.log(quizSet);
  this.componentData.changeQuizSet(quizSet);
  this.router.navigate(["./solveQuizSet/"+quizSet.id],{relativeTo: this.activatedRoute.parent});

}

}
