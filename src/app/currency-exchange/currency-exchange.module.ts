import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConverterComponent } from './converter/converter.component';
import { CompareComponent } from './compare/compare.component';
import { FormsModule } from '@angular/forms';
import { SelectorComponent } from './selector/selector/selector.component';
import { SharedModule } from '../shared/shared.module';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    ConverterComponent,
    CompareComponent,
    SelectorComponent,
    AlertComponent,
  ],
  imports: [CommonModule, FormsModule, SharedModule],
  exports: [
    ConverterComponent,
    CompareComponent,
    SelectorComponent,
    AlertComponent,
  ],
})
export class CurrencyExchangeModule {}
