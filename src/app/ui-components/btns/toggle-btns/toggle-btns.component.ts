import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface ToggleDataModel {
  title: string;
  status: string;
}
@Component({
  selector: 'toggle-btns',
  templateUrl: './toggle-btns.component.html',
  styleUrls: ['./toggle-btns.component.scss'],
})
export class ToggleBtnsComponent implements OnInit {
  @Input() toggleData: ToggleDataModel[] = [];
  @Input() currentActiveBtn?: string;

  @Output() setActive$ = new EventEmitter<string>();

  ngOnInit(): void {
    if (!this.currentActiveBtn && this.toggleData?.length)
      this.currentActiveBtn = this.toggleData[0].status;
  }

  setActiveBtn(status: string) {
    this.currentActiveBtn = status;
    this.setActive$.emit(status);
  }
}
