"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_full-screen_full-screen_module_ts"],{

/***/ 33439:
/*!***********************************************************!*\
  !*** ./src/app/full-screen/full-screen-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullScreenPageRoutingModule": () => (/* binding */ FullScreenPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _full_screen_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./full-screen.page */ 23870);




const routes = [
    {
        path: '',
        component: _full_screen_page__WEBPACK_IMPORTED_MODULE_0__.FullScreenPage
    }
];
let FullScreenPageRoutingModule = class FullScreenPageRoutingModule {
};
FullScreenPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FullScreenPageRoutingModule);



/***/ }),

/***/ 91021:
/*!***************************************************!*\
  !*** ./src/app/full-screen/full-screen.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullScreenPageModule": () => (/* binding */ FullScreenPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _full_screen_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./full-screen-routing.module */ 33439);
/* harmony import */ var _full_screen_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./full-screen.page */ 23870);







let FullScreenPageModule = class FullScreenPageModule {
};
FullScreenPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _full_screen_routing_module__WEBPACK_IMPORTED_MODULE_0__.FullScreenPageRoutingModule
        ],
        declarations: [_full_screen_page__WEBPACK_IMPORTED_MODULE_1__.FullScreenPage]
    })
], FullScreenPageModule);



/***/ }),

/***/ 23870:
/*!*************************************************!*\
  !*** ./src/app/full-screen/full-screen.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullScreenPage": () => (/* binding */ FullScreenPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _full_screen_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./full-screen.page.html?ngResource */ 75626);
/* harmony import */ var _full_screen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./full-screen.page.scss?ngResource */ 87598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);






let FullScreenPage = class FullScreenPage {
    constructor(alertController) {
        this.alertController = alertController;
        this.context = Scandit.DataCaptureContext.forLicenseKey(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.scanditLicenseKey);
        this.camera = Scandit.Camera.default;
        this.settings = new Scandit.BarcodeCaptureSettings();
        this.barcodeCapture = Scandit.BarcodeCapture.forContext(this.context, this.settings);
        this.captureView = Scandit.DataCaptureView.forContext(this.context);
        this.overlay = Scandit.BarcodeCaptureOverlay.withBarcodeCaptureForView(this.barcodeCapture, this.captureView);
        this.isCaptureViewConnected = false;
    }
    ngAfterViewInit() {
        this.settings.enableSymbologies([
            Scandit.Symbology.EAN13UPCA,
            Scandit.Symbology.EAN8,
            Scandit.Symbology.UPCE,
            Scandit.Symbology.QR,
            Scandit.Symbology.DataMatrix,
            Scandit.Symbology.Code39,
            Scandit.Symbology.Code128,
            Scandit.Symbology.InterleavedTwoOfFive,
        ]);
        this.settings.codeDuplicateFilter = 1000;
        this.barcodeCapture.applySettings(this.settings);
        this.barcodeCapture.addListener({
            didScan: (barcodeCapture, session) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                const barcode = session.newlyRecognizedBarcodes[0];
                const symbology = new Scandit.SymbologyDescription(barcode.symbology);
                this.captureViewElement.nativeElement.style.zIndex = '-1';
                this.barcodeCapture.isEnabled = false;
                const alert = yield this.alertController.create({
                    header: 'Scanned',
                    subHeader: `${symbology.readableName}: ${barcode.data}`,
                    message: `Symbol count: ${barcode.symbolCount}`,
                    buttons: [{ text: 'Ok' }]
                });
                alert.onDidDismiss().then(() => {
                    this.captureViewElement.nativeElement.style.zIndex = '1';
                    this.barcodeCapture.isEnabled = true;
                });
                alert.present();
            })
        });
        this.context.setFrameSource(this.camera);
        this.camera.switchToDesiredState(Scandit.FrameSourceState.On);
    }
    ionViewDidEnter() {
        this.captureView.connectToElement(this.captureViewElement.nativeElement);
        this.isCaptureViewConnected = true;
        this.barcodeCapture.isEnabled = true;
    }
    ionViewWillLeave() {
        this.captureView.detachFromElement();
        this.isCaptureViewConnected = false;
        this.camera.switchToDesiredState(Scandit.FrameSourceState.Off);
        this.barcodeCapture.isEnabled = false;
    }
    ngOnDestroy() {
        this.context.dispose();
    }
};
FullScreenPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
FullScreenPage.propDecorators = {
    captureViewElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['captureView',] }]
};
FullScreenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-full-screen',
        template: _full_screen_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_full_screen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FullScreenPage);



/***/ }),

/***/ 87598:
/*!**************************************************************!*\
  !*** ./src/app/full-screen/full-screen.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "ion-content > div {\n  width: 100%;\n  height: 100%;\n  background-color: black;\n}\nion-content > div.connected {\n  background-color: transparent;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bGwtc2NyZWVuLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL01hY2ludG9zaCUyMEhEMi9pb25pY19hcHBzL290aGltJTIwYXBwcy9TY2FuRGl0X0NhcGFjaXRvci9Xb3JrLUJhcmNvZGVDYXB0dXJlVmlld3NTYW1wbGUvc3JjL2FwcC9mdWxsLXNjcmVlbi9mdWxsLXNjcmVlbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDQ0Y7QURDRTtFQUNFLDZCQUFBO0VBQ0EsV0FBQTtBQ0NKIiwiZmlsZSI6ImZ1bGwtc2NyZWVuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50ID4gZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG5cbiAgJi5jb25uZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHotaW5kZXg6IC0xO1xuICB9XG59XG4iLCJpb24tY29udGVudCA+IGRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuaW9uLWNvbnRlbnQgPiBkaXYuY29ubmVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHotaW5kZXg6IC0xO1xufSJdfQ== */";

/***/ }),

/***/ 75626:
/*!**************************************************************!*\
  !*** ./src/app/full-screen/full-screen.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Full Screen</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div #captureView [ngClass]=\"{'connected': this.isCaptureViewConnected}\"></div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_full-screen_full-screen_module_ts.js.map