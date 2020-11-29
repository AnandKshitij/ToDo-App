import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  userLogged: boolean = false;
  constructor(
    private hardcodedAuthentication: HardcodedAuthenticationService
  ) {}

  ngOnInit(): void {
    this.hardcodedAuthentication.loggedIn.subscribe(
      (username) => {
        this.userLogged = true;
      }
    );
    this.hardcodedAuthentication.loggedOut.subscribe(
      () => {
        this.userLogged = false;
      }
    );
  }
}
