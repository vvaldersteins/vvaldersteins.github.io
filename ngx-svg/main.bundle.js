webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- App Header -->\n<app-header></app-header>\n\n<!-- Router content -->\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_svg__ = __webpack_require__("../../../../ngx-svg/fesm5/ngx-svg.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_rect_rect_component__ = __webpack_require__("../../../../../src/app/pages/rect/rect.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_circle_circle_component__ = __webpack_require__("../../../../../src/app/pages/circle/circle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_line_line_component__ = __webpack_require__("../../../../../src/app/pages/line/line.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_ellipse_ellipse_component__ = __webpack_require__("../../../../../src/app/pages/ellipse/ellipse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_polyline_polyline_component__ = __webpack_require__("../../../../../src/app/pages/polyline/polyline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_polygon_polygon_component__ = __webpack_require__("../../../../../src/app/pages/polygon/polygon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_image_image_component__ = __webpack_require__("../../../../../src/app/pages/image/image.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Import Angular libraries.
 */




/**
 * Import third-party libraries.
 */

/**
 * Import custom components.
 */


/**
 * Import custom pages.
 */








/**
 * Define page routes.
 */
var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_7__pages_home_home_component__["a" /* HomeComponent */] },
    { path: 'rect', component: __WEBPACK_IMPORTED_MODULE_8__pages_rect_rect_component__["a" /* RectComponent */] },
    { path: 'circle', component: __WEBPACK_IMPORTED_MODULE_9__pages_circle_circle_component__["a" /* CircleComponent */] },
    { path: 'line', component: __WEBPACK_IMPORTED_MODULE_10__pages_line_line_component__["a" /* LineComponent */] },
    { path: 'ellipse', component: __WEBPACK_IMPORTED_MODULE_11__pages_ellipse_ellipse_component__["a" /* EllipseComponent */] },
    { path: 'polyline', component: __WEBPACK_IMPORTED_MODULE_12__pages_polyline_polyline_component__["a" /* PolylineComponent */] },
    { path: 'polygon', component: __WEBPACK_IMPORTED_MODULE_13__pages_polygon_polygon_component__["a" /* PolygonComponent */] },
    { path: 'image', component: __WEBPACK_IMPORTED_MODULE_14__pages_image_image_component__["a" /* ImageComponent */] },
    { path: '', pathMatch: 'full', redirectTo: '/home' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_rect_rect_component__["a" /* RectComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pages_circle_circle_component__["a" /* CircleComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_line_line_component__["a" /* LineComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_ellipse_ellipse_component__["a" /* EllipseComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_polyline_polyline_component__["a" /* PolylineComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_polygon_polygon_component__["a" /* PolygonComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_image_image_component__["a" /* ImageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_4_ngx_svg__["a" /* NgxSvgModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" routerLink=\"/\">\n    ngx-svg <small class=\"extra-small\"><i>v0.3.0</i></small>\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main-navigation\" aria-controls=\"main-navigation\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"main-navigation\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/home\">Home</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/rect\">Rect</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/circle\">Circle</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/ellipse\">Ellipse</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/line\">Line</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/polyline\">Polyline</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/polygon\">Polygon</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/image\">Image</a>\n      </li>\n    </ul>\n    <a class=\"btn btn-dark\" href=\"https://github.com/vvaldersteins/ngx-svg\" target=\"_blank\"><i class=\"fa fa-github\"></i> GitHub</a>\n    <a class=\"btn btn-dark\" href=\"https://www.npmjs.com/package/ngx-svg\" target=\"_blank\"><i class=\"fa fa-npm\"></i> NPM</a>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
 * Import Angular libraries.
 */

var HeaderComponent = /** @class */ (function () {
    /**
     * Does all required pre-requisites and creates header component instance.
     */
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/header/header.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/circle/circle.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header of the circle -->\n<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4 text-center\">Circle</h1>\n  </div>\n</div>\n\n<div class=\"container-fluid\">\n  <div class=\"row no-gutters\">\n    <div class=\"col-12\">\n      <!-- Svg Container with circles -->\n      <svg-container containerId=\"circle\" [height]=\"getHeight()\">\n        <svg-circle [radius]=\"circle.radius\" [color]=\"circle.color\"\n          [x]=\"circle.x\" [y]=\"circle.y\" *ngFor=\"let circle of circles\"></svg-circle>\n      </svg-container>\n    </div>\n\n    <div class=\"col-12\">\n      <!-- Svg Circle configuration -->\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>ID</th>\n              <th>Radius</th>\n              <th>Color</th>\n              <th>X position</th>\n              <th>Y position</th>\n              <th>Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            <ng-container *ngIf=\"circles.length > 0\">\n              <tr *ngFor=\"let circle of circles; let index = index;\">\n                <td class=\"align-middle\">\n                  <b>{{ index + 1 }}</b>\n                </td>\n                <td>\n                  <input type=\"number\" [(ngModel)]=\"circle.radius\" class=\"form-control\" />\n                </td>\n                <td>\n                  <input type=\"string\" [(ngModel)]=\"circle.color\" class=\"form-control\" />\n                </td>\n                <td>\n                  <input type=\"number\" [(ngModel)]=\"circle.x\" class=\"form-control\" />\n                </td>\n                <td>\n                  <input type=\"number\" [(ngModel)]=\"circle.y\" class=\"form-control\" />\n                </td>\n                <td>\n                  <button class=\"btn btn-danger\" (click)=\"removeRow(index)\">Remove</button>\n                </td>\n              </tr>\n            </ng-container>\n            <tr *ngIf=\"circles.length === 0\">\n              <td colspan=\"6\" class=\"text-center\">\n                There are no circles\n              </td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td colspan=\"6\">\n                <button class=\"btn btn-success float-right\" (click)=\"addNew()\">Add New circle</button>\n              </td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/circle/circle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CircleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
 * Import Angular libraries.
 */

var CircleComponent = /** @class */ (function () {
    /**
     * Creates circle component object instance.
     */
    function CircleComponent(cdRef) {
        this.cdRef = cdRef;
        /**
         * Globally used variables within the component.
         */
        this.circles = [{
                radius: 45,
                color: 'rgba(125, 125, 32, 0.5)',
                x: 20,
                y: 30
            }, {
                radius: 30,
                color: 'rgba(12, 32, 222, 0.7)',
                x: 70,
                y: 30
            }];
    }
    /**
     * Adds new circle element.
     */
    CircleComponent.prototype.addNew = function () {
        this.circles.push({
            radius: 0,
            color: '#000',
            x: 0,
            y: 0
        });
    };
    /**
     * Retrieves the maximum height of all elements.
     * @returns Height of the container.
     */
    CircleComponent.prototype.getHeight = function () {
        return Math.max.apply(Math, this.circles.map(function (el) { return el.radius * 2 + el.y; })) + 20;
    };
    /**
     * Removes specific circle element.
     * @param index - Index of circle, which needs to be removed.
     */
    CircleComponent.prototype.removeRow = function (index) {
        this.circles.splice(index, 1);
    };
    CircleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/pages/circle/circle.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], CircleComponent);
    return CircleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/ellipse/ellipse.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header of the ellipse -->\n<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4 text-center\">Ellipse</h1>\n  </div>\n</div>\n\n<div class=\"container-fluid\">\n  <div class=\"row no-gutters\">\n    <div class=\"col-12\">\n      <!-- Svg Container with ellipses -->\n      <svg-container containerId=\"ellipse\" [height]=\"getHeight()\">\n        <svg-ellipse [height]=\"ellipse.height\" [width]=\"ellipse.width\" [color]=\"ellipse.color\"\n          [x]=\"ellipse.x\" [y]=\"ellipse.y\" *ngFor=\"let ellipse of ellipses\"></svg-ellipse>\n      </svg-container>\n    </div>\n\n    <div class=\"col-12\">\n      <!-- Svg Ellipse configuration -->\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>ID</th>\n              <th>Height</th>\n              <th>Width</th>\n              <th>Color</th>\n              <th>X position</th>\n              <th>Y position</th>\n              <th>Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            <ng-container *ngIf=\"ellipses.length > 0\">\n              <tr *ngFor=\"let ellipse of ellipses; let index = index;\">\n                <td class=\"align-middle\">\n                  <b>{{ index + 1 }}</b>\n                </td>\n                <td>\n                  <input type=\"number\" [(ngModel)]=\"ellipse.height\" class=\"form-control\" />\n                </td>\n                <td>\n                  <input type=\"number\" [(ngModel)]=\"ellipse.width\" class=\"form-control\" />\n                </td>\n                <td>\n                  <input type=\"string\" [(ngModel)]=\"ellipse.color\" class=\"form-control\" />\n                </td>\n                <td>\n                  <input type=\"number\" [(ngModel)]=\"ellipse.x\" class=\"form-control\" />\n                </td>\n                <td>\n                  <input type=\"number\" [(ngModel)]=\"ellipse.y\" class=\"form-control\" />\n                </td>\n                <td>\n                  <button class=\"btn btn-danger\" (click)=\"removeRow(index)\">Remove</button>\n                </td>\n              </tr>\n            </ng-container>\n            <tr *ngIf=\"ellipses.length === 0\">\n              <td colspan=\"7\" class=\"text-center\">\n                There are no ellipses\n              </td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td colspan=\"7\">\n                <button class=\"btn btn-success float-right\" (click)=\"addNew()\">Add New ellipse</button>\n              </td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/ellipse/ellipse.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EllipseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
 * Import Angular libraries.
 */

var EllipseComponent = /** @class */ (function () {
    /**
     * Creates ellipse component object instance.
     */
    function EllipseComponent() {
        /**
         * Globally used variables within the component.
         */
        this.ellipses = [{
                height: 50,
                width: 100,
                color: 'rgba(125, 125, 32, 0.5)',
                x: 20,
                y: 30
            }, {
                height: 70,
                width: 50,
                color: 'rgba(12, 32, 222, 0.7)',
                x: 100,
                y: 20
            }];
    }
    /**
     * Adds new ellipse element.
     */
    EllipseComponent.prototype.addNew = function () {
        this.ellipses.push({
            height: 0,
            width: 0,
            color: '#000',
            x: 0,
            y: 0
        });
    };
    /**
     * Retrieves the maximum height of all elements.
     * @returns Height of the container.
     */
    EllipseComponent.prototype.getHeight = function () {
        return Math.max.apply(Math, this.ellipses.map(function (el) { return el.height * 2 + el.y; })) + 20;
    };
    /**
     * Removes specific ellipses element.
     * @param index - Index of ellipse, which needs to be removed.
     */
    EllipseComponent.prototype.removeRow = function (index) {
        this.ellipses.splice(index, 1);
    };
    EllipseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/pages/ellipse/ellipse.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], EllipseComponent);
    return EllipseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header of the home -->\n<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4 text-center\">ngx-svg</h1>\n    <p class=\"lead text-center\">Create powerful SVG objects with <a href=\"https://angular.io\" target=\"_blank\">Angular</a>. Based on <a href=\"http://svgjs.com\" target=\"_blank\">svg.js</a> library.</p>\n  </div>\n</div>\n\n<!-- Content of the home -->\n<div class=\"row no-gutters\">\n  <div class=\"col-12 col-sm-4 col-md-2\">\n    <div class=\"nav flex-column\" role=\"tablist\" aria-orientation=\"vertical\">\n      <a class=\"nav-link active\" data-toggle=\"pill\" href=\"#getting-started\" role=\"tab\" aria-controls=\"getting-started\" aria-selected=\"true\">Getting Started</a>\n      <a class=\"nav-link\" data-toggle=\"pill\" href=\"#installation\" role=\"tab\" aria-controls=\"installation\" aria-selected=\"false\">Installation</a>\n      <a class=\"nav-link\" data-toggle=\"pill\" href=\"#container\" role=\"tab\" aria-controls=\"container\" aria-selected=\"false\">Container</a>\n      <a class=\"nav-link\" data-toggle=\"pill\" href=\"#line\" role=\"tab\" aria-controls=\"line\" aria-selected=\"false\">Line</a>\n      <a class=\"nav-link\" data-toggle=\"pill\" href=\"#rectangular\" role=\"tab\" aria-controls=\"rectangular\" aria-selected=\"false\">Rectangular</a>\n      <a class=\"nav-link\" data-toggle=\"pill\" href=\"#circle\" role=\"tab\" aria-controls=\"circle\" aria-selected=\"false\">Circle</a>\n      <a class=\"nav-link\" data-toggle=\"pill\" href=\"#ellipse\" role=\"tab\" aria-controls=\"ellipse\" aria-selected=\"false\">Ellipse</a>\n      <a class=\"nav-link\" data-toggle=\"pill\" href=\"#polyline\" role=\"tab\" aria-controls=\"polyline\" aria-selected=\"false\">Polyline</a>\n      <a class=\"nav-link\" data-toggle=\"pill\" href=\"#polygon\" role=\"tab\" aria-controls=\"polygon\" aria-selected=\"false\">Polygon</a>\n      <a class=\"nav-link\" data-toggle=\"pill\" href=\"#image\" role=\"tab\" aria-controls=\"image\" aria-selected=\"false\">Image</a>\n      <a class=\"nav-link\" data-toggle=\"pill\" href=\"#troubleshooting\" role=\"tab\" aria-controls=\"troubleshooting\" aria-selected=\"false\">Troubleshooting</a>\n      <a class=\"nav-link\" data-toggle=\"pill\" href=\"#license\" role=\"tab\" aria-controls=\"license\" aria-selected=\"false\">License</a>\n    </div>\n  </div>\n  <div class=\"col-12 col-sm-8 col-md-10\">\n    <div class=\"tab-content\">\n      <!-- Getting started tab -->\n      <div class=\"tab-pane fade show active\" id=\"getting-started\" role=\"tabpanel\">\n        <h2>Getting Started</h2>\n        <p>ngx-svg contains all core svg.js components, so you won't need to include any other external dependencies.</p>\n      </div>\n\n      <!-- Installation tab -->\n      <div class=\"tab-pane fade\" id=\"installation\" role=\"tabpanel\">\n        <h2>Installation</h2>\n        <p>\n          To install ngx-svg, you have to run the following command from the terminal (you have to be within the project folder) -\n          <code>npm install ngx-svg --save</code>\n        </p>\n        <p>This will install the latest version of ngx-svg and add it to your project dependency list.</p>\n        <p>\n          After the installation you have to include the component in your module by importing it using the following command -\n          <code>import {{ '{' }} NgxSvgModule {{ '}' }} from 'ngx-svg';</code>\n        </p>\n        <p>Finally you have to add the <code>NgxSvgModule</code> to the imports of your module: </p>\n        <code>\n          @NgModule({{ '{' }}<br />\n            &emsp;declarations: [<br />\n              &emsp;&emsp;...<br />\n            &emsp;],<br />\n            &emsp;imports: [<br />\n              &emsp;&emsp;...<br />\n              &emsp;&emsp;NgxSvgModule<br />\n            &emsp;],<br />\n            &emsp;providers: [..],<br />\n            &emsp;bootstrap: [...]<br />\n          {{ '}' }})<br />\n          export class AppModule {{ '{' }} {{ '}' }}\n        </code>\n        <p></p>\n        <p>Afterwards you should be able to use the library in your application.</p>\n      </div>\n\n      <!-- Container tab -->\n      <div class=\"tab-pane fade\" id=\"container\" role=\"tabpanel\">\n        <h2>Container</h2>\n        <p>\n          To start using the ngx-svg you must declare a container object in one of your views, by using the following element:\n        </p>\n        <code>\n          &lt;svg-container containerId=\"svg-element\"&gt;<br />\n            &emsp;...<br />\n          &lt;/svg-container&gt;\n        </code>\n        <p></p>\n        <p>In the below table you can see explanation of the input and output parameters.</p>\n        <table class=\"table table-responsive\">\n          <thead>\n            <tr>\n              <th>ID</th>\n              <th>Name</th>\n              <th>Type</th>\n              <th>Explanation</th>\n              <th>Mandatory</th>\n              <th>Default value</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><b>1</b></td>\n              <td>containerId</td>\n              <td>Input parameter <code>(string)</code></td>\n              <td>Unique ID for the svg container. Will be used for drawing the svg elements.</td>\n              <td><b>YES</b></td>\n              <td><code>undefined</code></td>\n            </tr>\n            <tr>\n              <td><b>2</b></td>\n              <td>height</td>\n              <td>Input parameter <code>(number)</code></td>\n              <td>Height of the container in pixels.</td>\n              <td><b>NO</b></td>\n              <td><code>200</code></td>\n            </tr>\n            <tr>\n              <td><b>3</b></td>\n              <td>hoverable</td>\n              <td>Input parameter <code>(boolean)</code></td>\n              <td>Indicator if user should be able to see dot on hover, to capture coordinates.</td>\n              <td><b>NO</b></td>\n              <td><code>false</code></td>\n            </tr>\n            <tr>\n              <td><b>4</b></td>\n              <td>showGrid</td>\n              <td>Input parameter <code>(boolean)</code></td>\n              <td>Indicator if grid image should be shown in the background of svg container.</td>\n              <td><b>NO</b></td>\n              <td><code>false</code></td>\n            </tr>\n            <tr>\n              <td><b>5</b></td>\n              <td>pointSize</td>\n              <td>Input parameter <code>(number)</code></td>\n              <td>Numeric value in pixels, to indicate how large should the point be.</td>\n              <td><b>NO</b></td>\n              <td><code>10</code></td>\n            </tr>\n            <tr>\n              <td><b>6</b></td>\n              <td>clickEvent</td>\n              <td>Output parameter <code>(MouseEvent)</code></td>\n              <td>Is fired when click event happens on the dot element. Works only if <code>hoverable</code> input parameter is enabled.</td>\n              <td><b>NO</b></td>\n              <td><code>N/A</code></td>\n            </tr>\n          </tbody>\n        </table>\n        <p>Within one container you can enter as many elements as you want.</p>\n      </div>\n\n      <!-- Line tab -->\n      <div class=\"tab-pane fade\" id=\"line\" role=\"tabpanel\">\n        <h2>Line</h2>\n        <p>\n          To add a line element to the svg-container, you must add the following element inside the <code>svg-container</code> component tag -\n        </p>\n        <code>\n          &lt;svg-line&gt; &lt;/svg-line&gt;\n        </code>\n        <p></p>\n        <p>In the below table you can see explanation of the input and output parameters for the line.</p>\n        <table class=\"table table-responsive\">\n          <thead>\n            <tr>\n              <th>ID</th>\n              <th>Name</th>\n              <th>Type</th>\n              <th>Explanation</th>\n              <th>Mandatory</th>\n              <th>Default value</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><b>1</b></td>\n              <td>borderSize</td>\n              <td>Input parameter <code>(number)</code></td>\n              <td>Numeric value with the size of the border.</td>\n              <td><b>YES</b></td>\n              <td><code>undefined</code></td>\n            </tr>\n            <tr>\n              <td><b>2</b></td>\n              <td>borderColor</td>\n              <td>Input parameter <code>(string)</code></td>\n              <td>Color of the border (name, HEX, rgb).</td>\n              <td><b>NO</b></td>\n              <td><code>'#000'</code></td>\n            </tr>\n            <tr>\n              <td><b>3</b></td>\n              <td>x0</td>\n              <td>Input parameter <code>(number)</code></td>\n              <td>Starting point on the x axis.</td>\n              <td><b>NO</b></td>\n              <td><code>0</code></td>\n            </tr>\n            <tr>\n              <td><b>4</b></td>\n              <td>y0</td>\n              <td>Input parameter <code>(number)</code></td>\n              <td>Starting point on the y axis.</td>\n              <td><b>NO</b></td>\n              <td><code>0</code></td>\n            </tr>\n            <tr>\n              <td><b>5</b></td>\n              <td>x1</td>\n              <td>Input parameter <code>(number)</code></td>\n              <td>Ending point on the x axis.</td>\n              <td><b>NO</b></td>\n              <td><code>1</code></td>\n            </tr>\n            <tr>\n              <td><b>6</b></td>\n              <td>y1</td>\n              <td>Input parameter <code>(number)</code></td>\n              <td>Ending point on the y axis.</td>\n              <td><b>NO</b></td>\n              <td><code>1</code></td>\n            </tr>\n            <tr>\n              <td><b>7</b></td>\n              <td>clickEvent</td>\n              <td>Output parameter <code>(MouseEvent)</code></td>\n              <td>Is fired when click event happens on the element.</td>\n              <td><b>NO</b></td>\n              <td><code>N/A</code></td>\n            </tr>\n            <tr>\n              <td><b>8</b></td>\n              <td>doubleClickEvent</td>\n              <td>Output parameter <code>(MouseEvent)</code></td>\n              <td>Is fired when double click event happens on the element.</td>\n              <td><b>NO</b></td>\n              <td><code>N/A</code></td>\n            </tr>\n            <tr>\n              <td><b>9</b></td>\n              <td>mouseOverEvent</td>\n              <td>Output parameter <code>(MouseEvent)</code></td>\n              <td>Is fired when mouse is moved over the element.</td>\n              <td><b>NO</b></td>\n              <td><code>N/A</code></td>\n            </tr>\n            <tr>\n              <td><b>10</b></td>\n              <td>MouseOutEvent</td>\n              <td>Output parameter <code>(MouseEvent)</code></td>\n              <td>Is fired when mouse is moved out of the element.</td>\n              <td><b>NO</b></td>\n              <td><code>N/A</code></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <!-- Rectangular tab -->\n      <div class=\"tab-pane fade\" id=\"rectangular\" role=\"tabpanel\">\n        <h2>Rectangular</h2>\n        <p>\n          To add a rectangular element to the svg-container, you must add the following element inside the <code>svg-container</code> component tag -\n        </p>\n        <code>\n          &lt;svg-rect&gt; &lt;/svg-rect&gt;\n        </code>\n        <p></p>\n        <p>In the below table you can see explanation of the input and output parameters for the rectangular.</p>\n        <table class=\"table table-responsive\">\n          <thead>\n            <tr>\n              <th>ID</th>\n              <th>Name</th>\n              <th>Type</th>\n              <th>Explanation</th>\n              <th>Mandatory</th>\n              <th>Default value</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><b>1</b></td>\n              <td>height</td>\n              <td>Input parameter <code>(number)</code></td>\n              <td>Height of the rectangular.</td>\n              <td><b>YES</b></td>\n              <td><code>undefined</code></td>\n            </tr>\n            <tr>\n              <td><b>2</b></td>\n              <td>width</td>\n              <td>Input parameter <code>(number)</code></td>\n              <td>Width of the rectangular.</td>\n              <td><b>YES</b></td>\n              <td><code>undefined</code></td>\n            </tr>\n            <tr>\n              <td><b>3</b></td>\n              <td>color</td>\n              <td>Input parameter <code>(string)</code></td>\n              <td>Background color of the rectangular (name, HEX, rgb).</td>\n              <td><b>NO</b></td>\n              <td><code>'#000'</code></td>\n            </tr>\n            <tr>\n              <td><b>4</b></td>\n              <td>x</td>\n              <td>Input parameter <code>(number)</code></td>\n              <td>Starting point on the x axis.</td>\n              <td><b>NO</b></td>\n              <td><code>0</code></td>\n            </tr>\n            <tr>\n              <td><b>5</b></td>\n              <td>y</td>\n              <td>Input parameter <code>(number)</code></td>\n              <td>Starting point on the y axis.</td>\n              <td><b>NO</b></td>\n              <td><code>0</code></td>\n            </tr>\n            <tr>\n              <td><b>6</b></td>\n              <td>clickEvent</td>\n              <td>Output parameter <code>(MouseEvent)</code></td>\n              <td>Is fired when click event happens on the element.</td>\n              <td><b>NO</b></td>\n              <td><code>N/A</code></td>\n            </tr>\n            <tr>\n              <td><b>7</b></td>\n              <td>doubleClickEvent</td>\n              <td>Output parameter <code>(MouseEvent)</code></td>\n              <td>Is fired when double click event happens on the element.</td>\n              <td><b>NO</b></td>\n              <td><code>N/A</code></td>\n            </tr>\n            <tr>\n              <td><b>8</b></td>\n              <td>mouseOverEvent</td>\n              <td>Output parameter <code>(MouseEvent)</code></td>\n              <td>Is fired when mouse is moved over the element.</td>\n              <td><b>NO</b></td>\n              <td><code>N/A</code></td>\n            </tr>\n            <tr>\n              <td><b>9</b></td>\n              <td>MouseOutEvent</td>\n              <td>Output parameter <code>(MouseEvent)</code></td>\n              <td>Is fired when mouse is moved out of the element.</td>\n              <td><b>NO</b></td>\n              <td><code>N/A</code></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <!-- Circle tab -->\n      <div class=\"tab-pane fade\" id=\"circle\" role=\"tabpanel\">\n        <h2>Circle</h2>\n        <p>\n          To add a circle element to the svg-container, you must add the following element inside the <code>svg-container</code> component tag -\n        </p>\n        <code>\n          &lt;svg-circle&gt; &lt;/svg-circle&gt;\n        </code>\n        <p></p>\n        <p>In the below table you can see explanation of the input and output parameters for the circle.</p>\n        <table class=\"table table-responsive\">\n          <thead>\n            <tr>\n              <th>ID</th>\n              <th>Name</th>\n              <th>Type</th>\n              <th>Explanation</th>\n              <th>Mandatory</th>\n              <th>Default value</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><b>1</b></td>\n              <td>radius</td>\n              <td>Input parameter <code>(number)</code></td>\n              <td>Radius of the circle.</td>\n              <td><b>YES</b></td>\n              <td><code>undefined</code></td>\n            </tr>\n            <tr>\n              <td><b>2</b></td>\n              <td>color</td>\n              <td>Input parameter <code>(string)</code></td>\n              <td>Background color of the circle (name, HEX, rgb).</td>\n              <td><b>NO</b></td>\n              <td><code>'#000'</code></td>\n            </tr>\n            <tr>\n              <td><b>3</b></td>\n              <td>x</td>\n              <td>Input parameter <code>(number)</code></td>\n              <td>Starting point on the x axis.</td>\n              <td><b>NO</b></td>\n              <td><code>0</code></td>\n            </tr>\n            <tr>\n              <td><b>4</b></td>\n              <td>y</td>\n              <td>Input parameter <code>(number)</code></td>\n              <td>Starting point on the y axis.</td>\n              <td><b>NO</b></td>\n              <td><code>0</code></td>\n            </tr>\n            <tr>\n              <td><b>5</b></td>\n              <td>clickEvent</td>\n              <td>Output parameter <code>(MouseEvent)</code></td>\n              <td>Is fired when click event happens on the element.</td>\n              <td><b>NO</b></td>\n              <td><code>N/A</code></td>\n            </tr>\n            <tr>\n              <td><b>6</b></td>\n              <td>doubleClickEvent</td>\n              <td>Output parameter <code>(MouseEvent)</code></td>\n              <td>Is fired when double click event happens on the element.</td>\n              <td><b>NO</b></td>\n              <td><code>N/A</code></td>\n            </tr>\n            <tr>\n              <td><b>7</b></td>\n              <td>mouseOverEvent</td>\n              <td>Output parameter <code>(MouseEvent)</code></td>\n              <td>Is fired when mouse is moved over the element.</td>\n              <td><b>NO</b></td>\n              <td><code>N/A</code></td>\n            </tr>\n            <tr>\n              <td><b>8</b></td>\n              <td>MouseOutEvent</td>\n              <td>Output parameter <code>(MouseEvent)</code></td>\n              <td>Is fired when mouse is moved out of the element.</td>\n              <td><b>NO</b></td>\n              <td><code>N/A</code></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <!-- Ellipse tab -->\n      <div class=\"tab-pane fade\" id=\"ellipse\" role=\"tabpanel\">\n        <h2>Ellipse</h2>\n        <p>\n          To add a ellipse element to the svg-container, you must add the following element inside the <code>svg-container</code> component tag -\n        </p>\n        <code>\n          &lt;svg-ellipse&gt; &lt;/svg-ellipse&gt;\n        </code>\n        <p></p>\n        <p>In the below table you can see explanation of the input and output parameters for the ellipse.</p>\n        <table class=\"table table-responsive\">\n          <thead>\n            <tr>\n              <th>ID</th>\n              <th>Name</th>\n              <th>Type</th>\n              <th>Explanation</th>\n              <th>Mandatory</th>\n              <th>Default value</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><b>1</b></td>\n              <td>height</td>\n              <td>Input parameter <code>(number)</code></td>\n              <td>Height of the ellipse.</td>\n              <td><b>YES</b></td>\n              <td><code>undefined</code></td>\n            </tr>\n            <tr>\n              <td><b>2</b></td>\n              <td>width</td>\n              <td>Input parameter <code>(number)</code></td>\n              <td>Width of the ellipse.</td>\n              <td><b>YES</b></td>\n              <td><code>undefined</code></td>\n            </tr>\n            <tr>\n              <td><b>3</b></td>\n              <td>color</td>\n              <td>Input parameter <code>(string)</code></td>\n              <td>Background color of the ellipse (name, HEX, rgb).</td>\n              <td><b>NO</b></td>\n              <td><code>'#000'</code></td>\n            </tr>\n            <tr>\n              <td><b>4</b></td>\n              <td>x</td>\n              <td>Input parameter <code>(number)</code></td>\n              <td>Starting point on the x axis.</td>\n              <td><b>NO</b></td>\n              <td><code>0</code></td>\n            </tr>\n            <tr>\n              <td><b>5</b></td>\n              <td>y</td>\n              <td>Input parameter <code>(number)</code></td>\n              <td>Starting point on the y axis.</td>\n              <td><b>NO</b></td>\n              <td><code>0</code></td>\n            </tr>\n            <tr>\n              <td><b>6</b></td>\n              <td>clickEvent</td>\n              <td>Output parameter <code>(MouseEvent)</code></td>\n              <td>Is fired when click event happens on the element.</td>\n              <td><b>NO</b></td>\n              <td><code>N/A</code></td>\n            </tr>\n            <tr>\n              <td><b>7</b></td>\n              <td>doubleClickEvent</td>\n              <td>Output parameter <code>(MouseEvent)</code></td>\n              <td>Is fired when double click event happens on the element.</td>\n              <td><b>NO</b></td>\n              <td><code>N/A</code></td>\n            </tr>\n            <tr>\n              <td><b>8</b></td>\n              <td>mouseOverEvent</td>\n              <td>Output parameter <code>(MouseEvent)</code></td>\n              <td>Is fired when mouse is moved over the element.</td>\n              <td><b>NO</b></td>\n              <td><code>N/A</code></td>\n            </tr>\n            <tr>\n              <td><b>9</b></td>\n              <td>MouseOutEvent</td>\n              <td>Output parameter <code>(MouseEvent)</code></td>\n              <td>Is fired when mouse is moved out of the element.</td>\n              <td><b>NO</b></td>\n              <td><code>N/A</code></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <!-- Polyline tab -->\n      <div class=\"tab-pane fade\" id=\"polyline\" role=\"tabpanel\">\n        <h2>Polyline</h2>\n        <p>\n          To add a polyline element to the svg-container, you must add the following element inside the <code>svg-container</code> component tag -\n        </p>\n        <code>\n          &lt;svg-polyline&gt; &lt;/svg-polyline&gt;\n        </code>\n        <p></p>\n        <p>In the below table you can see explanation of the input and output parameters for the polyline.</p>\n        <table class=\"table table-responsive\">\n          <thead>\n            <tr>\n              <th>ID</th>\n              <th>Name</th>\n              <th>Type</th>\n              <th>Explanation</th>\n              <th>Mandatory</th>\n              <th>Default value</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><b>1</b></td>\n              <td>points</td>\n              <td>Input parameter <code>(Array)</code></td>\n              <td>Array with an array of x,y points. For example [[0, 50], [50, 100], [100, 50], [50, 0], [0, 50]].</td>\n              <td><b>YES</b></td>\n              <td><code>undefined</code></td>\n            </tr>\n            <tr>\n              <td><b>2</b></td>\n              <td>borderSize</td>\n              <td>Input parameter <code>(number)</code></td>\n              <td>Size of the border for the polyline.</td>\n              <td><b>YES</b></td>\n              <td><code>undefined</code></td>\n            </tr>\n            <tr>\n              <td><b>3</b></td>\n              <td>borderColor</td>\n              <td>Input parameter <code>(string)</code></td>\n              <td>Border color of the polyline (name, HEX, rgb).</td>\n              <td><b>NO</b></td>\n              <td><code>'#000'</code></td>\n            </tr>\n            <tr>\n              <td><b>4</b></td>\n              <td>fill</td>\n              <td>Input parameter <code>(string)</code></td>\n              <td>Fill color of the polyline (name, HEX, rgb).</td>\n              <td><b>NO</b></td>\n              <td><code>'#000'</code></td>\n            </tr>\n            <tr>\n              <td><b>5</b></td>\n              <td>clickEvent</td>\n              <td>Output parameter <code>(MouseEvent)</code></td>\n              <td>Is fired when click event happens on the element.</td>\n              <td><b>NO</b></td>\n              <td><code>N/A</code></td>\n            </tr>\n            <tr>\n              <td><b>6</b></td>\n              <td>doubleClickEvent</td>\n              <td>Output parameter <code>(MouseEvent)</code></td>\n              <td>Is fired when double click event happens on the element.</td>\n              <td><b>NO</b></td>\n              <td><code>N/A</code></td>\n            </tr>\n            <tr>\n              <td><b>7</b></td>\n              <td>mouseOverEvent</td>\n              <td>Output parameter <code>(MouseEvent)</code></td>\n              <td>Is fired when mouse is moved over the element.</td>\n              <td><b>NO</b></td>\n              <td><code>N/A</code></td>\n            </tr>\n            <tr>\n              <td><b>8</b></td>\n              <td>MouseOutEvent</td>\n              <td>Output parameter <code>(MouseEvent)</code></td>\n              <td>Is fired when mouse is moved out of the element.</td>\n              <td><b>NO</b></td>\n              <td><code>N/A</code></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <!-- Polygon tab -->\n      <div class=\"tab-pane fade\" id=\"polygon\" role=\"tabpanel\">\n        <h2>Polygon</h2>\n        <p>\n          To add a polygon element to the svg-container, you must add the following element inside the <code>svg-container</code> component tag -\n        </p>\n        <code>\n          &lt;svg-polygon&gt; &lt;/svg-polygon&gt;\n        </code>\n        <p></p>\n        <p>In the below table you can see explanation of the input and output parameters for the polygon.</p>\n        <table class=\"table table-responsive\">\n          <thead>\n            <tr>\n              <th>ID</th>\n              <th>Name</th>\n              <th>Type</th>\n              <th>Explanation</th>\n              <th>Mandatory</th>\n              <th>Default value</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><b>1</b></td>\n              <td>points</td>\n              <td>Input parameter <code>(Array)</code></td>\n              <td>Array with an array of x,y points. For example [[0, 50], [50, 100], [100, 50], [50, 0], [0, 50]].</td>\n              <td><b>YES</b></td>\n              <td><code>undefined</code></td>\n            </tr>\n            <tr>\n              <td><b>2</b></td>\n              <td>borderSize</td>\n              <td>Input parameter <code>(number)</code></td>\n              <td>Size of the border for the polygon.</td>\n              <td><b>YES</b></td>\n              <td><code>undefined</code></td>\n            </tr>\n            <tr>\n              <td><b>3</b></td>\n              <td>borderColor</td>\n              <td>Input parameter <code>(string)</code></td>\n              <td>Border color of the polygon (name, HEX, rgb).</td>\n              <td><b>NO</b></td>\n              <td><code>'#000'</code></td>\n            </tr>\n            <tr>\n              <td><b>4</b></td>\n              <td>fill</td>\n              <td>Input parameter <code>(string)</code></td>\n              <td>Fill color of the polygon (name, HEX, rgb).</td>\n              <td><b>NO</b></td>\n              <td><code>'#000'</code></td>\n            </tr>\n            <tr>\n              <td><b>5</b></td>\n              <td>clickEvent</td>\n              <td>Output parameter <code>(MouseEvent)</code></td>\n              <td>Is fired when click event happens on the element.</td>\n              <td><b>NO</b></td>\n              <td><code>N/A</code></td>\n            </tr>\n            <tr>\n              <td><b>6</b></td>\n              <td>doubleClickEvent</td>\n              <td>Output parameter <code>(MouseEvent)</code></td>\n              <td>Is fired when double click event happens on the element.</td>\n              <td><b>NO</b></td>\n              <td><code>N/A</code></td>\n            </tr>\n            <tr>\n              <td><b>7</b></td>\n              <td>mouseOverEvent</td>\n              <td>Output parameter <code>(MouseEvent)</code></td>\n              <td>Is fired when mouse is moved over the element.</td>\n              <td><b>NO</b></td>\n              <td><code>N/A</code></td>\n            </tr>\n            <tr>\n              <td><b>8</b></td>\n              <td>MouseOutEvent</td>\n              <td>Output parameter <code>(MouseEvent)</code></td>\n              <td>Is fired when mouse is moved out of the element.</td>\n              <td><b>NO</b></td>\n              <td><code>N/A</code></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <!-- Image tab -->\n      <div class=\"tab-pane fade\" id=\"image\" role=\"tabpanel\">\n        <h2>Image</h2>\n        <p>\n          To add a image element to the svg-container, you must add the following element inside the <code>svg-container</code> component tag -\n        </p>\n        <code>\n          &lt;svg-image&gt; &lt;/svg-image&gt;\n        </code>\n        <p></p>\n        <p>In the below table you can see explanation of the input and output parameters for the image.</p>\n        <table class=\"table table-responsive\">\n          <thead>\n            <tr>\n              <th>ID</th>\n              <th>Name</th>\n              <th>Type</th>\n              <th>Explanation</th>\n              <th>Mandatory</th>\n              <th>Default value</th>\n            </tr>\n          </thead>\n        \n          <tbody>\n            <tr>\n              <td><b>1</b></td>\n              <td>imageUrl</td>\n              <td>Input parameter <code>(string)</code></td>\n              <td>Path to the image for SVG image.</td>\n              <td><b>YES</b></td>\n              <td><code>undefined</code></td>\n            </tr>\n            <tr>\n              <td><b>2</b></td>\n              <td>x</td>\n              <td>Input parameter <code>(number)</code></td>\n              <td>Starting point on x axis.</td>\n              <td><b>NO</b></td>\n              <td><code>0</code></td>\n            </tr>\n            <tr>\n              <td><b>3</b></td>\n              <td>y</td>\n              <td>Input parameter <code>(number)</code></td>\n              <td>Starting point on y axis.</td>\n              <td><b>NO</b></td>\n              <td><code>0</code></td>\n            </tr>\n            <tr>\n              <td><b>4</b></td>\n              <td>height</td>\n              <td>Input parameter <code>(number)</code></td>\n              <td>Height of the image.</td>\n              <td><b>NO</b></td>\n              <td><code>100</code></td>\n            </tr>\n            <tr>\n              <td><b>5</b></td>\n              <td>width</td>\n              <td>Input parameter <code>(number)</code></td>\n              <td>Width of the image.</td>\n              <td><b>NO</b></td>\n              <td><code>100</code></td>\n            </tr>\n            <tr>\n              <td><b>6</b></td>\n              <td>clickEvent</td>\n              <td>Output parameter <code>(MouseEvent)</code></td>\n              <td>Is fired when click event happens on the element.</td>\n              <td><b>NO</b></td>\n              <td><code>N/A</code></td>\n            </tr>\n            <tr>\n              <td><b>7</b></td>\n              <td>doubleClickEvent</td>\n              <td>Output parameter <code>(MouseEvent)</code></td>\n              <td>Is fired when double click event happens on the element.</td>\n              <td><b>NO</b></td>\n              <td><code>N/A</code></td>\n            </tr>\n            <tr>\n              <td><b>8</b></td>\n              <td>mouseOverEvent</td>\n              <td>Output parameter <code>(MouseEvent)</code></td>\n              <td>Is fired when mouse is moved over the element.</td>\n              <td><b>NO</b></td>\n              <td><code>N/A</code></td>\n            </tr>\n            <tr>\n              <td><b>9</b></td>\n              <td>MouseOutEvent</td>\n              <td>Output parameter <code>(MouseEvent)</code></td>\n              <td>Is fired when mouse is moved out of the element.</td>\n              <td><b>NO</b></td>\n              <td><code>N/A</code></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <!-- Troubleshooting tab -->\n      <div class=\"tab-pane fade\" id=\"troubleshooting\" role=\"tabpanel\">\n        <h2>Troubleshooting</h2>\n        <p>In case of any questions or issues, please open a new question / issue on our <a href=\"https://github.com/vvaldersteins/ngx-svg/issues\" target=\"_blank\">GitHub repository</a>.</p>\n      </div>\n\n      <!-- License tab -->\n      <div class=\"tab-pane fade\" id=\"license\" role=\"tabpanel\">\n        <h2>License</h2>\n        <p>ngx-svg is developed under MIT license.</p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
 * Import Angular libraries.
 */

var HomeComponent = /** @class */ (function () {
    /**
     * Creates home component object instance.
     */
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/pages/home/home.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/image/image.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header of the image -->\n<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4 text-center\">Image</h1>\n  </div>\n</div>\n\n<div class=\"container-fluid\">\n  <div class=\"row no-gutters\">\n    <div class=\"col-12\">\n      <!-- Svg Container with images -->\n      <svg-container containerId=\"image\" [height]=\"getHeight()\">\n        <svg-image [imageUrl]=\"image.imageUrl\" [height]=\"image.height\" [width]=\"image.width\"\n          [x]=\"image.x\" [y]=\"image.y\" *ngFor=\"let image of images\"></svg-image>\n      </svg-container>\n    </div>\n\n    <div class=\"col-12\">\n      <!-- Svg Image configuration -->\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>ID</th>\n              <th>Image URL</th>\n              <th>X position</th>\n              <th>Y position</th>\n              <th>Width</th>\n              <th>Height</th>\n              <th>Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            <ng-container *ngIf=\"images.length > 0\">\n              <tr *ngFor=\"let image of images; let index = index;\">\n                <td class=\"align-middle\">\n                  <b>{{ index + 1 }}</b>\n                </td>\n                <td>\n                  <input type=\"string\" [(ngModel)]=\"image.imageUrl\" class=\"form-control\" />\n                </td>\n                <td>\n                  <input type=\"number\" [(ngModel)]=\"image.x\" class=\"form-control\" />\n                </td>\n                <td>\n                  <input type=\"number\" [(ngModel)]=\"image.y\" class=\"form-control\" />\n                </td>\n                <td>\n                  <input type=\"number\" [(ngModel)]=\"image.width\" class=\"form-control\" />\n                </td>\n                <td>\n                  <input type=\"number\" [(ngModel)]=\"image.height\" class=\"form-control\" />\n                </td>\n                <td>\n                  <button class=\"btn btn-danger\" (click)=\"removeRow(index)\">Remove</button>\n                </td>\n              </tr>\n            </ng-container>\n            <tr *ngIf=\"images.length === 0\">\n              <td colspan=\"7\" class=\"text-center\">\n                There are no images\n              </td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td colspan=\"7\">\n                <button class=\"btn btn-success float-right\" (click)=\"addNew()\">Add New image</button>\n              </td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/image/image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
 * Import Angular libraries.
 */

var ImageComponent = /** @class */ (function () {
    /**
     * Creates image component object instance.
     */
    function ImageComponent(cdRef) {
        this.cdRef = cdRef;
        /**
         * Globally used variables within the component.
         */
        this.images = [{
                imageUrl: 'assets/dog.png',
                x: 100,
                y: 100,
                width: 100,
                height: 100
            }];
    }
    ImageComponent.prototype.onClick = function (event) { console.log(event); };
    /**
     * Adds new image element.
     */
    ImageComponent.prototype.addNew = function () {
        this.images.push({
            imageUrl: 'assets/dog.png',
            x: 0,
            y: 0,
            width: 100,
            height: 100
        });
    };
    /**
     * Retrieves the maximum height of all elements.
     * @returns Height of the container.
     */
    ImageComponent.prototype.getHeight = function () {
        return Math.max.apply(Math, this.images.map(function (el) { return el.height + el.y; })) + 20;
    };
    /**
     * Removes specific image element.
     * @param index - Index of image, which needs to be removed.
     */
    ImageComponent.prototype.removeRow = function (index) {
        this.images.splice(index, 1);
    };
    ImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/pages/image/image.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], ImageComponent);
    return ImageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/line/line.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header of the line -->\n<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4 text-center\">Line</h1>\n  </div>\n</div>\n\n<div class=\"container-fluid\">\n  <div class=\"row no-gutters\">\n    <div class=\"col-12\">\n      <!-- Svg Container with lines -->\n      <svg-container containerId=\"line\" [height]=\"getHeight()\">\n        <svg-line [borderSize]=\"line.borderSize\" [borderColor]=\"line.borderColor\"\n          [x0]=\"line.x0\" [y0]=\"line.y0\" [x1]=\"line.x1\" [y1]=\"line.y1\" *ngFor=\"let line of lines\"></svg-line>\n      </svg-container>\n    </div>\n\n    <div class=\"col-12\">\n      <!-- Svg line configuration -->\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>ID</th>\n              <th>Border Size</th>\n              <th>Border Color</th>\n              <th>X Start position</th>\n              <th>Y Start position</th>\n              <th>X End position</th>\n              <th>Y End position</th>\n              <th>Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            <ng-container *ngIf=\"lines.length > 0\">\n              <tr *ngFor=\"let line of lines; let index = index;\">\n                <td class=\"align-middle\">\n                  <b>{{ index + 1 }}</b>\n                </td>\n                <td>\n                  <input type=\"number\" [(ngModel)]=\"line.borderSize\" class=\"form-control\" />\n                </td>\n                <td>\n                  <input type=\"string\" [(ngModel)]=\"line.borderColor\" class=\"form-control\" />\n                </td>\n                <td>\n                  <input type=\"number\" [(ngModel)]=\"line.x0\" class=\"form-control\" />\n                </td>\n                <td>\n                  <input type=\"number\" [(ngModel)]=\"line.y0\" class=\"form-control\" />\n                </td>\n                <td>\n                  <input type=\"number\" [(ngModel)]=\"line.x1\" class=\"form-control\" />\n                </td>\n                <td>\n                  <input type=\"number\" [(ngModel)]=\"line.y1\" class=\"form-control\" />\n                </td>\n                <td>\n                  <button class=\"btn btn-danger\" (click)=\"removeRow(index)\">Remove</button>\n                </td>\n              </tr>\n            </ng-container>\n            <tr *ngIf=\"lines.length === 0\">\n              <td colspan=\"8\" class=\"text-center\">\n                There are no lines\n              </td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td colspan=\"8\">\n                <button class=\"btn btn-success float-right\" (click)=\"addNew()\">Add New line</button>\n              </td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/line/line.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
 * Import Angular libraries.
 */

var LineComponent = /** @class */ (function () {
    /**
     * Creates line component object instance.
     */
    function LineComponent() {
        /**
         * Globally used variables within the component.
         */
        this.lines = [{
                borderSize: 10,
                borderColor: 'rgba(125, 125, 32, 0.5)',
                x0: 20,
                y0: 30,
                x1: 55,
                y1: 85
            }, {
                borderSize: 10,
                borderColor: 'rgba(12, 32, 222, 0.7)',
                x0: 30,
                y0: 20,
                x1: 85,
                y1: 55
            }, {
                borderSize: 10,
                borderColor: 'rgba(18, 52, 23, 0.7)',
                x0: 20,
                y0: 60,
                x1: 50,
                y1: 20
            }];
    }
    /**
     * Adds new line element.
     */
    LineComponent.prototype.addNew = function () {
        this.lines.push({
            borderSize: 0,
            borderColor: '#000',
            x0: 0,
            y0: 0,
            x1: 1,
            y1: 1
        });
    };
    /**
     * Retrieves the maximum height of all elements.
     * @returns Height of the container.
     */
    LineComponent.prototype.getHeight = function () {
        return Math.max.apply(Math, this.lines.map(function (el) {
            if (el.y0 > el.y1) {
                return el.y0;
            }
            else {
                return el.y1;
            }
        })) + 20;
    };
    /**
     * Removes specific line element.
     * @param index - Index of a line which needs to be removed.
     */
    LineComponent.prototype.removeRow = function (index) {
        this.lines.splice(index, 1);
    };
    LineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/pages/line/line.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], LineComponent);
    return LineComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/polygon/polygon.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header of the polygon -->\n<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4 text-center\">Polygon</h1>\n  </div>\n</div>\n\n<div class=\"container-fluid\">\n  <div class=\"row no-gutters\">\n    <div class=\"col-12\">\n      <!-- Svg Container with lines -->\n      <svg-container containerId=\"polygon\" [height]=\"getHeight()\">\n        <svg-polygon [borderSize]=\"polygon.borderSize\" [borderColor]=\"polygon.borderColor\"\n          [fill]=\"polygon.fill\" [points]=\"polygon.points\" *ngFor=\"let polygon of polygons\"></svg-polygon>\n      </svg-container>\n    </div>\n\n    <div class=\"col-12\">\n      <!-- Svg line configuration -->\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>ID</th>\n              <th>Border Size</th>\n              <th>Border Color</th>\n              <th>Fill Color</th>\n              <th class=\"text-center\">Points</th>\n              <th>Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            <ng-container *ngIf=\"polygons.length > 0\">\n              <tr *ngFor=\"let polygon of polygons; let index = index;\">\n                <td class=\"align-middle\">\n                  <b>{{ index + 1 }}</b>\n                </td>\n                <td class=\"align-middle\">\n                  <input type=\"number\" [(ngModel)]=\"polygon.borderSize\" class=\"form-control\" />\n                </td>\n                <td class=\"align-middle\">\n                  <input type=\"string\" [(ngModel)]=\"polygon.borderColor\" class=\"form-control\" />\n                </td>\n                <td class=\"align-middle\">\n                  <input type=\"string\" [(ngModel)]=\"polygon.fill\" class=\"form-control\" />\n                </td>\n                <td>\n                  <tr>\n                    <th>X point</th>\n                    <th>Y point</th>\n                    <th>Actions</th>\n                  </tr>\n\n                  <ng-container *ngIf=\"polygon.points.length > 0\">\n                    <tr *ngFor=\"let point of polygon.points; let pointIndex = index;\">\n                      <td>\n                        <input type=\"number\" [(ngModel)]=\"point[0]\" class=\"form-control\" />\n                      </td>\n                      <td>\n                        <input type=\"number\" [(ngModel)]=\"point[1]\" class=\"form-control\" />\n                      </td>\n                      <td>\n                        <button class=\"btn btn-danger\" (click)=\"removePoint(polygon, pointIndex)\">Remove</button>\n                      </td>\n                    </tr>\n                  </ng-container>\n\n                  <tr *ngIf=\"polygon.points.length === 0\">\n                    <td colspan=\"3\">\n                      There are no points for this polygon\n                    </td>\n                  </tr>\n\n                  <tr>\n                    <td colspan=\"3\">\n                      <button class=\"btn btn-success float-right\" (click)=\"addNewPoint(polygon)\">Add New Point</button>\n                    </td>\n                  </tr>\n                </td>\n                <td class=\"align-middle\">\n                  <button class=\"btn btn-danger\" (click)=\"removeRow(index)\">Remove</button>\n                </td>\n              </tr>\n            </ng-container>\n            <tr *ngIf=\"polygons.length === 0\">\n              <td colspan=\"6\" class=\"text-center\">\n                There are no polygons\n              </td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td colspan=\"6\">\n                <button class=\"btn btn-success float-right\" (click)=\"addNew()\">Add New polygon</button>\n              </td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/polygon/polygon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolygonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
 * Import Angular libraries.
 */

var PolygonComponent = /** @class */ (function () {
    /**
     * Creates polygon component object instance.
     */
    function PolygonComponent() {
        /**
         * Globally used variables within the component.
         */
        this.polygons = [{
                borderSize: 2,
                borderColor: 'rgba(125, 125, 32, 0.5)',
                fill: 'rgba(100, 100, 20, 0.2)',
                points: [[10, 100], [100, 100], [100, 10], [10, 10]]
            }, {
                borderSize: 3,
                borderColor: 'rgba(23, 25, 255, 1)',
                fill: 'rgba(0, 0, 0, 0)',
                points: [[200, 150], [210, 190], [250, 200], [210, 210], [200, 250], [190, 210], [150, 200], [190, 190]]
            }];
    }
    /**
     * Adds new polygon element.
     */
    PolygonComponent.prototype.addNew = function () {
        this.polygons.push({
            borderSize: 0,
            borderColor: '#000',
            points: [[]]
        });
    };
    /**
     * Retrieves the maximum height of all elements.
     * @returns Height of the container.
     */
    PolygonComponent.prototype.getHeight = function () {
        return Math.max.apply(Math, this.polygons.map(function (el) {
            var maxValue;
            var max = Math.max.apply(Math, el.points.map(function (point) {
                if (maxValue === undefined || (maxValue !== undefined && point[1] > maxValue)) {
                    maxValue = point[1];
                }
                return maxValue;
            }));
            return max;
        })) + 20;
    };
    /**
     * Adds new points element at the end of the list.
     * @param polygon - Polygon object for which to add new points element.
     */
    PolygonComponent.prototype.addNewPoint = function (polygon) {
        polygon.points.push([]);
    };
    /**
     * Removes a specific point from the points list.
     * @param polygon - Polygon object for which point needs to be removed.
     * @param index - Index which needs to be removed.
     */
    PolygonComponent.prototype.removePoint = function (polygon, index) {
        polygon.points.splice(index, 1);
    };
    /**
     * Removes specific polygon element.
     * @param index - Index which needs to be removed
     */
    PolygonComponent.prototype.removeRow = function (index) {
        this.polygons.splice(index, 1);
    };
    PolygonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/pages/polygon/polygon.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], PolygonComponent);
    return PolygonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/polyline/polyline.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header of the polyline -->\n<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4 text-center\">Polyline</h1>\n  </div>\n</div>\n\n<div class=\"container-fluid\">\n  <div class=\"row no-gutters\">\n    <div class=\"col-12\">\n      <!-- Svg Container with lines -->\n      <svg-container containerId=\"polyline\" [height]=\"getHeight()\">\n        <svg-polyline [borderSize]=\"polyline.borderSize\" [borderColor]=\"polyline.borderColor\"\n          [fill]=\"polyline.fill\" [points]=\"polyline.points\" *ngFor=\"let polyline of polylines\"></svg-polyline>\n      </svg-container>\n    </div>\n\n    <div class=\"col-12\">\n      <!-- Svg line configuration -->\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>ID</th>\n              <th>Border Size</th>\n              <th>Border Color</th>\n              <th>Fill Color</th>\n              <th class=\"text-center\">Points</th>\n              <th>Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            <ng-container *ngIf=\"polylines.length > 0\">\n              <tr *ngFor=\"let polyline of polylines; let index = index;\">\n                <td class=\"align-middle\">\n                  <b>{{ index + 1 }}</b>\n                </td>\n                <td class=\"align-middle\">\n                  <input type=\"number\" [(ngModel)]=\"polyline.borderSize\" class=\"form-control\" />\n                </td>\n                <td class=\"align-middle\">\n                  <input type=\"string\" [(ngModel)]=\"polyline.borderColor\" class=\"form-control\" />\n                </td>\n                <td class=\"align-middle\">\n                  <input type=\"string\" [(ngModel)]=\"polyline.fill\" class=\"form-control\" />\n                </td>\n                <td>\n                  <tr>\n                    <th>X point</th>\n                    <th>Y point</th>\n                    <th>Actions</th>\n                  </tr>\n\n                  <ng-container *ngIf=\"polyline.points.length > 0\">\n                    <tr *ngFor=\"let point of polyline.points; let pointIndex = index;\">\n                      <td>\n                        <input type=\"number\" [(ngModel)]=\"point[0]\" class=\"form-control\" />\n                      </td>\n                      <td>\n                        <input type=\"number\" [(ngModel)]=\"point[1]\" class=\"form-control\" />\n                      </td>\n                      <td>\n                        <button class=\"btn btn-danger\" (click)=\"removePoint(polyline, pointIndex)\">Remove</button>\n                      </td>\n                    </tr>\n                  </ng-container>\n\n                  <tr *ngIf=\"polyline.points.length === 0\">\n                    <td colspan=\"3\">\n                      There are no points for this polyline\n                    </td>\n                  </tr>\n\n                  <tr>\n                    <td colspan=\"3\">\n                      <button class=\"btn btn-success float-right\" (click)=\"addNewPoint(polyline)\">Add New Point</button>\n                    </td>\n                  </tr>\n                </td>\n                <td class=\"align-middle\">\n                  <button class=\"btn btn-danger\" (click)=\"removeRow(index)\">Remove</button>\n                </td>\n              </tr>\n            </ng-container>\n            <tr *ngIf=\"polylines.length === 0\">\n              <td colspan=\"6\" class=\"text-center\">\n                There are no polylines\n              </td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td colspan=\"6\">\n                <button class=\"btn btn-success float-right\" (click)=\"addNew()\">Add New polyline</button>\n              </td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/polyline/polyline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolylineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
 * Import Angular libraries.
 */

var PolylineComponent = /** @class */ (function () {
    /**
     * Creates polyline component object instance.
     */
    function PolylineComponent() {
        /**
         * Globally used variables within the component.
         */
        this.polylines = [{
                borderSize: 2,
                borderColor: 'rgba(125, 125, 32, 0.5)',
                fill: 'rgba(100, 100, 20, 0.2)',
                points: [[10, 100], [100, 100], [100, 10], [10, 10], [10, 100]]
            }, {
                borderSize: 3,
                borderColor: 'rgba(23, 25, 255, 1)',
                fill: 'rgba(0, 0, 0, 0)',
                points: [[200, 150], [210, 190], [250, 200], [210, 210], [200, 250], [190, 210], [150, 200], [190, 190]]
            }];
    }
    /**
     * Adds new polyline element.
     */
    PolylineComponent.prototype.addNew = function () {
        this.polylines.push({
            borderSize: 0,
            borderColor: '#000',
            points: [[]]
        });
    };
    /**
     * Retrieves the maximum height of all elements.
     * @returns Height of the container.
     */
    PolylineComponent.prototype.getHeight = function () {
        return Math.max.apply(Math, this.polylines.map(function (el) {
            var maxValue;
            var max = Math.max.apply(Math, el.points.map(function (point) {
                if (maxValue === undefined || (maxValue !== undefined && point[1] > maxValue)) {
                    maxValue = point[1];
                }
                return maxValue;
            }));
            return max;
        })) + 20;
    };
    /**
     * Adds new points element at the end of the list.
     * @param polyline - Polyline object for which to add new points element.
     */
    PolylineComponent.prototype.addNewPoint = function (polyline) {
        polyline.points.push([]);
    };
    /**
     * Removes a specific point from the points list.
     * @param polyline - Polyline object for which point needs to be removed.
     * @param index - Index which needs to be removed.
     */
    PolylineComponent.prototype.removePoint = function (polyline, index) {
        polyline.points.splice(index, 1);
    };
    /**
     * Removes specific polyline element.
     * @param index - Index which needs to be removed
     */
    PolylineComponent.prototype.removeRow = function (index) {
        this.polylines.splice(index, 1);
    };
    PolylineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/pages/polyline/polyline.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], PolylineComponent);
    return PolylineComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/rect/rect.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header of the rectangular -->\n<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4 text-center\">Rectangular</h1>\n  </div>\n</div>\n\n<div class=\"container-fluid\">\n  <div class=\"row no-gutters\">\n    <div class=\"col-12\">\n      <!-- Svg Container with rectangulars -->\n      <svg-container containerId=\"rectangular\" [height]=\"getHeight()\">\n        <svg-rect [height]=\"rectangular.height\" [width]=\"rectangular.width\" [color]=\"rectangular.color\"\n          [x]=\"rectangular.x\" [y]=\"rectangular.y\" *ngFor=\"let rectangular of rectangulars\"></svg-rect>\n      </svg-container>\n    </div>\n\n    <div class=\"col-12\">\n      <!-- Svg Rect configuration -->\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>ID</th>\n              <th>Height</th>\n              <th>Width</th>\n              <th>Color</th>\n              <th>X position</th>\n              <th>Y position</th>\n              <th>Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            <ng-container *ngIf=\"rectangulars.length > 0\">\n              <tr *ngFor=\"let rectangular of rectangulars; let index = index;\">\n                <td class=\"align-middle\">\n                  <b>{{ index + 1 }}</b>\n                </td>\n                <td>\n                  <input type=\"number\" [(ngModel)]=\"rectangular.height\" class=\"form-control\" />\n                </td>\n                <td>\n                  <input type=\"number\" [(ngModel)]=\"rectangular.width\" class=\"form-control\" />\n                </td>\n                <td>\n                  <input type=\"string\" [(ngModel)]=\"rectangular.color\" class=\"form-control\" />\n                </td>\n                <td>\n                  <input type=\"number\" [(ngModel)]=\"rectangular.x\" class=\"form-control\" />\n                </td>\n                <td>\n                  <input type=\"number\" [(ngModel)]=\"rectangular.y\" class=\"form-control\" />\n                </td>\n                <td>\n                  <button class=\"btn btn-danger\" (click)=\"removeRow(index)\">Remove</button>\n                </td>\n              </tr>\n            </ng-container>\n            <tr *ngIf=\"rectangulars.length === 0\">\n              <td colspan=\"7\" class=\"text-center\">\n                There are no rectangulars\n              </td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td colspan=\"7\">\n                <button class=\"btn btn-success float-right\" (click)=\"addNew()\">Add New Rectangular</button>\n              </td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/rect/rect.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
 * Import Angular libraries.
 */

var RectComponent = /** @class */ (function () {
    /**
     * Creates rect component object instance.
     */
    function RectComponent() {
        /**
         * Globally used variables within the component.
         */
        this.rectangulars = [{
                height: 100,
                width: 200,
                color: 'rgba(125, 125, 32, 0.5)',
                x: 20,
                y: 30
            }, {
                height: 50,
                width: 50,
                color: 'rgba(12, 32, 222, 0.7)',
                x: 200,
                y: 20
            }];
    }
    /**
     * Adds new rectangular element.
     */
    RectComponent.prototype.addNew = function () {
        this.rectangulars.push({
            height: 0,
            width: 0,
            color: '#000',
            x: 0,
            y: 0
        });
    };
    /**
     * Retrieves the maximum height of all elements.
     * @returns Height of the container.
     */
    RectComponent.prototype.getHeight = function () {
        return Math.max.apply(Math, this.rectangulars.map(function (el) { return el.height + el.y; })) + 20;
    };
    /**
     * Removes specific rectangular element.
     * @param index - Index of rectangular element, which needs to be removed.
     */
    RectComponent.prototype.removeRow = function (index) {
        this.rectangulars.splice(index, 1);
    };
    RectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/pages/rect/rect.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], RectComponent);
    return RectComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map