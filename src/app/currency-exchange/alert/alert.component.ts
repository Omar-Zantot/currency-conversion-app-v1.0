// import { Component } from '@angular/core';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  @Input() errorMessage = '';
  @Output() close = new EventEmitter<void>();

  closeAlert() {
    this.close.emit();
  }
}
