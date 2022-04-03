import { Inject, Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SessionService } from '../services/session.service';

@Injectable()
export class UnauthorizedGuard implements CanActivate {

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
      map((resp: boolean) => {
        if (resp) {
          this.router.navigate([this.authRoute.unauthorized]);
        }

        return !resp;
      }));
  }

}
