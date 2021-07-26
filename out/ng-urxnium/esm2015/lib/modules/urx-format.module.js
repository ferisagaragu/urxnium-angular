import { NgModule } from '@angular/core';
import { InputMaskDirective } from '../directives/input-mask.directive';
import { inputmaskInjectJs } from '../inject-js/inputmask-inject-js';
import * as i0 from "@angular/core";
export class UrxFormatModule {
    constructor() {
        inputmaskInjectJs();
    }
}
UrxFormatModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.2", ngImport: i0, type: UrxFormatModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UrxFormatModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.2", ngImport: i0, type: UrxFormatModule, declarations: [InputMaskDirective], exports: [InputMaskDirective] });
UrxFormatModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.2", ngImport: i0, type: UrxFormatModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.2", ngImport: i0, type: UrxFormatModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [InputMaskDirective],
                    imports: [],
                    exports: [
                        InputMaskDirective
                    ]
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJ4LWZvcm1hdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy11cnhuaXVtL3NyYy9saWIvbW9kdWxlcy91cngtZm9ybWF0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztBQVNyRSxNQUFNLE9BQU8sZUFBZTtJQUMxQjtRQUNFLGlCQUFpQixFQUFFLENBQUM7SUFDdEIsQ0FBQzs7NEdBSFUsZUFBZTs2R0FBZixlQUFlLGlCQU5YLGtCQUFrQixhQUcvQixrQkFBa0I7NkdBR1QsZUFBZSxZQUxqQixFQUFFOzJGQUtBLGVBQWU7a0JBUDNCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7b0JBQ2xDLE9BQU8sRUFBRSxFQUFFO29CQUNYLE9BQU8sRUFBRTt3QkFDUCxrQkFBa0I7cUJBQ25CO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0TWFza0RpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvaW5wdXQtbWFzay5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgaW5wdXRtYXNrSW5qZWN0SnMgfSBmcm9tICcuLi9pbmplY3QtanMvaW5wdXRtYXNrLWluamVjdC1qcyc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0lucHV0TWFza0RpcmVjdGl2ZV0sXG4gIGltcG9ydHM6IFtdLFxuICBleHBvcnRzOiBbXG4gICAgSW5wdXRNYXNrRGlyZWN0aXZlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVXJ4Rm9ybWF0TW9kdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaW5wdXRtYXNrSW5qZWN0SnMoKTtcbiAgfVxufVxuIl19