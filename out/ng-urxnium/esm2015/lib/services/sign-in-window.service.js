import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import * as i0 from "@angular/core";
export class SignInWindowService {
    open(url, event) {
        Swal.fire({
            icon: 'error',
            text: 'Si no mandas llamar nada no saldra .'
        });
        return new Observable(observable => {
            let i = 0;
            const dialog = window.open(url, 'targetWindow', `toolbar=no,
        location=center,
        status=no,
        menubar=no,
        scrollbars=no,
        resizable=no,
        width=400,
        height=600,
        ${event ? `screenX=${event.screenX}` : ''},
        ${event ? `screenY=${event.screenY}` : ''}`);
            const interval = setInterval(() => {
                try {
                    const href = dialog.location.href;
                    if (href !== undefined && href.toString().includes('http')) {
                        dialog.close();
                        clearInterval(interval);
                        observable.next(href.split('?code=')[1]);
                    }
                }
                catch (e) { }
                if (i === 10) {
                    clearInterval(interval);
                    observable.error();
                }
                i++;
            }, 1000);
        });
    }
}
SignInWindowService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.2", ngImport: i0, type: SignInWindowService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SignInWindowService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.2", ngImport: i0, type: SignInWindowService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.2", ngImport: i0, type: SignInWindowService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi1pbi13aW5kb3cuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLXVyeG5pdW0vc3JjL2xpYi9zZXJ2aWNlcy9zaWduLWluLXdpbmRvdy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLElBQUksTUFBTSxhQUFhLENBQUM7O0FBSy9CLE1BQU0sT0FBTyxtQkFBbUI7SUFFOUIsSUFBSSxDQUFDLEdBQVcsRUFBRSxLQUFrQjtRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ1IsSUFBSSxFQUFFLE9BQU87WUFDYixJQUFJLEVBQUUsc0NBQXNDO1NBQzdDLENBQUMsQ0FBQTtRQUVGLE9BQU8sSUFBSSxVQUFVLENBQVMsVUFBVSxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ1YsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FDeEIsR0FBRyxFQUNILGNBQWMsRUFDZDs7Ozs7Ozs7VUFRRSxLQUFLLENBQUMsQ0FBQyxDQUFDLFdBQVcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO1VBQ3ZDLEtBQUssQ0FBQyxDQUFDLENBQUMsV0FBVyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUM1QyxDQUFDO1lBRUYsTUFBTSxRQUFRLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRTtnQkFDOUIsSUFBSTtvQkFDRixNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztvQkFFbEMsSUFBSSxJQUFJLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7d0JBQzFELE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDZixhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQ3hCLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUMxQztpQkFDRjtnQkFBQyxPQUFPLENBQUMsRUFBRSxHQUFHO2dCQUVmLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRTtvQkFDWixhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3hCLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDcEI7Z0JBRUQsQ0FBQyxFQUFFLENBQUM7WUFDTixDQUFDLEVBQUUsSUFBSSxDQUNSLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O2dIQTdDVSxtQkFBbUI7b0hBQW5CLG1CQUFtQixjQUZsQixNQUFNOzJGQUVQLG1CQUFtQjtrQkFIL0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNpZ25JbldpbmRvd1NlcnZpY2Uge1xuXG4gIG9wZW4odXJsOiBzdHJpbmcsIGV2ZW50PzogTW91c2VFdmVudCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgU3dhbC5maXJlKHtcbiAgICAgIGljb246ICdlcnJvcicsXG4gICAgICB0ZXh0OiAnU2kgbm8gbWFuZGFzIGxsYW1hciBuYWRhIG5vIHNhbGRyYSAuJ1xuICAgIH0pXG5cbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8c3RyaW5nPihvYnNlcnZhYmxlID0+IHtcbiAgICAgIGxldCBpID0gMDtcbiAgICAgIGNvbnN0IGRpYWxvZyA9IHdpbmRvdy5vcGVuKFxuICAgICAgICB1cmwsXG4gICAgICAgICd0YXJnZXRXaW5kb3cnLFxuICAgICAgICBgdG9vbGJhcj1ubyxcbiAgICAgICAgbG9jYXRpb249Y2VudGVyLFxuICAgICAgICBzdGF0dXM9bm8sXG4gICAgICAgIG1lbnViYXI9bm8sXG4gICAgICAgIHNjcm9sbGJhcnM9bm8sXG4gICAgICAgIHJlc2l6YWJsZT1ubyxcbiAgICAgICAgd2lkdGg9NDAwLFxuICAgICAgICBoZWlnaHQ9NjAwLFxuICAgICAgICAke2V2ZW50ID8gYHNjcmVlblg9JHtldmVudC5zY3JlZW5YfWAgOiAnJ30sXG4gICAgICAgICR7ZXZlbnQgPyBgc2NyZWVuWT0ke2V2ZW50LnNjcmVlbll9YCA6ICcnfWBcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBocmVmID0gZGlhbG9nLmxvY2F0aW9uLmhyZWY7XG5cbiAgICAgICAgICAgIGlmIChocmVmICE9PSB1bmRlZmluZWQgJiYgaHJlZi50b1N0cmluZygpLmluY2x1ZGVzKCdodHRwJykpIHtcbiAgICAgICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICBvYnNlcnZhYmxlLm5leHQoaHJlZi5zcGxpdCgnP2NvZGU9JylbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgfVxuXG4gICAgICAgICAgaWYgKGkgPT09IDEwKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgIG9ic2VydmFibGUuZXJyb3IoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpKys7XG4gICAgICAgIH0sIDEwMDBcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxufVxuIl19