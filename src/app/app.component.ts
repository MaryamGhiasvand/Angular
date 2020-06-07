import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
   templateUrl: './app.component.html',
  /*
    //for element button we have (event) with small case

    //u can send the entire event as parameter ==> access in template with $Event
    template : '<p> <input type="text" #myInput><br/><button (click)="clickme($event,myInput)">Click me</button>'+
    '<p>test attr + event Binding </p>'+
    //access variable in template directly , in component with this
    '<p> <input type="text" [value]="attrBind" (input)="attrBind=$event.target.value"></p> {{attrBind}}'+
    //[value] = propertyBinding => for bind attrBind to input
    //(input) is event to call related method and change the value in {{}}
    '<p>test TwoWay Binding </p>'+
    '<p> <input [(ngModel)]="twoWayVar" (keyup.enter)="twoWayBinding()"> </p>',
  */

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject';
  attrBind="DefaultAttrVal";
  twoWayVar="Default2WayVal"
  twoWayBinding(){
    alert('twoWayVar : '+ this.twoWayVar);
  }
  clickme(e,myInput :HTMLInputElement){
    console.log('btn clicked',e);
    alert('inputText : '+ myInput.value);
  }
}
