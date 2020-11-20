import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solvequiz',
  templateUrl: './solvequiz.component.html',
  styleUrls: ['./solvequiz.component.css']
})
export class SolvequizComponent implements OnInit {

  options = ['MySQL is a database management system.','MySQL databases are relational.','MySQL software is Open Source.','The MySQL Database Server is fast, reliable, scalable, and easy to use.']

  constructor() { }
  ans1 = false;
  ans2 = false;
  ans3 = false;
  ans4 = false;
  ngOnInit(): void {
  }
  answerQuiz(): void{
   const answer = [];
   if (this.ans1 === true){answer.push(0); }
   if (this.ans2 === true){answer.push(1); }
   if (this.ans3 === true){answer.push(2); }
   if (this.ans4 === true){answer.push(3); }
   console.log(answer);
  }
}
