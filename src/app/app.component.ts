import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  //for element button we have (event) with small case

  //u can send the entire event as parameter ==> access in template with $Event
  template : '<button (click)="clickme($event)">Click me</button>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject';
  clickme(e){
    console.log('btn clicked',e);
    alert('clicked');
  }
}
