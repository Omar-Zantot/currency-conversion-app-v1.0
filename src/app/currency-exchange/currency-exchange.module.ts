import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConverterComponent } from './converter/converter.component';
import { CompareComponent } from './compare/compare.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ConverterComponent, CompareComponent],
  imports: [CommonModule, FormsModule],
  exports: [ConverterComponent, CompareComponent],
})
export class CurrencyExchangeModule {}
