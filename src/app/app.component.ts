import { Component } from '@angular/core';
import { SweetAlert2Service } from 'ng-urxnium';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'urxnium-angular';

  constructor(private swal: SweetAlert2Service) {
    swal.fire({
      theme: 'material',
      icon: 'question',
      title: 'Hola',
      text: 'como estas primo',
      materialButtonsColor: 'orange'
    }).subscribe(resp => {
      console.log(resp);
    });
  }


}
