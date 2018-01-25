import { Component, OnInit, DoCheck } from '@angular/core';
import { AccountService } from '../../account/account.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css'],
})
export class LoggedComponent implements DoCheck {
  isLogged:boolean=false;
  ngDoCheck(): void {
    this.isLogged=this.accountService.isLoggedIn();
  }

  constructor(private accountService: AccountService, private router: Router) { }

  logOut() {
    this.accountService.logOut();
    this.router.navigate(["account"]);
  }

}
