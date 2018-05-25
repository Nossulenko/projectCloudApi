webpackJsonp([17],{

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNotePageModule", function() { return AddNotePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_note__ = __webpack_require__(507);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddNotePageModule = (function () {
    function AddNotePageModule() {
    }
    return AddNotePageModule;
}());
AddNotePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__add_note__["a" /* AddNotePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_note__["a" /* AddNotePage */]),
        ],
    })
], AddNotePageModule);

//# sourceMappingURL=add-note.module.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_notes_service__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_service__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddNotePage = (function () {
    function AddNotePage(navCtrl, navParams, notesservice, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.notesservice = notesservice;
        this.toast = toast;
        this.note = {
            title: "",
            description: "",
        };
    }
    AddNotePage.prototype.addNote = function (note) {
        var _this = this;
        this.notesservice.addNote(note).then(function (ref) {
            _this.toast.show(note.title + " toegevoegd");
            _this.navCtrl.setRoot('Home2Page');
        });
    };
    return AddNotePage;
}());
AddNotePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-note',template:/*ion-inline-start:"/Users/nikolainossulenko/Desktop/CloudApi/OnlineAcademy/src/pages/add-note/add-note.html"*/'<!--\n  Generated template for the AddNotePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n    <ion-title>Notitie toevoegen</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="container">\n  <ion-item>\n    <ion-input type="text" [(ngModel)]="note.title" placeholder="Titel">\n      \n    </ion-input>\n    </ion-item>\n    <ion-item>\n    <ion-input type="text"[(ngModel)]="note.description" placeholder="Beschrijving">\n      \n    </ion-input>\n    </ion-item>\n\n    <button ion-button block clear (click)="addNote(note)">Toevoegen</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/nikolainossulenko/Desktop/CloudApi/OnlineAcademy/src/pages/add-note/add-note.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_notes_service__["a" /* NotesService */], __WEBPACK_IMPORTED_MODULE_3__providers_toast_service__["a" /* ToastService */]])
], AddNotePage);

//# sourceMappingURL=add-note.js.map

/***/ })

});
//# sourceMappingURL=17.js.map