webpackJsonp([15],{

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuriedoneShopPageModule", function() { return BuriedoneShopPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buriedone_shop__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BuriedoneShopPageModule = (function () {
    function BuriedoneShopPageModule() {
    }
    return BuriedoneShopPageModule;
}());
BuriedoneShopPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__buriedone_shop__["a" /* BuriedoneShopPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buriedone_shop__["a" /* BuriedoneShopPage */]),
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]
        ],
    })
], BuriedoneShopPageModule);

//# sourceMappingURL=buriedone-shop.module.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuriedoneShopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(306);
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
 * Generated class for the BuriedoneShopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BuriedoneShopPage = (function () {
    function BuriedoneShopPage(navCtrl, navParams, iab) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
    }
    BuriedoneShopPage.prototype.openWebpage = function (url) {
        var options = {
            zoom: 'no'
        };
        var browser = this.iab.create(url, '_self', options);
    };
    return BuriedoneShopPage;
}());
BuriedoneShopPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-buriedone-shop',template:/*ion-inline-start:"/Users/nikolainossulenko/Desktop/CloudApi/KaizenApp/src/pages/buriedone-shop/buriedone-shop.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="container">\n  <img src="assets/img/training_courses1.jpg" alt="" (click)="openWebpage(\'https://app.carlvandevelde.be/mijn-academie/master-in-business?popup=2\')">\n  <img src="assets/img/training_courses2.jpg" alt="" (click)="openWebpage(\'https://app.carlvandevelde.be/mijn-academie/master-in-business?popup=3\')">\n  <img src="assets/img/training_courses3.jpg" alt="" (click)="openWebpage(\'https://app.carlvandevelde.be/mijn-academie/master-in-business?popup=5\')">\n  <img src="assets/img/training_courses4.jpg" alt="" (click)="openWebpage(\'https://app.carlvandevelde.be/mijn-academie/master-in-business?popup=1\')">\n  <img src="assets/img/training_courses5.jpg" alt="" (click)="openWebpage(\'https://app.carlvandevelde.be/mijn-academie/master-in-business?popup=4\')">\n  <img src="assets/img/training_courses6.jpg" alt="" (click)="openWebpage(\'https://app.carlvandevelde.be/mijn-academie/master-in-business?popup=6\')">\n</ion-content>\n'/*ion-inline-end:"/Users/nikolainossulenko/Desktop/CloudApi/KaizenApp/src/pages/buriedone-shop/buriedone-shop.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], BuriedoneShopPage);

//# sourceMappingURL=buriedone-shop.js.map

/***/ })

});
//# sourceMappingURL=15.js.map