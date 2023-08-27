import { Component,ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss'],
})
export class CompareComponent {
  @ViewChild('selectfrom',{static:false}) selectfrom?:ElementRef;
  @ViewChild('selecttarget1',{static:false}) selecttarget1?:ElementRef;
  @ViewChild('selecttarget2',{static:false}) selecttarget2?:ElementRef;
  selectedvalue1?:string;
  selectedvalue2?:string;
  selectedvalue3?:string;
  inputValue:string='';
  //inputValue!: string;
  
  currencies=['egy','sar','usd'];

  getSelectedValue()
  {
    this.selectedvalue1=this.selectfrom?.nativeElement.value;
    this.selectedvalue2=this.selecttarget1?.nativeElement.value;
    this.selectedvalue2=this.selecttarget2?.nativeElement.value;
  }
}
