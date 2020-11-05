import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-drop-file',
  templateUrl: './drop-file.component.html',
  styleUrls: ['./drop-file.component.scss']
})
export class DropFileComponent {

  files: Array<File>;
  file: File;
  @Input() label: string;
  @Input() overColor: string;
  @Input() multiple: boolean;
  @Input() accept: Array<string>;

  constructor() {
    this.files = [];
    this.accept = [];
    this.multiple = false;
  }

  onDrop(event: DragEvent, uploadIcon: HTMLElement, uploadContainer: HTMLElement) {
    event.preventDefault();
    event.stopPropagation();

    let files = event.dataTransfer.files;

    if (this.multiple) {
      this.addMultipleFiles(files);
    } else {
      if (this.validateAccept(files[0])) {
        this.file = files[0];
      }
    }

    uploadIcon.style.color = '#212121';
    uploadContainer.style.borderColor = '#212121';
  }

  onDragOver(event: DragEvent, uploadIcon: HTMLElement, uploadContainer: HTMLElement) {
    event.preventDefault();
    event.stopPropagation();

    uploadIcon.style.color = this.overColor;
    uploadContainer.style.borderColor = this.overColor;
  }

  onDragLeave(event: DragEvent, uploadIcon: HTMLElement, uploadContainer: HTMLElement) {
    event.preventDefault();
    event.stopPropagation();

    uploadIcon.style.color = '#212121';
    uploadContainer.style.borderColor = '#212121';
  }

  private addMultipleFiles(files: FileList): void {
    for (let i = 0; i < files.length; i++) {
      if (
        (!this.files.find(file => file.name === files[i].name)) &&
        this.validateAccept(files[i])
      ) {
        this.files.push(files[i]);
      }
    }
  }

  private validateAccept(file: File): boolean {
    if (this.accept.length === 0) {
      return true;
    }

    return this.accept.find(
      accept => file.name.endsWith(accept)
    ) !== undefined;
  }

}
