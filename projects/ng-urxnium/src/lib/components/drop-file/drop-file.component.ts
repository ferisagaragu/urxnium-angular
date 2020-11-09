import { Component, EventEmitter, forwardRef, Host, Input, Optional, Output, SkipSelf } from '@angular/core';
import { ControlContainer, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'drop-file',
  templateUrl: './drop-file.component.html',
  styleUrls: ['./drop-file.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropFileComponent),
      multi: true
    }
  ]
})
export class DropFileComponent implements ControlValueAccessor {

  files: Array<File>;
  file: File;
  isDisabled: boolean;

  @Input() label: string;
  @Input() overColor: string;
  @Input() multiple: boolean;
  @Input() accept: Array<string>;
  @Input() error: boolean;
  @Input() errorMessage: string;
  @Input() formControlName: string;
  @Output() change: EventEmitter<File | Array<File>>;

  private onChange: Function;
  private onTouch: Function;
  private value: File | Array<File>;

  constructor(
    @Optional()
    @Host()
    @SkipSelf()
    private controlContainer: ControlContainer
  ) {
    this.files = [];
    this.accept = [];
    this.multiple = false;
    this.isDisabled = false;
    this.onChange = (_:any) => { };
    this.onTouch = () => { };
    this.value = [];
    this.overColor = '#2196F3';
    this.error = false;
    this.change = new EventEmitter<File | Array<File>>();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  writeValue(value: any): void {
    if (this.multiple && value) {
      this.files = value;
    } else {
      this.file = value;
    }
  }

  onDrop(event: DragEvent, uploadZone: HTMLElement): void {
    event.preventDefault();
    event.stopPropagation();

    let files = event.dataTransfer.files;
    this.addFileOrFiles(files);
    uploadZone.style.color = '#212121';
    uploadZone.style.borderColor = '#212121';
  }

  onDragOver(event: DragEvent, uploadZone: HTMLElement): void {
    event.preventDefault();
    event.stopPropagation();

    uploadZone.style.color = this.overColor;
    uploadZone.style.borderColor = this.overColor;
  }

  onDragLeave(event: DragEvent, uploadZone: HTMLElement): void {
    event.preventDefault();
    event.stopPropagation();

    uploadZone.style.color = '#212121';
    uploadZone.style.borderColor = '#212121';
  }

  onClick(inputFile: HTMLInputElement): void {
    inputFile.accept = this.acceptFileType();
    inputFile.click();
  }

  onSelectFile(event: any): void {
    this.addFileOrFiles(event.target.files);
    event.target.value = null;
  }

  removeFile(name: string): void {
    this.files.forEach((file: File, index: number) => {
      if (file.name === name) {
        this.files.splice(index, 1);
        this.setFormValue(true);
        return;
      }
    });
  }

  removeSimpleFile(): void {
    this.file = null;
    this.setFormValue(false);
  }

  isInvalidForm(): boolean {
    if (this.controlContainer && this.formControlName) {
      return this.controlContainer
        .control
        .get(this.formControlName)
        .invalid;
    }

    return false;
  }

  private addMultipleFiles(files: FileList): void {
    for (let i = 0; i < files.length; i++) {
      if (
        (!this.files.find(file => file.name === files[i].name)) &&
        this.validateAccept(files[i])
      ) {
        this.files.push(files[i]);
        this.setFormValue(true);
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

  private addFileOrFiles(files: FileList): void {
    if (this.multiple) {
      this.addMultipleFiles(files);
    } else {
      if (this.validateAccept(files[0])) {
        this.file = files[0];
        this.setFormValue(false);
      }
    }
  }

  private setFormValue(multiple: boolean): void {
    if (multiple) {
      this.value = this.files;
    } else {
      this.value = this.file;
    }

    this.onTouch();
    this.onChange(this.value);
    this.change.emit(this.value);
  }

  private acceptFileType(): string {
    let out = '';

    this.accept.forEach(accept => {
      switch (accept) {
        case '.docx':
          out += 'application/msword, ';
          break;

        case '.xls':
          out += 'application/vnd.ms-excel, ';
          break;

        case '.ppt':
          out += 'application/vnd.ms-powerpoint, ';
          break;

        case '.png':
          out += 'image/x-png, ';
          break;

        case '.gif':
          out += 'image/gif, ';
          break;

        case '.jpg':
          out += 'image/jpeg, ';
          break;

        case '.pdf':
          out += 'application/pdf, ';
          break;
      }
    });

    return out;
  }

}
