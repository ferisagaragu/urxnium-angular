import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { materialDialog } from '../templates/material-dialog.template';
import * as i0 from "@angular/core";
export class SweetAlert2Service {
    fire(message) {
        let observerNext = null;
        const { icon, title, text, footer, confirmButtonColor, cancelButtonColor, reverseButtons, allowOutsideClick, confirmButtonText, cancelButtonText, focusConfirm, focusCancel, showCancelButton, theme, html, showCloseButton } = message;
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
            willOpen(popup) {
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
                observerNext.next(resp.isConfirmed);
            }
        });
        return new Observable(observer => observerNext = observer);
    }
}
SweetAlert2Service.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.2", ngImport: i0, type: SweetAlert2Service, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SweetAlert2Service.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.2", ngImport: i0, type: SweetAlert2Service, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.2", ngImport: i0, type: SweetAlert2Service, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dlZXQtYWxlcnQtMi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctdXJ4bml1bS9zcmMvbGliL3NlcnZpY2VzL3N3ZWV0LWFsZXJ0LTIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOztBQU92RSxNQUFNLE9BQU8sa0JBQWtCO0lBRTdCLElBQUksQ0FBQyxPQUEyQjtRQUM5QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDeEIsTUFBTSxFQUNKLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFDekIsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQ3JDLGNBQWMsRUFBRSxpQkFBaUIsRUFDakMsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQ25DLFlBQVksRUFBRSxXQUFXLEVBQ3pCLGdCQUFnQixFQUFFLEtBQUssRUFDdkIsSUFBSSxFQUFFLGVBQWUsRUFDdEIsR0FBRyxPQUFPLENBQUM7UUFDWixNQUFNLElBQUksR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBRWhDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDUixJQUFJO1lBQ0osS0FBSztZQUNMLElBQUk7WUFDSixNQUFNO1lBQ04saUJBQWlCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVM7WUFDdkcsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFB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aW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3dlZXRBbGVydDJNZXNzYWdlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zd2VldC1hbGVydC0yLW1lc3NhZ2UnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWF0ZXJpYWxEaWFsb2cgfSBmcm9tICcuLi90ZW1wbGF0ZXMvbWF0ZXJpYWwtZGlhbG9nLnRlbXBsYXRlJztcblxuZGVjbGFyZSBjb25zdCBTd2FsO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTd2VldEFsZXJ0MlNlcnZpY2Uge1xuXG4gIGZpcmUobWVzc2FnZTogU3dlZXRBbGVydDJNZXNzYWdlKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgbGV0IG9ic2VydmVyTmV4dCA9IG51bGw7XG4gICAgY29uc3Qge1xuICAgICAgaWNvbiwgdGl0bGUsIHRleHQsIGZvb3RlcixcbiAgICAgIGNvbmZpcm1CdXR0b25Db2xvciwgY2FuY2VsQnV0dG9uQ29sb3IsXG4gICAgICByZXZlcnNlQnV0dG9ucywgYWxsb3dPdXRzaWRlQ2xpY2ssXG4gICAgICBjb25maXJtQnV0dG9uVGV4dCwgY2FuY2VsQnV0dG9uVGV4dCxcbiAgICAgIGZvY3VzQ29uZmlybSwgZm9jdXNDYW5jZWwsXG4gICAgICBzaG93Q2FuY2VsQnV0dG9uLCB0aGVtZSxcbiAgICAgIGh0bWwsIHNob3dDbG9zZUJ1dHRvblxuICAgIH0gPSBtZXNzYWdlO1xuICAgIGNvbnN0IGxhbmcgPSBuYXZpZ2F0b3IubGFuZ3VhZ2U7XG5cbiAgICBTd2FsLmZpcmUoe1xuICAgICAgaWNvbixcbiAgICAgIHRpdGxlLFxuICAgICAgdGV4dCxcbiAgICAgIGZvb3RlcixcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBjb25maXJtQnV0dG9uVGV4dCA/IGNvbmZpcm1CdXR0b25UZXh0IDogbGFuZy5pbmNsdWRlcygnZXMtJykgPyAnQWNlcHRhcicgOiB1bmRlZmluZWQsXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBjYW5jZWxCdXR0b25UZXh0ID8gY2FuY2VsQnV0dG9uVGV4dCA6IGxhbmcuaW5jbHVkZXMoJ2VzLScpID8gJ0NhbmNlbGFyJyA6IHVuZGVmaW5lZCxcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IHNob3dDYW5jZWxCdXR0b24sXG4gICAgICBzaG93Q2xvc2VCdXR0b246IHNob3dDbG9zZUJ1dHRvbixcbiAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogY29uZmlybUJ1dHRvbkNvbG9yID8gY29uZmlybUJ1dHRvbkNvbG9yIDogJyMwMGQxYjInLFxuICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6IGNhbmNlbEJ1dHRvbkNvbG9yID8gY2FuY2VsQnV0dG9uQ29sb3IgOiAnI0Y0NDMzNicsXG4gICAgICByZXZlcnNlQnV0dG9uczogcmV2ZXJzZUJ1dHRvbnMgIT09IHVuZGVmaW5lZCA/IHJldmVyc2VCdXR0b25zIDogdHJ1ZSxcbiAgICAgIGFsbG93T3V0c2lkZUNsaWNrOiBhbGxvd091dHNpZGVDbGljayAhPT0gdW5kZWZpbmVkID8gYWxsb3dPdXRzaWRlQ2xpY2sgOiBmYWxzZSxcbiAgICAgIGZvY3VzQ29uZmlybTogZm9jdXNDb25maXJtLFxuICAgICAgZm9jdXNDYW5jZWw6IGZvY3VzQ2FuY2VsICE9PSB1bmRlZmluZWQgPyBmb2N1c0NhbmNlbCA6IHNob3dDYW5jZWxCdXR0b24sXG4gICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICBjYW5jZWxCdXR0b246IHRoZW1lID09PSAnbWF0ZXJpYWwnID8gJ3N3YWwtbWF0ZXJpYWwtYnV0dG9uJyA6IHVuZGVmaW5lZCxcbiAgICAgICAgY29uZmlybUJ1dHRvbjogdGhlbWUgPT09ICdtYXRlcmlhbCcgPyAnc3dhbC1tYXRlcmlhbC1idXR0b24nIDogdW5kZWZpbmVkXG4gICAgICB9LFxuICAgICAgYnV0dG9uc1N0eWxpbmc6IHRoZW1lID09PSAnbWF0ZXJpYWwnID8gZmFsc2UgOiB0cnVlLFxuICAgICAgaHRtbDogdGhlbWUgPT09ICdtYXRlcmlhbCcgPyBtYXRlcmlhbERpYWxvZyhpY29uLCB0aXRsZSwgdGV4dCkgOiBodG1sLFxuICAgICAgd2lsbE9wZW4ocG9wdXA6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGlmICh0aGVtZSA9PT0gJ21hdGVyaWFsJykge1xuICAgICAgICAgIGNvbnN0IGljb24gPSBwb3B1cC5xdWVyeVNlbGVjdG9yKCcuc3dhbDItaWNvbicpO1xuICAgICAgICAgIGNvbnN0IHRpdGxlID0gcG9wdXAucXVlcnlTZWxlY3RvcignLnN3YWwyLXRpdGxlJyk7XG4gICAgICAgICAgY29uc3Qgc2VjdGlvbiA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5zd2FsMi1hY3Rpb25zJyk7XG5cbiAgICAgICAgICBpZiAoaWNvbikge1xuICAgICAgICAgICAgaWNvblsnc3R5bGUnXS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICAgICAgdGl0bGVbJ3N0eWxlJ10uZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2VjdGlvbikge1xuICAgICAgICAgICAgc2VjdGlvblsnc3R5bGUnXS5qdXN0aWZ5Q29udGVudCA9ICdmbGV4LWVuZCc7XG4gICAgICAgICAgICBzZWN0aW9uWydzdHlsZSddLnBhZGRpbmcgPSAnMCc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcG9wdXBbJ3N0eWxlJ10ucGFkZGluZ0xlZnQgPSAnMjBweCc7XG4gICAgICAgICAgcG9wdXBbJ3N0eWxlJ10ucGFkZGluZ1JpZ2h0ID0gJzIwcHgnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkudGhlbihyZXNwID0+IHtcbiAgICAgIGlmIChvYnNlcnZlck5leHQpIHtcbiAgICAgICAgb2JzZXJ2ZXJOZXh0Lm5leHQocmVzcC5pc0NvbmZpcm1lZCBhcyBib29sZWFuKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PiBvYnNlcnZlck5leHQgPSBvYnNlcnZlcik7XG4gIH1cblxufVxuIl19