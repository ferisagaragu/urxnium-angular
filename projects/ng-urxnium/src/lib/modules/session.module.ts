import { NgModule } from '@angular/core';
import { SessionService } from '../services/session.service';
import { SignInWindowService } from '../services/sign-in-window.service';

@NgModule({
  providers: [
    SessionService,
    SignInWindowService
  ]
})
export class SessionModule { }
