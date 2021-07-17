import { Injectable } from '@angular/core';
import { SweetAlert2Message } from '../interfaces/sweet-alert-2-message';
import { Observable } from 'rxjs';
import { materialDialog } from '../templates/material-dialog.template';

declare const Swal;

@Injectable({
  providedIn: 'root'
})
export class SweetAlert2Service {

  fire(message: SweetAlert2Message): Observable<boolean> {
    let observerNext = null;
    const {
      icon, title, text, footer,
      confirmButtonColor, cancelButtonColor,
      reverseButtons, allowOutsideClick,
      confirmButtonText, cancelButtonText,
      focusConfirm, focusCancel,
      showCancelButton, theme,
      html, showCloseButton
    } = message;
    const lang = navigator.language;

    Swal.fire({
      icon,
      title,
      text,
      footer,
      confirmButtonText: confirmButtonText ? confirmButtonText : lang.includes('es-') ? 'Aceptar' : undefined,
      cancelButtonText: cancelButtonText ? cancelButtonText : lang.includes('es-') ? 'Cancelar' : undefined,
      showCancelButton: showCancelButton,
      showCloseButton: showCloseButton,
      confirmButtonColor: confirmButtonColor ? confirmButtonColor : '#00d1b2',
      cancelButtonColor: cancelButtonColor ? cancelButtonColor : '#F44336',
      reverseButtons: reverseButtons !== undefined ? reverseButtons : true,
      allowOutsideClick: allowOutsideClick !== undefined ? allowOutsideClick : false,
      focusConfirm: focusConfirm,
      focusCancel: focusCancel !== undefined ? focusCancel : showCancelButton,
      customClass: {
        cancelButton: theme === 'material' ? 'swal-material-button' : undefined,
        confirmButton: theme === 'material' ? 'swal-material-button' : undefined
      },
      buttonsStyling: theme === 'material' ? false : true,
      html: theme === 'material' ? materialDialog(icon, title, text) : html,
      willOpen(popup: HTMLElement) {
        if (theme === 'material') {
          const icon = popup.querySelector('.swal2-icon');
          const title = popup.querySelector('.swal2-title');
          const section = popup.querySelector('.swal2-actions');

          if (icon) {
            icon['style'].display = 'none';
          }

          if (title) {
            title['style'].display = 'none';
          }

          if (section) {
            section['style'].justifyContent = 'flex-end';
            section['style'].padding = '0';
          }

          popup['style'].paddingLeft = '20px';
          popup['style'].paddingRight = '20px';
        }
      }
    }).then(resp => {
      if (observerNext) {
        observerNext.next(resp.isConfirmed as boolean);
      }
    });

    return new Observable(observer => observerNext = observer);
  }

}
