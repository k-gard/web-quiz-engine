import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username = ''
  password = ''
  verifyPassword = ''
  passwordsMatch = true
  passwordDontMatchError = "Passwords do not match"
  constructor() { }

  ngOnInit(): void {
  }

  registerHandler(){
    if (this.password == this.verifyPassword){
      alert();
    }
    else{
      this.passwordsMatch = false
    }
  }

}
