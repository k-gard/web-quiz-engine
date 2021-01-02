import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from './../services/data.service';
import { from, Observable } from 'rxjs';
import { ComponentdataService } from './../services/componentdata.service';
import { QuizSet } from './../models/quizSet';
import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models/quiz';




@Component({
  selector: 'app-createquiz-set',
  templateUrl: './createquiz-set.component.html',
  styleUrls: ['./createquiz-set.component.css']
})
export class CreatequizSetComponent implements OnInit {


  constructor(private componentData: ComponentdataService, private data: DataService ) { }

  formGroup!: FormGroup;
  title = '';
  description = '';
  category = '';
  existingList: Quiz[] = [];
  createQuiz = false;
  addfromList = false;
  listItems = '';
  createList: Quiz[] = [];
  totalList: Quiz[] = [];
  selectedIndexes: number[] = [];
  listError = false;

  ngOnInit(): void {

    this.formGroup = new FormGroup( {description: new FormControl(this.description, Validators.required),
                                     category: new FormControl(this.category, Validators.required)});

    this.componentData.currentList.subscribe(list => {this.existingList = list;

                                                      this.updateTotalList();
    });

    this.componentData.currentQuiz.subscribe(quiz => {if (quiz !== null){console.log(quiz),
      this.createList.push(quiz),
                                                                         this.totalList = this.existingList.concat(this.createList);
                                                                         this.updateTotalList();
    }});

    this.componentData.currentSelectedIndexes.subscribe(selectedIndexes => this.selectedIndexes = selectedIndexes);

  }



  createQuizList(): void{

  }

  createQuizSet(): void{

    //console.log(this.totalList);
    if (this.totalList.length < 5){ this.listError = true ; return; }
    const quizSet = new QuizSet(this.category, this.description, this.totalList);
    this.data.createQuizSet(quizSet).subscribe((response: Response) => { console.log(response); } );

  }

  updateTotalList(): void{
    this.totalList = this.existingList.concat(this.createList);
  }

 deleteListElement(index: number): void{


  console.log(index);

  console.log(this.selectedIndexes);
  for (let i = 0 ; i < this.existingList.length ; i++){
    if (this.existingList[i].id === this.totalList[index].id ){
      this.existingList.splice(i, 1);
    }
  }

  for (let i = 0 ; i < this.createList.length ; i++){
      if(this.createList[i].title === this.totalList[index].title && this.createList[i].text === this.totalList[index].text){
      this.createList.splice(i, 1);
      }
  }

  this.updateTotalList();
  this.componentData.changeSelected(this.selectedIndexes[index], false);
  this.selectedIndexes.splice(index, 1);


}

}
