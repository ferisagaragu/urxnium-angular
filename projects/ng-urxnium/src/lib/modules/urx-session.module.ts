import { NgModule } from '@angular/core';
import { SessionService } from '../services/session.service';
import { SignInWindowService } from '../services/sign-in-window.service';
import { AuthorizedGuard } from '../guards/authorized.guard';
import { UnauthorizedGuard } from '../guards/unauthorized.guard';

@NgModule({
  providers: [
    SessionService,
    SignInWindowService,
    AuthorizedGuard,
    UnauthorizedGuard
  ]
})
export class UrxSessionModule { }
