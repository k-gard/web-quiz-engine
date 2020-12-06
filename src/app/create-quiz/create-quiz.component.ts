import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models/quiz';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {

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



  ans = new Array();

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
  }

  createQuiz(): void{
    const opt = [this.opt1, this.opt2 , this.opt3 , this.opt4];
    if ( this.ans1 === true){this.ans.push(0); }
    if ( this.ans2 === true){this.ans.push(1); }
    if ( this.ans3 === true){this.ans.push(2); }
    if ( this.ans4 === true){this.ans.push(3); }
    const quiz = new Quiz( this.title, this.text, opt, this.ans);

    const postQuiz = {
      title : quiz.title,
      text  : quiz.text,
      options : quiz.options,
      answer : quiz.answer,
    };



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
