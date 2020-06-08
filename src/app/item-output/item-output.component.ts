import { Component, Output, EventEmitter } from '@angular/core';
//EventEmitter should be imported from core
@Component({
  selector: 'app-item-output',
  template: `
    <p>
      item-output works!
    </p>
    
    <label> Add an Item <input #newItem></label>
    <button (click)="addNewItem(newItem.value);newItem.value='';"> Add item to parent list</button>
  `,
  //<input #newItem> get the input from Item by the name of newitem ==> to use it newItem.value
  styles: [
  ]
})
export class ItemOutputComponent{
  //addToChildEventEmitter is an event
  @Output() addToChildEventEmitter = new EventEmitter<String>();
  addNewItem(value:string){
      this.addToChildEventEmitter.emit(value);    
  }
}
