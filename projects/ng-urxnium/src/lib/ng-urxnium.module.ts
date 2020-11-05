import { NgModule } from '@angular/core';
import { DropFileComponent } from './components/drop-file/drop-file.component';
import { MatButtonModule } from '@angular/material/button';
import { DropFileDirective } from './directives/drop-file.directive';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    DropFileDirective,
    DropFileComponent
  ],
  imports: [
    MatButtonModule,
    MatCardModule,
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,

    DropFileComponent
  ]
})
export class NgUrxniumModule { }
