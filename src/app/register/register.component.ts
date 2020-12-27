import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username = '';
  password = '';
  verifyPassword = '';
  passwordsMatch = true;
  passwordDontMatchError = 'Passwords do not match' ;
  error = '';
  InputError = false;
  constructor(private dataService: DataService , private router: Router) { }

  ngOnInit(): void {
  }

  registerHandler(){
    if (this.password === this.verifyPassword){
      const user = new User(this.username, this.password);
      this.dataService.registerUser(user).subscribe(
        (response: Response) => this.router.navigate(['welcome', this.username]),
        (error) => (console.log(error),
        console.log(error.error.message),
        this.error = error.error.message,
        this.InputError = true
      )
      );
    }
    else{
      this.passwordsMatch = false;
    }
  }

}
