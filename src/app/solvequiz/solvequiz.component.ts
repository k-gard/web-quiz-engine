import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  feedback = '';
  constructor(private route: ActivatedRoute , private dataservice: DataService) { }
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
                 this.title = response.title;}
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
   });
}
}
