import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedauthenticationService } from '../hardcodedauthentication.service';
import { BasicAuthenticationService } from '../service/basicauthentication.service';

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

  constructor(private router: Router , private authenticationService: BasicAuthenticationService) { }

  ngOnInit(): void {
  }


  handleLogin(): void {
    this.authenticationService.authenticate(this.username, this.password).subscribe(
      (      data: any) => {
        console.log(data),
        this.router.navigate(['welcome', this.username]),
        this.invalidLogin = false;
      },
      (      error: any) => {
        console.log(error),
        this.invalidLogin = true;
      }
    );
  }




}
