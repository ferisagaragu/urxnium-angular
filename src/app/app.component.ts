import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'urxnium-angular';
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  private createForm(): void {
    const file1 = new File([], 'demo file 1');
    const file2 = new File([], 'demo file 2');
    const file3 = new File([], 'demo file 3.jpg');

    this.form = this.formBuilder.group({
      userImage: [file2, Validators.compose([Validators.required])]
    });
  }

  onSubmit() {
    console.log(this.form.value);
    console.log(this.form.valid);
  }

}
