import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DigitPipe } from './pipes/digit.pipe';
import { DigitsDirective } from './directive/digits.directive';


const MODULES = [ CommonModule, HttpClientModule ]
const EXPORT_MODULES = [ DigitsDirective, HttpClientModule, CommonModule ]

@NgModule({
  declarations: [DigitPipe, DigitsDirective],
  imports: MODULES,
  exports : EXPORT_MODULES
})
export class SharedModule { }
