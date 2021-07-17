(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/common/http'), require('rxjs/operators'), require('sweetalert2')) :
    typeof define === 'function' && define.amd ? define('ng-urxnium', ['exports', '@angular/core', 'rxjs', '@angular/common/http', 'rxjs/operators', 'sweetalert2'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ng-urxnium'] = {}, global.ng.core, global.rxjs, global.ng.common.http, global.rxjs.operators, global.Swal));
}(this, (function (exports, i0, rxjs, i1, operators, Swal) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var Swal__default = /*#__PURE__*/_interopDefaultLegacy(Swal);

    var SessionService = /** @class */ (function () {
        function SessionService(http, baseUrl) {
            this.http = http;
            this.baseUrl = baseUrl;
            this.onSignIn = new rxjs.BehaviorSubject(false);
            this.count = true;
            this.firstSignIn = false;
            this.user = JSON.parse(localStorage.getItem('user'));
        }
        SessionService.prototype.signIn = function (session, user) {
            localStorage.setItem('token', session.token);
            localStorage.setItem('expiration', session.expiration.toString());
            localStorage.setItem('expirationDate', session.expirationDate.toString());
            localStorage.setItem('refreshToken', session.refreshToken);
            localStorage.setItem('user', JSON.stringify(user));
            this.user = user;
            this.onSignIn.next(true);
            this.firstSignIn = true;
        };
        SessionService.prototype.signOut = function () {
            localStorage.clear();
            this.onSignIn.next(false);
            this.firstSignIn = false;
            clearTimeout(this.timeOut);
        };
        SessionService.prototype.checkSession = function () {
            var _this = this;
            return new rxjs.Observable(function (observable) {
                if (_this.firstSignIn) {
                    _this.setSignIn(null, observable);
                }
                else if (localStorage.getItem('token') &&
                    localStorage.getItem('expiration') &&
                    localStorage.getItem('expirationDate') &&
                    localStorage.getItem('refreshToken') &&
                    localStorage.getItem('user') &&
                    !_this.firstSignIn) {
                    _this.validateToken().subscribe(function (session) {
                        _this.setSignIn(session, observable);
                    }, function (_) {
                        _this.refreshToken().subscribe(function (session) {
                            _this.setSignIn(session, observable);
                        }, function (_) {
                            _this.setSignOut(observable);
                        });
                    });
                }
                else {
                    _this.setSignOut(observable);
                }
            });
        };
        SessionService.prototype.getUser = function () {
            return this.user;
        };
        SessionService.prototype.validateToken = function () {
            var _this = this;
            return this.http.get(this.baseUrl + "/auth/validate-token", { headers: this.headers }).pipe(operators.map(function (resp) {
                var session = resp.data.session;
                delete resp.data.session;
                _this.user = resp.data;
                localStorage.setItem('user', JSON.stringify(resp.data));
                return session;
            }));
        };
        SessionService.prototype.refreshToken = function () {
            return this.http.post(this.baseUrl + "/auth/refresh-token", { refreshToken: localStorage.getItem('refreshToken') }).pipe(operators.map(function (resp) { return resp.data; }));
        };
        SessionService.prototype.refreshSession = function () {
            var _this = this;
            if (this.count) {
                this.count = false;
                this.timeOut = setTimeout(function () {
                    _this.refreshToken().subscribe(function (session) {
                        localStorage.setItem('token', session.token);
                        localStorage.setItem('expiration', session.expiration.toString());
                        localStorage.setItem('expirationDate', session.expirationDate.toString());
                        _this.count = true;
                        _this.refreshSession();
                    }, function (_) {
                        _this.signOut();
                    });
                }, localStorage.getItem('expiration'));
            }
        };
        SessionService.prototype.setSignIn = function (session, observable) {
            if (session) {
                localStorage.setItem('token', session.token);
                localStorage.setItem('expiration', session.expiration.toString());
                localStorage.setItem('expirationDate', session.expirationDate.toString());
            }
            this.refreshSession();
            this.onSignIn.next(true);
            observable.next(true);
        };
        SessionService.prototype.setSignOut = function (observable) {
            this.signOut();
            observable.next(false);
        };
        Object.defineProperty(SessionService.prototype, "headers", {
            get: function () {
                return new i1.HttpHeaders().set('Authorization', "Bearer " + localStorage.getItem('token'));
            },
            enumerable: false,
            configurable: true
        });
        return SessionService;
    }());
    SessionService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.2", ngImport: i0__namespace, type: SessionService, deps: [{ token: i1__namespace.HttpClient }, { token: 'baseUrl' }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SessionService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.2", ngImport: i0__namespace, type: SessionService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.2", ngImport: i0__namespace, type: SessionService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace.HttpClient }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: ['baseUrl']
                        }] }];
        } });

    var SignInWindowService = /** @class */ (function () {
        function SignInWindowService() {
        }
        SignInWindowService.prototype.open = function (url, event) {
            Swal__default['default'].fire({
                icon: 'error',
                text: 'Si no mandas llamar nada no saldra .'
            });
            return new rxjs.Observable(function (observable) {
                var i = 0;
                var dialog = window.open(url, 'targetWindow', "toolbar=no,\n        location=center,\n        status=no,\n        menubar=no,\n        scrollbars=no,\n        resizable=no,\n        width=400,\n        height=600,\n        " + (event ? "screenX=" + event.screenX : '') + ",\n        " + (event ? "screenY=" + event.screenY : ''));
                var interval = setInterval(function () {
                    try {
                        var href = dialog.location.href;
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
        };
        return SignInWindowService;
    }());
    SignInWindowService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.2", ngImport: i0__namespace, type: SignInWindowService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SignInWindowService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.2", ngImport: i0__namespace, type: SignInWindowService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.2", ngImport: i0__namespace, type: SignInWindowService, decorators: [{
                type: i0.Injectable,
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

    exports.SessionService = SessionService;
    exports.SignInWindowService = SignInWindowService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-urxnium.umd.js.map
