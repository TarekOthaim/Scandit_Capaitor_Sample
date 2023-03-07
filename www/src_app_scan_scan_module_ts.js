"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_scan_scan_module_ts"],{

/***/ 80791:
/*!*************************************************************!*\
  !*** ./src/app/models/form/barcode-selection-form.model.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ 87448);



/***/ }),

/***/ 87966:
/*!**************************************************!*\
  !*** ./src/app/models/form/camera-form.model.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ 87448);



/***/ }),

/***/ 35144:
/*!*******************************************!*\
  !*** ./src/app/models/form/form.model.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 40849:
/*!**************************************!*\
  !*** ./src/app/models/form/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.model */ 35144);
/* harmony import */ var _barcode_selection_form_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./barcode-selection-form.model */ 80791);
/* harmony import */ var _camera_form_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./camera-form.model */ 87966);
/* harmony import */ var _view_form_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-form.model */ 79327);






/***/ }),

/***/ 79327:
/*!************************************************!*\
  !*** ./src/app/models/form/view-form.model.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ 87448);



/***/ }),

/***/ 42139:
/*!*********************************!*\
  !*** ./src/app/models/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarcodeSelectionBasicOverlayStyle": () => (/* reexport safe */ _sdk_model__WEBPACK_IMPORTED_MODULE_2__.BarcodeSelectionBasicOverlayStyle),
/* harmony export */   "BarcodeSelectionFreezeBehavior": () => (/* reexport safe */ _sdk_model__WEBPACK_IMPORTED_MODULE_2__.BarcodeSelectionFreezeBehavior),
/* harmony export */   "BarcodeSelectionStrategyType": () => (/* reexport safe */ _sdk_model__WEBPACK_IMPORTED_MODULE_2__.BarcodeSelectionStrategyType),
/* harmony export */   "BarcodeSelectionTapBehavior": () => (/* reexport safe */ _sdk_model__WEBPACK_IMPORTED_MODULE_2__.BarcodeSelectionTapBehavior),
/* harmony export */   "BarcodeSelectionTypeName": () => (/* reexport safe */ _sdk_model__WEBPACK_IMPORTED_MODULE_2__.BarcodeSelectionTypeName),
/* harmony export */   "Brush": () => (/* reexport safe */ _sdk_model__WEBPACK_IMPORTED_MODULE_2__.Brush),
/* harmony export */   "Color": () => (/* reexport safe */ _sdk_model__WEBPACK_IMPORTED_MODULE_2__.Color)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ 40849);
/* harmony import */ var _utils_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.model */ 16971);
/* harmony import */ var _sdk_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sdk.model */ 63020);





/***/ }),

/***/ 16971:
/*!***************************************!*\
  !*** ./src/app/models/utils.model.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 61251:
/*!*********************************************!*\
  !*** ./src/app/scan/scan-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanPageRoutingModule": () => (/* binding */ ScanPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _scan_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scan.component */ 77940);




const routes = [
    {
        path: '',
        component: _scan_component__WEBPACK_IMPORTED_MODULE_0__.ScanComponent
    }
];
let ScanPageRoutingModule = class ScanPageRoutingModule {
};
ScanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ScanPageRoutingModule);



/***/ }),

/***/ 77940:
/*!****************************************!*\
  !*** ./src/app/scan/scan.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanComponent": () => (/* binding */ ScanComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _scan_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scan.component.html?ngResource */ 21927);
/* harmony import */ var _scan_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scan.component.scss?ngResource */ 54797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models */ 42139);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ 21866);








let ScanComponent = class ScanComponent {
    constructor(settingsService, toastController) {
        this.settingsService = settingsService;
        this.toastController = toastController;
        this.isPageActive = false;
        this.barcodeSelectionSettings = new Scandit.BarcodeSelectionSettings();
        this.listener = {
            didUpdateSelection: (barcodeSelection, session) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                var _a;
                if (!this.isPageActive) {
                    return;
                }
                if (session.newlySelectedBarcodes.length === 0) {
                    return;
                }
                this.captureView.nativeElement.style.zIndex = '-1';
                const barcode = session.newlySelectedBarcodes[0];
                const symbology = new Scandit.SymbologyDescription(barcode.symbology);
                const count = yield session.getCount(barcode);
                (_a = (yield this.toastController.getTop())) === null || _a === void 0 ? void 0 : _a.dismiss();
                const toast = yield this.toastController.create({
                    message: `Scan Results\n${symbology.readableName}: ${barcode.data}\nTimes: ${count}`,
                    duration: 500,
                });
                toast.onDidDismiss().then(() => {
                    if (this.isPageActive) {
                        this.captureView.nativeElement.style.zIndex = '1';
                    }
                });
                toast.present();
            })
        };
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.isPageActive = true;
            this.barcodeSelection.isEnabled = false;
            if (this.settingsService.reset) {
                this.barcodeSelection.reset();
            }
            yield this.barcodeSelection.applySettings(this.getBarcodeSelectionSettings());
            this.barcodeSelection.addListener(this.listener);
            yield this.applyBarcodeSelectionPointOfInterest();
            yield this.applyFeedbackSettings();
            yield this.applyCodeDuplicateFilterSettings();
            yield this.applyCameraSettings();
            yield this.applyViewSettings();
            this.barcodeSelection.isEnabled = true;
        });
    }
    ionViewWillLeave() {
        this.isPageActive = false;
        this.barcodeSelection.isEnabled = false;
        this.context.frameSource.switchToDesiredState(Scandit.FrameSourceState.Off);
    }
    ngAfterViewInit() {
        this.context = Scandit.DataCaptureContext.forLicenseKey(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.scanditLicenseKey);
        this.barcodeSelection = Scandit.BarcodeSelection.forContext(this.context);
        this.barcodeSelection.addListener(this.listener);
    }
    getBarcodeSelectionSettings() {
        const enabledSymbologiesSettings = Object.entries(this.settingsService.symbologiesForm.value)
            .map(([key, value]) => (Object.assign(Object.assign({}, value), { key })))
            .filter(settings => settings.enabled);
        const { SELECTION_TYPE, FREEZE_BEHAVIOUR, TAP_BEHAVIOUR, SELECTION_STRATEGY, } = this.settingsService.selectionTypeForm.value;
        if (SELECTION_TYPE === _models__WEBPACK_IMPORTED_MODULE_3__.BarcodeSelectionTypeName.Tap) {
            this.barcodeSelectionSettings.selectionType = Scandit.BarcodeSelectionTapSelection
                .withFreezeBehaviorAndTapBehavior(FREEZE_BEHAVIOUR, TAP_BEHAVIOUR);
        }
        else if (SELECTION_TYPE === _models__WEBPACK_IMPORTED_MODULE_3__.BarcodeSelectionTypeName.Aimer) {
            this.barcodeSelectionSettings.selectionType = Scandit.BarcodeSelectionAimerSelection.aimerSelection;
            if (SELECTION_STRATEGY === _models__WEBPACK_IMPORTED_MODULE_3__.BarcodeSelectionStrategyType.Auto) {
                this.barcodeSelectionSettings.selectionType.selectionStrategy
                    = Scandit.BarcodeSelectionAutoSelectionStrategy.autoSelectionStrategy;
            }
            else if (SELECTION_STRATEGY === _models__WEBPACK_IMPORTED_MODULE_3__.BarcodeSelectionStrategyType.Manual) {
                this.barcodeSelectionSettings.selectionType.selectionStrategy
                    = Scandit.BarcodeSelectionManualSelectionStrategy.manualSelectionStrategy;
            }
        }
        this.barcodeSelectionSettings.enableSymbologies(enabledSymbologiesSettings.map(({ key }) => Scandit.Symbology[key]));
        enabledSymbologiesSettings.forEach(settings => this.applySymbologySettings(this.barcodeSelectionSettings, settings));
        this.barcodeSelectionSettings.singleBarcodeAutoDetection
            = this.settingsService.singleBarcodeAutoDetectionForm.value.SINGLE_BARCODE_AUTO_DETECTION;
        return this.barcodeSelectionSettings;
    }
    applyFeedbackSettings() {
        const { FEEDBACK_VIBRATION, FEEDBACK_SOUND } = this.settingsService.feedbackForm.value;
        const vibration = FEEDBACK_VIBRATION ? Scandit.Vibration.defaultVibration : null;
        const sound = FEEDBACK_SOUND ? Scandit.Sound.defaultSound : null;
        const feedback = Scandit.BarcodeSelectionFeedback.default;
        feedback.selection = new Scandit.Feedback(vibration, sound);
        this.barcodeSelection.feedback = feedback;
    }
    applyBarcodeSelectionPointOfInterest() {
        const { BS_POINT_OF_INTEREST_ENABLED, BS_POINT_OF_INTEREST_X, BS_POINT_OF_INTEREST_Y } = this.settingsService.barcodeSelectionPointOfInterestForm.value;
        if (BS_POINT_OF_INTEREST_ENABLED) {
            const pointOfInterestX = this.getNumberWithUnit(BS_POINT_OF_INTEREST_X);
            const pointOfInterestY = this.getNumberWithUnit(BS_POINT_OF_INTEREST_Y);
            this.barcodeSelection.pointOfInterest = new Scandit.PointWithUnit(pointOfInterestX, pointOfInterestY);
        }
        else {
            this.barcodeSelection.pointOfInterest = null;
        }
    }
    applyCodeDuplicateFilterSettings() {
        const { CODE_DUPLICATE_FILTER } = this.settingsService.codeDuplicateFilterForm.value;
        const barcodeSelectionSettings = this.getBarcodeSelectionSettings();
        barcodeSelectionSettings.codeDuplicateFilter = CODE_DUPLICATE_FILTER * 1000;
        this.barcodeSelection.applySettings(barcodeSelectionSettings);
    }
    applyCameraSettings() {
        const { DESIRED_TORCH_STATE, CAMERA_POSITION, PREFERRED_RESOLUTION, ZOOM_FACTOR, FOCUS_RANGE, } = this.settingsService.cameraForm.value;
        const cameraSettings = new Scandit.CameraSettings({
            preferredResolution: PREFERRED_RESOLUTION,
            zoomFactor: ZOOM_FACTOR,
            focusRange: FOCUS_RANGE,
        });
        const camera = Scandit.Camera.atPosition(CAMERA_POSITION);
        camera.desiredTorchState = DESIRED_TORCH_STATE ? Scandit.TorchState.On : Scandit.TorchState.Off;
        const switchToDesiredStatePromise = this.context.frameSource ?
            this.context.frameSource.switchToDesiredState(Scandit.FrameSourceState.Off) :
            Promise.resolve();
        return switchToDesiredStatePromise
            .then(() => camera.applySettings(cameraSettings))
            .then(() => this.context.setFrameSource(camera))
            .then(() => camera.switchToDesiredState(Scandit.FrameSourceState.On));
    }
    applyViewSettings() {
        const { SCAN_AREA_GUIDES } = this.settingsService.scanAreaForm.value;
        this.captureView.nativeElement.style.zIndex = '1';
        if (!this.view) {
            this.view = Scandit.DataCaptureView.forContext(this.context);
        }
        this.applyPointOfInterestSettings(this.view);
        this.applyScanAreaSettings(this.view);
        this.view.connectToElement(this.captureView.nativeElement);
        this.view.zoomGesture = null;
        this.applyOverlayStyleSettings(SCAN_AREA_GUIDES, this.view);
    }
    applySymbologySettings(barcodeSelectionSettings, settings) {
        const symbologySettings = barcodeSelectionSettings.settingsForSymbology(Scandit.Symbology[settings.key]);
        if (settings.colorInverted !== undefined) {
            symbologySettings.isColorInvertedEnabled = settings.colorInverted;
        }
        if (settings.minimum !== undefined && settings.maximum !== undefined) {
            const activeSymbolCounts = new Array(settings.maximum + 1 - settings.minimum)
                .fill(0)
                .map((_, index) => settings.minimum + index);
            symbologySettings.activeSymbolCounts = activeSymbolCounts;
        }
        if (settings.extensions !== undefined && Array.isArray(settings.extensions)) {
            symbologySettings.enabledExtensions.forEach(extension => symbologySettings.setExtensionEnabled(extension, false));
            settings.extensions.forEach(extension => symbologySettings.setExtensionEnabled(extension, true));
        }
    }
    applyPointOfInterestSettings(view) {
        const { POINT_OF_INTEREST_X, POINT_OF_INTEREST_Y } = this.settingsService.pointOfInterestForm.value;
        const pointOfInterestX = this.getNumberWithUnit(POINT_OF_INTEREST_X);
        const pointOfInterestY = this.getNumberWithUnit(POINT_OF_INTEREST_Y);
        const pointOfInterest = new Scandit.PointWithUnit(pointOfInterestX, pointOfInterestY);
        view.pointOfInterest = pointOfInterest;
    }
    applyScanAreaSettings(view) {
        const { SCAN_AREA_MARGIN_BOTTOM, SCAN_AREA_MARGIN_LEFT, SCAN_AREA_MARGIN_RIGHT, SCAN_AREA_MARGIN_TOP, } = this.settingsService.scanAreaForm.value;
        const scanAreaTop = this.getNumberWithUnit(SCAN_AREA_MARGIN_TOP);
        const scanAreaRight = this.getNumberWithUnit(SCAN_AREA_MARGIN_RIGHT);
        const scanAreaBottom = this.getNumberWithUnit(SCAN_AREA_MARGIN_BOTTOM);
        const scanAreaLeft = this.getNumberWithUnit(SCAN_AREA_MARGIN_LEFT);
        view.scanAreaMargins = new Scandit.MarginsWithUnit(scanAreaLeft, scanAreaRight, scanAreaTop, scanAreaBottom);
    }
    applyViewfinderSettings(overlay) {
        const { FRAME_COLOR, DOT_COLOR, } = this.settingsService.viewfinderForm.value;
        overlay.viewfinder.frameColor = this.getColor(FRAME_COLOR);
        overlay.viewfinder.dotColor = this.getColor(DOT_COLOR);
    }
    applyOverlayStyleSettings(SCAN_AREA_GUIDES, view) {
        const { OVERLAY_STYLE, TRACKED_BRUSH, AIMED_BRUSH, SELECTING_BRUSH, SELECTED_BRUSH, SHOULD_SHOW_HINTS } = this.settingsService.overlayForm.value;
        view.overlays.forEach(overlay => view.removeOverlay(overlay));
        const overlay = Scandit.BarcodeSelectionBasicOverlay.withBarcodeSelectionForViewWithStyle(this.barcodeSelection, view, OVERLAY_STYLE);
        overlay.shouldShowScanAreaGuides = SCAN_AREA_GUIDES;
        overlay.shouldShowHints = SHOULD_SHOW_HINTS;
        overlay.trackedBrush = TRACKED_BRUSH == _models__WEBPACK_IMPORTED_MODULE_3__.Brush.Default ? overlay.trackedBrush : new Scandit.Brush(this.getColor(TRACKED_BRUSH), this.getColor(TRACKED_BRUSH), 1);
        overlay.aimedBrush = AIMED_BRUSH == _models__WEBPACK_IMPORTED_MODULE_3__.Brush.Default ? overlay.aimedBrush : new Scandit.Brush(this.getColor(AIMED_BRUSH), this.getColor(AIMED_BRUSH), 1);
        overlay.selectingBrush = SELECTING_BRUSH == _models__WEBPACK_IMPORTED_MODULE_3__.Brush.Default ? overlay.selectingBrush : new Scandit.Brush(this.getColor(SELECTING_BRUSH), this.getColor(SELECTING_BRUSH), 1);
        overlay.selectedBrush = SELECTED_BRUSH == _models__WEBPACK_IMPORTED_MODULE_3__.Brush.Default ? overlay.selectedBrush : new Scandit.Brush(this.getColor(SELECTED_BRUSH), this.getColor(SELECTED_BRUSH), 1);
        this.applyViewfinderSettings(overlay);
    }
    getColor(rgbaString) {
        const parts = rgbaString.replace('rgba(', '').replace(')', '').split(',');
        return Scandit.Color.fromRGBA(...parts);
    }
    getNumberWithUnit({ value, unit }) {
        return new Scandit.NumberWithUnit(value, unit);
    }
};
ScanComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_4__.SettingsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
ScanComponent.propDecorators = {
    captureView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['captureView',] }]
};
ScanComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-scan',
        template: _scan_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_scan_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ScanComponent);



/***/ }),

/***/ 75355:
/*!*************************************!*\
  !*** ./src/app/scan/scan.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanPageModule": () => (/* binding */ ScanPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _scan_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scan.component */ 77940);
/* harmony import */ var _scan_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scan-routing.module */ 61251);







let ScanPageModule = class ScanPageModule {
};
ScanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _scan_routing_module__WEBPACK_IMPORTED_MODULE_1__.ScanPageRoutingModule,
        ],
        declarations: [_scan_component__WEBPACK_IMPORTED_MODULE_0__.ScanComponent]
    })
], ScanPageModule);



/***/ }),

/***/ 54797:
/*!*****************************************************!*\
  !*** ./src/app/scan/scan.component.scss?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = ".scan__content {\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjYW4uY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9NYWNpbnRvc2glMjBIRDIvaW9uaWNfYXBwcy9vdGhpbSUyMGFwcHMvU2NhbkRpdF9DYXBhY2l0b3IvV29yay1CYXJjb2RlQ2FwdHVyZVZpZXdzU2FtcGxlL3NyYy9hcHAvc2Nhbi9zY2FuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQ0FKIiwiZmlsZSI6InNjYW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2NhbiB7XG4gICZfX2NvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuIiwiLnNjYW5fX2NvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn0iXX0= */";

/***/ }),

/***/ 21927:
/*!*****************************************************!*\
  !*** ./src/app/scan/scan.component.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Barcode Selection Settings</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button [routerLink]=\"'/settings'\">\n        <ion-icon slot=\"icon-only\" name=\"settings\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class=\"app-transparent-content\">\n  <div #captureView class=\"scan__content\"></div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_scan_scan_module_ts.js.map