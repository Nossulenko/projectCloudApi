webpackJsonp([3],{

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(501);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
        ],
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_form_login_form_component__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_form_register_form_component__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_form_profile_form_component__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_view_profile_view_component__ = __webpack_require__(505);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login_form_login_form_component__["a" /* LoginFormComponent */],
            __WEBPACK_IMPORTED_MODULE_3__register_form_register_form_component__["a" /* RegisterFormComponent */],
            __WEBPACK_IMPORTED_MODULE_4__profile_form_profile_form_component__["a" /* ProfileFormComponent */],
            __WEBPACK_IMPORTED_MODULE_5__profile_view_profile_view_component__["a" /* ProfileViewComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__login_form_login_form_component__["a" /* LoginFormComponent */],
            __WEBPACK_IMPORTED_MODULE_3__register_form_register_form_component__["a" /* RegisterFormComponent */],
            __WEBPACK_IMPORTED_MODULE_4__profile_form_profile_form_component__["a" /* ProfileFormComponent */],
            __WEBPACK_IMPORTED_MODULE_5__profile_view_profile_view_component__["a" /* ProfileViewComponent */]
        ]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var LoginFormComponent = (function () {
    function LoginFormComponent(auth, navCtrl, toast) {
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.account = {};
        this.loginStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    LoginFormComponent.prototype.navigateToPage = function (pageName) {
        this.navCtrl.push(pageName);
    };
    LoginFormComponent.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loginResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.auth.SignInWithEmailAndPassword(this.account)];
                    case 1:
                        loginResponse = _a.sent();
                        this.loginStatus.emit(loginResponse);
                        return [2 /*return*/];
                }
            });
        });
    };
    return LoginFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], LoginFormComponent.prototype, "loginStatus", void 0);
LoginFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-login-form>',template:/*ion-inline-start:"C:\Users\dell\Desktop\Cloud Api Project\projectCloudApi\src\components\login-form\login-form.component.html"*/'\n\n<div class="container">\n\n<form #loginForm="ngForm" novalidate>\n\n<div class="inputs">\n\n        \n\n<ion-row><ion-input\n\n    [(ngModel)]="account.email" \n\n    type="email" \n\n    placeholder="E-mail" \n\n    id="email"\n\n     name="email" \n\n     #email="ngModel" \n\n     required\n\n     pattern="[a-z0-9!#$%&\'*+/=?^_`{\}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{\}~-]+)*@(?:[a-z0-9](?:[a-z0-9]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"></ion-input>\n\n    </ion-row>\n\n    <div *ngIf="email.invalid && email.dirty">\n\n            <span class="global__input-error">Vul een geldig email adres in aub</span>\n\n            </div>\n\n<ion-row><ion-input\n\n    [(ngModel)]="account.password" \n\n    type="password" \n\n    placeholder="Wachtwoord" \n\n    name="password" \n\n    #password="ngModel" \n\n    required \n\n    ></ion-input></ion-row>\n\n</div>\n\n<button ion-button full text-capitalize (click)="login()" id="login" [disabled]="loginForm.invalid">Login</button>\n\n<label class="label1" (click)="navigateToPage(\'ForgotPasswordPage\')">Forgot password</label>\n\n<label class="label2" (click)="navigateToPage(\'RegisterPage\')">Sign up</label>\n\n</form>\n\n</div>\n\n'/*ion-inline-end:"C:\Users\dell\Desktop\Cloud Api Project\projectCloudApi\src\components\login-form\login-form.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
], LoginFormComponent);

//# sourceMappingURL=login-form.component.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_service__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var RegisterFormComponent = (function () {
    function RegisterFormComponent(auth) {
        this.auth = auth;
        this.account = {};
        this.registerStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    RegisterFormComponent.prototype.register = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.auth.createUserWithEmailAndPassword(this.account)];
                    case 1:
                        result = _a.sent();
                        this.registerStatus.emit(result);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        this.registerStatus.emit(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return RegisterFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], RegisterFormComponent.prototype, "registerStatus", void 0);
RegisterFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-register-form',template:/*ion-inline-start:"C:\Users\dell\Desktop\Cloud Api Project\projectCloudApi\src\components\register-form\register-form.component.html"*/'<form #registerForm="ngForm" novalidate>\n\n            <ion-row><ion-input \n\n                  [(ngModel)]="account.email" \n\n                  type="email" \n\n                  placeholder="E-mail" \n\n                  id="email"\n\n                   name="email" \n\n                   #email="ngModel" \n\n                   required\n\n                   pattern="[a-z0-9!#$%&\'*+/=?^_`{\}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{\}~-]+)*@(?:[a-z0-9](?:[a-z0-9]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"></ion-input>\n\n                  </ion-row>\n\n                  <div *ngIf="email.invalid && email.dirty">\n\n                  <span class="global__input-error">Email address is not valid</span>\n\n                  </div>\n\n              <ion-row><ion-input \n\n                  [(ngModel)]="account.password" \n\n                  type="password" \n\n                  placeholder="Password" \n\n                  name="password" \n\n                  #password="ngModel" \n\n                  required \n\n                  pattern="[a-zA-Z0-9!@#$%^&*]{6,20}$"\n\n                  ></ion-input></ion-row>\n\n                  <div *ngIf="password.invalid && password.dirty">\n\n                  <span class="global__input-error">Password must be at least 6 characters long</span>\n\n                  </div>\n\n      <button ion-button full (click)="register()" [disabled]="registerForm.invalid">Register</button>\n\n</form>'/*ion-inline-end:"C:\Users\dell\Desktop\Cloud Api Project\projectCloudApi\src\components\register-form\register-form.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_service__["a" /* AuthService */]])
], RegisterFormComponent);

//# sourceMappingURL=register-form.component.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_service__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_nav_controller__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ProfileFormComponent = (function () {
    function ProfileFormComponent(auth, data, navCtrl) {
        var _this = this;
        this.auth = auth;
        this.data = data;
        this.navCtrl = navCtrl;
        this.profile = {};
        this.saveProfileResult = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe(function (user) {
            _this.authenticatedUser = user;
        });
    }
    ProfileFormComponent.prototype.saveProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.authenticatedUser) return [3 /*break*/, 2];
                        this.profile.email = this.authenticatedUser.email;
                        return [4 /*yield*/, this.data.saveProfile(this.authenticatedUser, this.profile)];
                    case 1:
                        result = _a.sent();
                        this.saveProfileResult.emit(result);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ProfileFormComponent.prototype.ngOnDestroy = function () {
        this.authenticatedUser$.unsubscribe();
    };
    return ProfileFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], ProfileFormComponent.prototype, "saveProfileResult", void 0);
ProfileFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-profile-form',template:/*ion-inline-start:"C:\Users\dell\Desktop\Cloud Api Project\projectCloudApi\src\components\profile-form\profile-form.component.html"*/'<ion-card>\n\n<ion-card-content>\n\n<ion-item>\n\n<ion-label>Firstname</ion-label>\n\n<ion-input type="text" [(ngModel)]="profile.firstName"></ion-input>  \n\n</ion-item> \n\n<ion-item>\n\n    <ion-label>Lastame</ion-label>\n\n    <ion-input type="text" [(ngModel)]="profile.lastName"></ion-input>  \n\n</ion-item> \n\n<ion-item>\n\n    <ion-label>Date of birth</ion-label>\n\n    <ion-datetime displayFormat= "DD/MM/YYYY" [(ngModel)]="profile.dateOfBirth"></ion-datetime>\n\n</ion-item> \n\n</ion-card-content>  \n\n</ion-card>\n\n<button ion-button (click)="saveProfile()">Save</button>\n\n'/*ion-inline-end:"C:\Users\dell\Desktop\Cloud Api Project\projectCloudApi\src\components\profile-form\profile-form.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__providers_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_nav_controller__["a" /* NavController */]])
], ProfileFormComponent);

//# sourceMappingURL=profile-form.component.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_service__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProfileViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ProfileViewComponent = (function () {
    function ProfileViewComponent(data, auth, app, loading) {
        this.data = data;
        this.auth = auth;
        this.app = app;
        this.loading = loading;
        this.loader = this.loading.create({
            content: 'Profiel laden...'
        });
    }
    ProfileViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loader.present();
        this.auth.getAuthenticatedUser().subscribe(function (user) {
            _this.data.getProfile(user)
                .valueChanges()
                .subscribe(function (profile) {
                _this.userProfile = profile;
                _this.loader.dismiss();
            });
        });
    };
    ProfileViewComponent.prototype.signOut = function () {
        this.auth.signOut();
        this.app.getRootNav().setRoot('WelcomePage');
    };
    return ProfileViewComponent;
}());
ProfileViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-profile-view',template:/*ion-inline-start:"C:\Users\dell\Desktop\Cloud Api Project\projectCloudApi\src\components\profile-view\profile-view.component.html"*/'<div class="profile-view__image-container">\n\n<img class="profile-view__image" src="assets/img/profile-placeholder.png">\n\n</div>\n\n\n\n<div *ngIf="userProfile">\n\n<ion-card>\n\n  <ion-card-content>\n\n      <ion-item>\n\n          <ion-label floating>Email</ion-label>\n\n          <ion-input [value]="userProfile.email" [readonly]=true></ion-input>\n\n        </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Voornaam</ion-label>\n\n      <ion-input [value]="userProfile.firstName" [readonly]=true></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Achternaam</ion-label>\n\n      <ion-input [value]="userProfile.lastName" [readonly]=true></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label floating>Geboortedatum</ion-label>\n\n        <ion-input [value]="userProfile.dateOfBirth" [readonly]=true></ion-input>\n\n      </ion-item>\n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n</div>\n\n\n\n<button padding block ion-button text-center color="danger" (click)="signOut()">Uitloggen</button>'/*ion-inline-end:"C:\Users\dell\Desktop\Cloud Api Project\projectCloudApi\src\components\profile-view\profile-view.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */]])
], ProfileViewComponent);

//# sourceMappingURL=profile-view.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_service__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(afAuth, navCtrl, toast, data) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.data = data;
        this.account = {};
        this.loginStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    LoginPage.prototype.ngOnDestroy = function () {
        if (this.profile$) {
            this.profile$.unsubscribe();
        }
    };
    LoginPage.prototype.login = function (event) {
        var _this = this;
        if (!event.error) {
            this.toast.create({
                message: "Welcome to the BuriedONE app, " + event.result.email,
                duration: 2000,
                position: 'top',
            }).present();
            // Retrieving the AngularFireObject and use a function that returns an Observable 
            this.profile$ = this.data.getProfile(event.result)
                .snapshotChanges() // return an Observable
                .subscribe(function (action) {
                action.payload.val() ? _this.navCtrl.setRoot('TabsPage') : _this.navCtrl.setRoot('ProfilePage');
            });
        }
        else {
            if (event.error.message = "There is no user record corresponding to this identifier. The user may have been delted") {
                this.toast.create({
                    message: "Wrong combination user/email or user doesn't exist.",
                    duration: 2000
                }).present();
            }
            console.log(event);
        }
    };
    LoginPage.prototype.navigateToPage = function (pageName) {
        pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
    };
    return LoginPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], LoginPage.prototype, "loginStatus", void 0);
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\dell\Desktop\Cloud Api Project\projectCloudApi\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding class="container">\n\n\n\n<img src="assets/imgs/Intro.png" alt="logo" class="logo">\n\n<app-login-form (loginStatus)="login($event)"></app-login-form>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\dell\Desktop\Cloud Api Project\projectCloudApi\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_data_service__["a" /* DataService */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=3.js.map