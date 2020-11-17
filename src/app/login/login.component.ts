import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ""
  password = ""
  errorMessage = "Invalid Credentials"
  invalidLogin = false

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  handleLogin(): void {
    if (this.username == "user" && this.password == "pass"){
      this.router.navigate(["welcome"])
      this.invalidLogin = false;

    }
    else
    {
      this.invalidLogin = true;
    }
  }




}
