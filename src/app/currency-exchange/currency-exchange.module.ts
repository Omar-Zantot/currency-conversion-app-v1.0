import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConverterComponent } from './converter/converter.component';
import { CompareComponent } from './compare/compare.component';
import { FormsModule } from '@angular/forms';
import { CustomSelectComponent } from './custom-select/custom-select.component';


@NgModule({
  declarations: [ConverterComponent, CompareComponent, CustomSelectComponent],
  imports: [CommonModule, FormsModule],
  exports: [ConverterComponent, CompareComponent, CustomSelectComponent],
})
export class CurrencyExchangeModule {}
