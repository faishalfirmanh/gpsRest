import { Component } from '@angular/core';

/**
 * Generated class for the TrackingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tracking',
  templateUrl: 'tracking.html'
})
export class TrackingComponent {

  text: string;

  constructor() {
    console.log('Hello TrackingComponent Component');
    this.text = 'Hello World';
  }

}
