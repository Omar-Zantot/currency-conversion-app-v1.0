import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
})
export class CustomSelectComponent implements OnInit {
  selectedOption: number | null = null;

  options: { name: string; image: string }[] = [
    { name: 'Option 1', image: './../../../assets/images/egy.png' },
    {
      name: 'Option 2',
      image:
        './../../../assets/images/usd.static.e8b657d1161a08a32415d284a8e1dc89 1.png',
    },
    { name: 'Option 3', image: './../../../assets/images/egy.png' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
