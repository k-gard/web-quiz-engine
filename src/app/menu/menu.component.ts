import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HardcodedauthenticationService } from '../hardcodedauthentication.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  message = 'Welcome';
  name = '';
  constructor(private route: ActivatedRoute, private hardcodedAuthenticationService
    : HardcodedauthenticationService) { }


  ngOnInit(): void {
    this.name = this.route.snapshot.params.name;
  }

  Logout(): void {
    sessionStorage.removeItem("authenticatedUser");
  }
}

