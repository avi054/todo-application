import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //isUserLoggedIn : boolean = false;

  //Autowired by constructor in Angular
  constructor(private hardcodedAuthenticationService : HardcodedAuthenticationService) 
  { }

  ngOnInit() {
    //This is a flaw since the ngOnInit() is called only once initially...
    //this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
  }

}
