import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password = '';
  invalid = false;

  constructor(private router: Router, private hardcodedAuthentication: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  loginClicked(){
    console.log(this.username);
    console.log(this.password);
    
    if(this.hardcodedAuthentication.authenticate(this.username, this.password)){
      // redirect to welcome page
      this.router.navigate(['welcome', this.username]);
      this.invalid = false;
    }
    else{
      this.invalid = true;
    }
  }

}
