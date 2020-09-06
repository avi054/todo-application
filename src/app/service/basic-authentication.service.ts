import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {
  
  constructor(private http: HttpClient) { }

  executeJWTAuthenticationService(user, pass){
    
    return this.http.post<any>(`${API_URL}/authenticate`,{username : user, password :pass})
    .pipe(
      map(
        data=>{
          sessionStorage.setItem(AUTHENTICATED_USER,user);
          sessionStorage.setItem(TOKEN,`Bearer ${data.token}`);
          return data;//who so ever is subscribing will get this data
        }
      )
    );
  }

 /*  executeAuthenticationService(user, pass){
    let basicAuthHeaderString = 'Basic ' + window.btoa(user+':'+pass)
  
    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`,
    {headers: header}).pipe(
      map(
        data=>{
          sessionStorage.setItem(AUTHENTICATED_USER,user);
          sessionStorage.setItem(TOKEN,basicAuthHeaderString);
          return data;//who so ever is subscribing will get this data
        }
      )
    );
  } */

  getAuthenticatedUser(){//utility method
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken(){//utility method
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN)
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user===null)
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}

export class AuthenticationBean {
  constructor(public message : string) {
    
  }
}
