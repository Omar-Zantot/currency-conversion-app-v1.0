import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConverterComponent } from './converter/converter.component';
import { CompareComponent } from './compare/compare.component';
import { FormsModule } from '@angular/forms';
import { SelectorComponent } from './selector/selector/selector.component';

@NgModule({
  declarations: [ConverterComponent, CompareComponent, SelectorComponent],
  imports: [CommonModule, FormsModule],
  exports: [ConverterComponent, CompareComponent, SelectorComponent],
})
export class CurrencyExchangeModule {}
