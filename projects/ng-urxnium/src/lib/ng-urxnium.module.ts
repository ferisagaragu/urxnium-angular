import { NgModule } from '@angular/core';
import { DropFileComponent } from './components/drop-file/drop-file.component';
import { MatButtonModule } from '@angular/material/button';
import { DropFileDirective } from './directives/drop-file.directive';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    DropFileDirective,
    DropFileComponent
  ],
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    DropFileComponent
  ]
})
export class NgUrxniumModule { }
