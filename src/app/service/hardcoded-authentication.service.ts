import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  
  constructor() { }

  authenticate(user, pass){
    console.log('before '+this.isUserLoggedIn());
    if(user==='aviral' && pass==='pass'){
      sessionStorage.setItem('authenticatedUser',user);
      console.log('after '+this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user===null)
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
