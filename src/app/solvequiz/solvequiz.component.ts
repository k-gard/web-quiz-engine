import { DataService } from '../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';





@Component({
  selector: 'app-solvequiz',
  templateUrl: './solvequiz.component.html',
  styleUrls: ['./solvequiz.component.css']
})
export class SolvequizComponent implements OnInit {
  title = '';
  question = '';
  options = [];
  id = 0;
  success = false;
  answered = false;
  inTime = true;
  feedback = '';
  counter = 100;
  constructor(private route: ActivatedRoute , private dataservice: DataService ,private router: Router) { }
  ans1 = false;
  ans2 = false;
  ans3 = false;
  ans4 = false;
  ngOnInit(): void {
   this.id = this.route.snapshot.params.id;
   this.dataservice.getQuizzById(this.id).subscribe(
    response => {console.log(response);

                 this.options = response.options;
                 console.log(this.options[0]);
                 this.question = response.text;
                 this.title = response.title;
                 this.timer(); }
   );
  }
  answerQuiz(): void{
   const answer = [];
   if (this.ans1 === true){answer.push(0); }
   if (this.ans2 === true){answer.push(1); }
   if (this.ans3 === true){answer.push(2); }
   if (this.ans4 === true){answer.push(3); }
   console.log(answer);
   this.answered = true;
   this.dataservice.solveQuiz(this.id, answer).subscribe(response => {console.log(response);
                                                                      this.success = response.success;
                                                                      this.feedback = response.feedback;
                                                                      this.reloadComponent();
   });
}

timer(): void{
  window.setInterval(() => { if (this.counter > 0 ){this.counter = this.counter - 1; }else{this.inTime = false;} } , 100 );
}

reloadComponent() {
  let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
  }

}
