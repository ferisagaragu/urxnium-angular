import { NgModule } from '@angular/core';
import { InputMaskDirective } from '../directives/input-mask.directive';
import { inputmaskInjectJs } from '../inject-js/inputmask-inject-js';

@NgModule({
  declarations: [InputMaskDirective],
  exports: [
    InputMaskDirective
  ]
})
export class UrxFormatModule {
  constructor() {
    inputmaskInjectJs();
  }
}
