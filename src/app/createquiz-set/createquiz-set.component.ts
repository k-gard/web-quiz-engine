import { Observable } from 'rxjs';
import { ComponentdataService } from './../service/componentdata.service';
import { QuizSet } from './../models/quizSet';
import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models/quiz';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';


@Component({
  selector: 'app-createquiz-set',
  templateUrl: './createquiz-set.component.html',
  styleUrls: ['./createquiz-set.component.css']
})
export class CreatequizSetComponent implements OnInit {


  constructor(private data: ComponentdataService) { }

  title: string ='';
  description: string ='';
  category: string = '';
  existingList: Quiz[] = [];
  createQuiz: boolean = false;
  addfromList: boolean = false;
  listItems = '';
  createList: Quiz[] =[];
  total_list: Quiz[] = [];
  selectedIndexes: number[] = [];

  ngOnInit(): void {
    this.data.currentList.subscribe(list => {this.existingList = list;

      this.updateTotalList();
    });

    this.data.currentQuiz.subscribe(quiz => {if(quiz !== null){this.createList.push(quiz)
      this.total_list = this.existingList.concat(this.createList);
      this.updateTotalList();
    }});

    this.data.currentSelectedIndexes.subscribe(selectedIndexes => this.selectedIndexes = selectedIndexes);

  }



  createQuizList():void{

  }

  createQuizSet(): void{
    console.log(this.selectedIndexes);

  }

  updateTotalList(): void{
    this.total_list =this.existingList.concat(this.createList);
  }

 deleteListElement(index: number): void{


  console.log(index);


  for(let i = 0 ;i < this.existingList.length ; i++){
    if (this.existingList[i].id === this.total_list[index].id ){
      this.existingList.splice(i,1);
    }
  }

    for(let i = 0 ;i < this.createList.length ; i++){
      if(this.createList[i].title === this.total_list[index].title && this.createList[i].text === this.total_list[index].text){
        this.createList.splice(i,1);
      }
  }

  this.updateTotalList();
  this.data.changeSelected(this.selectedIndexes[index],false);
  this.selectedIndexes.splice(index,1);


}

}
