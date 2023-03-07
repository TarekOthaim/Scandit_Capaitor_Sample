"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_barcode-selection-simple-sample_barcode-selection-simple-sample_module_ts"],{

/***/ 2589:
/*!***************************************************************************************************!*\
  !*** ./src/app/barcode-selection-simple-sample/barcode-selection-simple-sample-routing.module.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarcodeSelectionSimpleSamplePageRoutingModule": () => (/* binding */ BarcodeSelectionSimpleSamplePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _barcode_selection_simple_sample_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./barcode-selection-simple-sample.page */ 55918);




const routes = [
    {
        path: '',
        component: _barcode_selection_simple_sample_page__WEBPACK_IMPORTED_MODULE_0__.BarcodeSelectionSimpleSamplePage
    }
];
let BarcodeSelectionSimpleSamplePageRoutingModule = class BarcodeSelectionSimpleSamplePageRoutingModule {
};
BarcodeSelectionSimpleSamplePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BarcodeSelectionSimpleSamplePageRoutingModule);



/***/ }),

/***/ 81149:
/*!*******************************************************************************************!*\
  !*** ./src/app/barcode-selection-simple-sample/barcode-selection-simple-sample.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarcodeSelectionSimpleSamplePageModule": () => (/* binding */ BarcodeSelectionSimpleSamplePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _barcode_selection_simple_sample_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./barcode-selection-simple-sample-routing.module */ 2589);
/* harmony import */ var _barcode_selection_simple_sample_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./barcode-selection-simple-sample.page */ 55918);







let BarcodeSelectionSimpleSamplePageModule = class BarcodeSelectionSimpleSamplePageModule {
};
BarcodeSelectionSimpleSamplePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _barcode_selection_simple_sample_routing_module__WEBPACK_IMPORTED_MODULE_0__.BarcodeSelectionSimpleSamplePageRoutingModule
        ],
        declarations: [_barcode_selection_simple_sample_page__WEBPACK_IMPORTED_MODULE_1__.BarcodeSelectionSimpleSamplePage]
    })
], BarcodeSelectionSimpleSamplePageModule);



/***/ }),

/***/ 55918:
/*!*****************************************************************************************!*\
  !*** ./src/app/barcode-selection-simple-sample/barcode-selection-simple-sample.page.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarcodeSelectionSimpleSamplePage": () => (/* binding */ BarcodeSelectionSimpleSamplePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _barcode_selection_simple_sample_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./barcode-selection-simple-sample.page.html?ngResource */ 85919);
/* harmony import */ var _barcode_selection_simple_sample_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./barcode-selection-simple-sample.page.scss?ngResource */ 76542);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);






let BarcodeSelectionSimpleSamplePage = class BarcodeSelectionSimpleSamplePage {
    constructor(alertController, ngZone) {
        this.alertController = alertController;
        this.ngZone = ngZone;
        this.context = Scandit.DataCaptureContext.forLicenseKey(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.scanditLicenseKey);
        this.camera = Scandit.Camera.default;
        this.settings = new Scandit.BarcodeCaptureSettings();
        this.barcodeSelection = Scandit.BarcodeSelection.forContext(this.context, this.settings);
        this.captureView = Scandit.DataCaptureView.forContext(this.context);
        this.overlay = Scandit.BarcodeSelectionBasicOverlay.withBarcodeSelectionForView(this.barcodeSelection, this.captureView);
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
        this.barcodeSelection.applySettings(this.settings);
        this.barcodeSelection.addListener({
            didUpdateSelection: (barcodeSelection, session, _) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                const barcode = session.newlySelectedBarcodes[0];
                console.log('barcode.data = ' + barcode.data);
                if (!barcode) {
                    return;
                }
                const symbology = new Scandit.SymbologyDescription(barcode.symbology);
                this.captureViewElement.nativeElement.style.zIndex = '-1';
                this.barcodeSelection.isEnabled = false;
                session.getCount(barcode).then(count => {
                    console.log('session.getCount', symbology, barcode);
                    // showResult(`Scan Results<br>${symbology.readableName}: ${barcode.data}<br>Times: ${count}`);
                    this.showResult(symbology);
                });
            })
        });
        this.context.setFrameSource(this.camera);
        this.camera.switchToDesiredState(Scandit.FrameSourceState.On);
        this.toggleBarcodeSelectionType(true);
    }
    ionViewDidEnter() {
        this.captureView.connectToElement(this.captureViewElement.nativeElement);
        this.isCaptureViewConnected = true;
        this.barcodeSelection.isEnabled = true;
    }
    ionViewWillLeave() {
        this.captureView.detachFromElement();
        this.isCaptureViewConnected = false;
        this.camera.switchToDesiredState(Scandit.FrameSourceState.Off);
        this.barcodeSelection.isEnabled = false;
    }
    ngOnDestroy() {
        this.context.dispose();
    }
    showResult(result) {
        if (document.querySelector('#result')) {
            document.querySelector('#result').parentElement.removeChild(document.querySelector('#result'));
        }
        const resultElement = document.createElement('div');
        resultElement.id = "result";
        // resultElement.classList = "result";
        resultElement.innerHTML = `<p>${result}</p>`;
        document.querySelector('.divFull').appendChild(resultElement);
        this.captureViewElement.nativeElement.style.zIndex = '-1';
        clearTimeout(window.timeout);
        window.timeout = setTimeout(window.continueScanning, 500);
    }
    toggleBarcodeSelectionType(forceIsTapSelection) {
        console.log('forceIsTapSelection = ' + forceIsTapSelection);
        if (forceIsTapSelection === true || this.settings.selectionType instanceof Scandit.BarcodeSelectionAimerSelection) {
            document.getElementById('tapToSelect').className = 'selected';
            document.getElementById('aimToSelect').className = '';
            this.settings.selectionType = Scandit.BarcodeSelectionTapSelection.tapSelection;
            this.barcodeSelection.applySettings(this.settings);
        }
        else {
            document.getElementById('tapToSelect').className = '';
            document.getElementById('aimToSelect').className = 'selected';
            this.settings.selectionType = Scandit.BarcodeSelectionAimerSelection.aimerSelection;
            this.barcodeSelection.applySettings(this.settings);
        }
    }
};
BarcodeSelectionSimpleSamplePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone }
];
BarcodeSelectionSimpleSamplePage.propDecorators = {
    captureViewElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['captureView',] }],
    ButtonsViewElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['ButtonsView',] }]
};
BarcodeSelectionSimpleSamplePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-barcode-selection-simple-sample',
        template: _barcode_selection_simple_sample_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_barcode_selection_simple_sample_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BarcodeSelectionSimpleSamplePage);



/***/ }),

/***/ 76542:
/*!******************************************************************************************************!*\
  !*** ./src/app/barcode-selection-simple-sample/barcode-selection-simple-sample.page.scss?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = "ion-content > .divFull {\n  width: 100%;\n  height: 90%;\n  background-color: black;\n}\nion-content > .divFull.connected {\n  background-color: transparent;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhcmNvZGUtc2VsZWN0aW9uLXNpbXBsZS1zYW1wbGUucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vTWFjaW50b3NoJTIwSEQyL2lvbmljX2FwcHMvb3RoaW0lMjBhcHBzL1NjYW5EaXRfQ2FwYWNpdG9yL1dvcmstQmFyY29kZUNhcHR1cmVWaWV3c1NhbXBsZS9zcmMvYXBwL2JhcmNvZGUtc2VsZWN0aW9uLXNpbXBsZS1zYW1wbGUvYmFyY29kZS1zZWxlY3Rpb24tc2ltcGxlLXNhbXBsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDRko7QURJSTtFQUNFLDZCQUFBO0VBQ0EsV0FBQTtBQ0ZOIiwiZmlsZSI6ImJhcmNvZGUtc2VsZWN0aW9uLXNpbXBsZS1zYW1wbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuICBpb24tY29udGVudCA+IC5kaXZGdWxsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6OTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBcbiAgICAmLmNvbm5lY3RlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIHotaW5kZXg6IC0xO1xuICAgIH1cbiAgfVxuICAiLCJpb24tY29udGVudCA+IC5kaXZGdWxsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbmlvbi1jb250ZW50ID4gLmRpdkZ1bGwuY29ubmVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHotaW5kZXg6IC0xO1xufSJdfQ== */";

/***/ }),

/***/ 85919:
/*!******************************************************************************************************!*\
  !*** ./src/app/barcode-selection-simple-sample/barcode-selection-simple-sample.page.html?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>barcode selection simple sample</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"divFull\" #captureView ></div>\n\n  <!-- <div id=\"buttons\" #ButtonsView>\n    <button id=\"tapToSelect\" (click)=\"toggleBarcodeSelectionType()\">Tap to Select</button>\n    <button id=\"aimToSelect\" (click)=\"toggleBarcodeSelectionType()\">Aim to Select</button>\n  </div> -->\n</ion-content>\n\n\n<ion-footer>\n  <div id=\"buttons\" #ButtonsView>\n    <button id=\"tapToSelect\" (click)=\"toggleBarcodeSelectionType()\">Tap to Select</button>\n    <button id=\"aimToSelect\" (click)=\"toggleBarcodeSelectionType()\">Aim to Select</button>\n  </div>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_barcode-selection-simple-sample_barcode-selection-simple-sample_module_ts.js.map