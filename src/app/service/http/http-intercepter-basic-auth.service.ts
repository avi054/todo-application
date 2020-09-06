import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(
    private basicAuthenticationService: BasicAuthenticationService
  ) { }


  intercept(request: HttpRequest<any>, next: HttpHandler) {
    /* let username='aviral'
    let password='pass'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username+':'+password) */

    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser();

    if (basicAuthHeaderString && username) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      })
    }
    return next.handle(request);  // this is the modified request after
    // adding the Authroization in the header
    /*
     An HttpInterceptor would enable us to add specific request header to every request
    */

  }
}
