import { AfterViewInit, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropFile]'
})
export class DropFileDirective implements AfterViewInit {

  private elementRef: ElementRef;
  private inputFile: HTMLInputElement;
  private uploadIconContainer: HTMLElement;

  constructor(elementRef: ElementRef) {
    this.elementRef = elementRef;
  }

  ngAfterViewInit(): void {
    const element = this.elementRef.nativeElement;
    this.inputFile = element.getElementsByTagName('input')[0];
  }

  @HostListener('click') onClick() {
    this.inputFile.click();
  }

  @HostListener('dragover', ['$event']) onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();

    /*this.uploadIconContainer.classList.add('animate__animated');
    this.uploadIconContainer.classList.add('animate__bounce');*/
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();

    /*this.uploadIconContainer.classList.remove('animate__animated');
    this.uploadIconContainer.classList.remove('animate__bounce');*/
  }

  @HostListener('drop', ['$event']) public ondrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();

    let files = evt.dataTransfer.files;
    console.log(files);

    /*this.inputFile.files = files;
    this.inputFile.blur();
    console.log(this.inputFile.files);*/
  }

}
