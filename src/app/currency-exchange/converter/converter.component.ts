import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent {
  @ViewChild('dropdown', { static: false }) dropdown?: ElementRef;
  @ViewChild('select', { static: false }) select?: ElementRef;
  selected?: string;
  selectedValue?: string;
  inputValue!: number;
  outputValue: string = '';
  options = ['EGP', 'USD', 'SAR', 'EUR'];

  getSelectValue() {


    // alert(`Input filed value${this.inputValue}`)
    // alert(`Input filed value${this.outputValue}`)

    if (!isNaN(this.inputValue) && this.inputValue > 0) {
      const storeAmount = this.inputValue;

    }
  }
}
