import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent {
  title = 'Northwind App';
  public options={
    position:["bottom","right"],
    timeOut:3000,
    lastOnBottom:true
  }
}
