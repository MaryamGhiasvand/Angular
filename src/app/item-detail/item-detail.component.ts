import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  template: `
    <p>
      item-detail works! {{InputTitle}}
    </p>
  `,
  styles: [
  ]
})
export class ItemDetailComponent {
  //same as attr for tag of component name
  @Input() InputTitle:String = "";

}
