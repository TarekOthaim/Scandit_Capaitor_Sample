"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_settings_settings_module_ts"],{

/***/ 76614:
/*!****************************************************************************************************************!*\
  !*** ./src/app/settings/components/barcode-selection/code-duplicate-filter/code-duplicate-filter.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodeDuplicateFilterComponent": () => (/* binding */ CodeDuplicateFilterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _code_duplicate_filter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code-duplicate-filter.component.html?ngResource */ 68120);
/* harmony import */ var _code_duplicate_filter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code-duplicate-filter.component.scss?ngResource */ 60152);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services */ 21866);
/* harmony import */ var _settings_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../settings-base */ 27269);








let CodeDuplicateFilterComponent = class CodeDuplicateFilterComponent extends _settings_base__WEBPACK_IMPORTED_MODULE_3__.SettingsBase {
    constructor(route, platform, uiService, settingsService) {
        super(route, platform, uiService);
        this.route = route;
        this.platform = platform;
        this.uiService = uiService;
        this.settingsService = settingsService;
    }
    ngOnInit() {
        super.ngOnInit();
        this.form = this.settingsService.codeDuplicateFilterForm;
    }
};
CodeDuplicateFilterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__.UiService },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__.SettingsService }
];
CodeDuplicateFilterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-code-duplicate-filter',
        template: _code_duplicate_filter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_code_duplicate_filter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CodeDuplicateFilterComponent);



/***/ }),

/***/ 55312:
/*!**************************************************************************************!*\
  !*** ./src/app/settings/components/barcode-selection/feedback/feedback.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedbackComponent": () => (/* binding */ FeedbackComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _feedback_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback.component.html?ngResource */ 90332);
/* harmony import */ var _feedback_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feedback.component.scss?ngResource */ 60942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services */ 21866);
/* harmony import */ var _settings_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../settings-base */ 27269);








let FeedbackComponent = class FeedbackComponent extends _settings_base__WEBPACK_IMPORTED_MODULE_3__.SettingsBase {
    constructor(route, platform, uiService, settingsService) {
        super(route, platform, uiService);
        this.route = route;
        this.platform = platform;
        this.uiService = uiService;
        this.settingsService = settingsService;
    }
    ngOnInit() {
        super.ngOnInit();
        this.form = this.settingsService.feedbackForm;
    }
};
FeedbackComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__.UiService },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__.SettingsService }
];
FeedbackComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-feedback',
        template: _feedback_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_feedback_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FeedbackComponent);



/***/ }),

/***/ 48967:
/*!****************************************************************!*\
  !*** ./src/app/settings/components/barcode-selection/index.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SymbologiesComponent": () => (/* reexport safe */ _symbologies_symbologies_component__WEBPACK_IMPORTED_MODULE_0__.SymbologiesComponent),
/* harmony export */   "FeedbackComponent": () => (/* reexport safe */ _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_1__.FeedbackComponent),
/* harmony export */   "SelectionTypeComponent": () => (/* reexport safe */ _selection_type_selection_type_component__WEBPACK_IMPORTED_MODULE_2__.SelectionTypeComponent),
/* harmony export */   "CodeDuplicateFilterComponent": () => (/* reexport safe */ _code_duplicate_filter_code_duplicate_filter_component__WEBPACK_IMPORTED_MODULE_3__.CodeDuplicateFilterComponent),
/* harmony export */   "SingleBarcodeAutoDetectionComponent": () => (/* reexport safe */ _single_barcode_auto_detection_single_barcode_auto_detection_component__WEBPACK_IMPORTED_MODULE_4__.SingleBarcodeAutoDetectionComponent)
/* harmony export */ });
/* harmony import */ var _symbologies_symbologies_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./symbologies/symbologies.component */ 93302);
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feedback/feedback.component */ 55312);
/* harmony import */ var _selection_type_selection_type_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selection-type/selection-type.component */ 39423);
/* harmony import */ var _code_duplicate_filter_code_duplicate_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code-duplicate-filter/code-duplicate-filter.component */ 76614);
/* harmony import */ var _single_barcode_auto_detection_single_barcode_auto_detection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./single-barcode-auto-detection/single-barcode-auto-detection.component */ 43257);







/***/ }),

/***/ 39423:
/*!**************************************************************************************************!*\
  !*** ./src/app/settings/components/barcode-selection/selection-type/selection-type.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectionTypeComponent": () => (/* binding */ SelectionTypeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _selection_type_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection-type.component.html?ngResource */ 9772);
/* harmony import */ var _selection_type_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selection-type.component.scss?ngResource */ 62406);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config */ 87448);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services */ 21866);
/* harmony import */ var _settings_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../settings-base */ 27269);









let SelectionTypeComponent = class SelectionTypeComponent extends _settings_base__WEBPACK_IMPORTED_MODULE_4__.SettingsBase {
    constructor(route, platform, uiService, settingsService) {
        super(route, platform, uiService);
        this.route = route;
        this.platform = platform;
        this.uiService = uiService;
        this.settingsService = settingsService;
    }
    ngOnInit() {
        super.ngOnInit();
        this.form = this.settingsService.selectionTypeForm;
        this.selectionType = this.getField(src_app_config__WEBPACK_IMPORTED_MODULE_2__.SettingsFieldName.SELECTION_TYPE);
        this.freezeBehaviour = this.getField(src_app_config__WEBPACK_IMPORTED_MODULE_2__.SettingsFieldName.FREEZE_BEHAVIOUR);
        this.tapBehaviour = this.getField(src_app_config__WEBPACK_IMPORTED_MODULE_2__.SettingsFieldName.TAP_BEHAVIOUR);
        this.selectionStrategy = this.getField(src_app_config__WEBPACK_IMPORTED_MODULE_2__.SettingsFieldName.SELECTION_STRATEGY);
    }
};
SelectionTypeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_3__.UiService },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_3__.SettingsService }
];
SelectionTypeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-selection-type',
        template: _selection_type_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_selection_type_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SelectionTypeComponent);



/***/ }),

/***/ 43257:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/settings/components/barcode-selection/single-barcode-auto-detection/single-barcode-auto-detection.component.ts ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleBarcodeAutoDetectionComponent": () => (/* binding */ SingleBarcodeAutoDetectionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _single_barcode_auto_detection_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./single-barcode-auto-detection.component.html?ngResource */ 77674);
/* harmony import */ var _single_barcode_auto_detection_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single-barcode-auto-detection.component.scss?ngResource */ 29364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services */ 21866);
/* harmony import */ var _settings_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../settings-base */ 27269);








let SingleBarcodeAutoDetectionComponent = class SingleBarcodeAutoDetectionComponent extends _settings_base__WEBPACK_IMPORTED_MODULE_3__.SettingsBase {
    constructor(route, platform, uiService, settingsService) {
        super(route, platform, uiService);
        this.route = route;
        this.platform = platform;
        this.uiService = uiService;
        this.settingsService = settingsService;
    }
    ngOnInit() {
        super.ngOnInit();
        this.form = this.settingsService.singleBarcodeAutoDetectionForm;
    }
};
SingleBarcodeAutoDetectionComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__.UiService },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__.SettingsService }
];
SingleBarcodeAutoDetectionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-single-barcode-auto-detection',
        template: _single_barcode_auto_detection_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_single_barcode_auto_detection_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SingleBarcodeAutoDetectionComponent);



/***/ }),

/***/ 93302:
/*!********************************************************************************************!*\
  !*** ./src/app/settings/components/barcode-selection/symbologies/symbologies.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SymbologiesComponent": () => (/* binding */ SymbologiesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _symbologies_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./symbologies.component.html?ngResource */ 25949);
/* harmony import */ var _symbologies_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./symbologies.component.scss?ngResource */ 41740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services */ 21866);
/* harmony import */ var _settings_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../settings-base */ 27269);








let SymbologiesComponent = class SymbologiesComponent extends _settings_base__WEBPACK_IMPORTED_MODULE_3__.SettingsBase {
    constructor(route, platform, uiService, settingsService) {
        super(route, platform, uiService);
        this.route = route;
        this.platform = platform;
        this.uiService = uiService;
        this.settingsService = settingsService;
        this.symbologies = [];
    }
    ngOnInit() {
        super.ngOnInit();
        this.form = this.settingsService.symbologiesForm;
        this.symbologies = Object.keys(this.form.controls);
    }
    toggleAll(enabled) {
        Object.values(this.form.controls).forEach(control => control.patchValue({ enabled }));
    }
};
SymbologiesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__.UiService },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__.SettingsService }
];
SymbologiesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-symbologies',
        template: _symbologies_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_symbologies_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SymbologiesComponent);



/***/ }),

/***/ 25849:
/*!****************************************************************!*\
  !*** ./src/app/settings/components/camera/camera.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraComponent": () => (/* binding */ CameraComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _camera_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camera.component.html?ngResource */ 9746);
/* harmony import */ var _camera_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camera.component.scss?ngResource */ 68457);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services */ 21866);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config */ 87448);
/* harmony import */ var _settings_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../settings-base */ 27269);









let CameraComponent = class CameraComponent extends _settings_base__WEBPACK_IMPORTED_MODULE_4__.SettingsBase {
    constructor(route, platform, uiService, settingsService) {
        super(route, platform, uiService);
        this.route = route;
        this.platform = platform;
        this.uiService = uiService;
        this.settingsService = settingsService;
    }
    ngOnInit() {
        super.ngOnInit();
        this.cameraPosition = this.getField(_config__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.CAMERA_POSITION);
        this.form = this.settingsService.cameraForm;
    }
};
CameraComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__.UiService },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__.SettingsService }
];
CameraComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-camera',
        template: _camera_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_camera_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CameraComponent);



/***/ }),

/***/ 96567:
/*!**********************************************!*\
  !*** ./src/app/settings/components/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainSettingsComponent": () => (/* reexport safe */ _main_settings_main_settings_component__WEBPACK_IMPORTED_MODULE_0__.MainSettingsComponent),
/* harmony export */   "CodeDuplicateFilterComponent": () => (/* reexport safe */ _barcode_selection__WEBPACK_IMPORTED_MODULE_1__.CodeDuplicateFilterComponent),
/* harmony export */   "FeedbackComponent": () => (/* reexport safe */ _barcode_selection__WEBPACK_IMPORTED_MODULE_1__.FeedbackComponent),
/* harmony export */   "SelectionTypeComponent": () => (/* reexport safe */ _barcode_selection__WEBPACK_IMPORTED_MODULE_1__.SelectionTypeComponent),
/* harmony export */   "SingleBarcodeAutoDetectionComponent": () => (/* reexport safe */ _barcode_selection__WEBPACK_IMPORTED_MODULE_1__.SingleBarcodeAutoDetectionComponent),
/* harmony export */   "SymbologiesComponent": () => (/* reexport safe */ _barcode_selection__WEBPACK_IMPORTED_MODULE_1__.SymbologiesComponent),
/* harmony export */   "BSPointOfInterestComponent": () => (/* reexport safe */ _view__WEBPACK_IMPORTED_MODULE_2__.BSPointOfInterestComponent),
/* harmony export */   "OverlayComponent": () => (/* reexport safe */ _view__WEBPACK_IMPORTED_MODULE_2__.OverlayComponent),
/* harmony export */   "PointOfInterestComponent": () => (/* reexport safe */ _view__WEBPACK_IMPORTED_MODULE_2__.PointOfInterestComponent),
/* harmony export */   "ScanAreaComponent": () => (/* reexport safe */ _view__WEBPACK_IMPORTED_MODULE_2__.ScanAreaComponent),
/* harmony export */   "ViewfinderComponent": () => (/* reexport safe */ _view__WEBPACK_IMPORTED_MODULE_2__.ViewfinderComponent),
/* harmony export */   "CameraComponent": () => (/* reexport safe */ _camera_camera_component__WEBPACK_IMPORTED_MODULE_3__.CameraComponent),
/* harmony export */   "SettingsListComponent": () => (/* reexport safe */ _settings_list_settings_list_component__WEBPACK_IMPORTED_MODULE_4__.SettingsListComponent),
/* harmony export */   "UnitNumberComponent": () => (/* reexport safe */ _unit_number_unit_number_component__WEBPACK_IMPORTED_MODULE_5__.UnitNumberComponent),
/* harmony export */   "UnitNumberItemComponent": () => (/* reexport safe */ _unit_number_item_unit_number_item_component__WEBPACK_IMPORTED_MODULE_6__.UnitNumberItemComponent),
/* harmony export */   "SymbologyComponent": () => (/* reexport safe */ _symbology_symbology_component__WEBPACK_IMPORTED_MODULE_7__.SymbologyComponent),
/* harmony export */   "SymbologyItemComponent": () => (/* reexport safe */ _symbology_item_symbology_item_component__WEBPACK_IMPORTED_MODULE_8__.SymbologyItemComponent)
/* harmony export */ });
/* harmony import */ var _main_settings_main_settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-settings/main-settings.component */ 84507);
/* harmony import */ var _barcode_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./barcode-selection */ 48967);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ 41742);
/* harmony import */ var _camera_camera_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./camera/camera.component */ 25849);
/* harmony import */ var _settings_list_settings_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings-list/settings-list.component */ 20351);
/* harmony import */ var _unit_number_unit_number_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./unit-number/unit-number.component */ 78653);
/* harmony import */ var _unit_number_item_unit_number_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./unit-number-item/unit-number-item.component */ 93233);
/* harmony import */ var _symbology_symbology_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./symbology/symbology.component */ 40685);
/* harmony import */ var _symbology_item_symbology_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./symbology-item/symbology-item.component */ 64603);











/***/ }),

/***/ 84507:
/*!******************************************************************************!*\
  !*** ./src/app/settings/components/main-settings/main-settings.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainSettingsComponent": () => (/* binding */ MainSettingsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _main_settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-settings.component.html?ngResource */ 152);
/* harmony import */ var _main_settings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-settings.component.scss?ngResource */ 57461);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services */ 21866);
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ui.service */ 79846);
/* harmony import */ var _settings_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../settings-base */ 27269);










let MainSettingsComponent = class MainSettingsComponent extends _settings_base__WEBPACK_IMPORTED_MODULE_4__.SettingsBase {
    constructor(route, platform, uiService, settingsService) {
        super(route, platform, uiService);
        this.route = route;
        this.platform = platform;
        this.uiService = uiService;
        this.settingsService = settingsService;
    }
    ngOnInit() {
        super.ngOnInit();
        this.items$ = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => data === null || data === void 0 ? void 0 : data.items));
        this.settingsService.reset = false;
        this.version = Scandit.DataCaptureVersion.pluginVersion;
    }
    resetBarcodeSelection() {
        this.settingsService.reset = true;
    }
};
MainSettingsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_3__.UiService },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__.SettingsService }
];
MainSettingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-main-settings',
        template: _main_settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_main_settings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MainSettingsComponent);



/***/ }),

/***/ 27269:
/*!******************************************************!*\
  !*** ./src/app/settings/components/settings-base.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsBase": () => (/* binding */ SettingsBase)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/ui.service */ 79846);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ 87448);







let SettingsBase = class SettingsBase {
    constructor(route, platform, uiService) {
        this.route = route;
        this.platform = platform;
        this.uiService = uiService;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.fields = (0,_config__WEBPACK_IMPORTED_MODULE_1__.settingsFields)(Scandit);
        this.fieldName = _config__WEBPACK_IMPORTED_MODULE_1__.SettingsFieldName;
        this.fieldTypes = _config__WEBPACK_IMPORTED_MODULE_1__.SettingsFieldType;
    }
    ngOnInit() {
        var _a, _b, _c;
        this.uiService.settingsLabel$.next((_c = (_b = (_a = this.route) === null || _a === void 0 ? void 0 : _a.snapshot) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.label);
    }
    ngOnDestroy() {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }
    get isIos() {
        return this.platform.is('ios');
    }
    get lines() {
        return this.isIos ? 'full' : 'none';
    }
    getField(field) {
        return this.fields[field];
    }
    getFields(fields) {
        return fields.reduce((value, field) => (Object.assign(Object.assign({}, value), { [field]: this.getField(field) })), {});
    }
};
SettingsBase.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform },
    { type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_0__.UiService }
];
SettingsBase = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        template: ''
    })
], SettingsBase);



/***/ }),

/***/ 20351:
/*!******************************************************************************!*\
  !*** ./src/app/settings/components/settings-list/settings-list.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsListComponent": () => (/* binding */ SettingsListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _settings_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-list.component.html?ngResource */ 25819);
/* harmony import */ var _settings_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-list.component.scss?ngResource */ 37500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ui.service */ 79846);
/* harmony import */ var _settings_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../settings-base */ 27269);









let SettingsListComponent = class SettingsListComponent extends _settings_base__WEBPACK_IMPORTED_MODULE_3__.SettingsBase {
    constructor(route, platform, uiService) {
        super(route, platform, uiService);
        this.route = route;
        this.platform = platform;
        this.uiService = uiService;
    }
    ngOnInit() {
        super.ngOnInit();
        this.items$ = this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(data => data === null || data === void 0 ? void 0 : data.items));
    }
};
SettingsListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_2__.UiService }
];
SettingsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-settings-list',
        template: _settings_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_settings_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SettingsListComponent);



/***/ }),

/***/ 64603:
/*!********************************************************************************!*\
  !*** ./src/app/settings/components/symbology-item/symbology-item.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SymbologyItemComponent": () => (/* binding */ SymbologyItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _symbology_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./symbology-item.component.html?ngResource */ 45533);
/* harmony import */ var _symbology_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./symbology-item.component.scss?ngResource */ 11855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services */ 21866);






let SymbologyItemComponent = class SymbologyItemComponent {
    constructor(platform, settingsService) {
        this.platform = platform;
        this.settingsService = settingsService;
    }
    ngOnInit() {
        var _a, _b;
        this.description = (_b = (_a = this.settingsService.symbologies) === null || _a === void 0 ? void 0 : _a[this.symbology]) === null || _b === void 0 ? void 0 : _b.description;
    }
    get isIos() {
        return this.platform.is('ios');
    }
    get lines() {
        return this.isIos ? 'full' : 'none';
    }
};
SymbologyItemComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__.SettingsService }
];
SymbologyItemComponent.propDecorators = {
    symbology: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    enabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
SymbologyItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-symbology-item',
        template: _symbology_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_symbology_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SymbologyItemComponent);



/***/ }),

/***/ 40685:
/*!**********************************************************************!*\
  !*** ./src/app/settings/components/symbology/symbology.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SymbologyComponent": () => (/* binding */ SymbologyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _symbology_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./symbology.component.html?ngResource */ 24059);
/* harmony import */ var _symbology_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./symbology.component.scss?ngResource */ 68663);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services */ 21866);
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ui.service */ 79846);
/* harmony import */ var _settings_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../settings-base */ 27269);









let SymbologyComponent = class SymbologyComponent extends _settings_base__WEBPACK_IMPORTED_MODULE_4__.SettingsBase {
    constructor(route, platform, uiService, settingsService) {
        super(route, platform, uiService);
        this.route = route;
        this.platform = platform;
        this.uiService = uiService;
        this.settingsService = settingsService;
        this.enabledExtensions = {};
        this.minOptions = [];
        this.maxOptions = [];
    }
    get supportedExtensions() {
        var _a;
        return (_a = this.description.supportedExtensions) === null || _a === void 0 ? void 0 : _a.filter((extension) => !extension.includes("add_on"));
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f;
        this.symbology = (_c = (_b = (_a = this.route) === null || _a === void 0 ? void 0 : _a.snapshot) === null || _b === void 0 ? void 0 : _b.params) === null || _c === void 0 ? void 0 : _c.symbology;
        this.description = (_e = (_d = this.settingsService.symbologies) === null || _d === void 0 ? void 0 : _d[this.symbology]) === null || _e === void 0 ? void 0 : _e.description;
        this.uiService.settingsLabel$.next((_f = this.description) === null || _f === void 0 ? void 0 : _f.readableName);
        this.form = this.settingsService.symbologiesForm.controls[this.symbology];
        this.setMinOptions();
        this.setMaxOptions();
    }
    onMinimumValueChange(value) {
        this.form.patchValue({ minimum: value });
        this.setMaxOptions();
    }
    onMaximumValueChange(value) {
        this.form.patchValue({ maximum: value });
        this.setMinOptions();
    }
    onExtensionsToggle(extension) {
        const currentExtensions = this.form.value.extensions;
        const isSelected = currentExtensions.includes(extension);
        const extensions = isSelected ?
            currentExtensions.filter((item) => item !== extension) :
            [...currentExtensions, extension];
        this.form.patchValue({ extensions });
    }
    onColorInvertedClick(event) {
        this.toggle(event, 'colorInverted');
    }
    onEnabledClick(event) {
        this.toggle(event, 'enabled');
    }
    toggle(event, fieldName) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        this.form.patchValue({ [fieldName]: !this.form.value[fieldName] });
    }
    setMinOptions() {
        const min = this.description.activeSymbolCountRange.minimum;
        const max = Math.min(this.description.activeSymbolCountRange.maximum + 1, this.form.value.maximum + 1);
        this.minOptions = new Array(max - min).fill(0).map((_, index) => min + index);
    }
    setMaxOptions() {
        const min = Math.max(this.description.activeSymbolCountRange.minimum, this.form.value.minimum);
        const max = this.description.activeSymbolCountRange.maximum;
        this.maxOptions = new Array(max + 1 - min).fill(0).map((_, index) => min + index);
    }
};
SymbologyComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_3__.UiService },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__.SettingsService }
];
SymbologyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-symbology',
        template: _symbology_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_symbology_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SymbologyComponent);



/***/ }),

/***/ 93233:
/*!************************************************************************************!*\
  !*** ./src/app/settings/components/unit-number-item/unit-number-item.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnitNumberItemComponent": () => (/* binding */ UnitNumberItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _unit_number_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unit-number-item.component.html?ngResource */ 88306);
/* harmony import */ var _unit_number_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unit-number-item.component.scss?ngResource */ 92454);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);





let UnitNumberItemComponent = class UnitNumberItemComponent {
    constructor(platform) {
        this.platform = platform;
    }
    get isIos() {
        return this.platform.is('ios');
    }
    get lines() {
        return this.isIos ? 'full' : 'none';
    }
};
UnitNumberItemComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Platform }
];
UnitNumberItemComponent.propDecorators = {
    field: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    currentValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
UnitNumberItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-unit-number-item',
        template: _unit_number_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_unit_number_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UnitNumberItemComponent);



/***/ }),

/***/ 78653:
/*!**************************************************************************!*\
  !*** ./src/app/settings/components/unit-number/unit-number.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnitNumberComponent": () => (/* binding */ UnitNumberComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _unit_number_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unit-number.component.html?ngResource */ 92971);
/* harmony import */ var _unit_number_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unit-number.component.scss?ngResource */ 54377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ui.service */ 79846);
/* harmony import */ var _settings_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../settings-base */ 27269);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services */ 21866);











let UnitNumberComponent = class UnitNumberComponent extends _settings_base__WEBPACK_IMPORTED_MODULE_3__.SettingsBase {
    constructor(route, platform, uiService, settingsService, formBuilder) {
        super(route, platform, uiService);
        this.route = route;
        this.platform = platform;
        this.uiService = uiService;
        this.settingsService = settingsService;
        this.formBuilder = formBuilder;
        this.units = [
            { label: Scandit.MeasureUnit.DIP.toUpperCase(), value: Scandit.MeasureUnit.DIP },
            { label: Scandit.MeasureUnit.Fraction.toUpperCase(), value: Scandit.MeasureUnit.Fraction },
            { label: Scandit.MeasureUnit.Pixel.toUpperCase(), value: Scandit.MeasureUnit.Pixel },
        ];
    }
    ngOnInit() {
        var _a, _b, _c, _d;
        super.ngOnInit();
        const { form: formName, fieldName } = (_b = (_a = this.route) === null || _a === void 0 ? void 0 : _a.snapshot) === null || _b === void 0 ? void 0 : _b.data;
        this.field = this.getField(fieldName);
        this.parentForm = this.settingsService[formName];
        this.form = this.formBuilder.group({
            value: [
                ((_c = this.parentForm.value[this.field.key]) === null || _c === void 0 ? void 0 : _c.value) || this.field.defaultValue.value,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.max(this.field.max),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(this.field.min)
                ])
            ],
            unit: [((_d = this.parentForm.value[this.field.key]) === null || _d === void 0 ? void 0 : _d.unit) || this.field.defaultValue.unit],
        });
        this.form.valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroyed$))
            .subscribe(value => this.parentForm.controls[this.field.key].patchValue(value));
    }
};
UnitNumberComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_2__.UiService },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_4__.SettingsService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder }
];
UnitNumberComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-unit-number',
        template: _unit_number_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_unit_number_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UnitNumberComponent);



/***/ }),

/***/ 55546:
/*!*************************************************************************************************!*\
  !*** ./src/app/settings/components/view/bs-point-of-interest/bs-point-of-interest.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BSPointOfInterestComponent": () => (/* binding */ BSPointOfInterestComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _bs_point_of_interest_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bs-point-of-interest.component.html?ngResource */ 53287);
/* harmony import */ var _bs_point_of_interest_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bs-point-of-interest.component.scss?ngResource */ 10303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services */ 21866);
/* harmony import */ var _settings_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../settings-base */ 27269);








let BSPointOfInterestComponent = class BSPointOfInterestComponent extends _settings_base__WEBPACK_IMPORTED_MODULE_3__.SettingsBase {
    constructor(route, platform, uiService, settingsService) {
        super(route, platform, uiService);
        this.route = route;
        this.platform = platform;
        this.uiService = uiService;
        this.settingsService = settingsService;
    }
    ngOnInit() {
        var _a, _b;
        super.ngOnInit();
        const { form: formName } = (_b = (_a = this.route) === null || _a === void 0 ? void 0 : _a.snapshot) === null || _b === void 0 ? void 0 : _b.data;
        this.form = this.settingsService[formName];
    }
};
BSPointOfInterestComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__.UiService },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__.SettingsService }
];
BSPointOfInterestComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-bs-point-of-interest',
        template: _bs_point_of_interest_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_bs_point_of_interest_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BSPointOfInterestComponent);



/***/ }),

/***/ 41742:
/*!***************************************************!*\
  !*** ./src/app/settings/components/view/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverlayComponent": () => (/* reexport safe */ _overlay_overlay_component__WEBPACK_IMPORTED_MODULE_0__.OverlayComponent),
/* harmony export */   "PointOfInterestComponent": () => (/* reexport safe */ _point_of_interest_point_of_interest_component__WEBPACK_IMPORTED_MODULE_1__.PointOfInterestComponent),
/* harmony export */   "BSPointOfInterestComponent": () => (/* reexport safe */ _bs_point_of_interest_bs_point_of_interest_component__WEBPACK_IMPORTED_MODULE_2__.BSPointOfInterestComponent),
/* harmony export */   "ScanAreaComponent": () => (/* reexport safe */ _scan_area_scan_area_component__WEBPACK_IMPORTED_MODULE_3__.ScanAreaComponent),
/* harmony export */   "ViewfinderComponent": () => (/* reexport safe */ _viewfinder_viewfinder_component__WEBPACK_IMPORTED_MODULE_4__.ViewfinderComponent)
/* harmony export */ });
/* harmony import */ var _overlay_overlay_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overlay/overlay.component */ 66615);
/* harmony import */ var _point_of_interest_point_of_interest_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point-of-interest/point-of-interest.component */ 34212);
/* harmony import */ var _bs_point_of_interest_bs_point_of_interest_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bs-point-of-interest/bs-point-of-interest.component */ 55546);
/* harmony import */ var _scan_area_scan_area_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scan-area/scan-area.component */ 10960);
/* harmony import */ var _viewfinder_viewfinder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewfinder/viewfinder.component */ 37738);







/***/ }),

/***/ 66615:
/*!***********************************************************************!*\
  !*** ./src/app/settings/components/view/overlay/overlay.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverlayComponent": () => (/* binding */ OverlayComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _overlay_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overlay.component.html?ngResource */ 47713);
/* harmony import */ var _overlay_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overlay.component.scss?ngResource */ 7006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config */ 87448);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services */ 21866);
/* harmony import */ var _settings_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../settings-base */ 27269);









let OverlayComponent = class OverlayComponent extends _settings_base__WEBPACK_IMPORTED_MODULE_4__.SettingsBase {
    constructor(route, platform, uiService, settingsService) {
        super(route, platform, uiService);
        this.route = route;
        this.platform = platform;
        this.uiService = uiService;
        this.settingsService = settingsService;
    }
    ngOnInit() {
        super.ngOnInit();
        this.form = this.settingsService.overlayForm;
        this.style = this.getField(src_app_config__WEBPACK_IMPORTED_MODULE_2__.SettingsFieldName.OVERLAY_STYLE);
    }
};
OverlayComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_3__.UiService },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_3__.SettingsService }
];
OverlayComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-overlay',
        template: _overlay_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_overlay_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OverlayComponent);



/***/ }),

/***/ 34212:
/*!*******************************************************************************************!*\
  !*** ./src/app/settings/components/view/point-of-interest/point-of-interest.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointOfInterestComponent": () => (/* binding */ PointOfInterestComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _point_of_interest_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point-of-interest.component.html?ngResource */ 88059);
/* harmony import */ var _point_of_interest_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point-of-interest.component.scss?ngResource */ 60992);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services */ 21866);
/* harmony import */ var _settings_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../settings-base */ 27269);








let PointOfInterestComponent = class PointOfInterestComponent extends _settings_base__WEBPACK_IMPORTED_MODULE_3__.SettingsBase {
    constructor(route, platform, uiService, settingsService) {
        super(route, platform, uiService);
        this.route = route;
        this.platform = platform;
        this.uiService = uiService;
        this.settingsService = settingsService;
    }
    ngOnInit() {
        var _a, _b;
        super.ngOnInit();
        const { form: formName } = (_b = (_a = this.route) === null || _a === void 0 ? void 0 : _a.snapshot) === null || _b === void 0 ? void 0 : _b.data;
        this.form = this.settingsService[formName];
    }
};
PointOfInterestComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__.UiService },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__.SettingsService }
];
PointOfInterestComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-point-of-interest',
        template: _point_of_interest_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_point_of_interest_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PointOfInterestComponent);



/***/ }),

/***/ 10960:
/*!***************************************************************************!*\
  !*** ./src/app/settings/components/view/scan-area/scan-area.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanAreaComponent": () => (/* binding */ ScanAreaComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _scan_area_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scan-area.component.html?ngResource */ 18096);
/* harmony import */ var _scan_area_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scan-area.component.scss?ngResource */ 7165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services */ 21866);
/* harmony import */ var _settings_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../settings-base */ 27269);








let ScanAreaComponent = class ScanAreaComponent extends _settings_base__WEBPACK_IMPORTED_MODULE_3__.SettingsBase {
    constructor(route, platform, uiService, settingsService) {
        super(route, platform, uiService);
        this.route = route;
        this.platform = platform;
        this.uiService = uiService;
        this.settingsService = settingsService;
    }
    ngOnInit() {
        super.ngOnInit();
        this.form = this.settingsService.scanAreaForm;
    }
};
ScanAreaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__.UiService },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__.SettingsService }
];
ScanAreaComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-scan-area',
        template: _scan_area_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_scan_area_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ScanAreaComponent);



/***/ }),

/***/ 37738:
/*!*****************************************************************************!*\
  !*** ./src/app/settings/components/view/viewfinder/viewfinder.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewfinderComponent": () => (/* binding */ ViewfinderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _viewfinder_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewfinder.component.html?ngResource */ 86633);
/* harmony import */ var _viewfinder_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewfinder.component.scss?ngResource */ 93842);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services */ 21866);
/* harmony import */ var _settings_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../settings-base */ 27269);








let ViewfinderComponent = class ViewfinderComponent extends _settings_base__WEBPACK_IMPORTED_MODULE_3__.SettingsBase {
    constructor(route, platform, uiService, settingsService) {
        super(route, platform, uiService);
        this.route = route;
        this.platform = platform;
        this.uiService = uiService;
        this.settingsService = settingsService;
    }
    ngOnInit() {
        super.ngOnInit();
        this.form = this.settingsService.viewfinderForm;
    }
};
ViewfinderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__.UiService },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__.SettingsService }
];
ViewfinderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-viewfinder',
        template: _viewfinder_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_viewfinder_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewfinderComponent);



/***/ }),

/***/ 91836:
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageRoutingModule": () => (/* binding */ SettingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ 87448);
/* harmony import */ var _shared_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/controls */ 17150);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ 96567);
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.component */ 94586);







const routes = [
    {
        path: '',
        component: _settings_component__WEBPACK_IMPORTED_MODULE_3__.SettingsComponent,
        data: {
            label: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.SETTINGS,
        },
        children: [
            {
                path: '',
                component: _components__WEBPACK_IMPORTED_MODULE_2__.MainSettingsComponent,
                data: {
                    items: _config__WEBPACK_IMPORTED_MODULE_0__.mainNavigationItems,
                    label: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.SETTINGS,
                }
            },
            {
                path: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationRoute.BARCODE_SELECTION,
                children: [
                    {
                        path: '',
                        component: _components__WEBPACK_IMPORTED_MODULE_2__.SettingsListComponent,
                        data: {
                            items: _config__WEBPACK_IMPORTED_MODULE_0__.barcodeSelectionNavigationItems,
                            label: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.BARCODE_SELECTION,
                        }
                    },
                    {
                        path: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationRoute.SYMBOLOGIES,
                        children: [
                            {
                                path: '',
                                component: _components__WEBPACK_IMPORTED_MODULE_2__.SymbologiesComponent,
                                data: {
                                    label: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.SYMBOLOGIES,
                                }
                            },
                            {
                                path: ':symbology',
                                component: _components__WEBPACK_IMPORTED_MODULE_2__.SymbologyComponent,
                            },
                        ],
                    },
                    {
                        path: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationRoute.BS_POINT_OF_INTEREST,
                        children: [
                            {
                                path: '',
                                component: _components__WEBPACK_IMPORTED_MODULE_2__.BSPointOfInterestComponent,
                                data: {
                                    form: 'barcodeSelectionPointOfInterestForm',
                                    label: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.BS_POINT_OF_INTEREST,
                                }
                            },
                            {
                                path: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationRoute.BS_POINT_OF_INTEREST_X,
                                component: _components__WEBPACK_IMPORTED_MODULE_2__.UnitNumberComponent,
                                data: {
                                    form: 'barcodeSelectionPointOfInterestForm',
                                    label: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.BS_POINT_OF_INTEREST_X,
                                    fieldName: _config__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.BS_POINT_OF_INTEREST_X,
                                },
                            },
                            {
                                path: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationRoute.BS_POINT_OF_INTEREST_Y,
                                component: _components__WEBPACK_IMPORTED_MODULE_2__.UnitNumberComponent,
                                data: {
                                    form: 'barcodeSelectionPointOfInterestForm',
                                    label: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.BS_POINT_OF_INTEREST_Y,
                                    fieldName: _config__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.BS_POINT_OF_INTEREST_Y,
                                },
                            },
                        ]
                    },
                    {
                        path: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationRoute.SELECTION_TYPE,
                        children: [
                            {
                                path: '',
                                component: _components__WEBPACK_IMPORTED_MODULE_2__.SelectionTypeComponent,
                                data: {
                                    label: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.SELECTION_TYPE,
                                }
                            },
                            {
                                path: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationRoute.SELECTION_TYPE,
                                component: _shared_controls__WEBPACK_IMPORTED_MODULE_1__.FlatSelectComponent,
                                data: {
                                    form: 'selectionTypeForm',
                                    label: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.SELECTION_TYPE,
                                    fieldName: _config__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.SELECTION_TYPE,
                                },
                            },
                            {
                                path: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationRoute.FREEZE_BEHAVIOUR,
                                component: _shared_controls__WEBPACK_IMPORTED_MODULE_1__.FlatSelectComponent,
                                data: {
                                    form: 'selectionTypeForm',
                                    label: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.FREEZE_BEHAVIOUR,
                                    fieldName: _config__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.FREEZE_BEHAVIOUR,
                                },
                            },
                            {
                                path: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationRoute.TAP_BEHAVIOUR,
                                component: _shared_controls__WEBPACK_IMPORTED_MODULE_1__.FlatSelectComponent,
                                data: {
                                    form: 'selectionTypeForm',
                                    label: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.TAP_BEHAVIOUR,
                                    fieldName: _config__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.TAP_BEHAVIOUR,
                                },
                            },
                            {
                                path: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationRoute.SELECTION_STRATEGY,
                                component: _shared_controls__WEBPACK_IMPORTED_MODULE_1__.FlatSelectComponent,
                                data: {
                                    form: 'selectionTypeForm',
                                    label: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.SELECTION_STRATEGY,
                                    fieldName: _config__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.SELECTION_STRATEGY,
                                },
                            },
                        ],
                    },
                    {
                        path: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationRoute.FEEDBACK,
                        component: _components__WEBPACK_IMPORTED_MODULE_2__.FeedbackComponent,
                        data: {
                            label: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.FEEDBACK,
                        }
                    },
                    {
                        path: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationRoute.CODE_DUPLICATE_FILTER,
                        component: _components__WEBPACK_IMPORTED_MODULE_2__.CodeDuplicateFilterComponent,
                        data: {
                            label: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.CODE_DUPLICATE_FILTER,
                        }
                    },
                    {
                        path: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationRoute.SINGLE_BARCODE_AUTO_DETECTION,
                        component: _components__WEBPACK_IMPORTED_MODULE_2__.SingleBarcodeAutoDetectionComponent,
                        data: {
                            label: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.SINGLE_BARCODE_AUTO_DETECTION,
                        }
                    },
                ]
            },
            {
                path: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationRoute.CAMERA,
                component: _components__WEBPACK_IMPORTED_MODULE_2__.CameraComponent,
                data: {
                    label: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.CAMERA,
                }
            },
            {
                path: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationRoute.VIEW,
                children: [
                    {
                        path: '',
                        component: _components__WEBPACK_IMPORTED_MODULE_2__.SettingsListComponent,
                        data: {
                            items: _config__WEBPACK_IMPORTED_MODULE_0__.viewNavigationItems,
                            label: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.VIEW,
                        },
                    },
                    {
                        path: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationRoute.OVERLAY,
                        component: _components__WEBPACK_IMPORTED_MODULE_2__.OverlayComponent,
                        data: {
                            label: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.OVERLAY,
                        }
                    },
                    {
                        path: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationRoute.POINT_OF_INTEREST,
                        children: [
                            {
                                path: '',
                                component: _components__WEBPACK_IMPORTED_MODULE_2__.PointOfInterestComponent,
                                data: {
                                    form: 'pointOfInterestForm',
                                    label: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.POINT_OF_INTEREST,
                                }
                            },
                            {
                                path: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationRoute.POINT_OF_INTEREST_X,
                                component: _components__WEBPACK_IMPORTED_MODULE_2__.UnitNumberComponent,
                                data: {
                                    form: 'pointOfInterestForm',
                                    label: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.POINT_OF_INTEREST_X,
                                    fieldName: _config__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.POINT_OF_INTEREST_X,
                                },
                            },
                            {
                                path: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationRoute.POINT_OF_INTEREST_Y,
                                component: _components__WEBPACK_IMPORTED_MODULE_2__.UnitNumberComponent,
                                data: {
                                    form: 'pointOfInterestForm',
                                    label: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.POINT_OF_INTEREST_Y,
                                    fieldName: _config__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.POINT_OF_INTEREST_Y,
                                },
                            },
                        ]
                    },
                    {
                        path: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationRoute.SCAN_AREA,
                        children: [
                            {
                                path: '',
                                component: _components__WEBPACK_IMPORTED_MODULE_2__.ScanAreaComponent,
                                data: {
                                    label: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.SCAN_AREA,
                                }
                            },
                            {
                                path: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationRoute.SCAN_AREA_MARGIN_TOP,
                                component: _components__WEBPACK_IMPORTED_MODULE_2__.UnitNumberComponent,
                                data: {
                                    form: 'scanAreaForm',
                                    label: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.SCAN_AREA_MARGIN_TOP,
                                    fieldName: _config__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.SCAN_AREA_MARGIN_TOP,
                                },
                            },
                            {
                                path: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationRoute.SCAN_AREA_MARGIN_RIGHT,
                                component: _components__WEBPACK_IMPORTED_MODULE_2__.UnitNumberComponent,
                                data: {
                                    form: 'scanAreaForm',
                                    label: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.SCAN_AREA_MARGIN_RIGHT,
                                    fieldName: _config__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.SCAN_AREA_MARGIN_RIGHT,
                                },
                            },
                            {
                                path: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationRoute.SCAN_AREA_MARGIN_BOTTOM,
                                component: _components__WEBPACK_IMPORTED_MODULE_2__.UnitNumberComponent,
                                data: {
                                    form: 'scanAreaForm',
                                    label: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.SCAN_AREA_MARGIN_BOTTOM,
                                    fieldName: _config__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.SCAN_AREA_MARGIN_BOTTOM,
                                },
                            },
                            {
                                path: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationRoute.SCAN_AREA_MARGIN_LEFT,
                                component: _components__WEBPACK_IMPORTED_MODULE_2__.UnitNumberComponent,
                                data: {
                                    form: 'scanAreaForm',
                                    label: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.SCAN_AREA_MARGIN_LEFT,
                                    fieldName: _config__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.SCAN_AREA_MARGIN_LEFT,
                                },
                            }
                        ]
                    },
                    {
                        path: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationRoute.VIEWFINDER,
                        children: [
                            {
                                path: '',
                                component: _components__WEBPACK_IMPORTED_MODULE_2__.ViewfinderComponent,
                                data: {
                                    label: _config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.VIEWFINDER,
                                }
                            },
                        ]
                    }
                ],
            },
        ]
    },
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ 94586:
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.component.html?ngResource */ 49885);
/* harmony import */ var _settings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.component.scss?ngResource */ 75855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let SettingsComponent = class SettingsComponent {
};
SettingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-settings',
        template: _settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_settings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SettingsComponent);



/***/ }),

/***/ 27075:
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageModule": () => (/* binding */ SettingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ 96567);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-routing.module */ 91836);
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.component */ 94586);









const components = [
    _settings_component__WEBPACK_IMPORTED_MODULE_3__.SettingsComponent,
    _components__WEBPACK_IMPORTED_MODULE_1__.MainSettingsComponent,
    _components__WEBPACK_IMPORTED_MODULE_1__.CameraComponent,
    _components__WEBPACK_IMPORTED_MODULE_1__.SelectionTypeComponent,
    _components__WEBPACK_IMPORTED_MODULE_1__.FeedbackComponent,
    _components__WEBPACK_IMPORTED_MODULE_1__.SingleBarcodeAutoDetectionComponent,
    _components__WEBPACK_IMPORTED_MODULE_1__.CodeDuplicateFilterComponent,
    _components__WEBPACK_IMPORTED_MODULE_1__.SymbologiesComponent,
    _components__WEBPACK_IMPORTED_MODULE_1__.BSPointOfInterestComponent,
    _components__WEBPACK_IMPORTED_MODULE_1__.OverlayComponent,
    _components__WEBPACK_IMPORTED_MODULE_1__.PointOfInterestComponent,
    _components__WEBPACK_IMPORTED_MODULE_1__.ScanAreaComponent,
    _components__WEBPACK_IMPORTED_MODULE_1__.ViewfinderComponent,
    _components__WEBPACK_IMPORTED_MODULE_1__.SettingsListComponent,
    _components__WEBPACK_IMPORTED_MODULE_1__.UnitNumberComponent,
    _components__WEBPACK_IMPORTED_MODULE_1__.UnitNumberItemComponent,
    _components__WEBPACK_IMPORTED_MODULE_1__.SymbologyComponent,
    _components__WEBPACK_IMPORTED_MODULE_1__.SymbologyItemComponent,
];
let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__.SettingsPageRoutingModule,
        ],
        declarations: [...components],
        exports: [...components],
    })
], SettingsPageModule);



/***/ }),

/***/ 85921:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/takeUntil.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "takeUntil": () => (/* binding */ takeUntil)
/* harmony export */ });
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../innerSubscribe */ 52831);

function takeUntil(notifier) {
    return (source) => source.lift(new TakeUntilOperator(notifier));
}
class TakeUntilOperator {
    constructor(notifier) {
        this.notifier = notifier;
    }
    call(subscriber, source) {
        const takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
        const notifierSubscription = (0,_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.innerSubscribe)(this.notifier, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleInnerSubscriber(takeUntilSubscriber));
        if (notifierSubscription && !takeUntilSubscriber.seenValue) {
            takeUntilSubscriber.add(notifierSubscription);
            return source.subscribe(takeUntilSubscriber);
        }
        return takeUntilSubscriber;
    }
}
class TakeUntilSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleOuterSubscriber {
    constructor(destination) {
        super(destination);
        this.seenValue = false;
    }
    notifyNext() {
        this.seenValue = true;
        this.complete();
    }
    notifyComplete() {
    }
}


/***/ }),

/***/ 60152:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/settings/components/barcode-selection/code-duplicate-filter/code-duplicate-filter.component.scss?ngResource ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2RlLWR1cGxpY2F0ZS1maWx0ZXIuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 60942:
/*!***************************************************************************************************!*\
  !*** ./src/app/settings/components/barcode-selection/feedback/feedback.component.scss?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWVkYmFjay5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 62406:
/*!***************************************************************************************************************!*\
  !*** ./src/app/settings/components/barcode-selection/selection-type/selection-type.component.scss?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3Rpb24tdHlwZS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 29364:
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/settings/components/barcode-selection/single-barcode-auto-detection/single-barcode-auto-detection.component.scss?ngResource ***!
  \*********************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaW5nbGUtYmFyY29kZS1hdXRvLWRldGVjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 41740:
/*!*********************************************************************************************************!*\
  !*** ./src/app/settings/components/barcode-selection/symbologies/symbologies.component.scss?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = ".symbologies__buttons {\n  display: flex;\n  flex-direction: row;\n}\n.symbologies__button {\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN5bWJvbG9naWVzLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vTWFjaW50b3NoJTIwSEQyL2lvbmljX2FwcHMvb3RoaW0lMjBhcHBzL1NjYW5EaXRfQ2FwYWNpdG9yL1dvcmstQmFyY29kZUNhcHR1cmVWaWV3c1NhbXBsZS9zcmMvYXBwL3NldHRpbmdzL2NvbXBvbmVudHMvYmFyY29kZS1zZWxlY3Rpb24vc3ltYm9sb2dpZXMvc3ltYm9sb2dpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNBSjtBRElFO0VBQ0UsWUFBQTtBQ0ZKIiwiZmlsZSI6InN5bWJvbG9naWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN5bWJvbG9naWVzIHtcbiAgJl9fYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gIH1cblxuICAmX19idXR0b24ge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxuXG59XG4iLCIuc3ltYm9sb2dpZXNfX2J1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLnN5bWJvbG9naWVzX19idXR0b24ge1xuICBmbGV4LWdyb3c6IDE7XG59Il19 */";

/***/ }),

/***/ 68457:
/*!*****************************************************************************!*\
  !*** ./src/app/settings/components/camera/camera.component.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW1lcmEuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 57461:
/*!*******************************************************************************************!*\
  !*** ./src/app/settings/components/main-settings/main-settings.component.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = ".reset__buttons {\n  display: flex;\n  flex-direction: row;\n}\n.reset__button {\n  flex-grow: 1;\n}\n.footer__text {\n  text-align: center;\n  display: block;\n  font-size: 12px;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9NYWNpbnRvc2glMjBIRDIvaW9uaWNfYXBwcy9vdGhpbSUyMGFwcHMvU2NhbkRpdF9DYXBhY2l0b3IvV29yay1CYXJjb2RlQ2FwdHVyZVZpZXdzU2FtcGxlL3NyYy9hcHAvc2V0dGluZ3MvY29tcG9uZW50cy9tYWluLXNldHRpbmdzL21haW4tc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNBSjtBRElFO0VBQ0UsWUFBQTtBQ0ZKO0FETUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0hGIiwiZmlsZSI6Im1haW4tc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzZXQge1xuICAmX19idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgfVxuXG4gICZfX2J1dHRvbiB7XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG59XG5cbi5mb290ZXJfX3RleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbiIsIi5yZXNldF9fYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4ucmVzZXRfX2J1dHRvbiB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmZvb3Rlcl9fdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgb3BhY2l0eTogMC41O1xufSJdfQ== */";

/***/ }),

/***/ 37500:
/*!*******************************************************************************************!*\
  !*** ./src/app/settings/components/settings-list/settings-list.component.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 11855:
/*!*********************************************************************************************!*\
  !*** ./src/app/settings/components/symbology-item/symbology-item.component.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = ".symbology-item__value {\n  font-size: 14px;\n  font-weight: bold;\n  color: #949494;\n  text-align: end;\n  padding-right: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN5bWJvbG9neS1pdGVtLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vTWFjaW50b3NoJTIwSEQyL2lvbmljX2FwcHMvb3RoaW0lMjBhcHBzL1NjYW5EaXRfQ2FwYWNpdG9yL1dvcmstQmFyY29kZUNhcHR1cmVWaWV3c1NhbXBsZS9zcmMvYXBwL3NldHRpbmdzL2NvbXBvbmVudHMvc3ltYm9sb2d5LWl0ZW0vc3ltYm9sb2d5LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3ltYm9sb2d5LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3ltYm9sb2d5LWl0ZW1fX3ZhbHVlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM5NDk0OTQ7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgcGFkZGluZy1yaWdodDogMTJweDtcbn1cbiIsIi5zeW1ib2xvZ3ktaXRlbV9fdmFsdWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzk0OTQ5NDtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xufSJdfQ== */";

/***/ }),

/***/ 68663:
/*!***********************************************************************************!*\
  !*** ./src/app/settings/components/symbology/symbology.component.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzeW1ib2xvZ3kuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 92454:
/*!*************************************************************************************************!*\
  !*** ./src/app/settings/components/unit-number-item/unit-number-item.component.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = ".unit-number-item__value {\n  font-size: 14px;\n  font-weight: bold;\n  color: #949494;\n  text-align: end;\n  padding-right: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaXQtbnVtYmVyLWl0ZW0uY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9NYWNpbnRvc2glMjBIRDIvaW9uaWNfYXBwcy9vdGhpbSUyMGFwcHMvU2NhbkRpdF9DYXBhY2l0b3IvV29yay1CYXJjb2RlQ2FwdHVyZVZpZXdzU2FtcGxlL3NyYy9hcHAvc2V0dGluZ3MvY29tcG9uZW50cy91bml0LW51bWJlci1pdGVtL3VuaXQtbnVtYmVyLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoidW5pdC1udW1iZXItaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51bml0LW51bWJlci1pdGVtX192YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjOTQ5NDk0O1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XG59XG4iLCIudW5pdC1udW1iZXItaXRlbV9fdmFsdWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzk0OTQ5NDtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xufSJdfQ== */";

/***/ }),

/***/ 54377:
/*!***************************************************************************************!*\
  !*** ./src/app/settings/components/unit-number/unit-number.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1bml0LW51bWJlci5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 10303:
/*!**************************************************************************************************************!*\
  !*** ./src/app/settings/components/view/bs-point-of-interest/bs-point-of-interest.component.scss?ngResource ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicy1wb2ludC1vZi1pbnRlcmVzdC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 7006:
/*!************************************************************************************!*\
  !*** ./src/app/settings/components/view/overlay/overlay.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdmVybGF5LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 60992:
/*!********************************************************************************************************!*\
  !*** ./src/app/settings/components/view/point-of-interest/point-of-interest.component.scss?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb2ludC1vZi1pbnRlcmVzdC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 7165:
/*!****************************************************************************************!*\
  !*** ./src/app/settings/components/view/scan-area/scan-area.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY2FuLWFyZWEuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 93842:
/*!******************************************************************************************!*\
  !*** ./src/app/settings/components/view/viewfinder/viewfinder.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3ZmluZGVyLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 75855:
/*!*************************************************************!*\
  !*** ./src/app/settings/settings.component.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 68120:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/settings/components/barcode-selection/code-duplicate-filter/code-duplicate-filter.component.html?ngResource ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<form [formGroup]=\"form\">\n  <ion-card>\n    <ion-list>\n\n      <app-number-input [formControlName]=\"fieldName.CODE_DUPLICATE_FILTER\"></app-number-input>\n\n    </ion-list>\n  </ion-card>\n</form>\n";

/***/ }),

/***/ 90332:
/*!***************************************************************************************************!*\
  !*** ./src/app/settings/components/barcode-selection/feedback/feedback.component.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = "<form [formGroup]=\"form\">\n  <ion-card>\n    <ion-list>\n\n      <app-toggle [formControlName]=\"fieldName.FEEDBACK_SOUND\"></app-toggle>\n      <app-toggle [formControlName]=\"fieldName.FEEDBACK_VIBRATION\"></app-toggle>\n\n    </ion-list>\n  </ion-card>\n</form>\n";

/***/ }),

/***/ 9772:
/*!***************************************************************************************************************!*\
  !*** ./src/app/settings/components/barcode-selection/selection-type/selection-type.component.html?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = "<form [formGroup]=\"form\">\n\n  <ion-card>\n    <div class=\"app-card-header\">{{ selectionType.label }}</div>\n    <app-flat-select [formControlName]=\"fieldName.SELECTION_TYPE\"></app-flat-select>\n  </ion-card>\n\n  <ion-card *ngIf=\"form.value.SELECTION_TYPE === 'aimerSelection'\">\n    <div class=\"app-card-header\">{{ selectionStrategy.label }}</div>\n    <app-flat-select [formControlName]=\"fieldName.SELECTION_STRATEGY\"></app-flat-select>\n  </ion-card>\n\n  <ion-card *ngIf=\"form.value.SELECTION_TYPE === 'tapSelection'\">\n    <div class=\"app-card-header\">{{ freezeBehaviour.label }}</div>\n    <app-flat-select [formControlName]=\"fieldName.FREEZE_BEHAVIOUR\"></app-flat-select>\n\n    <div class=\"app-card-header\">{{ tapBehaviour.label }}</div>\n    <app-flat-select [formControlName]=\"fieldName.TAP_BEHAVIOUR\"></app-flat-select>\n  </ion-card>\n\n</form>\n";

/***/ }),

/***/ 77674:
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/settings/components/barcode-selection/single-barcode-auto-detection/single-barcode-auto-detection.component.html?ngResource ***!
  \*********************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<form [formGroup]=\"form\">\n  <ion-card>\n    <ion-list>\n      <app-toggle [formControlName]=\"fieldName.SINGLE_BARCODE_AUTO_DETECTION\"></app-toggle>\n    </ion-list>\n  </ion-card>\n</form>\n";

/***/ }),

/***/ 25949:
/*!*********************************************************************************************************!*\
  !*** ./src/app/settings/components/barcode-selection/symbologies/symbologies.component.html?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = "<div>\n\n  <div class=\"symbologies__buttons\" *ngIf=\"!isIos\">\n    <ion-button class=\"symbologies__button\" [strong]=\"true\" expand=\"block\" (click)=\"toggleAll(true)\">ENABLE ALL</ion-button>\n    <ion-button class=\"symbologies__button\" [strong]=\"true\" color=\"danger\" expand=\"block\" (click)=\"toggleAll(false)\">DISABLE ALL</ion-button>\n  </div>\n\n  <ion-card *ngIf=\"isIos\">\n    <ion-list>\n      <ion-item class=\"ion-activatable ripple-parent\" lines=\"full\" (click)=\"toggleAll(true)\">Enable All</ion-item>\n      <ion-item class=\"ion-activatable ripple-parent\" lines=\"full\" (click)=\"toggleAll(false)\">Disable All</ion-item>\n    </ion-list>\n  </ion-card>\n\n  <ion-card>\n    <ion-list>\n      <app-symbology-item\n        *ngFor=\"let symbology of symbologies\"\n        [enabled]=\"form.value[symbology]?.enabled\"\n        [symbology]=\"symbology\"\n      ></app-symbology-item>\n    </ion-list>\n  </ion-card>\n\n</div>\n";

/***/ }),

/***/ 9746:
/*!*****************************************************************************!*\
  !*** ./src/app/settings/components/camera/camera.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<form [formGroup]=\"form\">\n\n  <ion-card>\n    <div class=\"app-card-header\">{{ cameraPosition.label }}</div>\n    <app-flat-select [formControlName]=\"fieldName.CAMERA_POSITION\"></app-flat-select>\n  </ion-card>\n\n  <ion-card>\n    <ion-list>\n      <app-toggle [formControlName]=\"fieldName.DESIRED_TORCH_STATE\"></app-toggle>\n    </ion-list>\n  </ion-card>\n\n  <ion-card>\n    <div class=\"app-card-header\">Camera Settings</div>\n    <ion-list>\n      <app-select [formControlName]=\"fieldName.PREFERRED_RESOLUTION\"></app-select>\n      <app-slider [formControlName]=\"fieldName.ZOOM_FACTOR\"></app-slider>\n      <app-select [formControlName]=\"fieldName.FOCUS_RANGE\"></app-select>\n    </ion-list>\n  </ion-card>\n\n</form>\n";

/***/ }),

/***/ 152:
/*!*******************************************************************************************!*\
  !*** ./src/app/settings/components/main-settings/main-settings.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "<div>\n\n  <ion-card>\n    <ion-list>\n\n      <ion-item\n        *ngFor=\"let item of items$ | async\"\n        [routerLink]=\"item.route\"\n        [lines]=\"lines\"\n        [detail]=\"isIos\"\n      >\n        <ion-label>{{ item.label }}</ion-label>\n      </ion-item>\n\n    </ion-list>\n  </ion-card>\n\n  <div class=\"reset__buttons\" *ngIf=\"!isIos\">\n    <ion-button class=\"reset__button\" [strong]=\"true\" expand=\"block\" (click)=\"resetBarcodeSelection()\">Reset Barcode Selection</ion-button>\n  </div>\n\n  <ion-card *ngIf=\"isIos\">\n    <ion-list>\n      <ion-item class=\"ion-activatable ripple-parent\" lines=\"full\" (click)=\"resetBarcodeSelection()\">Reset Barcode Selection</ion-item>\n    </ion-list>\n  </ion-card>\n\n  <div>\n    <ion-text class=\"footer__text\">Barcode Selection Settings Sample</ion-text>\n    <ion-text class=\"footer__text\">SDK {{ version }}</ion-text>\n  </div>\n\n</div>\n";

/***/ }),

/***/ 25819:
/*!*******************************************************************************************!*\
  !*** ./src/app/settings/components/settings-list/settings-list.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-card>\n  <ion-list>\n\n    <ion-item\n      *ngFor=\"let item of items$ | async\"\n      [routerLink]=\"item.route\"\n      [lines]=\"lines\"\n      [detail]=\"isIos\"\n    >\n      <ion-label>{{ item.label }}</ion-label>\n    </ion-item>\n\n  </ion-list>\n</ion-card>\n";

/***/ }),

/***/ 45533:
/*!*********************************************************************************************!*\
  !*** ./src/app/settings/components/symbology-item/symbology-item.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-item\n  [routerLink]=\"symbology\"\n  [lines]=\"lines\"\n  [detail]=\"isIos\"\n>\n  <ion-label>{{ description?.readableName }}</ion-label>\n  <ion-label class=\"symbology-item__value\" slot=\"end\">{{ enabled ? 'ON' : 'OFF' }}</ion-label>\n</ion-item>\n";

/***/ }),

/***/ 24059:
/*!***********************************************************************************!*\
  !*** ./src/app/settings/components/symbology/symbology.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "<div>\n\n  <ion-card>\n    <ion-list>\n      <ion-item [lines]=\"lines\" (click)=\"onEnabledClick($event)\">\n        <ion-label>Enabled</ion-label>\n        <ion-toggle [ngModel]=\"form.value.enabled\"></ion-toggle>\n      </ion-item>\n\n      <ion-item [lines]=\"lines\" (click)=\"onColorInvertedClick($event)\" *ngIf=\"description.isColorInvertible\">\n        <ion-label>Color Inverted</ion-label>\n        <ion-toggle [ngModel]=\"form.value.colorInverted\"></ion-toggle>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n\n  <ion-card *ngIf=\"description.activeSymbolCountRange?.minimum || description.activeSymbolCountRange?.maximum\">\n    <div class=\"app-card-header\">Range</div>\n\n    <ion-list>\n      <ion-item [lines]=\"lines\">\n        <ion-label>Minimum</ion-label>\n        <ion-select [ngModel]=\"form.value.minimum\" (ngModelChange)=\"onMinimumValueChange($event)\" interface=\"popover\">\n          <ion-select-option\n            *ngFor=\"let option of minOptions\"\n            [value]=\"option\"\n          >\n            {{ option }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item [lines]=\"lines\">\n        <ion-label>Maximum</ion-label>\n        <ion-select [ngModel]=\"form.value.maximum\" (ngModelChange)=\"onMaximumValueChange($event)\" interface=\"popover\">\n          <ion-select-option\n            *ngFor=\"let option of maxOptions\"\n            [value]=\"option\"\n          >\n            {{ option }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n  </ion-card>\n\n\n  <ion-card *ngIf=\"supportedExtensions?.length\">\n    <div class=\"app-card-header\">Extensions</div>\n\n    <ion-list>\n      <ion-radio-group\n        *ngFor=\"let extension of supportedExtensions\"\n        [ngModel]=\"enabledExtensions[extension]\"\n        (ngModelChange)=\"onExtensionsToggle(extension)\"\n        [allowEmptySelection]=\"true\"\n      >\n        <ion-item [lines]=\"lines\">\n          <ion-label>{{ extension }}</ion-label>\n          <ion-radio slot=\"end\" [value]=\"extension\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-list>\n\n  </ion-card>\n\n</div>\n";

/***/ }),

/***/ 88306:
/*!*************************************************************************************************!*\
  !*** ./src/app/settings/components/unit-number-item/unit-number-item.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-item\n  [routerLink]=\"field.path\"\n  [lines]=\"lines\"\n  [detail]=\"isIos\"\n>\n  <ion-label>{{ field.label }}</ion-label>\n  <ion-label class=\"unit-number-item__value\" slot=\"end\">{{ currentValue?.value }} ({{ currentValue?.unit }})</ion-label>\n</ion-item>\n";

/***/ }),

/***/ 92971:
/*!***************************************************************************************!*\
  !*** ./src/app/settings/components/unit-number/unit-number.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<form [formGroup]=\"form\">\n  <ion-card>\n    <ion-list>\n\n      <ion-item [lines]=\"lines\">\n        <ion-label>Value</ion-label>\n        <ion-input\n          class=\"app-number-input\"\n          slot=\"end\"\n          [min]=\"field.min\"\n          [max]=\"field.max\"\n          type=\"number\"\n          [required]=\"true\"\n          inputmode=\"decimal\"\n          formControlName=\"value\"\n        ></ion-input>\n      </ion-item>\n\n    </ion-list>\n  </ion-card>\n\n  <ion-card>\n    <ion-list>\n      <ion-radio-group formControlName=\"unit\">\n        <ion-item [lines]=\"lines\" *ngFor=\"let unit of units\">\n          <ion-label>{{ unit.label }}</ion-label>\n          <ion-radio slot=\"end\" [value]=\"unit.value\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-list>\n\n  </ion-card>\n</form>\n";

/***/ }),

/***/ 53287:
/*!**************************************************************************************************************!*\
  !*** ./src/app/settings/components/view/bs-point-of-interest/bs-point-of-interest.component.html?ngResource ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = "<form [formGroup]=\"form\">\n\n  <ion-card>\n    <ion-list>\n      <app-toggle [formControlName]=\"fieldName.BS_POINT_OF_INTEREST_ENABLED\"></app-toggle>\n    </ion-list>\n  </ion-card>\n\n  <ion-card>\n    <ion-list>\n      <app-unit-number-item\n        [currentValue]=\"form.value[fieldName.BS_POINT_OF_INTEREST_X]\"\n        [field]=\"fields[fieldName.BS_POINT_OF_INTEREST_X]\"\n      ></app-unit-number-item>\n\n      <app-unit-number-item\n        [currentValue]=\"form.value[fieldName.BS_POINT_OF_INTEREST_Y]\"\n        [field]=\"fields[fieldName.BS_POINT_OF_INTEREST_Y]\"\n      ></app-unit-number-item>\n    </ion-list>\n  </ion-card>\n\n</form>\n";

/***/ }),

/***/ 47713:
/*!************************************************************************************!*\
  !*** ./src/app/settings/components/view/overlay/overlay.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<form [formGroup]=\"form\">\n  <ion-card>\n    <div class=\"app-card-header\">{{ style.label }}</div>\n    <app-flat-select [formControlName]=\"fieldName.OVERLAY_STYLE\"></app-flat-select>\n  </ion-card>\n\n  <ion-card>\n    <app-select [formControlName]=\"fieldName.TRACKED_BRUSH\"></app-select>\n    <app-select [formControlName]=\"fieldName.AIMED_BRUSH\"></app-select>\n    <app-select [formControlName]=\"fieldName.SELECTING_BRUSH\"></app-select>\n    <app-select [formControlName]=\"fieldName.SELECTED_BRUSH\"></app-select>\n  </ion-card>\n\n  <ion-card>\n    <app-toggle [formControlName]=\"fieldName.SHOULD_SHOW_HINTS\"></app-toggle>\n  </ion-card>\n</form>\n";

/***/ }),

/***/ 88059:
/*!********************************************************************************************************!*\
  !*** ./src/app/settings/components/view/point-of-interest/point-of-interest.component.html?ngResource ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = "<form [formGroup]=\"form\">\n\n  <ion-card>\n    <ion-list>\n\n      <app-unit-number-item\n        [currentValue]=\"form.value[fieldName.POINT_OF_INTEREST_X]\"\n        [field]=\"fields[fieldName.POINT_OF_INTEREST_X]\"\n      ></app-unit-number-item>\n\n      <app-unit-number-item\n        [currentValue]=\"form.value[fieldName.POINT_OF_INTEREST_Y]\"\n        [field]=\"fields[fieldName.POINT_OF_INTEREST_Y]\"\n      ></app-unit-number-item>\n\n    </ion-list>\n  </ion-card>\n\n</form>\n";

/***/ }),

/***/ 18096:
/*!****************************************************************************************!*\
  !*** ./src/app/settings/components/view/scan-area/scan-area.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<form [formGroup]=\"form\">\n\n  <ion-card>\n    <div class=\"app-card-header\">Margins</div>\n    <ion-list>\n\n      <app-unit-number-item\n        [currentValue]=\"form.value[fieldName.SCAN_AREA_MARGIN_TOP]\"\n        [field]=\"fields[fieldName.SCAN_AREA_MARGIN_TOP]\"\n      ></app-unit-number-item>\n\n      <app-unit-number-item\n        [currentValue]=\"form.value[fieldName.SCAN_AREA_MARGIN_RIGHT]\"\n        [field]=\"fields[fieldName.SCAN_AREA_MARGIN_RIGHT]\"\n      ></app-unit-number-item>\n\n      <app-unit-number-item\n        [currentValue]=\"form.value[fieldName.SCAN_AREA_MARGIN_BOTTOM]\"\n        [field]=\"fields[fieldName.SCAN_AREA_MARGIN_BOTTOM]\"\n      ></app-unit-number-item>\n\n      <app-unit-number-item\n        [currentValue]=\"form.value[fieldName.SCAN_AREA_MARGIN_LEFT]\"\n        [field]=\"fields[fieldName.SCAN_AREA_MARGIN_LEFT]\"\n      ></app-unit-number-item>\n\n\n    </ion-list>\n  </ion-card>\n\n  <ion-card>\n    <ion-list>\n\n      <app-toggle [formControlName]=\"fieldName.SCAN_AREA_GUIDES\"></app-toggle>\n\n    </ion-list>\n  </ion-card>\n</form>\n";

/***/ }),

/***/ 86633:
/*!******************************************************************************************!*\
  !*** ./src/app/settings/components/view/viewfinder/viewfinder.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<form [formGroup]=\"form\">\n  <ion-card>\n    <app-select [formControlName]=\"fieldName.FRAME_COLOR\"></app-select>\n    <app-select [formControlName]=\"fieldName.DOT_COLOR\"></app-select>\n  </ion-card>\n</form>\n";

/***/ }),

/***/ 49885:
/*!*************************************************************!*\
  !*** ./src/app/settings/settings.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<app-settings-header></app-settings-header>\n\n<ion-content [fullscreen]=\"true\">\n  <router-outlet></router-outlet>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_settings_settings_module_ts.js.map