import { DataService } from '../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  quizzesSolved = 0;
  quizzesCreated = 0;
  quizSetsCreated = 0;
  quizSetsSolved = 0;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getStats().subscribe(
      (response) => {
        this.quizzesCreated = response.quizzesCreated;
        this.quizzesSolved = response.quizzesSolved;
        this.quizSetsCreated = response.quizSetsCreated;
        this.quizSetsSolved = response.quizSetsSolved;

         console.log(response);
      }
    )
  }



}
