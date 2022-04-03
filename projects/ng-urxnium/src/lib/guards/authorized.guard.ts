import { Inject, Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../services/session.service';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthorizedGuard implements CanActivate {

  constructor(
    private router: Router,
    private sessionService: SessionService,
    @Inject('authRoute') private authRoute: any
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.sessionService.checkSession().pipe(
      map(resp => {
        if (!resp) {
          this.router.navigate([this.authRoute.authorized]);
        }

        return resp;
      })
    );
  }

}
