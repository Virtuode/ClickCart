import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-error',
  imports: [],
  templateUrl: './error.html',
  styleUrl: './error.css',
})
export class Error {

  @Input() title: string = 'Connection Error';
  @Input() message: string = 'Something went wrong while fetching data.';
  @Input() icon: string = 'error_outline';
  
  @Output() onRetry = new EventEmitter<void>();

  handleRetry() {
    this.onRetry.emit();
  }

}
