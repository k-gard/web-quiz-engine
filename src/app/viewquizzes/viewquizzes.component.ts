import { ComponentdataService } from '../services/componentdata.service';
import { Router } from '@angular/router';
import { AppModule } from './../app.module';
import { MatTableModule, MatTableDataSource  } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models/quiz';
import { DataService } from '../services/data.service';
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-viewquizzes',
  templateUrl: './viewquizzes.component.html',
  styleUrls: ['./viewquizzes.component.css']
})
export class ViewquizzesComponent implements OnInit {

  constructor(private dataservice: DataService , private router: Router ,private componentData: ComponentdataService) { }

  list: Quiz[] = [];
  allQuizzesList: Quiz[] = [];
  page = 0;
  totalPages = 0;
  pages: number[] = [];
  quizId = -1;
  selected: boolean[] = [];
  q : boolean[] =[];
  quizSet: Quiz[] = [];
  addedToSet: boolean[] = [];
  selectedPage : number = 0
  totalElements = 0;
  selectedIndexes: number[] = [];

  ngOnInit(): void {

    this.getQuizzesPage(0);
    this.selected = Array(this.totalElements).fill(false);
    this.componentData.currentSelected.subscribe(selected => this.selected = selected);
    //this.componentData.currentSelectedIndexes.subscribe(selected => this.selectedIndexes = selected);
  }


  getQuizzesPage(pageNumber: number): void{
    this.dataservice.getQuizzesPageNumber(pageNumber).subscribe(
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

createQuizSet(): void {
  this.selected.forEach((element,index) => {
    if (element){
      this.quizSet[index] = this.list[index];
    }
  });

  console.log(this.quizSet);
  this.componentData.changeList(this.quizSet);
}

  addToSet(quiz: Quiz,selectedIndex: number): void {
    console.log(this.selectedIndexes);
    this.quizSet.push(quiz);
  //  console.log(this.selected);
    this.selected[selectedIndex] = true;
    this.selectedIndexes.push(selectedIndex);
  //  console.log(this.quizSet);
    this.componentData.changeList(this.quizSet);
    this.componentData.changeSelectedIndexes(this.selectedIndexes);
    this.componentData.changeSelected(selectedIndex,true);
  }

  removeFromSet(quiz: Quiz,selectedIndex: number): void {
    console.log(this.selectedIndexes);
      this.quizSet.splice(this.quizSet.indexOf(quiz),1);
      this.selected[selectedIndex] = false;
      this.selectedIndexes.splice(selectedIndex,1);
 //     console.log(this.quizSet);
      this.componentData.changeList(this.quizSet);
      this.componentData.changeSelectedIndexes(this.selectedIndexes);
      this.componentData.changeSelected(selectedIndex,false);
    }

}
