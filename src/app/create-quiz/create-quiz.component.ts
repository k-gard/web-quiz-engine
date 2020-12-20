import { Router } from '@angular/router';
import { ComponentdataService } from './../service/componentdata.service';
import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models/quiz';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../service/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {

  quizForm!:FormGroup ;

  QuizCreated = 'Quiz created';
  created = false;
  title = '';
  text = '';
  opt1 = '';
  opt2 = '';
  opt3 = '';
  opt4 = '';

  ans1 = false;
  ans2 = false;
  ans3 = false;
  ans4 = false;

  answerError = false;

  ans = new Array();

  constructor(private dataservice: DataService, private componentDataService: ComponentdataService ,private router: Router )  { }

  ngOnInit(): void {
    this.quizForm = new FormGroup({
      title: new FormControl(this.title, Validators.required),
      text: new FormControl(this.text, Validators.required),
      opt1: new FormControl(this.opt1, Validators.required),
      opt2: new FormControl(this.opt2, Validators.required),
      opt3: new FormControl(this.opt3, Validators.required),
      opt4: new FormControl(this.opt4, Validators.required),
      ans: new FormControl(false, Validators.required),

      }),

    console.log(this.router.url.valueOf());
  }

  createQuiz(): void{
    const opt = [this.opt1, this.opt2 , this.opt3 , this.opt4];
    if ( this.ans1 === true){this.ans.push(0); }
    if ( this.ans2 === true){this.ans.push(1); }
    if ( this.ans3 === true){this.ans.push(2); }
    if ( this.ans4 === true){this.ans.push(3); }
    const quiz = new Quiz( this.title, this.text, opt, this.ans);

    let postQuiz = {
      title : quiz.title,
      text  : quiz.text,
      options : quiz.options,
      answer : quiz.answer,
    };

    if(!this.router.url.valueOf().toLowerCase().match('set')){
      console.log('createquiz');
    this.postQuiz(postQuiz);}
    else {this.componentDataService.changeQuiz(postQuiz);
      console.log('createquizSet');}

  }


postQuiz(postQuiz: any): any {

  if ( !(this.ans1 || this.ans2 || this.ans3 || this.ans4) ){
  this.answerError = true;
  return;
}

    this.dataservice.createquiz( postQuiz).subscribe(
      (response: Response) => {console.log(response),
                               this.created = true,
                               this.title = '';
                               this.text = '';
                               this.opt1 = '';
                               this.opt2 = '';
                               this.opt3 = '';
                               this.opt4 = '';
                               this.ans1 = false;
                               this.ans2 = false;
                               this.ans3 = false;
                               this.ans4 = false; },
      (error: Error) => {console.log(error.message); }
      );


  }
}


