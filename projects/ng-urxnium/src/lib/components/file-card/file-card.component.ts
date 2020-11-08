import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-file-card',
  templateUrl: './file-card.component.html',
  styleUrls: ['./file-card.component.scss']
})
export class FileCardComponent {

  @Input() name: string;
  @Input() multiple: boolean;
  @Output() remove: EventEmitter<string>;

  constructor() {
    this.name = '';
    this.remove = new EventEmitter<string>();
  }

  onRemove(): void {
    this.remove.emit(this.name);
  }

}
