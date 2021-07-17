import * as i0 from '@angular/core';
import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as i1 from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

class SessionService {
    constructor(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.onSignIn = new BehaviorSubject(false);
        this.count = true;
        this.firstSignIn = false;
        this.user = JSON.parse(localStorage.getItem('user'));
    }
    signIn(session, user) {
        localStorage.setItem('token', session.token);
        localStorage.setItem('expiration', session.expiration.toString());
        localStorage.setItem('expirationDate', session.expirationDate.toString());
        localStorage.setItem('refreshToken', session.refreshToken);
        localStorage.setItem('user', JSON.stringify(user));
        this.user = user;
        this.onSignIn.next(true);
        this.firstSignIn = true;
    }
    signOut() {
        localStorage.clear();
        this.onSignIn.next(false);
        this.firstSignIn = false;
        clearTimeout(this.timeOut);
    }
    checkSession() {
        return new Observable(observable => {
            if (this.firstSignIn) {
                this.setSignIn(null, observable);
            }
            else if (localStorage.getItem('token') &&
                localStorage.getItem('expiration') &&
                localStorage.getItem('expirationDate') &&
                localStorage.getItem('refreshToken') &&
                localStorage.getItem('user') &&
                !this.firstSignIn) {
                this.validateToken().subscribe(session => {
                    this.setSignIn(session, observable);
                }, _ => {
                    this.refreshToken().subscribe(session => {
                        this.setSignIn(session, observable);
                    }, _ => {
                        this.setSignOut(observable);
                    });
                });
            }
            else {
                this.setSignOut(observable);
            }
        });
    }
    getUser() {
        return this.user;
    }
    validateToken() {
        return this.http.get(`${this.baseUrl}/auth/validate-token`, { headers: this.headers }).pipe(map((resp) => {
            const session = resp.data.session;
            delete resp.data.session;
            this.user = resp.data;
            localStorage.setItem('user', JSON.stringify(resp.data));
            return session;
        }));
    }
    refreshToken() {
        return this.http.post(`${this.baseUrl}/auth/refresh-token`, { refreshToken: localStorage.getItem('refreshToken') }).pipe(map((resp) => resp.data));
    }
    refreshSession() {
        if (this.count) {
            this.count = false;
            this.timeOut = setTimeout(() => {
                this.refreshToken().subscribe(session => {
                    localStorage.setItem('token', session.token);
                    localStorage.setItem('expiration', session.expiration.toString());
                    localStorage.setItem('expirationDate', session.expirationDate.toString());
                    this.count = true;
                    this.refreshSession();
                }, _ => {
                    this.signOut();
                });
            }, localStorage.getItem('expiration'));
        }
    }
    setSignIn(session, observable) {
        if (session) {
            localStorage.setItem('token', session.token);
            localStorage.setItem('expiration', session.expiration.toString());
            localStorage.setItem('expirationDate', session.expirationDate.toString());
        }
        this.refreshSession();
        this.onSignIn.next(true);
        observable.next(true);
    }
    setSignOut(observable) {
        this.signOut();
        observable.next(false);
    }
    get headers() {
        return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    }
}
SessionService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.2", ngImport: i0, type: SessionService, deps: [{ token: i1.HttpClient }, { token: 'baseUrl' }], target: i0.ɵɵFactoryTarget.Injectable });
SessionService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.2", ngImport: i0, type: SessionService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.2", ngImport: i0, type: SessionService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['baseUrl']
                }] }]; } });

class SignInWindowService {
    open(url, event) {
        Swal.fire({
            icon: 'error',
            text: 'Si no mandas llamar nada no saldra .'
        });
        return new Observable(observable => {
            let i = 0;
            const dialog = window.open(url, 'targetWindow', `toolbar=no,
        location=center,
        status=no,
        menubar=no,
        scrollbars=no,
        resizable=no,
        width=400,
        height=600,
        ${event ? `screenX=${event.screenX}` : ''},
        ${event ? `screenY=${event.screenY}` : ''}`);
            const interval = setInterval(() => {
                try {
                    const href = dialog.location.href;
                    if (href !== undefined && href.toString().includes('http')) {
                        dialog.close();
                        clearInterval(interval);
                        observable.next(href.split('?code=')[1]);
                    }
                }
                catch (e) { }
                if (i === 10) {
                    clearInterval(interval);
                    observable.error();
                }
                i++;
            }, 1000);
        });
    }
}
SignInWindowService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.2", ngImport: i0, type: SignInWindowService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SignInWindowService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.2", ngImport: i0, type: SignInWindowService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.2", ngImport: i0, type: SignInWindowService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

/*
 * Public API Surface of ng-urxnium
 */
//Models

/**
 * Generated bundle index. Do not edit.
 */

export { SessionService, SignInWindowService };
//# sourceMappingURL=ng-urxnium.js.map
