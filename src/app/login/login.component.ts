import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /* user = 'aviral'
  pass = 'pass' */
  user
  pass
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  //Router
  //Angular.giveMeRouter
  //Dependency Injection | Constructor Injection
  constructor(private router : Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {
  }

  /* handleLogin(){
    //console.log(this.user)
    //if(this.user==='aviral' && this.pass==='pass'){ 
      if(this.hardcodedAuthenticationService.authenticate(this.user,this.pass)){
      //Redirect to Welcome Page
      this.router.navigate(['welcome',this.user])
      this.invalidLogin = false
    }else{
      this.invalidLogin = true
    }
  } */

/*   handleBasicAuthLogin(){// return an observable, an asynchronous call
      this.basicAuthenticationService.executeAuthenticationService(this.user,this.pass)
      .subscribe(
        data => {
          console.log(data)
          //Redirect to Welcome Page
          this.router.navigate(['welcome',this.user])
          this.invalidLogin = false
        },
        error =>{
          console.log(error)
          this.invalidLogin = true
        }
      )
  } */

  handleJWTAuthLogin(){
    this.basicAuthenticationService.executeJWTAuthenticationService(this.user,this.pass)
    .subscribe(
      data => {
        console.log(data)
        //Redirect to Welcome Page
        this.router.navigate(['welcome',this.user])
        this.invalidLogin = false
      },
      error =>{
        console.log(error)
        this.invalidLogin = true
      }
    )
}

}
