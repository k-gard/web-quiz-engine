import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedauthenticationService } from '../hardcodedauthentication.service';

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

  constructor(private router: Router , private hardcodedauthenticationService: HardcodedauthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin(): void {
    if (this.hardcodedauthenticationService.authenticate(this.username, this.password)){
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;

    }
    else
    {
      this.invalidLogin = true;
    }
  }




}
