import { AfterViewInit, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class InputMaskDirective implements AfterViewInit {
    private elementRef;
    mask: any;
    aliases: any;
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputMaskDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<InputMaskDirective, "[inputMask]", never, { "mask": "mask"; "aliases": "aliases"; }, {}, never>;
}
