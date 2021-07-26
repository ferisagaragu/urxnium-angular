import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

declare const Inputmask;

@Directive({
  selector: '[inputMask]'
})
export class InputMaskDirective implements AfterViewInit {

  @Input() mask: any;
  @Input() aliases: any;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    if (this.aliases) {
      Inputmask.extendAliases({ ...this.aliases });
    }

    Inputmask(this.mask)
      .mask(this.elementRef.nativeElement);
  }

}
