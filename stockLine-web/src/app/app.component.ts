import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  options: [any]
  selectedOption: any
  left_active: boolean
  constructor() {
    this.options = [
      { value: 'jack', label: 'Jack' },
      { value: 'lucy', label: 'Lucy' },
      { value: 'disabled', label: 'Disabled', disabled: true }
    ];
    this.selectedOption = this.options[ 0 ];
    this.left_active = false;
  }

  toggleLeft() {
    this.left_active = !this.left_active;
  }
}
