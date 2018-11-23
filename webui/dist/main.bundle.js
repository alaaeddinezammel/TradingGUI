webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
 * This is a singleton class
 */
var AppConfig = /** @class */ (function () {
    function AppConfig() {
        //Provide all the Application Configs here
        this.version = "1.0.0";
        this.locale = "en-US";
        this.currencyFormat = { style: "currency", currency: "USD" };
        this.dateFormat = { year: 'numeric', month: 'short', day: 'numeric' };
        // API Related configs
        this.apiPort = "9119";
        if (this.apiProtocol === undefined) {
            this.apiProtocol = window.location.protocol;
        }
        if (this.apiHostName === undefined) {
            this.apiHostName = window.location.hostname;
        }
        if (this.apiPort === undefined) {
            this.apiPort = window.location.port;
        }
        if (this.apiHostName.includes("infomud") || this.apiHostName.includes("heroku")) {
            this.baseApiPath = this.apiProtocol + "//" + this.apiHostName + "/";
        }
        else {
            this.baseApiPath = this.apiProtocol + "//" + this.apiHostName + ":" + this.apiPort + "/";
        }
        if (this.locale === undefined) {
            this.locale = navigator.language;
        }
    }
    AppConfig = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AppConfig);
    return AppConfig;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("./src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login_component__ = __webpack_require__("./src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_logout_logout_component__ = __webpack_require__("./src/app/pages/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard_component__ = __webpack_require__("./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_product_stats_product_stats_component__ = __webpack_require__("./src/app/pages/product_stats/product_stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_order_stats_order_stats_component__ = __webpack_require__("./src/app/pages/order_stats/order_stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_products_products_component__ = __webpack_require__("./src/app/pages/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_customers_customers_component__ = __webpack_require__("./src/app/pages/customers/customers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_orders_orders_component__ = __webpack_require__("./src/app/pages/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_order_details_order_details_component__ = __webpack_require__("./src/app/pages/order_details/order_details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_employees_employees_component__ = __webpack_require__("./src/app/pages/employees/employees.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_guard_service__ = __webpack_require__("./src/app/services/auth_guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_404_page_not_found_component__ = __webpack_require__("./src/app/pages/404/page-not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    //Important: The sequence of path is important as the router go over then in sequential manner
    { path: '', redirectTo: '/home/dashboard/order', pathMatch: 'full' },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_13__services_auth_guard_service__["a" /* AuthGuard */]],
        children: [
            { path: '', redirectTo: '/home/dashboard/order', pathMatch: 'full', data: [{ selectedHeaderItemIndex: 1, selectedSubNavItemIndex: -1 }] },
            {
                path: 'dashboard',
                component: __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard_component__["a" /* DashboardComponent */],
                data: [{ selectedHeaderItemIndex: 0, selectedSubNavItemIndex: -1 }],
                children: [
                    { path: '', redirectTo: '/home/dashboard/order', pathMatch: 'full' },
                    { path: 'order', component: __WEBPACK_IMPORTED_MODULE_7__pages_order_stats_order_stats_component__["a" /* OrderStatsComponent */], data: [{ selectedHeaderItemIndex: 0, selectedSubNavItemIndex: 0 }] },
                    { path: 'product', component: __WEBPACK_IMPORTED_MODULE_6__pages_product_stats_product_stats_component__["a" /* ProductStatsComponent */], data: [{ selectedHeaderItemIndex: 0, selectedSubNavItemIndex: 1 }] }
                ]
            },
            { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_10__pages_orders_orders_component__["a" /* OrdersComponent */], data: [{ selectedHeaderItemIndex: 1, selectedSubNavItemIndex: -1 }] },
            { path: 'orders/:id', component: __WEBPACK_IMPORTED_MODULE_11__pages_order_details_order_details_component__["a" /* OrderDetailsComponent */], data: [{ selectedHeaderItemIndex: 1, selectedSubNavItemIndex: -1 }] },
            { path: 'products', component: __WEBPACK_IMPORTED_MODULE_8__pages_products_products_component__["a" /* ProductsComponent */], data: [{ selectedHeaderItemIndex: 2, selectedSubNavItemIndex: -1 }] },
            { path: 'customers', component: __WEBPACK_IMPORTED_MODULE_9__pages_customers_customers_component__["a" /* CustomersComponent */], data: [{ selectedHeaderItemIndex: 3, selectedSubNavItemIndex: -1 }] },
            { path: 'employees', component: __WEBPACK_IMPORTED_MODULE_12__pages_employees_employees_component__["a" /* EmployeesComponent */], data: [{ selectedHeaderItemIndex: 4, selectedSubNavItemIndex: -1 }] },
        ]
    },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__pages_login_login_component__["a" /* LoginComponent */], data: [{ selectedHeaderItemIndex: -1, selectedSubNavItemIndex: -1 }] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_4__pages_logout_logout_component__["a" /* LogoutComponent */], data: [{ selectedHeaderItemIndex: -1, selectedSubNavItemIndex: -1 }] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_14__pages_404_page_not_found_component__["a" /* PageNotFoundComponent */], data: [{ selectedHeaderItemIndex: -1, selectedSubNavItemIndex: -1 }] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_14__pages_404_page_not_found_component__["a" /* PageNotFoundComponent */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: "<router-outlet></router-outlet>"
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__ = __webpack_require__("./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_charts__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__clr_angular__ = __webpack_require__("./node_modules/@clr/angular/esm5/clr-angular.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_track_scroll_track_scroll_directive__ = __webpack_require__("./src/app/directives/track_scroll/track_scroll.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_badge_badge_component__ = __webpack_require__("./src/app/components/badge/badge.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_legend_legend_component__ = __webpack_require__("./src/app/components/legend/legend.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_logo_logo_component__ = __webpack_require__("./src/app/components/logo/logo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_component__ = __webpack_require__("./src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login_component__ = __webpack_require__("./src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_logout_logout_component__ = __webpack_require__("./src/app/pages/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_dashboard_dashboard_component__ = __webpack_require__("./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_order_stats_order_stats_component__ = __webpack_require__("./src/app/pages/order_stats/order_stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_product_stats_product_stats_component__ = __webpack_require__("./src/app/pages/product_stats/product_stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_products_products_component__ = __webpack_require__("./src/app/pages/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_customers_customers_component__ = __webpack_require__("./src/app/pages/customers/customers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_orders_orders_component__ = __webpack_require__("./src/app/pages/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_order_details_order_details_component__ = __webpack_require__("./src/app/pages/order_details/order_details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_employees_employees_component__ = __webpack_require__("./src/app/pages/employees/employees.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__app_config__ = __webpack_require__("./src/app/app-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_user_info_service__ = __webpack_require__("./src/app/services/user-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_auth_guard_service__ = __webpack_require__("./src/app/services/auth_guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_api_api_request_service__ = __webpack_require__("./src/app/services/api/api-request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_api_translate_service__ = __webpack_require__("./src/app/services/api/translate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_api_login_service__ = __webpack_require__("./src/app/services/api/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_api_order_service__ = __webpack_require__("./src/app/services/api/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_api_product_service__ = __webpack_require__("./src/app/services/api/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_api_customer_service__ = __webpack_require__("./src/app/services/api/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_api_employee_service__ = __webpack_require__("./src/app/services/api/employee.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//Third Party Modules



//Local App Modules

// Directives

// Components



//Pages  -- Pages too are components, they contain other components












// Services










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                // Thirdparty Module
                __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_charts__["NgxChartsModule"],
                __WEBPACK_IMPORTED_MODULE_7__clr_angular__["a" /* ClarityModule */].forChild(),
                // Local App Modules
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */]
            ],
            declarations: [
                // Components
                __WEBPACK_IMPORTED_MODULE_10__components_badge_badge_component__["a" /* BadgeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_legend_legend_component__["a" /* LegendComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_logo_logo_component__["a" /* LogoComponent */],
                //Pages -- Pages too are components, they contain other components
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pages_product_stats_product_stats_component__["a" /* ProductStatsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pages_order_stats_order_stats_component__["a" /* OrderStatsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__pages_products_products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__pages_employees_employees_component__["a" /* EmployeesComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pages_customers_customers_component__["a" /* CustomersComponent */],
                __WEBPACK_IMPORTED_MODULE_22__pages_orders_orders_component__["a" /* OrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_23__pages_order_details_order_details_component__["a" /* OrderDetailsComponent */],
                //Directives
                __WEBPACK_IMPORTED_MODULE_9__directives_track_scroll_track_scroll_directive__["a" /* TrackScrollDirective */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_27__services_auth_guard_service__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_26__services_user_info_service__["a" /* UserInfoService */],
                __WEBPACK_IMPORTED_MODULE_29__services_api_translate_service__["a" /* TranslateService */],
                __WEBPACK_IMPORTED_MODULE_28__services_api_api_request_service__["a" /* ApiRequestService */],
                __WEBPACK_IMPORTED_MODULE_30__services_api_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_31__services_api_order_service__["a" /* OrderService */],
                __WEBPACK_IMPORTED_MODULE_32__services_api_product_service__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_33__services_api_customer_service__["a" /* CustomerService */],
                __WEBPACK_IMPORTED_MODULE_34__services_api_employee_service__["a" /* EmployeeService */],
                __WEBPACK_IMPORTED_MODULE_25__app_config__["a" /* AppConfig */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/badge/badge.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BadgeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BadgeComponent = /** @class */ (function () {
    function BadgeComponent() {
    }
    BadgeComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BadgeComponent.prototype, "text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BadgeComponent.prototype, "badgeCls", void 0);
    BadgeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 's-badge',
            template: "<span class=\"s-badge {{badgeCls}}\">{{text}}</span>"
        }),
        __metadata("design:paramtypes", [])
    ], BadgeComponent);
    return BadgeComponent;
}());



/***/ }),

/***/ "./src/app/components/legend/legend.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LegendComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LegendComponent = /** @class */ (function () {
    function LegendComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], LegendComponent.prototype, "legend", void 0);
    LegendComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 's-legend',
            styles: [__webpack_require__("./src/app/components/legend/legend.scss")],
            template: "\n    <div class=\"s-legend-wrap\">\n        <div *ngFor=\" let l of legend \" class=\"s-legend-item\">\n        <div  [ngStyle]=\"{'background-color':l.color}\" class=\"s-legend-color\"></div>\n        <div class=\"s-legend-value-wrap\">\n            <div class=\"s-legend-value\">{{l.value}}</div>\n            <div class=\"s-legend-label\">{{l.name}}</div>\n        </div>\n        </div>\n    </div>\n    "
        })
    ], LegendComponent);
    return LegendComponent;
}());



/***/ }),

/***/ "./src/app/components/legend/legend.scss":
/***/ (function(module, exports) {

module.exports = ".s-legend-wrap {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 5px 0; }\n  .s-legend-wrap .s-legend-item {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 32px;\n    margin-right: 20px;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch; }\n  .s-legend-wrap .s-legend-item .s-legend-color {\n      width: 5px; }\n  .s-legend-wrap .s-legend-item .s-legend-value-wrap {\n      margin: 0px 3px; }\n  .s-legend-wrap .s-legend-item .s-legend-label {\n      font-size: 12px;\n      height: 14px;\n      line-height: 15px; }\n  .s-legend-wrap .s-legend-item .s-legend-value {\n      font-size: 18px;\n      height: 18px; }\n"

/***/ }),

/***/ "./src/app/components/logo/logo.component.html":
/***/ (function(module, exports) {

module.exports = "<svg style=\"width:100%; height:100%\" viewBox=\"0 0 80 100\"\n id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"240px\" height=\"240px\" viewBox=\"0 0 240 240\" enable-background=\"new 0 0 240 240\" xml:space=\"preserve\">  <image id=\"image0\" width=\"240\" height=\"240\" x=\"0\" y=\"0\"\n      href=\"data:image/png;base64,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\n  L75UDGpsoHR+s7oZhoFNmzabL4zjeN6lSxeccMIJ2L59u7BunNWZZSgEA7n7dl3LiDWtiktcbb1p\n  02ZhAwNUeVhC/M03S3H11VcL/nz9+vVx7bXXYvbs2TGn2QsbCATs9Qd2f9NoRj+3MJbYoG5eVyWg\n  fgKm06wqv1BFrG5Ki12FhYXYtXu3MyXEN4wCq/Rf5TRMsClFfHw8WrZsiYGDBuHCCy7AqV26uDYI\n  sDqEw2Gkp6cjLe1XrF69GmlpafbyQLMYkca0tF/x5ZeLkJiYiJ49z8a1116L7t27mSeQEHNBxv/9\n  3/9h0aLF2pMfWL6AOCr/8ssvuPXWW4T2iYuLw1VXX43Jzz3nGsRYB7XjCJz2sXki87CU2BYtWuC8\n  AQNc9Vi3bh2ivfbs2YNdu3ajc+dOAj2XXX455s2bx63mig3NXtj27dvjbGuQ1F1+ZnJFYJVvZlBp\n  2mht89IEqaJJy9Ny6NAhlBQX2wLHXkXCsJ6Rclnjc5Hr5ORk9OnTBxdfcgnOOussNGjQwGUVEGK9\n  /OvwYfz662/47rvvsH79BuukSPFQOV5TOvO55v3i4iJ8//0PWL16DS644AL885+3oUUL8zjZLl1O\n  RYcOHewlkDKW5etU0yx369atOHToEFq2bCnQfPXVV2Pum2/i2LFjQn3B5S4EA3XxijJghw4b5jp1\n  JCsrC9u377Dodg4m0PEqLy8XGzZsEASYUoqWLVvizDPPxNq1a2NKsw4bCARw56hR5q44RVzGT2uq\n  0sQKW223E8oalRCCnOxscxM4RFPHZdazXiB0C64RWQNZaZo0aYKHH3kEAwcOtDfE875Heno6lixZ\n  iqeeGo2RI0dhwoQJWLHiO2RkZLLaw8lOnoQw/4sRVyAUMt9+d++992HFiu9gGAYaNGiA//u/832x\n  4nMgP78A3367wuUv1a9fHyNGjjSj41q0R+fheVUKbMeOHXHNNde4gno///wLcnNzrTqpcnLX99df\n  f3X1h8TERPTu0yemNHthzzvvPPTv31/My0Nx6fpwRWCr9XZCOd9sS4CthJpWKP12wp07dwrnUrNy\n  N2zYgPHjJ2DEiDvx1FOjsXTpchw/ng5xHHfqoY6smt+8+ctj9+/fj9Gjx+C55yYjPT0dgwYNRGpq\n  alRYnl9ffrnIEg7xuuyyy5zO5xE08Z3OixJbp04dPPzww0hMTHT1lWXLliESCXN18ufV3r17kZ+f\n  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\n  MDc6MDDK36jIAAAAAElFTkSuQmCC\" />\n  </svg>\n  \n"

/***/ }),

/***/ "./src/app/components/logo/logo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
        this.fontColor = "#69999A";
        this.iconColor = "#E3002B";
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LogoComponent.prototype, "fontColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LogoComponent.prototype, "iconColor", void 0);
    LogoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 's-logo',
            template: __webpack_require__("./src/app/components/logo/logo.component.html")
        })
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "./src/app/directives/track_scroll/track_scroll.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackScrollDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var TrackScrollDirective = /** @class */ (function () {
    function TrackScrollDirective(document) {
        this.document = document;
        this.bottom = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TrackScrollDirective.prototype.track = function () {
        /*
        if (document.body.scrollHeight == window.scrollY + window.innerHeight) {
             this.bottom.emit(true);
        }
        */
        if (Math.abs(document.body.scrollHeight - (window.scrollY + window.innerHeight)) <= 100) {
            this.bottom.emit(true);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TrackScrollDirective.prototype, "bottom", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TrackScrollDirective.prototype, "track", null);
    TrackScrollDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[trackScroll]' }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common__["DOCUMENT"])),
        __metadata("design:paramtypes", [Document])
    ], TrackScrollDirective);
    return TrackScrollDirective;
}());



/***/ }),

/***/ "./src/app/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"no-margin\">  <!-- class=\"main-container\" will create fixed height container -->\n\n    <!--Alert -->\n    <div *ngIf=\"showAppAlert\" class=\"alert alert-app-level \">\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeAppAlert()\">\n            <clr-icon aria-hidden=\"true\" shape=\"close\"></clr-icon>\n        </button>\n        <div class=\"alert-item\">\n            <div class=\"alert-text\">\n                Alert Type: Info\n            </div>\n            <div class=\"alert-actions\">\n                <button class=\"btn alert-action\">Action</button>\n            </div>\n        </div>\n    </div>\n\n    <!-- Main App Header -->\n    <header class=\"header header-2\">\n        <div class=\"branding\">\n            <div style=\"width:40px;margin-right:10px;\"><s-logo></s-logo></div>\n            <!-- clr-icon shape=\"target\" class=\"is-solid is-inverse\"></clr-icon -->\n            <span class=\"title\">Trading GUI</span>\n        </div>\n        <div class=\"header-nav\">\n            <a *ngFor=\"let header of appHeaderItems let idx = index\" class=\"nav-link\" [routerLink]=\"header.href\" routerLinkActive=\"active\" ><span class=\"nav-text\">{{ header.label }}</span></a>\n        </div>\n        <div class=\"header-actions\">\n            <label style=\"line-height: 60px;\"> {{userName}}</label>\n            <a [routerLink]=\"'/logout'\" class=\"nav-link nav-text\"> <clr-icon shape=\"power\"></clr-icon></a>\n        </div>\n    </header>\n\n    <!-- Sub Nav Item for Header Items -->\n    <nav *ngIf =\"appHeaderItems[selectedHeaderItemIndex].subNav && appHeaderItems[selectedHeaderItemIndex].subNav.length > 0 \" class=\"subnav\" >\n        <ul class=\"nav\">\n            <li *ngFor=\"let subNavItem of appHeaderItems[selectedHeaderItemIndex].subNav let idx=index\" class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"subNavItem.href\" routerLinkActive=\"active\" >{{ subNavItem.label }}</a>\n            </li>\n        </ul>\n    </nav>\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_login_service__ = __webpack_require__("./src/app/services/api/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_info_service__ = __webpack_require__("./src/app/services/user-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, activeRoute, loginService, userInfoService) {
        var _this = this;
        this.router = router;
        this.activeRoute = activeRoute;
        this.loginService = loginService;
        this.userInfoService = userInfoService;
        this.showAppAlert = false;
        this.appHeaderItems = [
            {
                label: 'Dashboard',
                href: '/home/dashboard',
                subNav: [
                    { label: "Order Stats", href: "/home/dashboard/order" },
                    { label: "Product Stats", href: "/home/dashboard/product" }
                ]
            },
            { label: 'Orders', href: '/home/orders', subNav: [] },
            { label: 'Products', href: '/home/products', subNav: [] },
            { label: 'Customers', href: '/home/customers', subNav: [] },
            { label: 'Employees', href: '/home/employees', subNav: [] }
        ];
        this.selectedHeaderItemIndex = 0;
        this.selectedSubNavItemIndex = 1;
        this.userName = "";
        // This block is to retrieve the data from the routes (routes are defined in app-routing.module.ts)
        router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; })
            .map(function (_) { return _this.router.routerState.root; })
            .map(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            ;
            return route;
        })
            .mergeMap(function (route) { return route.data; })
            .subscribe(function (data) {
            console.log("Route data===: ", data[0]);
            _this.selectedHeaderItemIndex = data[0] ? data[0].selectedHeaderItemIndex : -1;
            _this.selectedSubNavItemIndex = data[0] ? data[0].selectedSubNavItemIndex : -1;
        });
        this.userName = this.userInfoService.getUserName();
    }
    HomeComponent.prototype.navbarSelectionChange = function (val) {
        // console.log(val);
    };
    HomeComponent.prototype.closeAppAlert = function () {
        this.showAppAlert = false;
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'home-comp',
            template: __webpack_require__("./src/app/home.component.html"),
            styles: [__webpack_require__("./src/app/home.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_api_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_info_service__["a" /* UserInfoService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/404/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"s-page-not-found\"> 404 Page Not Found </div>\n"

/***/ }),

/***/ "./src/app/pages/404/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        console.log("404 : %s", router.url);
    }
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-not-found',
            template: __webpack_require__("./src/app/pages/404/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/pages/404/page-not-found.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/404/page-not-found.scss":
/***/ (function(module, exports) {

module.exports = ".s-page-not-found {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 60px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 15px;\n  background-color: #005d84;\n  color: #eee;\n  font-size: 24px; }\n"

/***/ }),

/***/ "./src/app/pages/customers/customers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-16\">\n\n    <h3> Lazy Loading Data </h3>\n    <p style=\"width:1000px\"> This is an example of lazy loading data. There are about 100 customer and\n        the page initially loads 10 customer.\n        When you scroll to bottom it loads another 10, till it loads all the 100 customer\n    </p>\n    <br/>\n    <ngx-datatable\n        style='width:1000px;'\n        [rows]=\"rows\"\n        [columns]=\"columns\"\n        [headerHeight]=\"45\"\n        [rowHeight]=\"'auto'\"\n        [columnMode]=\"'standard'\"\n        [scrollbarV]=\"false\"\n        trackScroll\n        (bottom)='onScroll()'\n    >\n    </ngx-datatable>\n\n    <div *ngIf=\"isLoading\" class=\"spinner spinner-lg\">Loading...</div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/customers/customers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_customer_service__ = __webpack_require__("./src/app/services/api/customer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomersComponent = /** @class */ (function () {
    function CustomersComponent(router, customerService) {
        this.router = router;
        this.customerService = customerService;
        this.pageSize = 10;
        this.currentPage = 0;
        this.isLastPageLoaded = false;
        this.isLoading = false;
    }
    CustomersComponent.prototype.ngOnInit = function () {
        var me = this;
        me.getPageData();
        this.columns = [
            { prop: "id", name: "ID", width: 50 },
            { prop: "firstName", name: "First Name", width: 120 },
            { prop: "lastName", name: "Last Name", width: 120 },
            { prop: "company", name: "Company", width: 120 },
            { prop: "email", name: "Email", width: 200 },
            { prop: "phone", name: "Phone", width: 160 },
            { prop: "address", name: "Address", width: 220 },
        ];
    };
    CustomersComponent.prototype.getPageData = function (isAppend) {
        if (isAppend === void 0) { isAppend = false; }
        if (this.isLastPageLoaded === false) {
            var me_1 = this;
            me_1.isLoading = true;
            this.customerService.getCustomers(this.currentPage, this.pageSize).subscribe(function (data) {
                me_1.isLastPageLoaded = data.last;
                me_1.currentPage = data.currentPageNumber + 1;
                if (isAppend === true) {
                    me_1.rows = me_1.rows.concat(data.items);
                }
                else {
                    me_1.rows = data.items;
                }
                me_1.isLoading = false;
            });
        }
    };
    CustomersComponent.prototype.onScroll = function () {
        console.log("bottom");
        if (this.isLoading === false) {
            this.getPageData(true);
        }
    };
    CustomersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 's-customers-pg',
            template: __webpack_require__("./src/app/pages/customers/customers.component.html"),
            styles: [__webpack_require__("./src/app/pages/customers/customers.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_api_customer_service__["a" /* CustomerService */]])
    ], CustomersComponent);
    return CustomersComponent;
}());



/***/ }),

/***/ "./src/app/pages/customers/customers.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 's-dashboard-pg',
            template: __webpack_require__("./src/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/pages/dashboard/dashboard.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.scss":
/***/ (function(module, exports) {

module.exports = ".s-dashboard-pg {\n  margin: 0px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .s-dashboard-pg .chart-box {\n    margin: 16px;\n    padding: 0 16px;\n    background-color: #fff;\n    border: 1px solid #ccc;\n    border-radius: 2px; }\n"

/***/ }),

/***/ "./src/app/pages/employees/employees.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-16\">\n\n    <ngx-datatable\n        style='width:900px;'\n        [rows]=\"rows\"\n        [columns]=\"columns\"\n        [headerHeight]=\"45\"\n        [rowHeight]=\"'auto'\"\n        [columnMode]=\"'standard'\"\n        [scrollbarV]=\"false\"\n    >\n    </ngx-datatable>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/employees/employees.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_employee_service__ = __webpack_require__("./src/app/services/api/employee.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent(router, employeeService) {
        this.router = router;
        this.employeeService = employeeService;
    }
    EmployeesComponent.prototype.ngOnInit = function () {
        var me = this;
        me.getPageData();
        this.columns = [
            { prop: "id", name: "ID", width: 50 },
            { prop: "firstName", name: "First Name", width: 120 },
            { prop: "lastName", name: "Last Name", width: 120 },
            { prop: "email", name: "Email", width: 250 },
            { prop: "phone", name: "Phone", width: 160 },
            { prop: "department", name: "Department", width: 220 }
        ];
    };
    EmployeesComponent.prototype.getPageData = function () {
        var _this = this;
        var me = this;
        this.employeeService.getEmployees().subscribe(function (data) {
            _this.rows = data.items;
        });
    };
    EmployeesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 's-employees-pg',
            template: __webpack_require__("./src/app/pages/employees/employees.component.html"),
            styles: [__webpack_require__("./src/app/pages/employees/employees.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_api_employee_service__["a" /* EmployeeService */]])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/pages/employees/employees.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"s-login-pg\">\n    <div class=\"s-login-pg-head\">\n        <div style=\"width:100px;\"><s-logo></s-logo></div>\n        <p style=\"text-align: center\"> Sample app done with SpringBoot backend and Angular frontend </p>\n    </div>\n    <form class=\"s-login-pg-form\" name=\"form\" (ngSubmit)=\"login()\" #f=\"ngForm\" novalidate>\n        <input type=\"text\"     placeholder=\"Username (demo)\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required/>\n        <input type=\"password\" placeholder=\"Password (demo)\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required/>\n        <button type=\"submit\" class=\"btn btn-primary\">LOG IN</button>\n    </form>\n    <div class=\"s-login-pg-foot\">\n        <div *ngIf=\"errMsg\" style=\"color:indianred; font-weight: bold\">{{errMsg}}</div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_login_service__ = __webpack_require__("./src/app/services/api/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.model = {};
        this.errMsg = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.loginService.logout(false);
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginService.getToken(this.model.username, this.model.password)
            .subscribe(function (resp) {
            if (resp.user === undefined || resp.user.token === undefined || resp.user.token === "INVALID") {
                _this.errMsg = 'Username or password is incorrect';
                return;
            }
            _this.router.navigate([resp.landingPage]);
        }, function (errResponse) {
            switch (errResponse.status) {
                case 401:
                    _this.errMsg = 'Username or password is incorrect';
                    break;
                case 404:
                    _this.errMsg = 'Service not found';
                case 408:
                    _this.errMsg = 'Request Timedout';
                case 500:
                    _this.errMsg = 'Internal Server Error';
                default:
                    _this.errMsg = 'Server Error';
            }
        });
    };
    LoginComponent.prototype.onSignUp = function () {
        this.router.navigate(['signup']);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 's-login-pg',
            template: __webpack_require__("./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__("./src/app/pages/login/login.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_api_login_service__["a" /* LoginService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.s-login-pg {\n  width: 400px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0;\n  margin: 48px 16px 16px 16px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: white;\n  border: 1px solid #ccc;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.15);\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.15); }\n\n.s-login-pg .s-login-pg-head {\n    width: 100%;\n    height: 220px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background-color: #998;\n    padding: 16px;\n    color: white; }\n\n.s-login-pg .s-login-pg-form {\n    width: 100%;\n    height: 200px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin: 24px 16px; }\n\n.s-login-pg .s-login-pg-form input {\n      margin: 16px; }\n\n.s-login-pg .s-login-pg-foot {\n    width: 100%;\n    min-height: 40px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n"

/***/ }),

/***/ "./src/app/pages/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tile column center white\" style=\"width:500px\">\n    <h3> You are now signed out </h3>\n    <p> You may <a [routerLink]=\"'/login'\"> Sign in again </a></p>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_info_service__ = __webpack_require__("./src/app/services/user-info.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(userInfoService) {
        this.userInfoService = userInfoService;
        this.userInfoService.removeUserInfo();
    }
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 's-logout-pg',
            template: __webpack_require__("./src/app/pages/logout/logout.component.html"),
            styles: [__webpack_require__("./src/app/pages/logout/logout.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_info_service__["a" /* UserInfoService */]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/pages/logout/logout.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #fafafa; }\n"

/***/ }),

/***/ "./src/app/pages/order_details/order_details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"order-detail-pg pad-16\">\n    <form [formGroup]=\"frmOrderDetail\" novalidate>\n        <h3> Order:{{orderId}} </h3>\n        <br/>\n        <clr-tabs>\n            <clr-tab>\n                <button clrTabLink>Order Line</button>\n                <clr-tab-content>\n                    <br/>\n                    <table class=\"s-order-header\">\n                        <tr><td style=\"width:125px\">Customer     </td> <td> {{orderDetailsRec.customerName}} ({{orderDetailsRec.customerId}}) </td></tr>\n                        <tr><td>Email        </td> <td> {{orderDetailsRec.customerEmail}} </td></tr>\n                        <tr><td>Order Status </td> <td> {{orderDetailsRec.orderStatus}} </td></tr>\n                    </table>\n                    <table class=\"s-order-line table\" style=\"width:100%;\">\n                        <thead>\n                            <tr>\n                                <th class=\"left\" style=\"width:60px;\">Code</th>\n                                <th class=\"left\" style=\"width:110px;\">Line Status</th>\n                                <th class=\"left\" style=\"width:200px;\">Product Name</th>\n                                <th class=\"left\" style=\"width:150px;\">Category</th>\n                                <th class=\"right\" style=\"width:90px;\">Quantity</th>\n                                <th class=\"right\" style=\"width:90px;\">Unit Price</th>\n                                <th style=\"width:50px;\" colspan=\"2\">Actions</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let o of orderDetailsRec.orderLine\">\n                                <td class=\"left\">{{o.productCode}}</td>\n                                <td class=\"left\">{{o.orderItemStatus}}</td>\n                                <td class=\"left\">{{o.productName}}</td>\n                                <td class=\"left\">{{o.category}}</td>\n                                <td class=\"right\">{{o.quantity}}</td>\n                                <td class=\"right\">{{o.unitPrice}}</td>\n                                <td style=\"width:40px;\"><clr-icon shape=\"edit\"  class=\"is-info\"></clr-icon></td>\n                                <td style=\"width:40px;\"><clr-icon shape=\"trash\" class=\"is-error\"></clr-icon></td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </clr-tab-content>\n            </clr-tab>\n\n            <clr-tab>\n                <button clrTabLink>Shipping Info</button>\n                <clr-tab-content>\n                    <section class=\"form-block\" style=\"margin-top:32px\">\n                        <table>\n                            <tr>\n                                <td style=\"width:125px;\">Shipped Date </td>\n                                <td><input colspan=\"2\" type=\"text\" formControlName=\"shippedDate\" style=\"width:120px\"></td>\n                            </tr>\n                            <tr>\n                                <td>Fee</td>\n                                <td colspan=\"2\"><input type=\"text\" formControlName=\"shippedFee\" style=\"width:60px\"> </td>\n                            </tr>\n                            <tr>\n                                <td>Address</td>\n                                <td colspan=\"2\"><input type=\"text\" formControlName=\"shipAddress1\"> </td>\n                            </tr>\n                            <tr>\n                                <td></td>\n                                <td colspan=\"2\"><input type=\"text\" formControlName=\"shipAddress2\"> </td>\n                            </tr>\n                            <tr>\n                                <td>City</td>\n                                <td colspan=\"2\"><input type=\"text\" formControlName=\"shipCity\" style=\"width:150px\"> </td>\n                            </tr>\n                            <tr>\n                                <td>State</td>\n                                <td colspan=\"2\"><input type=\"text\" formControlName=\"shipState\" style=\"width:150px\"> </td>\n                            </tr>\n                            <tr>\n                                <td>Country</td>\n                                <td colspan=\"2\"><input type=\"text\" formControlName=\"shipCountry\" style=\"width:150px\"> </td>\n                            </tr>\n                        </table>\n                    </section>\n                </clr-tab-content>\n            </clr-tab>\n        </clr-tabs>\n    </form>\n    <br/>\n    <button [routerLink]=\"'/home/orders'\" type=\"submit\" class=\"btn btn-primary\" >\n        <clr-icon shape=\"caret left\"></clr-icon>Back to Orders\n    </button>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/order_details/order_details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_order_service__ = __webpack_require__("./src/app/services/api/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderDetailsComponent = /** @class */ (function () {
    function OrderDetailsComponent(route, router, formBuilder, orderService) {
        /*
        this.frmOrderDetail = this.formBuilder.group({
            customerName   : ['',Validators.required],
            customerEmail  : ['',Validators.required],
            customerCompany: ['',Validators.required],
            orderStatus    : ['',Validators.required],
            orderDate      : ['',Validators.required],
            paymentType    : [''],
            paidDate       : [''],
            shipAddress1   : ['',Validators.required],
            shipAddress2   : ['',Validators.required],
            shipCity       : ['',Validators.required],
            shipCountry    : ['',Validators.required],
            shipState      : ['',Validators.required],
            shippedDate    : ['',Validators.required],
            shippedFee     : ['',Validators.required],
        });

        this.route.params.subscribe((p: Params) => {
            this.orderId = p["id"];
            this.orderService.getOrderDetails(this.orderId).subscribe( resp => {
                //this.orderRecord = resp[0];
                this.frmOrderDetail.setValue({
                    customerName   : [resp[0].customerName],
                    customerEmail  : [resp[0].customerEmail],
                    customerCompany: [resp[0].customerCompany],
                    orderStatus    : [resp[0].orderStatus],
                    orderDate      : [resp[0].orderDate],
                    paymentType    : [resp[0].paymentType],
                    paidDate       : [resp[0].paidDate],
                    shipAddress1   : [resp[0].shipAddress1],
                    shipAddress2   : [resp[0].shipAddress2],
                    shipCity       : [resp[0].shipCity],
                    shipCountry    : [resp[0].shipCountry],
                    shipState      : [resp[0].shipState],
                    shippedDate    : [resp[0].shippedDate],
                    shippedFee     : [resp[0].shippedFee]
                });
                this.frmOrderDetail = resp[0];
                //this.isOrderOnHold  = resp[0].policyState.toUpperCase()==="ACTIVE"?true:false;

                console.log(this.orderRecord );

            });

        });
        */
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.orderService = orderService;
        this.orderDetailsRec = { id: '', orderLine: [] };
        this.isOrderOnHold = false;
        this.rows = [];
        this.columns = [
            { prop: "productName", name: "Product", width: 200 },
            { prop: "productCode", name: "Code", width: 70 },
            { prop: "category", name: "Category", width: 100 },
            { prop: "listPrice", name: "List Price", width: 70 }
        ];
    }
    OrderDetailsComponent.prototype.ngOnInit = function () {
        this.frmOrderDetail = this.formBuilder.group({
            customerName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            customerEmail: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            customerCompany: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            orderStatus: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            orderDate: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            paymentType: [''],
            paidDate: [''],
            shipAddress1: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            shipAddress2: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            shipCity: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            shipCountry: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            shipState: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            shippedDate: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            shippedFee: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
        });
        this.getData();
    };
    OrderDetailsComponent.prototype.getData = function () {
        var me = this;
        this.route.params
            .switchMap(function (params) {
            me.orderId = params['id'];
            return me.orderService.getOrderDetails(params['id']);
        })
            .subscribe(function (resp) {
            console.log("Order details", resp[0]);
            me.frmOrderDetail.setValue({
                customerName: [resp[0].customerName],
                customerEmail: [resp[0].customerEmail],
                customerCompany: [resp[0].customerCompany],
                orderStatus: [resp[0].orderStatus],
                orderDate: [resp[0].orderDate],
                paymentType: [resp[0].paymentType],
                paidDate: [resp[0].paidDate],
                shipAddress1: [resp[0].shipAddress1],
                shipAddress2: [resp[0].shipAddress2],
                shipCity: [resp[0].shipCity],
                shipCountry: [resp[0].shipCountry],
                shipState: [resp[0].shipState],
                shippedDate: [resp[0].shippedDate],
                shippedFee: [resp[0].shippingFee]
            });
            me.orderDetailsRec = resp[0];
        });
    };
    OrderDetailsComponent.prototype.goBack = function () {
        console.log("Back");
    };
    OrderDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 's-orders-pg',
            template: __webpack_require__("./src/app/pages/order_details/order_details.component.html"),
            styles: [__webpack_require__("./src/app/pages/order_details/order_details.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__services_api_order_service__["a" /* OrderService */]])
    ], OrderDetailsComponent);
    return OrderDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/order_details/order_details.scss":
/***/ (function(module, exports) {

module.exports = ".order-detail-pg {\n  width: 750px; }\n"

/***/ }),

/***/ "./src/app/pages/order_stats/order_stats.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"s-order-dash-pg\">\n    <div class=\"chart-box\">\n      <h4> Orders by Status </h4>\n      <ngx-charts-advanced-pie-chart\n        style=\"position:relative\"\n        [view]=\"view\"\n        [scheme]=\"colorScheme\"\n        [results]=\"ordersByStatusData\"\n      >\n      </ngx-charts-advanced-pie-chart>\n    </div>\n\n    <div class=\"chart-box\">\n      <h4> Orders By Payment Type </h4>\n      <ngx-charts-advanced-pie-chart\n        style=\"position:relative\"\n        [view]=\"view\"\n        [scheme]=\"colorScheme\"\n        [results]=\"ordersByPaymentData\"\n      >\n      </ngx-charts-advanced-pie-chart>\n    </div>\n\n  <div class=\"chart-box\">\n    <h4> Orders By Country </h4>\n        <ngx-charts-bar-vertical\n            [view]=\"[990, 270]\"\n            [barPadding]=\"1\"\n            [scheme]=\"barColorScheme\"\n            [results]=\"ordersByCountryData\"\n            [roundDomains]=\"true\"\n            [showGridLines]=\"true\"\n            [xAxis]=\"true\"\n            [yAxis]=\"true\"\n            [legend]=\"false\"\n            [roundEdges]=\"false\"\n        >\n        </ngx-charts-bar-vertical>\n  </div>\n\n<!--ngx-datatable\n  style='height:248px; width:585px;margin:16px;border-radius:2px;'\n  [rows]=\"rows\"\n  [columns]=\"columns\"\n  [headerHeight]=\"45\"\n  [rowHeight]=\"32\"\n  [columnMode]=\"'standard'\"\n  [scrollbarV]=\"false\"\n  >\n  </ngx-datatable-->\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/order_stats/order_stats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderStatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_order_service__ = __webpack_require__("./src/app/services/api/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/mergeMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderStatsComponent = /** @class */ (function () {
    function OrderStatsComponent(router, orderService) {
        this.router = router;
        this.orderService = orderService;
        this.view = [460, 180];
        this.ordersByStatusData = [];
        this.ordersByPaymentData = [];
        this.ordersByCountryData = [];
        this.colorScheme = {
            domain: ['#007cbb', '#61c673', '#ff8e28', '#ef2e2e']
        };
        this.barColorScheme = {
            domain: ['#007cbb']
        };
    }
    OrderStatsComponent.prototype.ngOnInit = function () {
        var me = this;
        this.getPageData();
    };
    OrderStatsComponent.prototype.getPageData = function () {
        var me = this;
        /**
         * This is an Example of sequencing RxJS observable using mergeMap
         * (We are sequencing the API calls as the H2 DB used by the backend is failing to serve multiple request at once)
         */
        me.orderService.getOrderStats("status")
            .mergeMap(function (statusData) {
            me.ordersByStatusData = statusData.items;
            console.log("Received Orders By Status");
            return me.orderService.getOrderStats("paytype");
        }).mergeMap(function (payTypeData) {
            me.ordersByPaymentData = payTypeData.items;
            console.log("Received Orders By Payment Type");
            return me.orderService.getOrderStats("country");
        }).subscribe(function (countryData) {
            me.ordersByCountryData = countryData.items;
            console.log("Received Orders By Country");
        });
    };
    OrderStatsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 's-order_stats-pg',
            template: __webpack_require__("./src/app/pages/order_stats/order_stats.component.html"),
            styles: [__webpack_require__("./src/app/pages/order_stats/order_stats.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1__services_api_order_service__["a" /* OrderService */]])
    ], OrderStatsComponent);
    return OrderStatsComponent;
}());



/***/ }),

/***/ "./src/app/pages/order_stats/order_stats.scss":
/***/ (function(module, exports) {

module.exports = "h4 {\n  margin-top: 16px; }\n\n.s-order-dash-pg {\n  margin: 0px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.s-order-dash-pg .chart-box {\n    margin: 16px;\n    padding: 0 16px;\n    background-color: #fff;\n    border: 1px solid #ccc;\n    border-radius: 2px; }\n"

/***/ }),

/***/ "./src/app/pages/orders/orders.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-16\">\n<h3> Large Dataset with - Dynamic DOM</h3>\n<p style=\"width:1140px\"> Here we are loading about 600 rows in one ajax call.\n    However to keep the DOM footprint low we don not create those many DOM elements.\n    As the user scrolls up and down , DOM elements are added and removed based on the data in memory.\n</p>\n\n<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <div style=\"width:1140px\">\n        <div class=\"s-info-bar\">\n            <!-- clr-dropdown [clrMenuPosition]=\"'right-bottom'\">\n                <button class=\"btn btn-sm btn-primary\"clrDropdownToggle>\n                    Filter <clr-icon shape=\"caret right\"></clr-icon>\n                </button>\n                <div class=\"dropdown-menu\">\n                    <label class=\"dropdown-header\">By status</label>\n                    <button clrDropdownItem > On Hold  </button>\n                    <button clrDropdownItem > Shipped  </button>\n                    <button clrDropdownItem > Complete </button>\n                    <button clrDropdownItem > New      </button>\n                    <label class=\"dropdown-header\">By Payment Type</label>\n                    <button clrDropdownItem > Cash  </button>\n                    <button clrDropdownItem > Check </button>\n                    <button clrDropdownItem > Card  </button>\n                </div>\n            </clr-dropdown -->\n            <div style=\"flex:1\"></div>\n            <div *ngIf=\"isLoading\" class=\"spinner spinner-md\" style=\"margin:0 10px;\">Loading...</div>\n            <s-legend [legend]=\"orderByStatusData\" ></s-legend>\n        </div>\n        <ngx-datatable\n            style='height:450px; width:100%;'\n            [rows]='rows'\n            [columns]=\"columns\"\n            [columnMode]=\"'standard'\"\n            [headerHeight]=\"45\"\n            [footerHeight]=\"45\"\n            [rowHeight]=\"36\"\n            [scrollbarV]=\"true\"\n        >\n        </ngx-datatable>\n        </div>\n\n\n    </div>\n</div>\n</div>\n\n<ng-template #orderIdTpl let-row=\"row\" let-value=\"value\" let-i=\"index\">\n  <a routerLink=\"/home/orders/{{value}}\" attr.data-itemid=\"{{value}}\">{{value}}</a>\n</ng-template>\n\n\n<ng-template #orderStatusCellTpl let-row=\"row\" let-value=\"value\" let-i=\"index\">\n  <s-badge [text]=value [badgeCls]=\"'s-badge-'+value.toLowerCase().replace(' ','')\"></s-badge>\n</ng-template>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/pages/orders/orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_order_service__ = __webpack_require__("./src/app/services/api/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/mergeMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(router, orderService) {
        this.router = router;
        this.orderService = orderService;
        this.orderByStatusData = [];
        this.isLoading = false;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var me = this;
        me.getPageData();
        this.columns = [
            { prop: "orderId", name: "ID", width: 65, cellTemplate: this.orderIdTpl },
            { prop: "orderDate", name: "Order Date", width: 105 },
            { prop: "orderStatus", name: "Status", width: 85, cellTemplate: this.statusCellTpl },
            { prop: "customerName", name: "Name", width: 150 },
            { prop: "customerEmail", name: "Email", width: 200 },
            { prop: "customerCompany", name: "Company", width: 110 },
            { prop: "paymentType", name: "Pay Type", width: 80 },
            { prop: "paidDate", name: "Pay Date", width: 105 },
            { prop: "shippedDate", name: "Ship Date", width: 105 },
            { prop: "shipCountry", name: "Ship Country", width: 110 }
        ];
    };
    OrdersComponent.prototype.getPageData = function () {
        var me = this;
        var legendColors = { "On Hold": '#ef2e2e', "Shipped": '#ff8e28', "Complete": '#61c673', "New": '#007cbb' };
        me.isLoading = true;
        me.orderService.getOrderStats("status")
            .mergeMap(function (statusData) {
            me.orderByStatusData = statusData.items.map(function (v, i, a) {
                return { name: v.name, value: v.value, color: legendColors[v.name] };
            });
            console.log("Got Order Stats");
            return me.orderService.getOrderInfo();
        })
            .subscribe(function (orderData) {
            me.rows = orderData;
            me.isLoading = false;
            console.log("Got Order Data");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('orderStatusCellTpl'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], OrdersComponent.prototype, "statusCellTpl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('orderIdTpl'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], OrdersComponent.prototype, "orderIdTpl", void 0);
    OrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 's-orders-pg',
            template: __webpack_require__("./src/app/pages/orders/orders.component.html"),
            styles: [__webpack_require__("./src/app/pages/orders/orders.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1__services_api_order_service__["a" /* OrderService */]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/pages/orders/orders.scss":
/***/ (function(module, exports) {

module.exports = ".s-info-bar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .s-info-bar button {\n    outline: none; }\n"

/***/ }),

/***/ "./src/app/pages/product_stats/product_stats.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"s-product-dash-pg\">\n\n    <div class=\"chart-box\">\n        <h4> Products By Quantity Ordered</h4>\n        <ngx-charts-bar-vertical\n            [view]=\"[990, 270]\"\n            [barPadding]=\"1\"\n            [scheme]=\"barColorScheme\"\n            [results]=\"productByQuantityData\"\n            [roundDomains]=\"true\"\n            [showGridLines]=\"true\"\n            [xAxis]=\"true\"\n            [yAxis]=\"true\"\n            [legend]=\"false\"\n            [roundEdges]=\"false\"\n        >\n        </ngx-charts-bar-vertical>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/product_stats/product_stats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductStatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_product_service__ = __webpack_require__("./src/app/services/api/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductStatsComponent = /** @class */ (function () {
    function ProductStatsComponent(router, productService) {
        this.router = router;
        this.productService = productService;
        this.productByQuantityData = [];
        this.barColorScheme = { domain: ['#007cbb'] };
    }
    ProductStatsComponent.prototype.ngOnInit = function () {
        var me = this;
        this.getPageData();
    };
    ProductStatsComponent.prototype.getPageData = function () {
        var me = this;
        me.productService.getProductStatsByQuantityOrdered()
            .subscribe(function (countryData) {
            me.productByQuantityData = countryData.items;
            console.log("Received Orders By Country");
        });
    };
    ProductStatsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 's-product_stats-pg',
            template: __webpack_require__("./src/app/pages/product_stats/product_stats.component.html"),
            styles: [__webpack_require__("./src/app/pages/product_stats/product_stats.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1__services_api_product_service__["a" /* ProductService */]])
    ], ProductStatsComponent);
    return ProductStatsComponent;
}());



/***/ }),

/***/ "./src/app/pages/product_stats/product_stats.scss":
/***/ (function(module, exports) {

module.exports = "h4 {\n  margin-top: 16px; }\n\n.s-product-dash-pg {\n  margin: 0px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.s-product-dash-pg .chart-box {\n    margin: 16px;\n    padding: 0 16px;\n    background-color: #fff;\n    border: 1px solid #ccc;\n    border-radius: 2px; }\n"

/***/ }),

/***/ "./src/app/pages/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-16\">\n\n    <ngx-datatable\n        style='width:1000px;'\n        [rows]=\"rows\"\n        [columns]=\"columns\"\n        [headerHeight]=\"45\"\n        [rowHeight]=\"'auto'\"\n        [columnMode]=\"'standard'\"\n        [scrollbarV]=\"false\"\n    >\n    </ngx-datatable>\n</div>\n<ng-template #productDiscontinuedTpl let-row=\"row\" let-value=\"value\">\n   <div class=\"toggle-switch\">\n        <input type=\"checkbox\" [attr.checked]=\"value==1?true:null\" checked [id]=\"row.productCode\"/>\n        <label [for]=\"row.productCode\"></label>\n   </div>\n</ng-template>\n\n\n"

/***/ }),

/***/ "./src/app/pages/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_product_service__ = __webpack_require__("./src/app/services/api/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(router, productService) {
        this.router = router;
        this.productService = productService;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var me = this;
        me.getPolicyData();
        this.columns = [
            { prop: "productCode", name: "Code", width: 60 },
            { prop: "productName", name: "Name", width: 200 },
            { prop: "standardCost", name: "Standard Cost", width: 100 },
            { prop: "listPrice", name: "List Price", width: 100 },
            { prop: "category", name: "Category", width: 100 },
            { prop: "targetLevel", name: "Target Level", width: 100 },
            { prop: "reorderLevel", name: "Reorder Level", width: 100 },
            { prop: "minimumReorderQuantity", name: "Min Order", width: 100 },
            { prop: "discontinued", name: "Discontinued", width: 90, cellTemplate: this.productDiscontinuedTpl }
        ];
    };
    ProductsComponent.prototype.getPolicyData = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (policyData) {
            _this.rows = policyData;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('productDiscontinuedTpl'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], ProductsComponent.prototype, "productDiscontinuedTpl", void 0);
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 's-products-pg',
            template: __webpack_require__("./src/app/pages/products/products.component.html"),
            styles: [__webpack_require__("./src/app/pages/products/products.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1__services_api_product_service__["a" /* ProductService */]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/pages/products/products.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/services/api/api-request.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiRequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_info_service__ = __webpack_require__("./src/app/services/user-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_config__ = __webpack_require__("./src/app/app-config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ApiRequestService = /** @class */ (function () {
    function ApiRequestService(appConfig, http, router, userInfoService) {
        this.appConfig = appConfig;
        this.http = http;
        this.router = router;
        this.userInfoService = userInfoService;
    }
    /**
     * This is a Global place to add all the request headers for every REST calls
     */
    ApiRequestService.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        var token = this.userInfoService.getStoredToken();
        headers = headers.append('Content-Type', 'application/json');
        if (token !== null) {
            headers = headers.append("Authorization", token);
        }
        return headers;
    };
    ApiRequestService.prototype.get = function (url, urlParams) {
        var me = this;
        return this.http.get(this.appConfig.baseApiPath + url, { headers: this.getHeaders(), params: urlParams })
            .catch(function (error) {
            console.log("Some error in catch");
            if (error.status === 401 || error.status === 403) {
                me.router.navigate(['/logout']);
            }
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error || 'Server error');
        });
    };
    ApiRequestService.prototype.post = function (url, body) {
        var me = this;
        return this.http.post(this.appConfig.baseApiPath + url, JSON.stringify(body), { headers: this.getHeaders() })
            .catch(function (error) {
            if (error.status === 401) {
                me.router.navigate(['/logout']);
            }
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error || 'Server error');
        });
    };
    ApiRequestService.prototype.put = function (url, body) {
        var me = this;
        return this.http.put(this.appConfig.baseApiPath + url, JSON.stringify(body), { headers: this.getHeaders() })
            .catch(function (error) {
            if (error.status === 401) {
                me.router.navigate(['/logout']);
            }
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error || 'Server error');
        });
    };
    ApiRequestService.prototype.delete = function (url) {
        var me = this;
        return this.http.delete(this.appConfig.baseApiPath + url, { headers: this.getHeaders() })
            .catch(function (error) {
            if (error.status === 401) {
                me.router.navigate(['/logout']);
            }
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error || 'Server error');
        });
    };
    ApiRequestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__app_config__["a" /* AppConfig */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__user_info_service__["a" /* UserInfoService */]])
    ], ApiRequestService);
    return ApiRequestService;
}());



/***/ }),

/***/ "./src/app/services/api/customer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translate_service__ = __webpack_require__("./src/app/services/api/translate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_request_service__ = __webpack_require__("./src/app/services/api/api-request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerService = /** @class */ (function () {
    function CustomerService(apiRequest, translate) {
        this.apiRequest = apiRequest;
        this.translate = translate;
    }
    CustomerService.prototype.getCustomers = function (page, size) {
        var me = this;
        var params = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["d" /* HttpParams */]();
        params = params.append('page', typeof page === "number" ? page.toString() : "0");
        params = params.append('size', typeof size === "number" ? size.toString() : "1000");
        var customerListSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"](); // Will use this subject to emit data that we want
        this.apiRequest.get('api/customers', params)
            .subscribe(function (jsonResp) {
            var items = jsonResp.items.map(function (v, i, a) {
                var newRow = Object.assign({}, v, {
                    address: v.address1 + ", <br/> " + v.city + ", " + v.state + " " + v.postalCode + " <br/> " + v.country
                });
                return newRow;
            });
            var returnObj = Object.assign({}, jsonResp, {
                items: items
            });
            customerListSubject.next(returnObj); // incidentList is a Subject and emits an event thats being listened to by the components
        });
        return customerListSubject;
    };
    CustomerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__api_request_service__["a" /* ApiRequestService */],
            __WEBPACK_IMPORTED_MODULE_2__translate_service__["a" /* TranslateService */]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/services/api/employee.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_request_service__ = __webpack_require__("./src/app/services/api/api-request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translate_service__ = __webpack_require__("./src/app/services/api/translate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeeService = /** @class */ (function () {
    function EmployeeService(apiRequest, translate) {
        this.apiRequest = apiRequest;
        this.translate = translate;
    }
    EmployeeService.prototype.getEmployees = function (page, size) {
        //Create Request URL params
        var me = this;
        var params = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpParams */]();
        params = params.append('page', typeof page === "number" ? page.toString() : "0");
        params = params.append('size', typeof size === "number" ? size.toString() : "1000");
        return this.apiRequest.get('api/employees', params);
    };
    EmployeeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_request_service__["a" /* ApiRequestService */],
            __WEBPACK_IMPORTED_MODULE_2__translate_service__["a" /* TranslateService */]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/services/api/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_info_service__ = __webpack_require__("./src/app/services/user-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_request_service__ = __webpack_require__("./src/app/services/api/api-request.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginService = /** @class */ (function () {
    function LoginService(router, userInfoService, apiRequest) {
        this.router = router;
        this.userInfoService = userInfoService;
        this.apiRequest = apiRequest;
        this.landingPage = "/home/dashboard/order";
    }
    LoginService.prototype.getToken = function (username, password) {
        var _this = this;
        var me = this;
        var bodyData = {
            "username": username,
            "password": password,
        };
        /*
            Using BehaviorSubject instead of Subject
            In Angular services are initialized before the components, if any component is
            subscribing, it will only receive events which are executed after subscription.
            therefore if you put a syncronize next() in the service, the component wont get it.

            A BehaviourSubject will always provide the values wheather the subscription happened after or before event

        */
        var loginDataSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]([]); // Will use this BehaviorSubject to emit data that we want after ajax login attempt
        var loginInfoReturn; // Object that we want to send back to Login Page
        this.apiRequest.post('session', bodyData)
            .subscribe(function (jsonResp) {
            if (jsonResp !== undefined && jsonResp !== null && jsonResp.operationStatus === "SUCCESS") {
                //Create a success object that we want to send back to login page
                loginInfoReturn = {
                    "success": true,
                    "message": jsonResp.operationMessage,
                    "landingPage": _this.landingPage,
                    "user": {
                        "userId": jsonResp.item.userId,
                        "email": jsonResp.item.emailAddress,
                        "displayName": jsonResp.item.firstName + " " + jsonResp.item.lastName,
                        "token": jsonResp.item.token,
                    }
                };
                // store username and jwt token in session storage to keep user logged in between page refreshes
                _this.userInfoService.storeUserInfo(JSON.stringify(loginInfoReturn.user));
            }
            else {
                //Create a faliure object that we want to send back to login page
                loginInfoReturn = {
                    "success": false,
                    "message": jsonResp.msgDesc,
                    "landingPage": "/login"
                };
            }
            loginDataSubject.next(loginInfoReturn);
        }, function (err) {
            loginInfoReturn = {
                "success": false,
                "message": err.url + " >>> " + err.statusText + "[" + err.status + "]",
                "landingPage": "/login"
            };
        });
        return loginDataSubject;
    };
    LoginService.prototype.logout = function (navigatetoLogout) {
        if (navigatetoLogout === void 0) { navigatetoLogout = true; }
        // clear token remove user from local storage to log user out
        this.userInfoService.removeUserInfo();
        if (navigatetoLogout) {
            this.router.navigate(["logout"]);
        }
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__user_info_service__["a" /* UserInfoService */],
            __WEBPACK_IMPORTED_MODULE_6__api_request_service__["a" /* ApiRequestService */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/api/order.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_request_service__ = __webpack_require__("./src/app/services/api/api-request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__translate_service__ = __webpack_require__("./src/app/services/api/translate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderService = /** @class */ (function () {
    function OrderService(apiRequest, translate) {
        this.apiRequest = apiRequest;
        this.translate = translate;
    }
    /**
     * Gets List of orders
     */
    OrderService.prototype.getOrderInfo = function (page, size) {
        //Create Request URL params
        var me = this;
        var params = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["d" /* HttpParams */]();
        params = params.append('page', typeof page === "number" ? page.toString() : "0");
        params = params.append('size', typeof size === "number" ? size.toString() : "1000");
        var orderListSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"](); // Will use this subject to emit data that we want
        this.apiRequest.get('api/orders', params)
            .subscribe(function (jsonResp) {
            var returnObj = jsonResp.items.map(function (v, i, a) {
                var newRow = Object.assign({}, v, {
                    orderDate: me.translate.getDateString(v.orderDate),
                    paidDate: me.translate.getDateString(v.paidDate),
                    shippedDate: me.translate.getDateString(v.shippedDate)
                });
                return newRow;
            });
            orderListSubject.next(returnObj); // incidentList is a Subject and emits an event thats being listened to by the components
        });
        return orderListSubject;
    };
    /**
     * Gets Orders and Order Lines (Products in each order)
     */
    OrderService.prototype.getOrderDetails = function (orderId) {
        //Create Request URL params
        var me = this;
        var params = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["d" /* HttpParams */]();
        if (orderId) {
            params = params.append('orderid', orderId.toString());
        }
        var orderDetailSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"](); // Will use this subject to emit data that we want
        this.apiRequest.get('api/order-details', params)
            .subscribe(function (jsonResp) {
            var returnObj = jsonResp.items.map(function (v, i, a) {
                var newRow = Object.assign({}, v, {
                    orderDate: me.translate.getDateString(v.orderDate),
                    paidDate: me.translate.getDateString(v.paidDate),
                    shippedDate: me.translate.getDateString(v.shippedDate)
                });
                return newRow;
            });
            orderDetailSubject.next(returnObj); // incidentList is a Subject and emits an event thats being listened to by the components
        });
        return orderDetailSubject;
    };
    OrderService.prototype.getOrderStats = function (field) {
        return this.apiRequest.get('api/order-stats/' + field);
    };
    OrderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_request_service__["a" /* ApiRequestService */],
            __WEBPACK_IMPORTED_MODULE_3__translate_service__["a" /* TranslateService */]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/services/api/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translate_service__ = __webpack_require__("./src/app/services/api/translate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_request_service__ = __webpack_require__("./src/app/services/api/api-request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductService = /** @class */ (function () {
    function ProductService(apiRequest, translate) {
        this.apiRequest = apiRequest;
        this.translate = translate;
    }
    ProductService.prototype.getProducts = function (page, size) {
        //Create Request URL params
        var me = this;
        var params = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["d" /* HttpParams */]();
        params = params.append('page', typeof page === "number" ? page.toString() : "0");
        params = params.append('size', typeof size === "number" ? size.toString() : "1000");
        var productList = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"](); // Will use this subject to emit data that we want
        this.apiRequest.get('api/products', params)
            .subscribe(function (jsonResp) {
            var returnObj = jsonResp.items.map(function (v, i, a) {
                var newRow = Object.assign({}, v, {
                    listPrice: me.translate.getCurrencyString(v.listPrice),
                    standardCost: me.translate.getCurrencyString(v.standardCost)
                });
                return newRow;
            });
            productList.next(returnObj); // incidentList is a Subject and emits an event thats being listened to by the components
        });
        return productList;
    };
    ProductService.prototype.getProductStatsByQuantityOrdered = function () {
        return this.apiRequest.get('api/product-stats-by-quantity');
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__api_request_service__["a" /* ApiRequestService */],
            __WEBPACK_IMPORTED_MODULE_2__translate_service__["a" /* TranslateService */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/api/translate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config__ = __webpack_require__("./src/app/app-config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TranslateService = /** @class */ (function () {
    function TranslateService(appConfig) {
        this.appConfig = appConfig;
        // Code to get Locale Info from Session Storage
    }
    TranslateService.prototype.getDateString = function (datenum) {
        return new Date(datenum).toLocaleDateString(this.appConfig.locale, this.appConfig.dateFormat);
    };
    TranslateService.prototype.getCurrencyString = function (number) {
        return number.toLocaleString(this.appConfig.locale, this.appConfig.currencyFormat);
    };
    TranslateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* AppConfig */]])
    ], TranslateService);
    return TranslateService;
}());



/***/ }),

/***/ "./src/app/services/auth_guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_info_service__ = __webpack_require__("./src/app/services/user-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_login_service__ = __webpack_require__("./src/app/services/api/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, loginService, userInfoService) {
        this.router = router;
        this.loginService = loginService;
        this.userInfoService = userInfoService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
        //return true;
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (this.userInfoService.isLoggedIn()) {
            return true;
        }
        console.log("User is not logged - This routing guard prvents redirection to any routes that needs logging.");
        //Store the original url in login service and then redirect to login page
        this.loginService.landingPage = url;
        this.router.navigate(['login',]);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__api_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_1__user_info_service__["a" /* UserInfoService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/user-info.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserInfoService = /** @class */ (function () {
    function UserInfoService() {
        this.currentUserKey = "currentUser";
        this.storage = sessionStorage; // <--- you may switch between sessionStorage or LocalStrage (only one place to change)
    }
    //Store userinfo from session storage
    UserInfoService.prototype.storeUserInfo = function (userInfoString) {
        this.storage.setItem(this.currentUserKey, userInfoString);
    };
    //Remove userinfo from session storage
    UserInfoService.prototype.removeUserInfo = function () {
        this.storage.removeItem(this.currentUserKey);
    };
    //Get userinfo from session storage
    UserInfoService.prototype.getUserInfo = function () {
        try {
            var userInfoString = this.storage.getItem(this.currentUserKey);
            if (userInfoString) {
                var userObj = JSON.parse(this.storage.getItem(this.currentUserKey));
                return userObj;
            }
            else {
                return null;
            }
        }
        catch (e) {
            return null;
        }
    };
    UserInfoService.prototype.isLoggedIn = function () {
        return this.storage.getItem(this.currentUserKey) ? true : false;
    };
    //Get User's Display name from session storage
    UserInfoService.prototype.getUserName = function () {
        var userObj = this.getUserInfo();
        if (userObj !== null) {
            return userObj.displayName;
        }
        return "no-user";
    };
    UserInfoService.prototype.getStoredToken = function () {
        var userObj = this.getUserInfo();
        if (userObj !== null) {
            return userObj.token;
        }
        return null;
    };
    UserInfoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserInfoService);
    return UserInfoService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map