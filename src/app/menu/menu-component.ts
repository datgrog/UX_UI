import {Component} from '@angular/core';

@Component({
  selector: 'fountain-menu',
  template: require('./menu-component.html')
})
export class MenuComponent {
  public text: string;

  constructor() {
    this.text = 'My brand new component!';
  }
}
