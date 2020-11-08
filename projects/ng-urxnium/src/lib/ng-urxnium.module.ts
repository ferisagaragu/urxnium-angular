import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Urxnium
import { DropFileComponent } from './components/drop-file/drop-file.component';

//Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FileCardComponent } from './components/file-card/file-card.component';



@NgModule({
  declarations: [
    DropFileComponent,
    FileCardComponent
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
    MatFormFieldModule,
    DropFileComponent
  ]
})
export class NgUrxniumModule { }
