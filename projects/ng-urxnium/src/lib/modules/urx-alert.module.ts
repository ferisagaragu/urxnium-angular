import { NgModule } from '@angular/core';
import { swalMaterialInjectCss } from '../inject-css/swal-material.inject-css';
import { sweetalert2InjectJs } from '../inject-js/sweetalert2.inject-js';
import { SweetAlert2Service } from '../services/sweet-alert-2.service';

@NgModule({
  providers: [
    SweetAlert2Service
  ]
})
export class UrxAlertModule {
  constructor() {
    swalMaterialInjectCss();
    sweetalert2InjectJs();
  }
}
