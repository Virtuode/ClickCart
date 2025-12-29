import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {

  @Input() variant: 'primary' | 'secondary' | 'outline' = 'primary';

  get variantClass(): string {
    const styles = {
      primary: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-200',
      secondary: 'bg-black text-white hover:bg-gray-800',
      outline: 'bg-white border-2 border-gray-100 text-gray-700 hover:bg-gray-50'
    };
    return styles[this.variant];
  }

}
