import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Session } from '../interfaces/session';
import { map } from 'rxjs/operators';
import { BASE_URL, REFRESH_TOKEN_URL, VALIDATE_TOKEN_URL } from '../const/session.const';

@Injectable()
export class SessionService {

  public onSignIn: BehaviorSubject<boolean>;
  public onValidateTokenLoad: BehaviorSubject<boolean>;

  private count: boolean;
  private firstSignIn: boolean;
  private user: any;
  private timeOut: any;

  constructor(
    private http: HttpClient,
    @Inject(BASE_URL) private baseUrl: string,
    @Inject(VALIDATE_TOKEN_URL) private validateTokenUrl: string,
    @Inject(REFRESH_TOKEN_URL) private  refreshTokenUrl: string
  ) {
    this.onSignIn = new BehaviorSubject(false);
    this.onValidateTokenLoad = new BehaviorSubject(false);
    this.count = true;
    this.firstSignIn = false;
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  signIn(session: Session, user: any): void {
    localStorage.setItem('token', session.token);
    localStorage.setItem('expiration', session.expiration.toString());
    localStorage.setItem('expirationDate', session.expirationDate.toString());
    localStorage.setItem('refreshToken', session.refreshToken);
    localStorage.setItem('user', JSON.stringify(user));

    this.user = user;
    this.onSignIn.next(true);
    this.firstSignIn = true;
  }

  signOut(): void {
    localStorage.clear();
    this.onSignIn.next(false);
    this.firstSignIn = false;
    clearTimeout(this.timeOut);
  }

  checkSession(): Observable<boolean> {
    return new Observable(observable => {
      if (this.firstSignIn) {
        this.setSignIn(null, observable);
      } else if (
        localStorage.getItem('token') &&
        localStorage.getItem('expiration') &&
        localStorage.getItem('expirationDate') &&
        localStorage.getItem('refreshToken') &&
        localStorage.getItem('user') &&
        (new Date(localStorage.getItem('expirationDate')) > new Date()) &&
        !this.firstSignIn
      ) {
        this.setSignIn(null, observable);
        this.onValidateTokenLoad.next(false);
      } else if (
        localStorage.getItem('token') &&
        localStorage.getItem('expiration') &&
        localStorage.getItem('expirationDate') &&
        localStorage.getItem('refreshToken') &&
        localStorage.getItem('user') &&
        !(new Date(localStorage.getItem('expirationDate')) > new Date()) &&
        !this.firstSignIn
      ) {
        this.validateToken().subscribe(
          session => {
            this.setSignIn(session, observable);
          }, _ => {
            this.refreshToken().subscribe(session => {
              this.setSignIn(session, observable);
              this.onValidateTokenLoad.next(false);
            }, _ => {
              this.onValidateTokenLoad.error({});
              this.setSignOut(observable);
            });
          }
        );
      } else {
        this.setSignOut(observable);
      }
    });
  }

  getUser(): any {
    return this.user;
  }

  private validateToken(): Observable<Session> {
    this.onValidateTokenLoad.next(true);

    return this.http.get(
      `${this.validateTokenUrl}`,
      { headers: this.headers }
    ).pipe(map((resp: any) => {
      const session = resp.data.session;
      delete resp.data.session;

      this.user = resp.data;
      localStorage.setItem('user', JSON.stringify(resp.data));
      this.onValidateTokenLoad.next(false);

      return session;
    }));
  }

  private refreshToken(): Observable<Session> {
    return this.http.post(
      `${this.refreshTokenUrl}`,
      { refreshToken: localStorage.getItem('refreshToken') }
    ).pipe(map((resp: any) => resp.data as Session));
  }

  private refreshSession(): void {
    if (this.count) {
      this.count = false;

      this.timeOut = setTimeout(() => {
        this.refreshToken().subscribe(
          session => {
            localStorage.setItem('token', session.token);
            localStorage.setItem('expiration', session.expiration.toString());
            localStorage.setItem('expirationDate', session.expirationDate.toString());

            this.count = true;
            this.refreshSession();
          }, _ => {
            this.signOut();
          }
        );
      }, localStorage.getItem('expiration') as unknown as number);
    }
  }

  private setSignIn(session: Session, observable: Subscriber<boolean>): void {
    if (session) {
      localStorage.setItem('token', session.token);
      localStorage.setItem('expiration', session.expiration.toString());
      localStorage.setItem('expirationDate', session.expirationDate.toString());
    }

    this.refreshSession();
    this.onSignIn.next(true);
    observable.next(true);
  }

  private setSignOut(observable: Subscriber<boolean>): void {
    this.signOut();
    observable.next(false);
  }

  private get headers(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
  }

}
