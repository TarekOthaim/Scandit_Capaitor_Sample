(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _scandit_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scandit.guard */ 85412);




const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule),
        canActivate: [_scandit_guard__WEBPACK_IMPORTED_MODULE_0__.ScanditGuard],
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'settings',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_settings_settings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./settings/settings.module */ 27075)).then(m => m.SettingsPageModule),
        canActivate: [_scandit_guard__WEBPACK_IMPORTED_MODULE_0__.ScanditGuard],
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 37954);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 91714);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var scandit_capacitor_datacapture_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! scandit-capacitor-datacapture-core */ 16729);
/* harmony import */ var scandit_capacitor_datacapture_barcode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! scandit-capacitor-datacapture-barcode */ 96939);









// eslint-disable-next-line @typescript-eslint/naming-convention

let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            // Initialize the plugins.
            // @ts-ignore
            window.Scandit = yield scandit_capacitor_datacapture_core__WEBPACK_IMPORTED_MODULE_4__.ScanditCaptureCorePlugin.initializePlugins();
            this.statusBar.styleLightContent();
            this.splashScreen.hide();
        }));
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 37954);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 91714);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ 44466);











let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule.forRoot({ animated: false }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        ],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__.StatusBar, _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__.SplashScreen, { provide: _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 3946:
/*!**********************************************!*\
  !*** ./src/app/config/fields/fields-name.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsFieldName": () => (/* binding */ SettingsFieldName)
/* harmony export */ });
var SettingsFieldName;
(function (SettingsFieldName) {
    // barcode selection
    // barcode selection - selection type
    SettingsFieldName["SELECTION_TYPE"] = "SELECTION_TYPE";
    SettingsFieldName["FREEZE_BEHAVIOUR"] = "FREEZE_BEHAVIOUR";
    SettingsFieldName["TAP_BEHAVIOUR"] = "TAP_BEHAVIOUR";
    SettingsFieldName["SELECTION_STRATEGY"] = "SELECTION_STRATEGY";
    // barcode selection - code duplicate filter
    SettingsFieldName["CODE_DUPLICATE_FILTER"] = "CODE_DUPLICATE_FILTER";
    // barcode selection - single barcode auto detection
    SettingsFieldName["SINGLE_BARCODE_AUTO_DETECTION"] = "SINGLE_BARCODE_AUTO_DETECTION";
    // barcode selection - feedback
    SettingsFieldName["FEEDBACK_SOUND"] = "FEEDBACK_SOUND";
    SettingsFieldName["FEEDBACK_VIBRATION"] = "FEEDBACK_VIBRATION";
    // barcode selection - point of interest
    SettingsFieldName["BS_POINT_OF_INTEREST_ENABLED"] = "BS_POINT_OF_INTEREST_ENABLED";
    SettingsFieldName["BS_POINT_OF_INTEREST_X"] = "BS_POINT_OF_INTEREST_X";
    SettingsFieldName["BS_POINT_OF_INTEREST_Y"] = "BS_POINT_OF_INTEREST_Y";
    // camera
    SettingsFieldName["CAMERA_POSITION"] = "CAMERA_POSITION";
    SettingsFieldName["DESIRED_TORCH_STATE"] = "DESIRED_TORCH_STATE";
    SettingsFieldName["PREFERRED_RESOLUTION"] = "PREFERRED_RESOLUTION";
    SettingsFieldName["ZOOM_FACTOR"] = "ZOOM_FACTOR";
    SettingsFieldName["FOCUS_RANGE"] = "FOCUS_RANGE";
    // view
    SettingsFieldName["SCAN_AREA_MARGIN_TOP"] = "SCAN_AREA_MARGIN_TOP";
    SettingsFieldName["SCAN_AREA_MARGIN_RIGHT"] = "SCAN_AREA_MARGIN_RIGHT";
    SettingsFieldName["SCAN_AREA_MARGIN_BOTTOM"] = "SCAN_AREA_MARGIN_BOTTOM";
    SettingsFieldName["SCAN_AREA_MARGIN_LEFT"] = "SCAN_AREA_MARGIN_LEFT";
    SettingsFieldName["SCAN_AREA_GUIDES"] = "SCAN_AREA_GUIDES";
    SettingsFieldName["POINT_OF_INTEREST_X"] = "POINT_OF_INTEREST_X";
    SettingsFieldName["POINT_OF_INTEREST_Y"] = "POINT_OF_INTEREST_Y";
    SettingsFieldName["OVERLAY_STYLE"] = "OVERLAY_STYLE";
    SettingsFieldName["TRACKED_BRUSH"] = "TRACKED_BRUSH";
    SettingsFieldName["AIMED_BRUSH"] = "AIMED_BRUSH";
    SettingsFieldName["SELECTING_BRUSH"] = "SELECTING_BRUSH";
    SettingsFieldName["SELECTED_BRUSH"] = "SELECTED_BRUSH";
    SettingsFieldName["SHOULD_SHOW_HINTS"] = "SHOULD_SHOW_HINTS";
    SettingsFieldName["FRAME_COLOR"] = "FRAME_COLOR";
    SettingsFieldName["DOT_COLOR"] = "DOT_COLOR";
})(SettingsFieldName || (SettingsFieldName = {}));


/***/ }),

/***/ 85864:
/*!***************************************************!*\
  !*** ./src/app/config/fields/fields-structure.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fieldsStructure": () => (/* binding */ fieldsStructure)
/* harmony export */ });
/* harmony import */ var _fields_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fields-name */ 3946);

const fieldsStructure = Scandit => ({
    barcodeSelection: {
        symbologies: [
            ...Object.keys(Scandit.Symbology),
        ],
        selectionType: [
            _fields_name__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.SELECTION_TYPE,
            _fields_name__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.FREEZE_BEHAVIOUR,
            _fields_name__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.TAP_BEHAVIOUR,
            _fields_name__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.SELECTION_STRATEGY,
        ],
        singleBarcodeAutoDetection: [
            _fields_name__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.SINGLE_BARCODE_AUTO_DETECTION
        ],
        feedback: [
            _fields_name__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.FEEDBACK_SOUND,
            _fields_name__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.FEEDBACK_VIBRATION,
        ],
        codeDuplicateFilter: [
            _fields_name__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.CODE_DUPLICATE_FILTER
        ],
        pointOfInterest: [
            _fields_name__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.BS_POINT_OF_INTEREST_ENABLED,
            _fields_name__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.BS_POINT_OF_INTEREST_X,
            _fields_name__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.BS_POINT_OF_INTEREST_Y,
        ],
    },
    view: {
        scanArea: [
            _fields_name__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.SCAN_AREA_MARGIN_TOP,
            _fields_name__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.SCAN_AREA_MARGIN_RIGHT,
            _fields_name__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.SCAN_AREA_MARGIN_BOTTOM,
            _fields_name__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.SCAN_AREA_MARGIN_LEFT,
            _fields_name__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.SCAN_AREA_GUIDES,
        ],
        pointOfInterest: [
            _fields_name__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.POINT_OF_INTEREST_X,
            _fields_name__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.POINT_OF_INTEREST_Y,
        ],
        overlay: [
            _fields_name__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.OVERLAY_STYLE,
            _fields_name__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.TRACKED_BRUSH,
            _fields_name__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.AIMED_BRUSH,
            _fields_name__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.SELECTING_BRUSH,
            _fields_name__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.SELECTED_BRUSH,
            _fields_name__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.SHOULD_SHOW_HINTS,
        ],
        viewfinder: [
            _fields_name__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.FRAME_COLOR,
            _fields_name__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.DOT_COLOR,
        ],
    },
    camera: [
        _fields_name__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.CAMERA_POSITION,
        _fields_name__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.DESIRED_TORCH_STATE,
        _fields_name__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.PREFERRED_RESOLUTION,
        _fields_name__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.ZOOM_FACTOR,
        _fields_name__WEBPACK_IMPORTED_MODULE_0__.SettingsFieldName.FOCUS_RANGE,
    ],
});


/***/ }),

/***/ 83889:
/*!**********************************************!*\
  !*** ./src/app/config/fields/fields-type.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsFieldType": () => (/* binding */ SettingsFieldType)
/* harmony export */ });
var SettingsFieldType;
(function (SettingsFieldType) {
    SettingsFieldType["TOGGLE"] = "TOGGLE";
    SettingsFieldType["NUMBER"] = "NUMBER";
    SettingsFieldType["UNIT_NUMBER"] = "UNIT_NUMBER";
    SettingsFieldType["SLIDER"] = "SLIDER";
    SettingsFieldType["SELECT"] = "SELECT";
    SettingsFieldType["FLAT_SELECT"] = "FLAT_SELECT";
    SettingsFieldType["MULTI_SELECT"] = "MULTIPLE_FLAT_SELECT";
})(SettingsFieldType || (SettingsFieldType = {}));


/***/ }),

/***/ 68956:
/*!*****************************************!*\
  !*** ./src/app/config/fields/fields.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "settingsFields": () => (/* binding */ settingsFields)
/* harmony export */ });
/* harmony import */ var src_app_models_sdk_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/sdk.model */ 63020);
/* harmony import */ var src_app_models_unit_number_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/unit-number.model */ 80067);
/* harmony import */ var _routes_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes.config */ 31701);
/* harmony import */ var _fields_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fields-name */ 3946);
/* harmony import */ var _fields_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fields-type */ 83889);





const settingsFields = (Scandit) => ({
    // barcode selection
    // barcode selection - selection type
    [_fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.SELECTION_TYPE]: {
        label: 'Selection Type',
        type: _fields_type__WEBPACK_IMPORTED_MODULE_4__.SettingsFieldType.FLAT_SELECT,
        key: _fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.SELECTION_TYPE,
        defaultValue: src_app_models_sdk_model__WEBPACK_IMPORTED_MODULE_0__.BarcodeSelectionTypeName.Tap,
        options: [
            { label: 'Tap to Select', value: src_app_models_sdk_model__WEBPACK_IMPORTED_MODULE_0__.BarcodeSelectionTypeName.Tap },
            { label: 'Aim to Select', value: src_app_models_sdk_model__WEBPACK_IMPORTED_MODULE_0__.BarcodeSelectionTypeName.Aimer },
        ],
    },
    [_fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.FREEZE_BEHAVIOUR]: {
        label: 'Freeze Behaviour',
        type: _fields_type__WEBPACK_IMPORTED_MODULE_4__.SettingsFieldType.FLAT_SELECT,
        key: _fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.FREEZE_BEHAVIOUR,
        defaultValue: src_app_models_sdk_model__WEBPACK_IMPORTED_MODULE_0__.BarcodeSelectionFreezeBehavior.Manual,
        options: [
            { label: 'Manual', value: src_app_models_sdk_model__WEBPACK_IMPORTED_MODULE_0__.BarcodeSelectionFreezeBehavior.Manual },
            { label: 'Manual and Automatic', value: src_app_models_sdk_model__WEBPACK_IMPORTED_MODULE_0__.BarcodeSelectionFreezeBehavior.ManualAndAutomatic },
        ],
    },
    [_fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.TAP_BEHAVIOUR]: {
        label: 'Tap Behaviour',
        type: _fields_type__WEBPACK_IMPORTED_MODULE_4__.SettingsFieldType.FLAT_SELECT,
        key: _fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.TAP_BEHAVIOUR,
        defaultValue: src_app_models_sdk_model__WEBPACK_IMPORTED_MODULE_0__.BarcodeSelectionTapBehavior.ToggleSelection,
        options: [
            { label: 'Toggle Selection', value: src_app_models_sdk_model__WEBPACK_IMPORTED_MODULE_0__.BarcodeSelectionTapBehavior.ToggleSelection },
            { label: 'Repeat Selection', value: src_app_models_sdk_model__WEBPACK_IMPORTED_MODULE_0__.BarcodeSelectionTapBehavior.RepeatSelection },
        ],
    },
    [_fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.SELECTION_STRATEGY]: {
        label: 'Selection Strategy',
        type: _fields_type__WEBPACK_IMPORTED_MODULE_4__.SettingsFieldType.FLAT_SELECT,
        key: _fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.SELECTION_STRATEGY,
        defaultValue: src_app_models_sdk_model__WEBPACK_IMPORTED_MODULE_0__.BarcodeSelectionStrategyType.Manual,
        options: [
            { label: 'Auto', value: src_app_models_sdk_model__WEBPACK_IMPORTED_MODULE_0__.BarcodeSelectionStrategyType.Auto },
            { label: 'Manual', value: src_app_models_sdk_model__WEBPACK_IMPORTED_MODULE_0__.BarcodeSelectionStrategyType.Manual },
        ],
    },
    // barcode selection - feedback
    [_fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.FEEDBACK_SOUND]: {
        label: 'Sound',
        type: _fields_type__WEBPACK_IMPORTED_MODULE_4__.SettingsFieldType.TOGGLE,
        key: _fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.FEEDBACK_SOUND,
        defaultValue: true,
    },
    [_fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.FEEDBACK_VIBRATION]: {
        label: 'Vibration',
        type: _fields_type__WEBPACK_IMPORTED_MODULE_4__.SettingsFieldType.TOGGLE,
        key: _fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.FEEDBACK_VIBRATION,
        defaultValue: true,
    },
    // barcode selection - code duplicate filter
    [_fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.CODE_DUPLICATE_FILTER]: {
        label: 'Code Duplicate Filter (s)',
        type: _fields_type__WEBPACK_IMPORTED_MODULE_4__.SettingsFieldType.NUMBER,
        key: _fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.CODE_DUPLICATE_FILTER,
        defaultValue: 0.5,
    },
    // barcode selection - single barcode auto detection
    [_fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.SINGLE_BARCODE_AUTO_DETECTION]: {
        label: 'Single Barcode Auto Detection',
        type: _fields_type__WEBPACK_IMPORTED_MODULE_4__.SettingsFieldType.TOGGLE,
        key: _fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.SINGLE_BARCODE_AUTO_DETECTION,
        defaultValue: false,
    },
    // barcode selection - point of interest
    [_fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.BS_POINT_OF_INTEREST_ENABLED]: {
        label: 'Enabled',
        type: _fields_type__WEBPACK_IMPORTED_MODULE_4__.SettingsFieldType.TOGGLE,
        key: _fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.BS_POINT_OF_INTEREST_ENABLED,
        defaultValue: false,
    },
    [_fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.BS_POINT_OF_INTEREST_X]: {
        label: 'X',
        type: _fields_type__WEBPACK_IMPORTED_MODULE_4__.SettingsFieldType.UNIT_NUMBER,
        key: _fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.BS_POINT_OF_INTEREST_X,
        defaultValue: (0,src_app_models_unit_number_model__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_UNIT_NUMBER_VALUE_FRACTION_HALF)(Scandit),
        path: _routes_config__WEBPACK_IMPORTED_MODULE_2__.NavigationRoute.BS_POINT_OF_INTEREST_X,
        min: 0,
    },
    [_fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.BS_POINT_OF_INTEREST_Y]: {
        label: 'Y',
        type: _fields_type__WEBPACK_IMPORTED_MODULE_4__.SettingsFieldType.UNIT_NUMBER,
        key: _fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.BS_POINT_OF_INTEREST_Y,
        defaultValue: (0,src_app_models_unit_number_model__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_UNIT_NUMBER_VALUE_FRACTION_HALF)(Scandit),
        path: _routes_config__WEBPACK_IMPORTED_MODULE_2__.NavigationRoute.BS_POINT_OF_INTEREST_Y,
        min: 0,
    },
    // camera
    [_fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.CAMERA_POSITION]: {
        label: 'Camera Position',
        type: _fields_type__WEBPACK_IMPORTED_MODULE_4__.SettingsFieldType.FLAT_SELECT,
        key: _fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.CAMERA_POSITION,
        defaultValue: Scandit.CameraPosition.WorldFacing,
        options: [
            { label: 'World Facing', value: Scandit.CameraPosition.WorldFacing },
            { label: 'User Facing', value: Scandit.CameraPosition.UserFacing },
        ],
    },
    [_fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.DESIRED_TORCH_STATE]: {
        label: 'Desired Torch State',
        type: _fields_type__WEBPACK_IMPORTED_MODULE_4__.SettingsFieldType.TOGGLE,
        key: _fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.DESIRED_TORCH_STATE,
        defaultValue: false,
    },
    [_fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.PREFERRED_RESOLUTION]: {
        label: 'Preferred Resolution',
        type: _fields_type__WEBPACK_IMPORTED_MODULE_4__.SettingsFieldType.SELECT,
        key: _fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.PREFERRED_RESOLUTION,
        defaultValue: Scandit.VideoResolution.Auto,
        options: [
            { label: 'HD', value: Scandit.VideoResolution.HD },
            { label: 'Full HD', value: Scandit.VideoResolution.FullHD },
            { label: 'Auto', value: Scandit.VideoResolution.Auto },
        ],
    },
    [_fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.ZOOM_FACTOR]: {
        label: 'Zoom Factor',
        type: _fields_type__WEBPACK_IMPORTED_MODULE_4__.SettingsFieldType.SLIDER,
        key: _fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.ZOOM_FACTOR,
        defaultValue: 1,
        min: 1,
        max: 20,
    },
    [_fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.FOCUS_RANGE]: {
        label: 'Focus Range',
        type: _fields_type__WEBPACK_IMPORTED_MODULE_4__.SettingsFieldType.SELECT,
        key: _fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.FOCUS_RANGE,
        defaultValue: Scandit.FocusRange.Far,
        options: [
            { label: 'Full', value: Scandit.FocusRange.Full },
            { label: 'Far', value: Scandit.FocusRange.Far },
            { label: 'Near', value: Scandit.FocusRange.Near },
        ],
    },
    // view
    // view - scan area
    [_fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.SCAN_AREA_MARGIN_TOP]: {
        label: 'Top',
        type: _fields_type__WEBPACK_IMPORTED_MODULE_4__.SettingsFieldType.UNIT_NUMBER,
        key: _fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.SCAN_AREA_MARGIN_TOP,
        defaultValue: (0,src_app_models_unit_number_model__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_UNIT_NUMBER_VALUE_FRACTION)(Scandit),
        path: _routes_config__WEBPACK_IMPORTED_MODULE_2__.NavigationRoute.SCAN_AREA_MARGIN_TOP,
        min: 0,
    },
    [_fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.SCAN_AREA_MARGIN_RIGHT]: {
        label: 'Right',
        type: _fields_type__WEBPACK_IMPORTED_MODULE_4__.SettingsFieldType.UNIT_NUMBER,
        key: _fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.SCAN_AREA_MARGIN_RIGHT,
        defaultValue: (0,src_app_models_unit_number_model__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_UNIT_NUMBER_VALUE_FRACTION)(Scandit),
        path: _routes_config__WEBPACK_IMPORTED_MODULE_2__.NavigationRoute.SCAN_AREA_MARGIN_RIGHT,
        min: 0,
    },
    [_fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.SCAN_AREA_MARGIN_BOTTOM]: {
        label: 'Bottom',
        type: _fields_type__WEBPACK_IMPORTED_MODULE_4__.SettingsFieldType.UNIT_NUMBER,
        key: _fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.SCAN_AREA_MARGIN_BOTTOM,
        defaultValue: (0,src_app_models_unit_number_model__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_UNIT_NUMBER_VALUE_FRACTION)(Scandit),
        path: _routes_config__WEBPACK_IMPORTED_MODULE_2__.NavigationRoute.SCAN_AREA_MARGIN_BOTTOM,
        min: 0,
    },
    [_fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.SCAN_AREA_MARGIN_LEFT]: {
        label: 'Left',
        type: _fields_type__WEBPACK_IMPORTED_MODULE_4__.SettingsFieldType.UNIT_NUMBER,
        key: _fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.SCAN_AREA_MARGIN_LEFT,
        defaultValue: (0,src_app_models_unit_number_model__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_UNIT_NUMBER_VALUE_FRACTION)(Scandit),
        path: _routes_config__WEBPACK_IMPORTED_MODULE_2__.NavigationRoute.SCAN_AREA_MARGIN_LEFT,
        min: 0,
    },
    [_fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.SCAN_AREA_GUIDES]: {
        label: 'Should Show Scan Area Guides',
        type: _fields_type__WEBPACK_IMPORTED_MODULE_4__.SettingsFieldType.TOGGLE,
        key: _fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.SCAN_AREA_GUIDES,
        defaultValue: false,
    },
    // view - point of interest
    [_fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.POINT_OF_INTEREST_X]: {
        label: 'X',
        type: _fields_type__WEBPACK_IMPORTED_MODULE_4__.SettingsFieldType.UNIT_NUMBER,
        key: _fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.POINT_OF_INTEREST_X,
        defaultValue: (0,src_app_models_unit_number_model__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_UNIT_NUMBER_VALUE_FRACTION_HALF)(Scandit),
        path: _routes_config__WEBPACK_IMPORTED_MODULE_2__.NavigationRoute.POINT_OF_INTEREST_X,
        min: 0,
    },
    [_fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.POINT_OF_INTEREST_Y]: {
        label: 'Y',
        type: _fields_type__WEBPACK_IMPORTED_MODULE_4__.SettingsFieldType.UNIT_NUMBER,
        key: _fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.POINT_OF_INTEREST_Y,
        defaultValue: (0,src_app_models_unit_number_model__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_UNIT_NUMBER_VALUE_FRACTION_HALF)(Scandit),
        path: _routes_config__WEBPACK_IMPORTED_MODULE_2__.NavigationRoute.POINT_OF_INTEREST_Y,
        min: 0,
    },
    // view - overlay
    [_fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.OVERLAY_STYLE]: {
        label: 'Overlay Style',
        type: _fields_type__WEBPACK_IMPORTED_MODULE_4__.SettingsFieldType.FLAT_SELECT,
        key: _fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.OVERLAY_STYLE,
        defaultValue: src_app_models_sdk_model__WEBPACK_IMPORTED_MODULE_0__.BarcodeSelectionBasicOverlayStyle.Frame,
        options: [
            { label: 'Frame', value: src_app_models_sdk_model__WEBPACK_IMPORTED_MODULE_0__.BarcodeSelectionBasicOverlayStyle.Frame },
            { label: 'Dot', value: src_app_models_sdk_model__WEBPACK_IMPORTED_MODULE_0__.BarcodeSelectionBasicOverlayStyle.Dot },
        ],
    },
    [_fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.TRACKED_BRUSH]: {
        label: 'Tracked Brush',
        type: _fields_type__WEBPACK_IMPORTED_MODULE_4__.SettingsFieldType.SELECT,
        key: _fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.TRACKED_BRUSH,
        defaultValue: src_app_models_sdk_model__WEBPACK_IMPORTED_MODULE_0__.Brush.Default,
        options: [
            { label: 'Default', value: src_app_models_sdk_model__WEBPACK_IMPORTED_MODULE_0__.Brush.Default },
            { label: 'Blue', value: src_app_models_sdk_model__WEBPACK_IMPORTED_MODULE_0__.Brush.Blue },
        ],
    },
    [_fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.AIMED_BRUSH]: {
        label: 'Aimed Brush',
        type: _fields_type__WEBPACK_IMPORTED_MODULE_4__.SettingsFieldType.SELECT,
        key: _fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.AIMED_BRUSH,
        defaultValue: src_app_models_sdk_model__WEBPACK_IMPORTED_MODULE_0__.Brush.Default,
        options: [
            { label: 'Default', value: src_app_models_sdk_model__WEBPACK_IMPORTED_MODULE_0__.Brush.Default },
            { label: 'Blue', value: src_app_models_sdk_model__WEBPACK_IMPORTED_MODULE_0__.Brush.Blue },
        ],
    },
    [_fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.SELECTING_BRUSH]: {
        label: 'Selecting Brush',
        type: _fields_type__WEBPACK_IMPORTED_MODULE_4__.SettingsFieldType.SELECT,
        key: _fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.SELECTING_BRUSH,
        defaultValue: src_app_models_sdk_model__WEBPACK_IMPORTED_MODULE_0__.Brush.Default,
        options: [
            { label: 'Default', value: src_app_models_sdk_model__WEBPACK_IMPORTED_MODULE_0__.Brush.Default },
            { label: 'Blue', value: src_app_models_sdk_model__WEBPACK_IMPORTED_MODULE_0__.Brush.Blue },
        ],
    },
    [_fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.SELECTED_BRUSH]: {
        label: 'Selected Brush',
        type: _fields_type__WEBPACK_IMPORTED_MODULE_4__.SettingsFieldType.SELECT,
        key: _fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.SELECTED_BRUSH,
        defaultValue: src_app_models_sdk_model__WEBPACK_IMPORTED_MODULE_0__.Brush.Default,
        options: [
            { label: 'Default', value: src_app_models_sdk_model__WEBPACK_IMPORTED_MODULE_0__.Brush.Default },
            { label: 'Blue', value: src_app_models_sdk_model__WEBPACK_IMPORTED_MODULE_0__.Brush.Blue },
        ],
    },
    [_fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.SHOULD_SHOW_HINTS]: {
        label: 'Should Show Hints',
        type: _fields_type__WEBPACK_IMPORTED_MODULE_4__.SettingsFieldType.TOGGLE,
        key: _fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.SHOULD_SHOW_HINTS,
        defaultValue: true,
    },
    // view - viewfinder
    [_fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.FRAME_COLOR]: {
        label: 'Frame Color',
        type: _fields_type__WEBPACK_IMPORTED_MODULE_4__.SettingsFieldType.SELECT,
        key: _fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.FRAME_COLOR,
        defaultValue: src_app_models_sdk_model__WEBPACK_IMPORTED_MODULE_0__.Color.Default,
        options: [
            { label: 'Default', value: src_app_models_sdk_model__WEBPACK_IMPORTED_MODULE_0__.Color.Default },
            { label: 'Blue', value: src_app_models_sdk_model__WEBPACK_IMPORTED_MODULE_0__.Color.Blue },
        ],
    },
    [_fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.DOT_COLOR]: {
        label: 'Dot Color',
        type: _fields_type__WEBPACK_IMPORTED_MODULE_4__.SettingsFieldType.SELECT,
        key: _fields_name__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldName.DOT_COLOR,
        defaultValue: src_app_models_sdk_model__WEBPACK_IMPORTED_MODULE_0__.Color.Default,
        options: [
            { label: 'Default', value: src_app_models_sdk_model__WEBPACK_IMPORTED_MODULE_0__.Color.Default },
            { label: 'Blue', value: src_app_models_sdk_model__WEBPACK_IMPORTED_MODULE_0__.Color.Blue },
        ],
    },
});


/***/ }),

/***/ 45974:
/*!****************************************!*\
  !*** ./src/app/config/fields/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "settingsFields": () => (/* reexport safe */ _fields__WEBPACK_IMPORTED_MODULE_0__.settingsFields),
/* harmony export */   "SettingsFieldName": () => (/* reexport safe */ _fields_name__WEBPACK_IMPORTED_MODULE_1__.SettingsFieldName),
/* harmony export */   "fieldsStructure": () => (/* reexport safe */ _fields_structure__WEBPACK_IMPORTED_MODULE_2__.fieldsStructure),
/* harmony export */   "SettingsFieldType": () => (/* reexport safe */ _fields_type__WEBPACK_IMPORTED_MODULE_3__.SettingsFieldType)
/* harmony export */ });
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fields */ 68956);
/* harmony import */ var _fields_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fields-name */ 3946);
/* harmony import */ var _fields_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fields-structure */ 85864);
/* harmony import */ var _fields_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fields-type */ 83889);






/***/ }),

/***/ 87448:
/*!*********************************!*\
  !*** ./src/app/config/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationLabel": () => (/* reexport safe */ _labels_config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel),
/* harmony export */   "barcodeSelectionNavigationItems": () => (/* reexport safe */ _navigation_config__WEBPACK_IMPORTED_MODULE_1__.barcodeSelectionNavigationItems),
/* harmony export */   "mainNavigation": () => (/* reexport safe */ _navigation_config__WEBPACK_IMPORTED_MODULE_1__.mainNavigation),
/* harmony export */   "mainNavigationItems": () => (/* reexport safe */ _navigation_config__WEBPACK_IMPORTED_MODULE_1__.mainNavigationItems),
/* harmony export */   "viewNavigationItems": () => (/* reexport safe */ _navigation_config__WEBPACK_IMPORTED_MODULE_1__.viewNavigationItems),
/* harmony export */   "SettingsFieldName": () => (/* reexport safe */ _fields__WEBPACK_IMPORTED_MODULE_2__.SettingsFieldName),
/* harmony export */   "SettingsFieldType": () => (/* reexport safe */ _fields__WEBPACK_IMPORTED_MODULE_2__.SettingsFieldType),
/* harmony export */   "fieldsStructure": () => (/* reexport safe */ _fields__WEBPACK_IMPORTED_MODULE_2__.fieldsStructure),
/* harmony export */   "settingsFields": () => (/* reexport safe */ _fields__WEBPACK_IMPORTED_MODULE_2__.settingsFields),
/* harmony export */   "NavigationRoute": () => (/* reexport safe */ _routes_config__WEBPACK_IMPORTED_MODULE_3__.NavigationRoute)
/* harmony export */ });
/* harmony import */ var _labels_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./labels.config */ 19360);
/* harmony import */ var _navigation_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation.config */ 99952);
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fields */ 45974);
/* harmony import */ var _routes_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes.config */ 31701);






/***/ }),

/***/ 19360:
/*!*****************************************!*\
  !*** ./src/app/config/labels.config.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationLabel": () => (/* binding */ NavigationLabel)
/* harmony export */ });
var NavigationLabel;
(function (NavigationLabel) {
    NavigationLabel["SETTINGS"] = "Settings";
    NavigationLabel["BARCODE_SELECTION"] = "Barcode Selection";
    NavigationLabel["SYMBOLOGIES"] = "Symbologies";
    NavigationLabel["SELECTION_TYPE"] = "Selection Type";
    NavigationLabel["FREEZE_BEHAVIOUR"] = "Freeze Behaviour";
    NavigationLabel["TAP_BEHAVIOUR"] = "Tap Behaviour";
    NavigationLabel["SELECTION_STRATEGY"] = "Selection Strategy";
    NavigationLabel["FEEDBACK"] = "Feedback";
    NavigationLabel["CODE_DUPLICATE_FILTER"] = "Code Duplicate Filter";
    NavigationLabel["SINGLE_BARCODE_AUTO_DETECTION"] = "Single Barcode Auto Detection";
    NavigationLabel["BS_POINT_OF_INTEREST"] = "Point of Interest";
    NavigationLabel["BS_POINT_OF_INTEREST_ENABLED"] = "Enabled";
    NavigationLabel["BS_POINT_OF_INTEREST_X"] = "X";
    NavigationLabel["BS_POINT_OF_INTEREST_Y"] = "Y";
    NavigationLabel["CAMERA"] = "Camera";
    NavigationLabel["VIEW"] = "View";
    NavigationLabel["SCAN_AREA"] = "Scan Area";
    NavigationLabel["SCAN_AREA_MARGIN_TOP"] = "Top";
    NavigationLabel["SCAN_AREA_MARGIN_RIGHT"] = "Right";
    NavigationLabel["SCAN_AREA_MARGIN_BOTTOM"] = "Bottom";
    NavigationLabel["SCAN_AREA_MARGIN_LEFT"] = "Left";
    NavigationLabel["POINT_OF_INTEREST"] = "Point of Interest";
    NavigationLabel["POINT_OF_INTEREST_X"] = "X";
    NavigationLabel["POINT_OF_INTEREST_Y"] = "Y";
    NavigationLabel["OVERLAY"] = "Overlay";
    NavigationLabel["VIEWFINDER"] = "Viewfinder";
})(NavigationLabel || (NavigationLabel = {}));


/***/ }),

/***/ 99952:
/*!*********************************************!*\
  !*** ./src/app/config/navigation.config.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "barcodeSelectionNavigationItems": () => (/* binding */ barcodeSelectionNavigationItems),
/* harmony export */   "viewNavigationItems": () => (/* binding */ viewNavigationItems),
/* harmony export */   "mainNavigationItems": () => (/* binding */ mainNavigationItems),
/* harmony export */   "mainNavigation": () => (/* binding */ mainNavigation)
/* harmony export */ });
/* harmony import */ var _labels_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./labels.config */ 19360);
/* harmony import */ var _routes_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes.config */ 31701);


const barcodeSelectionNavigationItems = [
    {
        label: _labels_config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.SYMBOLOGIES,
        route: _routes_config__WEBPACK_IMPORTED_MODULE_1__.NavigationRoute.SYMBOLOGIES,
    },
    {
        label: _labels_config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.SELECTION_TYPE,
        route: _routes_config__WEBPACK_IMPORTED_MODULE_1__.NavigationRoute.SELECTION_TYPE,
    },
    {
        label: _labels_config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.FEEDBACK,
        route: _routes_config__WEBPACK_IMPORTED_MODULE_1__.NavigationRoute.FEEDBACK,
    },
    {
        label: _labels_config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.CODE_DUPLICATE_FILTER,
        route: _routes_config__WEBPACK_IMPORTED_MODULE_1__.NavigationRoute.CODE_DUPLICATE_FILTER,
    },
    {
        label: _labels_config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.SINGLE_BARCODE_AUTO_DETECTION,
        route: _routes_config__WEBPACK_IMPORTED_MODULE_1__.NavigationRoute.SINGLE_BARCODE_AUTO_DETECTION,
    },
    {
        label: _labels_config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.BS_POINT_OF_INTEREST,
        route: _routes_config__WEBPACK_IMPORTED_MODULE_1__.NavigationRoute.BS_POINT_OF_INTEREST,
    },
];
const viewNavigationItems = [
    {
        label: _labels_config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.SCAN_AREA,
        route: _routes_config__WEBPACK_IMPORTED_MODULE_1__.NavigationRoute.SCAN_AREA,
    },
    {
        label: _labels_config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.POINT_OF_INTEREST,
        route: _routes_config__WEBPACK_IMPORTED_MODULE_1__.NavigationRoute.POINT_OF_INTEREST,
    },
    {
        label: _labels_config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.OVERLAY,
        route: _routes_config__WEBPACK_IMPORTED_MODULE_1__.NavigationRoute.OVERLAY,
    },
    {
        label: _labels_config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.VIEWFINDER,
        route: _routes_config__WEBPACK_IMPORTED_MODULE_1__.NavigationRoute.VIEWFINDER,
    },
];
const mainNavigationItems = [
    {
        label: _labels_config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.BARCODE_SELECTION,
        route: _routes_config__WEBPACK_IMPORTED_MODULE_1__.NavigationRoute.BARCODE_SELECTION,
        children: barcodeSelectionNavigationItems,
    },
    {
        label: _labels_config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.CAMERA,
        route: _routes_config__WEBPACK_IMPORTED_MODULE_1__.NavigationRoute.CAMERA,
    },
    {
        label: _labels_config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.VIEW,
        route: _routes_config__WEBPACK_IMPORTED_MODULE_1__.NavigationRoute.VIEW,
        children: viewNavigationItems,
    },
];
const mainNavigation = {
    label: _labels_config__WEBPACK_IMPORTED_MODULE_0__.NavigationLabel.SETTINGS,
    items: mainNavigationItems,
};


/***/ }),

/***/ 31701:
/*!*****************************************!*\
  !*** ./src/app/config/routes.config.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationRoute": () => (/* binding */ NavigationRoute)
/* harmony export */ });
var NavigationRoute;
(function (NavigationRoute) {
    NavigationRoute["SETTINGS"] = "settings";
    NavigationRoute["BARCODE_SELECTION"] = "barcode-selection";
    NavigationRoute["SYMBOLOGIES"] = "symbologies";
    NavigationRoute["BS_POINT_OF_INTEREST"] = "bs-point-of-interest";
    NavigationRoute["BS_POINT_OF_INTEREST_ENABLED"] = "bs-point-of-interest-enabled";
    NavigationRoute["BS_POINT_OF_INTEREST_X"] = "bs-point-of-interest-x";
    NavigationRoute["BS_POINT_OF_INTEREST_Y"] = "bs-point-of-interest-y";
    NavigationRoute["SELECTION_TYPE"] = "selection-type";
    NavigationRoute["FREEZE_BEHAVIOUR"] = "freeze-behaviour";
    NavigationRoute["TAP_BEHAVIOUR"] = "tap-behaviour";
    NavigationRoute["SELECTION_STRATEGY"] = "selection-strategy";
    NavigationRoute["FEEDBACK"] = "feedback";
    NavigationRoute["CODE_DUPLICATE_FILTER"] = "code-duplicate-filter";
    NavigationRoute["SINGLE_BARCODE_AUTO_DETECTION"] = "single-barcode-auto-detection";
    NavigationRoute["CAMERA"] = "camera";
    NavigationRoute["VIEW"] = "view";
    NavigationRoute["SCAN_AREA"] = "scan-area";
    NavigationRoute["SCAN_AREA_MARGIN_TOP"] = "top";
    NavigationRoute["SCAN_AREA_MARGIN_RIGHT"] = "right";
    NavigationRoute["SCAN_AREA_MARGIN_BOTTOM"] = "bottom";
    NavigationRoute["SCAN_AREA_MARGIN_LEFT"] = "left";
    NavigationRoute["POINT_OF_INTEREST"] = "point-of-interest";
    NavigationRoute["POINT_OF_INTEREST_X"] = "x";
    NavigationRoute["POINT_OF_INTEREST_Y"] = "y";
    NavigationRoute["OVERLAY"] = "overlay";
    NavigationRoute["VIEWFINDER"] = "viewfinder";
})(NavigationRoute || (NavigationRoute = {}));


/***/ }),

/***/ 63020:
/*!*************************************!*\
  !*** ./src/app/models/sdk.model.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Color": () => (/* binding */ Color),
/* harmony export */   "Brush": () => (/* binding */ Brush),
/* harmony export */   "BarcodeSelectionBasicOverlayStyle": () => (/* binding */ BarcodeSelectionBasicOverlayStyle),
/* harmony export */   "BarcodeSelectionTypeName": () => (/* binding */ BarcodeSelectionTypeName),
/* harmony export */   "BarcodeSelectionFreezeBehavior": () => (/* binding */ BarcodeSelectionFreezeBehavior),
/* harmony export */   "BarcodeSelectionTapBehavior": () => (/* binding */ BarcodeSelectionTapBehavior),
/* harmony export */   "BarcodeSelectionStrategyType": () => (/* binding */ BarcodeSelectionStrategyType)
/* harmony export */ });
var Color;
(function (Color) {
    Color["Default"] = "rgba(255,255,255,0.2)";
    Color["Blue"] = "rgba(46, 193, 206,0.2)";
})(Color || (Color = {}));
var Brush;
(function (Brush) {
    Brush["Default"] = "default";
    Brush["Blue"] = "rgba(46, 193, 206,0.2)";
})(Brush || (Brush = {}));
var BarcodeSelectionBasicOverlayStyle;
(function (BarcodeSelectionBasicOverlayStyle) {
    BarcodeSelectionBasicOverlayStyle["Frame"] = "frame";
    BarcodeSelectionBasicOverlayStyle["Dot"] = "dot";
})(BarcodeSelectionBasicOverlayStyle || (BarcodeSelectionBasicOverlayStyle = {}));
var BarcodeSelectionTypeName;
(function (BarcodeSelectionTypeName) {
    BarcodeSelectionTypeName["Aimer"] = "aimerSelection";
    BarcodeSelectionTypeName["Tap"] = "tapSelection";
})(BarcodeSelectionTypeName || (BarcodeSelectionTypeName = {}));
var BarcodeSelectionFreezeBehavior;
(function (BarcodeSelectionFreezeBehavior) {
    BarcodeSelectionFreezeBehavior["Manual"] = "manual";
    BarcodeSelectionFreezeBehavior["ManualAndAutomatic"] = "manualAndAutomatic";
})(BarcodeSelectionFreezeBehavior || (BarcodeSelectionFreezeBehavior = {}));
var BarcodeSelectionTapBehavior;
(function (BarcodeSelectionTapBehavior) {
    BarcodeSelectionTapBehavior["ToggleSelection"] = "toggleSelection";
    BarcodeSelectionTapBehavior["RepeatSelection"] = "repeatSelection";
})(BarcodeSelectionTapBehavior || (BarcodeSelectionTapBehavior = {}));
var BarcodeSelectionStrategyType;
(function (BarcodeSelectionStrategyType) {
    BarcodeSelectionStrategyType["Auto"] = "autoSelectionStrategy";
    BarcodeSelectionStrategyType["Manual"] = "manualSelectionStrategy";
})(BarcodeSelectionStrategyType || (BarcodeSelectionStrategyType = {}));


/***/ }),

/***/ 80067:
/*!*********************************************!*\
  !*** ./src/app/models/unit-number.model.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_UNIT_NUMBER_VALUE": () => (/* binding */ DEFAULT_UNIT_NUMBER_VALUE),
/* harmony export */   "DEFAULT_UNIT_NUMBER_VALUE_FRACTION": () => (/* binding */ DEFAULT_UNIT_NUMBER_VALUE_FRACTION),
/* harmony export */   "DEFAULT_UNIT_NUMBER_VALUE_FRACTION_HALF": () => (/* binding */ DEFAULT_UNIT_NUMBER_VALUE_FRACTION_HALF)
/* harmony export */ });
const DEFAULT_UNIT_NUMBER_VALUE = (Scandit) => ({
    value: 0,
    unit: Scandit.MeasureUnit.DIP,
});
const DEFAULT_UNIT_NUMBER_VALUE_FRACTION = (Scandit) => ({
    value: 0,
    unit: Scandit.MeasureUnit.Fraction,
});
const DEFAULT_UNIT_NUMBER_VALUE_FRACTION_HALF = (Scandit) => ({
    value: 0.5,
    unit: Scandit.MeasureUnit.Fraction,
});


/***/ }),

/***/ 85412:
/*!**********************************!*\
  !*** ./src/app/scandit.guard.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanditGuard": () => (/* binding */ ScanditGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 13491);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 86942);




let ScanditGuard = class ScanditGuard {
    canActivate() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.interval)(200).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(() => typeof (Scandit) !== 'undefined'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => true));
    }
};
ScanditGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({ providedIn: 'root' })
], ScanditGuard);



/***/ }),

/***/ 79846:
/*!****************************************!*\
  !*** ./src/app/services/ui.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiService": () => (/* binding */ UiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);



let UiService = class UiService {
    constructor() {
        this.settingsLabel$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('Settings');
    }
};
UiService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], UiService);



/***/ }),

/***/ 47431:
/*!*************************************************!*\
  !*** ./src/app/shared/controls/control-base.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlBase": () => (/* binding */ ControlBase)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ 87448);




let ControlBase = class ControlBase {
    constructor(platform) {
        this.platform = platform;
        this.onChange = () => null;
        this.onTouch = () => null;
    }
    writeValue(value) {
        this.value = value;
    }
    ngOnInit() {
        this.field = this.getField(this.formControlName);
    }
    get isIos() {
        return this.platform.is('ios');
    }
    get lines() {
        return this.isIos ? 'full' : 'none';
    }
    getField(field) {
        return (0,_config__WEBPACK_IMPORTED_MODULE_0__.settingsFields)(Scandit)[field];
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    onValueChange(value) {
        this.value = value;
        this.onChange(value);
    }
};
ControlBase.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.Platform }
];
ControlBase = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        template: ''
    })
], ControlBase);



/***/ }),

/***/ 89674:
/*!**********************************************************************!*\
  !*** ./src/app/shared/controls/flat-select/flat-select.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlatSelectComponent": () => (/* binding */ FlatSelectComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _flat_select_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flat-select.component.html?ngResource */ 56554);
/* harmony import */ var _flat_select_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flat-select.component.scss?ngResource */ 87782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _control_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../control-base */ 47431);
var FlatSelectComponent_1;







let FlatSelectComponent = FlatSelectComponent_1 = class FlatSelectComponent extends _control_base__WEBPACK_IMPORTED_MODULE_2__.ControlBase {
    constructor(platform) {
        super(platform);
        this.platform = platform;
    }
};
FlatSelectComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform }
];
FlatSelectComponent.propDecorators = {
    formControlName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
FlatSelectComponent = FlatSelectComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-flat-select',
        template: _flat_select_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(() => FlatSelectComponent_1),
                multi: true,
            }],
        styles: [_flat_select_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FlatSelectComponent);



/***/ }),

/***/ 17150:
/*!******************************************!*\
  !*** ./src/app/shared/controls/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlatSelectComponent": () => (/* reexport safe */ _flat_select_flat_select_component__WEBPACK_IMPORTED_MODULE_0__.FlatSelectComponent),
/* harmony export */   "MultipleFlatSelectComponent": () => (/* reexport safe */ _multiple_flat_select_multiple_flat_select_component__WEBPACK_IMPORTED_MODULE_1__.MultipleFlatSelectComponent),
/* harmony export */   "SelectComponent": () => (/* reexport safe */ _select_select_component__WEBPACK_IMPORTED_MODULE_2__.SelectComponent),
/* harmony export */   "SliderComponent": () => (/* reexport safe */ _slider_slider_component__WEBPACK_IMPORTED_MODULE_3__.SliderComponent),
/* harmony export */   "ToggleComponent": () => (/* reexport safe */ _toggle_toggle_component__WEBPACK_IMPORTED_MODULE_4__.ToggleComponent),
/* harmony export */   "NumberInputComponent": () => (/* reexport safe */ _number_input_number_input_component__WEBPACK_IMPORTED_MODULE_5__.NumberInputComponent)
/* harmony export */ });
/* harmony import */ var _flat_select_flat_select_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flat-select/flat-select.component */ 89674);
/* harmony import */ var _multiple_flat_select_multiple_flat_select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multiple-flat-select/multiple-flat-select.component */ 28733);
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select/select.component */ 88860);
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider/slider.component */ 80044);
/* harmony import */ var _toggle_toggle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toggle/toggle.component */ 5039);
/* harmony import */ var _number_input_number_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./number-input/number-input.component */ 87547);








/***/ }),

/***/ 28733:
/*!****************************************************************************************!*\
  !*** ./src/app/shared/controls/multiple-flat-select/multiple-flat-select.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultipleFlatSelectComponent": () => (/* binding */ MultipleFlatSelectComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _multiple_flat_select_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multiple-flat-select.component.html?ngResource */ 11220);
/* harmony import */ var _multiple_flat_select_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multiple-flat-select.component.scss?ngResource */ 31748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _control_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../control-base */ 47431);
var MultipleFlatSelectComponent_1;







let MultipleFlatSelectComponent = MultipleFlatSelectComponent_1 = class MultipleFlatSelectComponent extends _control_base__WEBPACK_IMPORTED_MODULE_2__.ControlBase {
    constructor(platform) {
        super(platform);
        this.platform = platform;
    }
};
MultipleFlatSelectComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform }
];
MultipleFlatSelectComponent.propDecorators = {
    formControlName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
MultipleFlatSelectComponent = MultipleFlatSelectComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-multiple-flat-select',
        template: _multiple_flat_select_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(() => MultipleFlatSelectComponent_1),
                multi: true,
            }],
        styles: [_multiple_flat_select_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MultipleFlatSelectComponent);



/***/ }),

/***/ 87547:
/*!************************************************************************!*\
  !*** ./src/app/shared/controls/number-input/number-input.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberInputComponent": () => (/* binding */ NumberInputComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _number_input_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number-input.component.html?ngResource */ 24776);
/* harmony import */ var _number_input_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number-input.component.scss?ngResource */ 76225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _control_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../control-base */ 47431);
var NumberInputComponent_1;







let NumberInputComponent = NumberInputComponent_1 = class NumberInputComponent extends _control_base__WEBPACK_IMPORTED_MODULE_2__.ControlBase {
    constructor(platform) {
        super(platform);
        this.platform = platform;
    }
};
NumberInputComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform }
];
NumberInputComponent.propDecorators = {
    formControlName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
NumberInputComponent = NumberInputComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-number-input',
        template: _number_input_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(() => NumberInputComponent_1),
                multi: true,
            }],
        styles: [_number_input_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NumberInputComponent);



/***/ }),

/***/ 88860:
/*!************************************************************!*\
  !*** ./src/app/shared/controls/select/select.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectComponent": () => (/* binding */ SelectComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _select_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select.component.html?ngResource */ 65125);
/* harmony import */ var _select_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select.component.scss?ngResource */ 42024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _control_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../control-base */ 47431);
var SelectComponent_1;







let SelectComponent = SelectComponent_1 = class SelectComponent extends _control_base__WEBPACK_IMPORTED_MODULE_2__.ControlBase {
    constructor(platform) {
        super(platform);
        this.platform = platform;
    }
};
SelectComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform }
];
SelectComponent.propDecorators = {
    formControlName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
SelectComponent = SelectComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-select',
        template: _select_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(() => SelectComponent_1),
                multi: true,
            }],
        styles: [_select_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SelectComponent);



/***/ }),

/***/ 80044:
/*!************************************************************!*\
  !*** ./src/app/shared/controls/slider/slider.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliderComponent": () => (/* binding */ SliderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _slider_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider.component.html?ngResource */ 64524);
/* harmony import */ var _slider_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider.component.scss?ngResource */ 63862);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _control_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../control-base */ 47431);
var SliderComponent_1;







let SliderComponent = SliderComponent_1 = class SliderComponent extends _control_base__WEBPACK_IMPORTED_MODULE_2__.ControlBase {
    constructor(platform) {
        super(platform);
        this.platform = platform;
    }
};
SliderComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform }
];
SliderComponent.propDecorators = {
    formControlName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
SliderComponent = SliderComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-slider',
        template: _slider_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(() => SliderComponent_1),
                multi: true,
            }],
        styles: [_slider_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SliderComponent);



/***/ }),

/***/ 5039:
/*!************************************************************!*\
  !*** ./src/app/shared/controls/toggle/toggle.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToggleComponent": () => (/* binding */ ToggleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _toggle_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle.component.html?ngResource */ 62175);
/* harmony import */ var _toggle_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggle.component.scss?ngResource */ 77414);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _control_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../control-base */ 47431);
var ToggleComponent_1;







let ToggleComponent = ToggleComponent_1 = class ToggleComponent extends _control_base__WEBPACK_IMPORTED_MODULE_2__.ControlBase {
    constructor(platform) {
        super(platform);
        this.platform = platform;
    }
    onItemClick(event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        this.onValueChange(!this.value);
    }
};
ToggleComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform }
];
ToggleComponent.propDecorators = {
    formControlName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
ToggleComponent = ToggleComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-toggle',
        template: _toggle_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(() => ToggleComponent_1),
                multi: true,
            }],
        styles: [_toggle_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ToggleComponent);



/***/ }),

/***/ 80866:
/*!*********************************************************************!*\
  !*** ./src/app/shared/settings-header/settings-header.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsHeaderComponent": () => (/* binding */ SettingsHeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _settings_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-header.component.html?ngResource */ 28832);
/* harmony import */ var _settings_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-header.component.scss?ngResource */ 73123);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ui.service */ 79846);







let SettingsHeaderComponent = class SettingsHeaderComponent {
    constructor(navCtrl, uiService, gestureCtrl, router) {
        this.navCtrl = navCtrl;
        this.uiService = uiService;
        this.gestureCtrl = gestureCtrl;
        this.router = router;
        this.lastClickTimestamp = 0;
    }
    ngOnInit() {
        this.label$ = this.uiService.settingsLabel$;
    }
    ngAfterViewInit() {
        this.setUIBackButtonAction();
        const gesture = this.gestureCtrl.create({
            el: this.host.nativeElement,
            threshold: 0,
            gestureName: 'DB_CLICK',
            onStart: () => {
                this.onDoubleClickStart();
            }
        });
        gesture.enable();
    }
    setUIBackButtonAction() {
        this.backButton.onClick = () => {
            this.navCtrl.back();
        };
    }
    onDoubleClickStart() {
        const now = Date.now();
        if (Math.abs(now - this.lastClickTimestamp) <= 500) {
            this.router.navigate(['/']);
            this.lastClickTimestamp = 0;
        }
        else {
            this.lastClickTimestamp = now;
        }
    }
};
SettingsHeaderComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_2__.UiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.GestureController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
SettingsHeaderComponent.propDecorators = {
    backButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonBackButtonDelegate, { static: false },] }],
    host: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['host', { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef },] }]
};
SettingsHeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-settings-header',
        template: _settings_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_settings_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SettingsHeaderComponent);



/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls */ 17150);
/* harmony import */ var _settings_header_settings_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-header/settings-header.component */ 80866);







const components = [
    _settings_header_settings_header_component__WEBPACK_IMPORTED_MODULE_1__.SettingsHeaderComponent,
    _controls__WEBPACK_IMPORTED_MODULE_0__.FlatSelectComponent,
    _controls__WEBPACK_IMPORTED_MODULE_0__.MultipleFlatSelectComponent,
    _controls__WEBPACK_IMPORTED_MODULE_0__.SelectComponent,
    _controls__WEBPACK_IMPORTED_MODULE_0__.SliderComponent,
    _controls__WEBPACK_IMPORTED_MODULE_0__.ToggleComponent,
    _controls__WEBPACK_IMPORTED_MODULE_0__.NumberInputComponent,
];
let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [...components],
        entryComponents: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        ],
        providers: [],
        exports: [...components],
    })
], SharedModule);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    scanditLicenseKey: 'AWvCOQLRIAfOHM7G6AAjOZo2+u5sIIwqmiYusZkk9oHWTnniBmLHwcIa8xauX9DnEVQ9oqFJdSA6cAG9vE7b6RZWKCJvWlgtNSfqR8J/Fz55VtO7YWtgbCA5YEf5EvmgmhNrdzYsVnlGj9YwrdCJ+1RrJ+AuymlYIjF3WpJOlVgfr+0f+yhk0AI/5y7K+elDUKCS9VdqMyZKpUrvg5SMKJTxkGrwtDu6x0xqullUEEYxgGPwB9p8Hzl0EO4GKgP528zmGpg/Y7K00g7YvOPZ+ikJyYgOTGwmd3WUtQ6N0a5fargKvR/9/QqpgMjvmrHphLdCKx3KhA+jgThAUSJ7XZDFcuQybB/fh+YVWJLfptVO+WeA/FnAaqFvBNzufX6LDo6J72YDT84Q3LUKQvCbbhya3DeQlnc9xxHpaieStZ6HUTSN0srmWO3nmNk4w0WtMLUNsveomQ6saiXmSNgNU5ldbuH3xHQcYZmux0NTov840kyIslhksPbaTTmUFxGcO5OO/i2zf9YP6Y1EZLn4XhTAbcuHg2LzFrp4Onw2SLhkwWDqnKzXd0avaJQxtNPDILBbguAeFS7a3Z13nlYDLuCOA4cjJmR6Z9i/7+X04JK5gc6f0ubxSSbkjITpaMYS1c55wdTfqoT9gTapUovzbtxpMDE1ZZ93yCLsV9nb2XTebakoYP3rFkp0XXNQZfN/C1UorZMno7oh0e6X2+OFlaznIo0J9eabYADVv2QBv6Ci9OmJN5/9p7UUbBcLO6KTDxCAOlgZKFjgeQ0RwZHlvE7Wa1uuTSlXK74T4/87fQGtCBufZslmzA==',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 68150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		17950,
		"default-node_modules_ionic_core_dist_esm_data-cb72448c_js-node_modules_ionic_core_dist_esm_th-29e28e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"default-node_modules_ionic_core_dist_esm_data-cb72448c_js-node_modules_ionic_core_dist_esm_th-29e28e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 79259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 87782:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/controls/flat-select/flat-select.component.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmbGF0LXNlbGVjdC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 31748:
/*!*****************************************************************************************************!*\
  !*** ./src/app/shared/controls/multiple-flat-select/multiple-flat-select.component.scss?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtdWx0aXBsZS1mbGF0LXNlbGVjdC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 76225:
/*!*************************************************************************************!*\
  !*** ./src/app/shared/controls/number-input/number-input.component.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJudW1iZXItaW5wdXQuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 42024:
/*!*************************************************************************!*\
  !*** ./src/app/shared/controls/select/select.component.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3QuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 63862:
/*!*************************************************************************!*\
  !*** ./src/app/shared/controls/slider/slider.component.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbGlkZXIuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 77414:
/*!*************************************************************************!*\
  !*** ./src/app/shared/controls/toggle/toggle.component.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b2dnbGUuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 73123:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/settings-header/settings-header.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy1oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-router-outlet [swipeGesture]=\"false\"></ion-router-outlet>\n</ion-app>\n";

/***/ }),

/***/ 56554:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/controls/flat-select/flat-select.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-list>\n  <ion-radio-group [ngModel]=\"value\" (ngModelChange)=\"onValueChange($event)\">\n    <ion-item [lines]=\"lines\" *ngFor=\"let option of field.options\">\n      <ion-label>{{ option.label }}</ion-label>\n      <ion-radio slot=\"end\" [value]=\"option.value\"></ion-radio>\n    </ion-item>\n  </ion-radio-group>\n</ion-list>\n";

/***/ }),

/***/ 11220:
/*!*****************************************************************************************************!*\
  !*** ./src/app/shared/controls/multiple-flat-select/multiple-flat-select.component.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-list>\n  <ion-item>\n    <ion-label>Select one or more items</ion-label>\n    <ion-select placeholder=\"None\" multiple=\"true\" [ngModel]=\"value\" (ngModelChange)=\"onValueChange($event)\">\n      <ion-select-option *ngFor=\"let option of field.options\" [value]=\"option.value\">{{option.label}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n</ion-list>\n";

/***/ }),

/***/ 24776:
/*!*************************************************************************************!*\
  !*** ./src/app/shared/controls/number-input/number-input.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item [lines]=\"lines\">\n  <ion-label>{{ field.label }}</ion-label>\n  <ion-input\n    class=\"app-number-input\"\n    slot=\"end\"\n    [min]=\"field.min\"\n    [max]=\"field.max\"\n    type=\"number\"\n    inputmode=\"decimal\"\n    [ngModel]=\"value\"\n    (ngModelChange)=\"onValueChange($event)\"\n  ></ion-input>\n</ion-item>\n";

/***/ }),

/***/ 65125:
/*!*************************************************************************!*\
  !*** ./src/app/shared/controls/select/select.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item [lines]=\"lines\">\n  <ion-label>{{ field.label }}</ion-label>\n  <ion-select [ngModel]=\"value\" (ngModelChange)=\"onValueChange($event)\" interface=\"popover\">\n    <ion-select-option\n      *ngFor=\"let option of field.options\"\n      [value]=\"option.value\"\n    >\n      {{ option.label }}\n    </ion-select-option>\n  </ion-select>\n</ion-item>\n";

/***/ }),

/***/ 64524:
/*!*************************************************************************!*\
  !*** ./src/app/shared/controls/slider/slider.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item [lines]=\"lines\">\n  <ion-grid class=\"app-slider-grid\">\n    <ion-row class=\"ion-justify-content-between\">\n      <ion-label>{{ field.label }}</ion-label>\n      <span class=\"app-slider-value\">{{ value }}</span>\n    </ion-row>\n    <ion-row>\n      <ion-range\n        [min]=\"field.min\"\n        [max]=\"field.max\"\n        [ngModel]=\"value\"\n        (ngModelChange)=\"onValueChange($event)\"\n      ></ion-range>\n    </ion-row>\n  </ion-grid>\n</ion-item>\n";

/***/ }),

/***/ 62175:
/*!*************************************************************************!*\
  !*** ./src/app/shared/controls/toggle/toggle.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-item [lines]=\"lines\" (click)=\"onItemClick($event)\">\n  <ion-label>{{ field.label }}</ion-label>\n  <ion-toggle [ngModel]=\"value\"></ion-toggle>\n</ion-item>\n";

/***/ }),

/***/ 28832:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/settings-header/settings-header.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header #host [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ label$ | async }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map