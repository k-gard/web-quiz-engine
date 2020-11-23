import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedauthenticationService {

  constructor() { }
  authenticate(username: string,password: string)  {
    sessionStorage.setItem('authenticatedUser',username);
    if (username === 'test@test.com' && password === 'test@test.com'){
      return true;
    }
    return false;
  }

  isUserLoggedIn() : boolean{
   let user = sessionStorage.getItem('authenticatedUser');
   return !(user === null);
  }
}
