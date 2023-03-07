"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 52003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 62267);
/* harmony import */ var _scandit_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scandit.guard */ 85412);





const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    },
    {
        path: 'full-screen',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_full-screen_full-screen_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../full-screen/full-screen.module */ 91021)).then(m => m.FullScreenPageModule)
    },
    {
        path: 'split-screen',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_split-screen_split-screen_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../split-screen/split-screen.module */ 43447)).then(m => m.SplitScreenPageModule)
    },
    {
        path: 'modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modal_modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../modal/modal.module */ 22641)).then(m => m.ModalPageModule)
    },
    {
        path: 'scan',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_scan_scan_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../scan/scan.module */ 75355)).then(m => m.ScanPageModule),
        canActivate: [_scandit_guard__WEBPACK_IMPORTED_MODULE_1__.ScanditGuard],
    },
    {
        path: 'barcode-selection-simple-sample',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_barcode-selection-simple-sample_barcode-selection-simple-sample_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../barcode-selection-simple-sample/barcode-selection-simple-sample.module */ 81149)).then(m => m.BarcodeSelectionSimpleSamplePageModule),
        canActivate: [_scandit_guard__WEBPACK_IMPORTED_MODULE_1__.ScanditGuard],
    },
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 52003);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 62267);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 62267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 91670);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal/modal.page */ 32751);






let HomePage = class HomePage {
    constructor(modalController) {
        this.modalController = modalController;
        this.version = Scandit.DataCaptureVersion.pluginVersion;
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_2__.ModalPage,
            });
            return yield modal.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 32751:
/*!*************************************!*\
  !*** ./src/app/modal/modal.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalPage": () => (/* binding */ ModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.page.html?ngResource */ 12057);
/* harmony import */ var _modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.page.scss?ngResource */ 29963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);






let ModalPage = class ModalPage {
    constructor(alertController, modalController) {
        this.alertController = alertController;
        this.modalController = modalController;
        this.context = Scandit.DataCaptureContext.forLicenseKey(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.scanditLicenseKey);
        this.camera = Scandit.Camera.default;
        this.settings = new Scandit.BarcodeCaptureSettings();
        this.barcodeCapture = Scandit.BarcodeCapture.forContext(this.context, this.settings);
        this.captureView = Scandit.DataCaptureView.forContext(this.context);
        this.overlay = Scandit.BarcodeCaptureOverlay.withBarcodeCaptureForView(this.barcodeCapture, this.captureView);
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
        this.barcodeCapture.isEnabled = true;
    }
    ionViewWillLeave() {
        this.camera.switchToDesiredState(Scandit.FrameSourceState.Off);
        this.barcodeCapture.isEnabled = false;
        this.captureView.detachFromElement();
    }
    ngOnDestroy() {
        this.context.dispose();
    }
    dismiss() {
        this.modalController.dismiss();
    }
};
ModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
ModalPage.propDecorators = {
    captureViewElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['captureView2',] }]
};
ModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-modal',
        template: _modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ModalPage);



/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-footer {\n  margin-top: 20px;\n}\n\nion-footer ion-text {\n  text-align: center;\n  display: block;\n  font-size: 12px;\n  font-weight: bold;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vTWFjaW50b3NoJTIwSEQyL2lvbmljX2FwcHMvb3RoaW0lMjBhcHBzL1NjYW5EaXRfQ2FwYWNpdG9yL1dvcmstQmFyY29kZUNhcHR1cmVWaWV3c1NhbXBsZS9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmlvbi1mb290ZXIgaW9uLXRleHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgb3BhY2l0eTogMC41O1xufVxuIiwiaW9uLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmlvbi1mb290ZXIgaW9uLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBvcGFjaXR5OiAwLjU7XG59Il19 */";

/***/ }),

/***/ 29963:
/*!**************************************************!*\
  !*** ./src/app/modal/modal.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "ion-content > div {\n  width: 100%;\n  height: 100%;\n  background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL01hY2ludG9zaCUyMEhEMi9pb25pY19hcHBzL290aGltJTIwYXBwcy9TY2FuRGl0X0NhcGFjaXRvci9Xb3JrLUJhcmNvZGVDYXB0dXJlVmlld3NTYW1wbGUvc3JjL2FwcC9tb2RhbC9tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDQ0YiLCJmaWxlIjoibW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQgPiBkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbiIsImlvbi1jb250ZW50ID4gZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59Il19 */";

/***/ }),

/***/ 91670:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Scandit Barcode Capture Views\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-list>\n    <ion-item button routerDirection=\"forward\" routerLink=\"full-screen\">\n      <ion-label>Full Screen</ion-label>\n    </ion-item>\n    <ion-item button routerDirection=\"forward\" routerLink=\"split-screen\">\n      <ion-label>Split Screen</ion-label>\n    </ion-item>\n    <ion-item button (click)=\"presentModal()\">\n      <ion-label>Modal</ion-label>\n    </ion-item>\n    <!-- <ion-item button routerDirection=\"forward\" routerLink=\"scan\">\n      <ion-label>Barcode Selection Settings</ion-label>\n    </ion-item>\n    <ion-item button routerDirection=\"forward\" routerLink=\"barcode-selection-simple-sample\">\n      <ion-label>Barcode selection Simple Sample</ion-label>\n    </ion-item> -->\n  </ion-list>\n\n  <ion-footer>\n      <ion-text>Barcode Capture View Sample</ion-text>\n      <ion-text>SDK {{ version }}</ion-text>\n  </ion-footer>\n</ion-content>\n";

/***/ }),

/***/ 12057:
/*!**************************************************!*\
  !*** ./src/app/modal/modal.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"this.dismiss()\">Dismiss</ion-button>\n    </ion-buttons>\n    <ion-title>Modal</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div #captureView2></div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map