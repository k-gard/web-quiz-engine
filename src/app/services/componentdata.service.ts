import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Quiz } from '../models/quiz';

@Injectable({
  providedIn: 'root'
})
export class ComponentdataService {

  list: Quiz[] = [];
  quiz: Quiz | null = null;
  selected: boolean[] = []
  selectedIndexes: number[] = [];

  private listSource = new BehaviorSubject(this.list);
  private quizSource = new BehaviorSubject(this.quiz);
  private selectedSource = new BehaviorSubject(this.selected);
  private selectedIndexesSource = new BehaviorSubject(this.selectedIndexes);

  currentList = this.listSource.asObservable();
  currentQuiz = this.quizSource.asObservable();
  currentSelected = this.selectedSource.asObservable();
  currentSelectedIndexes = this.selectedIndexesSource.asObservable();

  constructor() { }

  changeList(list: Quiz[]) {
    this.listSource.next(list)
  }
  changeQuiz(quiz: any) {
    this.quizSource.next(quiz);
  }
  changeSelected(index: number,value: boolean){
    this.selected[index] = value;
    this.selectedSource.next(this.selected);
  }
  changeSelectedIndexes(selectedIndexes: number[]){
    this.selectedIndexesSource.next(selectedIndexes);
  }

}
