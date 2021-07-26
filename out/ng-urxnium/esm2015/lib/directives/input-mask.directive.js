import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class InputMaskDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    ngAfterViewInit() {
        if (this.aliases) {
            Inputmask.extendAliases(Object.assign({}, this.aliases));
        }
        Inputmask(this.mask)
            .mask(this.elementRef.nativeElement);
    }
}
InputMaskDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.2", ngImport: i0, type: InputMaskDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
InputMaskDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.1.2", type: InputMaskDirective, selector: "[inputMask]", inputs: { mask: "mask", aliases: "aliases" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.2", ngImport: i0, type: InputMaskDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[inputMask]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { mask: [{
                type: Input
            }], aliases: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbWFzay5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy11cnhuaXVtL3NyYy9saWIvZGlyZWN0aXZlcy9pbnB1dC1tYXNrLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBYyxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTzVFLE1BQU0sT0FBTyxrQkFBa0I7SUFLN0IsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUFJLENBQUM7SUFFL0MsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixTQUFTLENBQUMsYUFBYSxtQkFBTSxJQUFJLENBQUMsT0FBTyxFQUFHLENBQUM7U0FDOUM7UUFFRCxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN6QyxDQUFDOzsrR0FkVSxrQkFBa0I7bUdBQWxCLGtCQUFrQjsyRkFBbEIsa0JBQWtCO2tCQUg5QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO2lCQUN4QjtpR0FHVSxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5kZWNsYXJlIGNvbnN0IElucHV0bWFzaztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2lucHV0TWFza10nXG59KVxuZXhwb3J0IGNsYXNzIElucHV0TWFza0RpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gIEBJbnB1dCgpIG1hc2s6IGFueTtcbiAgQElucHV0KCkgYWxpYXNlczogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFsaWFzZXMpIHtcbiAgICAgIElucHV0bWFzay5leHRlbmRBbGlhc2VzKHsgLi4udGhpcy5hbGlhc2VzIH0pO1xuICAgIH1cblxuICAgIElucHV0bWFzayh0aGlzLm1hc2spXG4gICAgICAubWFzayh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gIH1cblxufVxuIl19