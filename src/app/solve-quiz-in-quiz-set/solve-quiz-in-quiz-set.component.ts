import { Quiz } from './../models/quiz';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Output } from '@angular/core';
import { QuizSet } from '../models/quizSet';

@Component({
  selector: 'app-solve-quiz-in-quiz-set',
  templateUrl: './solve-quiz-in-quiz-set.component.html',
  styleUrls: ['./solve-quiz-in-quiz-set.component.css']
})


export class SolveQuizInQuizSetComponent implements OnInit {


  @Input() quizSet!: QuizSet ;
  @Output() finishedStatus = new EventEmitter<number>();

  success = false;
  answered = false;
  inTime = true;
  feedback = '';
  counter = 200;
  progressBarVisible = true;
  finished = false;
  score: any = [];
  timer_!: any;
  constructor(private dataservice: DataService  ) {

   }
  ans1 = false;
  ans2 = false;
  ans3 = false;
  ans4 = false;
  quizIndex = 0;
  quiz!:Quiz;
  ngOnInit(): void {
    this.quiz = this.quizSet.quizzes[this.quizIndex];
    console.log(this.quizSet);
                this.timer();
  }

  nextQuiz(): void {
    console.log(this.quizIndex);
    if(this.quizIndex < this.quizSet.quizzes.length-1){
    this.quizIndex += 1;
    this.quiz = this.quizSet.quizzes[this.quizIndex];
    this.timer();
    this.progressBarVisible = true;
    }else{
    this.finished = true;
    console.log(this.score);
    this.finishedStatus.emit(this.calculateScore());
    }
  }


  answerQuiz(): void{
   const answer = [];
   if (this.ans1 === true){answer.push(0); }
   if (this.ans2 === true){answer.push(1); }
   if (this.ans3 === true){answer.push(2); }
   if (this.ans4 === true){answer.push(3); }
   this.answered = true;
   if(this.quiz.id !== undefined){
   this.dataservice.solveQuiz(this.quiz.id, answer).subscribe(response => {console.log(response);
                                                                           this.success = response.success;
                                                                            if(this.success === true){
                                                                            this.score[this.quizIndex] = 1;}
                                                                            else{this.score[this.quizIndex] = 0;}
                                                                           this.feedback = response.feedback;

   });
   this.progressBarVisible = false;
   window.clearInterval(this.timer_);
   this.ans1 = false;
   this.ans2 = false;
   this.ans3 = false;
   this.ans4 = false;
   window.setTimeout(()=>{
    this.counter = 200;
    this.nextQuiz();
  },500);
  }

}

timer(): void{
this.timer_ = window.setInterval( () => {this.inTime = true;
   if (this.counter > 0 ){this.counter -= 1; }
   else{this.inTime = false;
    window.clearInterval(this.timer_);
    this.progressBarVisible = false;
        window.setTimeout(()=>{
          this.counter = 200;
          this.nextQuiz();
        },500);
      }
    }, 100 );
}

calculateScore(): number{
  let totalScore = 0;
  this.score.forEach((x: any) => {
    totalScore += x;
  });
  return totalScore;

}


}

