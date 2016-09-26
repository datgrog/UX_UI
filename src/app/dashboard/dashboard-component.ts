import {Component} from '@angular/core';

@Component({
  selector: 'fountain-dashboard',
  template: require('./dashboard-component.html')
})
export class DashboardComponent {
  public text: string;

  constructor() {
    this.text = 'My brand new component!';
  }
}
