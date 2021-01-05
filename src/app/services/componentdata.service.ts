import { QuizSet } from './../models/quizSet';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Quiz } from '../models/quiz';

@Injectable({
  providedIn: 'root'
})
export class ComponentdataService {

  constructor() { }

 //Communication between createQuiz and createQuizSet Components
  quiz: Quiz | null = null;
  private quizSource = new BehaviorSubject(this.quiz);
  currentQuiz = this.quizSource.asObservable();
  changeQuiz(quiz: any) {
    this.quizSource.next(quiz);
  }

  //Communication between viewQuiz ,viewQuizSets and createQuizSet Components
  list: Quiz[] = [];
  selected: boolean[] = []
  selectedIndexes: number[] = [];
  private listSource = new BehaviorSubject(this.list);

  private selectedSource = new BehaviorSubject(this.selected);
  private selectedIndexesSource = new BehaviorSubject(this.selectedIndexes);
  currentList = this.listSource.asObservable();
  currentSelected = this.selectedSource.asObservable();
  currentSelectedIndexes = this.selectedIndexesSource.asObservable();

  changeList(list: Quiz[]) {
    this.listSource.next(list)
  }



  changeSelected(index: number,value: boolean){
    this.selected[index] = value;
    this.selectedSource.next(this.selected);
  }
  changeSelectedIndexes(selectedIndexes: number[]){
    this.selectedIndexesSource.next(selectedIndexes);
  }

  //Communication between viewQuiz and viewQuizSets Components
  selectedQuizSets: number[] = [];
  private selectedQuizSetsSource = new BehaviorSubject(this.selectedQuizSets);
  currentSelectedQuizSet = this.selectedQuizSetsSource.asObservable();

  changeSelectedQuizSets(selectedQuizSet: number[]){
    this.selectedQuizSetsSource.next(selectedQuizSet);
  }



  //Communication between viewQuizSets and solveQuizSet Components
  quizSet: QuizSet|null = null;
  private QuizSetSource = new BehaviorSubject(this.quizSet);
  currentQuizSet = this.QuizSetSource.asObservable();

  changeQuizSet(quizSet: QuizSet){
    this.QuizSetSource.next(quizSet);
  }




}
