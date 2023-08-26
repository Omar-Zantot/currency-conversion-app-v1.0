import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'loader',
  template: ` <div class="lds-spinner">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>`,
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    document.body.classList.add('overflow-hidden');
  }
  ngOnDestroy(): void {
    document.body.classList.remove('overflow-hidden');
  }
}
