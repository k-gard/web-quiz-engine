import { SolveQuizInQuizSetComponent } from './../solve-quiz-in-quiz-set/solve-quiz-in-quiz-set.component';
import { QuizSet } from './../models/quizSet';
import { ComponentdataService } from './../services/componentdata.service';
import { SolvequizComponent } from './../solvequiz/solvequiz.component';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models/quiz';


@Component({
  selector: 'app-solve-quiz-set',
  templateUrl: './solve-quiz-set.component.html',
  styleUrls: ['./solve-quiz-set.component.css']
})
export class SolveQuizSetComponent implements OnInit {

  started: boolean = false;
  timeUp = false;
  finished = false;
  score = 0;
  success = false;

  constructor(private componentdata: ComponentdataService,private SolveQuizInQuizSetComponent: SolveQuizInQuizSetComponent) {
  }

  quizSet!: QuizSet;

  ngOnInit(): void {
    this.componentdata.currentQuizSet.subscribe(
      quizSet =>{if (quizSet != undefined) {this.quizSet = quizSet}});
  }

  start(): void{
    this.started = true;
  }




solve(i: number): void {

}

onFinished(score: number) {
  this.finished = true;
  this.started = false;
  this.score = score;
  if (score > this.quizSet.quizzes.length/2){
    this.success = true;
  }else{
    this.success = false;
  }
}



}
