import { Router } from '@angular/router';
import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

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
  constructor(private dataService: DataService , private router: Router) { }

  ngOnInit(): void {
  }

  registerHandler(){
    if (this.password === this.verifyPassword){
      const user = new User(this.username, this.password);
      this.dataService.registerUser(user).subscribe(
        (response: Response) => this.router.navigate(['welcome', this.username])
      );
    }
    else{
      this.passwordsMatch = false;
    }
  }

}
