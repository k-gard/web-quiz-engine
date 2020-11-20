import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin(): void {
    if (this.username === 'test@test.com' && this.password === 'test@test.com'){
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;

    }
    else
    {
      this.invalidLogin = true;
    }
  }




}
