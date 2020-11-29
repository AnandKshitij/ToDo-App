import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  loggedIn = new EventEmitter<string>();
  loggedOut = new EventEmitter<void>();

  constructor(private router: Router) { }

  authenticate(username: string, password: string){
    if(username==='kshitij' && password==='kshitij0512'){
      // stores value=username for key=authenticatedUser
      sessionStorage.setItem('authenticatedUser', username);
      this.loggedIn.emit(username);
      return true;
    }
    else{
      return false;
    }
  }

  // to check if user is loggedIn or not
  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    if(user===null){
      return false;
    }
    else{
      return true;
    }
  }

  logoutClicked(){
    sessionStorage.clear();
    this.loggedOut.emit();
  }
}
