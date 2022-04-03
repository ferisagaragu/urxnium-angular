import { Component, OnInit } from '@angular/core';
import { SweetAlert2Service } from 'ng-urxnium';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  form: FormGroup;
  title = 'urxnium-angular';

  maskAliases = {
    pesos: {
      suffix: ' MNX',
      groupSeparator: '.',
      alias: 'numeric',
      placeholder: '0',
      autoGroup: true,
      digits: 2,
      digitsOptional: false,
      clearMaskOnLostFocus: false,
      rightAlign: false
    }
  };

  constructor(
    private swal: SweetAlert2Service,
    private formBuilder: FormBuilder
  ) {
    /*swal.fire({
      theme: 'material',
      icon: 'question',
      title: 'Hola',
      text: 'como estas primo',
      materialButtonsColor: 'orange'
    }).subscribe(resp => {
      console.log(resp);
    });*/

    this.form = this.formBuilder.group({
      map: [{ lng: -103.5089911, lat: 20.4544877 }]
    })

    this.form.get('map').valueChanges.subscribe(resp => {
      console.log(resp);
    })
  }

  ngOnInit(): void {
    this.form.get('map').setValue({ lng: -102.5089911, lat: 21.4544877 });
  }

  sesigue() {
    this.form.get('map').setValue({ lng: -103.5089911, lat: 20.4544877 });
  }

  save() {
    console.log(this.form.value)
  }

}
