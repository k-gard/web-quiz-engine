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
  counter = 100;
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
    this.quizIndex += 1;
    this.quiz = this.quizSet.quizzes[this.quizIndex];
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
  }
}

timer(): void{
 window.setInterval( () => {
   if (this.counter > 0 ){this.counter -= 1; }
   else{this.inTime = false;
    window.setTimeout(()=>{this.nextQuiz();},1000)
    ;} } , 100 );
}

//this.counter = 100;

}

