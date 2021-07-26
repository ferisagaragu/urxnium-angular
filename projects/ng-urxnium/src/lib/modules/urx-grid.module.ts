import { NgModule } from '@angular/core';
import { urxniumInjectCss } from '../inject-css/urxnium.inject-css';

@NgModule({ })
export class UrxGridModule {
  constructor() {
    urxniumInjectCss();
  }
}
