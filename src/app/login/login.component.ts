import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password = '';
  invalid = false;

  constructor() { }

  ngOnInit(): void {
  }

  loginClicked(){
    console.log(this.username);
    console.log(this.password);
    if(this.username==='kshitij' && this.password==='kshitij0512'){
      this.invalid = false;
    }
    else{
      this.invalid = true;
    }
  }

}
