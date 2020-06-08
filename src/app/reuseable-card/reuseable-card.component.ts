import { Component} from '@angular/core';

@Component({
  selector: 'app-reuseable-card',
  template:`
  <div class="card">
    <div class ="card-header">
      header is reusable
      </div>
      <div class="card-body">
      body is reusable
      </div>
  </div>
  `,
  styles: [
  ]
})
export class ReuseableCardComponent {

}
