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

  success = false;
  answered = false;
  inTime = true;
  feedback = '';
  counter = 200;
  progressBarVisible = true;
  finished = false;
  constructor(private dataservice: DataService ) {

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
    if(this.quizIndex < this.quizSet.quizzes.length){
    this.quizIndex += 1;
    this.quiz = this.quizSet.quizzes[this.quizIndex];
    this.timer();
    this.progressBarVisible = true;
    }else{
    this.finished = true;
    }
  }
  // ngOnChanges(): void{
  // }

  answerQuiz(): void{
   const answer = [];
   if (this.ans1 === true){answer.push(0); }
   if (this.ans2 === true){answer.push(1); }
   if (this.ans3 === true){answer.push(2); }
   if (this.ans4 === true){answer.push(3); }
   console.log(answer);
   this.answered = true;
   if(this.quiz.id !== undefined){
   this.dataservice.solveQuiz(this.quiz.id, answer).subscribe(response => {console.log(response);
                                                                      this.success = response.success;
                                                                      this.feedback = response.feedback;


   });
   this.progressBarVisible = false;
   this.counter=0;
   window.setTimeout(()=>{ this.nextQuiz();
  },2000);

  }
}

timer(): void{
const timer = window.setInterval( () => {this.inTime = true;

   if (this.counter > 0 ){this.counter -= 1; }
   else{this.inTime = false;
    window.clearInterval(timer);
    this.progressBarVisible = false;
    //this.counter = 200;
        window.setTimeout(()=>{
          this.counter = 200;

          this.nextQuiz();
        },2000);
      }
    }, 100 );

  // window.setInterval( ()=>{
  //   this.progressBarVisible = true;
  //   this.nextQuiz()}
  //   , 22000 );
}



}

