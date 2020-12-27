import { SidebarComponent } from './../sidebar/sidebar.component';
import { Router } from '@angular/router';
import { ComponentdataService } from '../services/componentdata.service';
import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models/quiz';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {

  quizForm!: FormGroup ;

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

  constructor(private dataservice: DataService, private componentDataService: ComponentdataService , private router: Router)  { }

  ngOnInit(): void {
    this.quizForm = new FormGroup({
      title: new FormControl(this.title, Validators.required),
      text: new FormControl(this.text, Validators.required),
      opt1: new FormControl(this.opt1, Validators.required),
      opt2: new FormControl(this.opt2, Validators.required),
      opt3: new FormControl(this.opt3, Validators.required),
      opt4: new FormControl(this.opt4, Validators.required),
      ans1: new FormControl(false, Validators.required),
      ans2: new FormControl(false, Validators.required),
      ans3: new FormControl(false, Validators.required),
      ans4: new FormControl(false, Validators.required)
      });

  }

  createQuiz(): void{
     this.opt1 = this.quizForm.get('opt1')?.value;
     this.opt2 = this.quizForm.get('opt2')?.value;
     this.opt3 = this.quizForm.get('opt3')?.value;
     this.opt4 = this.quizForm.get('opt4')?.value;


     const opt = [this.opt1, this.opt2 , this.opt3 , this.opt4];
     if ( this.quizForm.get('ans1')?.value === true){this.ans.push(0); }
     if ( this.quizForm.get('ans2')?.value === true){this.ans.push(1); }
     if ( this.quizForm.get('ans3')?.value === true){this.ans.push(2); }
     if ( this.quizForm.get('ans4')?.value === true){this.ans.push(3); }
     const quiz = new Quiz( this.quizForm.get('title')?.value, this.quizForm.get('text')?.value, opt, this.ans);

     const postQuiz = {
       title : quiz.title,
       text  : quiz.text,
       options : quiz.options,
       answer : quiz.answer,
     };
     console.log(postQuiz);
     if (!this.router.url.valueOf().toLowerCase().match('set')){
       console.log('createquiz');
       this.postQuiz(postQuiz); }
      else {this.componentDataService.changeQuiz(postQuiz);
      }

  }


postQuiz(postQuiz: any): any {
  console.log(postQuiz.answer.length);
  if ( postQuiz.answer.length === 0 ){
  this.answerError = true;
  return;
  }

  this.dataservice.createquiz(postQuiz).subscribe(
      (response: Response) => {this.created = true,
                               this.reloadComponent(),
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


  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }
}


