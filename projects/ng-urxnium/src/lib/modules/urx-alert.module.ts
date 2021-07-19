import { NgModule } from '@angular/core';
import { swalMaterialInjectCss } from '../inject-css/swal-material.inject-css';
import { sweetalert2InjectJs } from '../inject-js/sweetalert2.inject-js';

@NgModule({ })
export class UrxAlertModule {
  constructor() {
    swalMaterialInjectCss();
    sweetalert2InjectJs();
  }
}
