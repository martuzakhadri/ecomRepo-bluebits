(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+uNQ":
/*!***************************************************************!*\
  !*** ./libs/ui/src/lib/components/banner/banner.component.ts ***!
  \***************************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/button */ "jIHw");



class BannerComponent {
    constructor() { }
    ngOnInit() {
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["ui-banner"]], decls: 10, vars: 0, consts: [[1, "banner"], [1, "p-grid"], [1, "p-col-5", "p-offset-1", "banner-text"], ["label", "See More", "styleClass", "p-mt-4 banner-button", "icon", "pi pi-chevron-right", "iconPos", "right"], [1, "p-col-6", "banner-image", "animate__animated", "animate__slideInLeft"], ["src", "assets/images/banner-image.svg", "alt", ""]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "The best products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "In every category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [primeng_button__WEBPACK_IMPORTED_MODULE_1__["Button"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ui-banner',
                templateUrl: './banner.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "/KYO":
/*!**********************************************!*\
  !*** ./apps/ngshop/src/app/app.component.ts ***!
  \**********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _bluebits_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bluebits/users */ "qdGH");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/header/header.component */ "sSEx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/footer/footer.component */ "TwOB");
/* harmony import */ var _shared_messages_messages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/messages/messages.component */ "OGUL");








class AppComponent {
    constructor(usersService) {
        this.usersService = usersService;
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.title = 'ngshop';
    }
    ngOnInit() {
        this.usersService.initAppSession();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bluebits_users__WEBPACK_IMPORTED_MODULE_1__["UsersService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["bluebits-root"]], decls: 5, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngshop-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ngshop-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ngshop-messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _shared_messages_messages_component__WEBPACK_IMPORTED_MODULE_5__["MessagesComponent"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'bluebits-root',
                templateUrl: './app.component.html',
            }]
    }], function () { return [{ type: _bluebits_users__WEBPACK_IMPORTED_MODULE_1__["UsersService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************************!*\
  !*** multi ./apps/ngshop/src/main.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\murtuza\Documents\GitHub\ecomRepo\apps\ngshop\src\main.ts */"16di");


/***/ }),

/***/ "02PH":
/*!**********************************!*\
  !*** ./libs/orders/src/index.ts ***!
  \**********************************/
/*! exports provided: OrdersModule, Order, OrderItem, OrdersService, CART_KEY, CartService, cart, cartItem, cartItemDetails, ORDER_STATUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_orders_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/orders.module */ "NvDY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrdersModule", function() { return _lib_orders_module__WEBPACK_IMPORTED_MODULE_0__["OrdersModule"]; });

/* harmony import */ var _lib_models_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/models/order */ "d3/B");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return _lib_models_order__WEBPACK_IMPORTED_MODULE_1__["Order"]; });

/* harmony import */ var _lib_models_order_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/models/order-item */ "O7wU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderItem", function() { return _lib_models_order_item__WEBPACK_IMPORTED_MODULE_2__["OrderItem"]; });

/* harmony import */ var _lib_services_orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/services/orders.service */ "CkZn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return _lib_services_orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"]; });

/* harmony import */ var _lib_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/services/cart.service */ "d6aw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CART_KEY", function() { return _lib_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CART_KEY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return _lib_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]; });

/* harmony import */ var _lib_models_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/models/cart */ "Sx6H");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cart", function() { return _lib_models_cart__WEBPACK_IMPORTED_MODULE_5__["cart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cartItem", function() { return _lib_models_cart__WEBPACK_IMPORTED_MODULE_5__["cartItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cartItemDetails", function() { return _lib_models_cart__WEBPACK_IMPORTED_MODULE_5__["cartItemDetails"]; });

/* harmony import */ var _lib_order_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/order.constants */ "ofze");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ORDER_STATUS", function() { return _lib_order_constants__WEBPACK_IMPORTED_MODULE_6__["ORDER_STATUS"]; });










/***/ }),

/***/ "16di":
/*!*********************************!*\
  !*** ./apps/ngshop/src/main.ts ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "bzRM");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "D0az");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "3rLv":
/*!***********************************************************!*\
  !*** ./libs/users/src/lib/pages/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "v6z4");
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/localstorage.service */ "lkXw");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "jIHw");













function LoginComponent_small_17_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_small_17_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "email is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_small_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_small_17_span_1_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_small_17_span_2_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.email.errors.email);
} }
function LoginComponent_small_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.AuthMassege);
} }
class LoginComponent {
    constructor(formBuilder, auth, storageService, router) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.storageService = storageService;
        this.router = router;
        this.isSubmitted = false;
        this.authError = false;
        this.AuthMassege = 'Email or password is wrong.';
    }
    ngOnInit() {
        this._initLoginForm();
    }
    _initLoginForm() {
        this.loginFormGroup = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    onSubmit() {
        this.isSubmitted = true;
        if (this.loginFormGroup.invalid)
            return;
        this.auth.login(this.loginForm.email.value, this.loginForm.password.value).subscribe((user) => {
            this.authError = false;
            this.storageService.setToken(user.token);
            this.router.navigate(['/']);
        }, (err) => {
            this.authError = true;
            if (err.status !== 400) {
                this.AuthMassege = 'Error in the server ,please try again later';
            }
        });
    }
    get loginForm() {
        return this.loginFormGroup.controls;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["users-login"]], decls: 27, vars: 4, consts: [[1, "login-register"], [1, "login-register-panel"], [1, "p-grid"], [1, "p-col-6"], ["src", "assets/images/login-photo.png", "alt", ""], [1, "p-col-6", "p-p-5"], [3, "formGroup"], [1, "p-grid", "p-mt-6"], [1, "p-col-12"], [1, "p-inputgroup"], [1, "p-inputgroup-addon"], [1, "pi", "pi-user"], ["type", "text", "formControlName", "email", "pInputText", "", "placeholder", "Email"], ["class", "p-error", 4, "ngIf"], [1, "pi", "pi-lock"], ["type", "password", "formControlName", "password", "pInputText", "", "placeholder", "Password"], ["label", "Submit", "styleClass", "full-btn", 3, "onClick"], ["class", "p-col-12", 4, "ngIf"], [1, "p-error"], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "WELCOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "login page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginComponent_small_17_Template, 3, 2, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, LoginComponent_small_23_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function LoginComponent_Template_p_button_onClick_25_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, LoginComponent_div_26_Template, 3, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm.email.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm.password.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSubmitted && ctx.authError);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputText"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], primeng_button__WEBPACK_IMPORTED_MODULE_7__["Button"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'users-login',
                templateUrl: './login.component.html',
                styles: []
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "661k":
/*!*************************************************************************!*\
  !*** ./libs/orders/src/lib/components/cart-icon/cart-icon.component.ts ***!
  \*************************************************************************/
/*! exports provided: CartIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartIconComponent", function() { return CartIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cart.service */ "d6aw");
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/badge */ "fqaE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");






class CartIconComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.cartCount = 0;
    }
    ngOnInit() {
        this.cartService.cart$.subscribe((cart) => {
            var _a;
            this.cartCount = (_a = cart === null || cart === void 0 ? void 0 : cart.items.length) !== null && _a !== void 0 ? _a : 0;
        });
    }
}
CartIconComponent.ɵfac = function CartIconComponent_Factory(t) { return new (t || CartIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"])); };
CartIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartIconComponent, selectors: [["orders-cart-icon"]], decls: 1, vars: 1, consts: [["pBadge", "", "severity", "danger", "routerLink", "/cart", 1, "pi", "pi-shopping-cart", "p-mr-4", "p-text-secondary", 2, "font-size", "1.3rem", 3, "value"]], template: function CartIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.cartCount);
    } }, directives: [primeng_badge__WEBPACK_IMPORTED_MODULE_2__["BadgeDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'orders-cart-icon',
                templateUrl: './cart-icon.component.html',
                styles: []
            }]
    }], function () { return [{ type: _services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"] }]; }, null); })();


/***/ }),

/***/ "7L/a":
/*!**************************************************!*\
  !*** ./libs/products/src/lib/models/category.ts ***!
  \**************************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
class Category {
}


/***/ }),

/***/ "7Qtu":
/*!********************************************************************!*\
  !*** ./libs/orders/src/lib/pages/thank-you/thank-you.component.ts ***!
  \********************************************************************/
/*! exports provided: ThankYouComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouComponent", function() { return ThankYouComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/button */ "jIHw");





class ThankYouComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    backToShop() {
        this.router.navigate(['/products']);
    }
}
ThankYouComponent.ɵfac = function ThankYouComponent_Factory(t) { return new (t || ThankYouComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ThankYouComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThankYouComponent, selectors: [["orders-thank-you"]], decls: 7, vars: 0, consts: [[1, "check-out"], [1, "thank-you"], ["label", "back to Shop", 3, "onClick"]], template: function ThankYouComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "thank you for shopping with us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "we have received your shopping orders with us will be delivered in 2 days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function ThankYouComponent_Template_p_button_onClick_6_listener() { return ctx.backToShop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [primeng_button__WEBPACK_IMPORTED_MODULE_2__["Button"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThankYouComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'orders-thank-you',
                templateUrl: './thank-you.component.html',
                styles: []
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "9K5x":
/*!**************************************************!*\
  !*** ./libs/users/src/lib/state/users.models.ts ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "9OeO":
/*!*******************************************************************************************!*\
  !*** ./libs/products/src/lib/components/categories-banner/categories-banner.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CategoriesBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesBannerComponent", function() { return CategoriesBannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/categories.service */ "Fgct");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");








const _c0 = function (a0) { return { backgroundColor: a0 }; };
function CategoriesBannerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/category/" + category_r1.id)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, category_r1.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("pi pi-", category_r1.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r1.name);
} }
class CategoriesBannerComponent {
    constructor(categoriesService) {
        this.categoriesService = categoriesService;
        this.categories = [];
        this.endsubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.categoriesService
            .getCategories()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.endsubs$))
            .subscribe(categories => {
            this.categories = categories;
        });
    }
    ngOnDestroy() {
        this.endsubs$.next();
        this.endsubs$.complete();
    }
}
CategoriesBannerComponent.ɵfac = function CategoriesBannerComponent_Factory(t) { return new (t || CategoriesBannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"])); };
CategoriesBannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoriesBannerComponent, selectors: [["categories-banner"]], decls: 5, vars: 1, consts: [[1, "categories-banner"], [1, "p-grid"], ["class", "p-col-2", 4, "ngFor", "ngForOf"], [1, "p-col-2"], [1, "category", 3, "routerLink", "ngStyle"], [1, "category-icon"], [1, "category-name"]], template: function CategoriesBannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CategoriesBannerComponent_div_4_Template, 6, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesBannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'categories-banner',
                templateUrl: './categories-banner.component.html',
                styles: []
            }]
    }], function () { return [{ type: _services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"] }]; }, null); })();


/***/ }),

/***/ "AYLS":
/*!**************************************************!*\
  !*** ./libs/users/src/lib/state/users.facade.ts ***!
  \**************************************************/
/*! exports provided: UsersFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersFacade", function() { return UsersFacade; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _users_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.actions */ "wxs0");
/* harmony import */ var _users_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users.selectors */ "IroU");






class UsersFacade {
    constructor(store) {
        this.store = store;
        this.currentUser$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_users_selectors__WEBPACK_IMPORTED_MODULE_3__["getUsers"]));
        this.isAuthenticated$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_users_selectors__WEBPACK_IMPORTED_MODULE_3__["getUserIsAuth"]));
    }
    buildUserSession() {
        this.store.dispatch(_users_actions__WEBPACK_IMPORTED_MODULE_2__["buildUserSession"]());
    }
}
UsersFacade.ɵfac = function UsersFacade_Factory(t) { return new (t || UsersFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
UsersFacade.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersFacade, factory: UsersFacade.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersFacade, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "BALR":
/*!***************************************************!*\
  !*** ./libs/users/src/lib/state/users.reducer.ts ***!
  \***************************************************/
/*! exports provided: USERS_FEATURE_KEY, initialUsersState, usersAdapter, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS_FEATURE_KEY", function() { return USERS_FEATURE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialUsersState", function() { return initialUsersState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersAdapter", function() { return usersAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "R0sL");
/* harmony import */ var _users_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.actions */ "wxs0");



const USERS_FEATURE_KEY = 'users';
const initialUsersState = {
    user: null,
    isAuthenticated: false
};
const usersReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialUsersState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_users_actions__WEBPACK_IMPORTED_MODULE_2__["buildUserSession"], (state) => (Object.assign({}, state))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_users_actions__WEBPACK_IMPORTED_MODULE_2__["buildUserSessionSuccess"], (state, action) => (Object.assign(Object.assign({}, state), { user: action.user, isAuthenticated: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_users_actions__WEBPACK_IMPORTED_MODULE_2__["buildUserSessionFailed"], (state, action) => (Object.assign(Object.assign({}, state), { user: null, isAuthenticated: false }))));
const usersAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
function reducer(state, action) {
    return usersReducer(state, action);
}


/***/ }),

/***/ "CkZn":
/*!********************************************************!*\
  !*** ./libs/orders/src/lib/services/orders.service.ts ***!
  \********************************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "PIN6");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






//import { StripeService } from 'ngx-stripe';
class OrdersService {
    constructor(http) {
        this.http = http;
        this.apiURLOrders = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'orders';
        this.apiURLProducts = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'products';
    }
    getOrders() {
        return this.http.get(this.apiURLOrders);
    }
    getOrder(orderId) {
        return this.http.get(`${this.apiURLOrders}/${orderId}`);
    }
    createorder(order) {
        return this.http.post(this.apiURLOrders, order);
    }
    updateorder(orderStaus, orderId) {
        return this.http.put(`${this.apiURLOrders}/${orderId}`, orderStaus);
    }
    deleteorder(orderId) {
        return this.http.delete(`${this.apiURLOrders}/${orderId}`);
    }
    getOrdersCount() {
        return this.http
            .get(`${this.apiURLOrders}/get/count`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((objectValue) => objectValue.orderCount));
    }
    getTotalSales() {
        return this.http
            .get(`${this.apiURLOrders}/get/totalsales`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((objectValue) => objectValue.totalsales));
    }
    getProduct(productId) {
        return this.http.get(`${this.apiURLProducts}/${productId}`);
    }
    // createCheckoutSession(orderItem:OrderItem[]) {
    //   return this.http.post(`${this.apiURLOrders}/create-checkout-session`,orderItem).pipe(switchMap((session:{id:string})=>{
    //     return this.stripeService.redirectToCheckout({sessionId:session.id});
    //   }))
    // }
    createCheckoutSession(orderItem) {
        return this.http.post(`${this.apiURLOrders}/create-checkout-session`, orderItem);
    }
}
OrdersService.ɵfac = function OrdersService_Factory(t) { return new (t || OrdersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
OrdersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrdersService, factory: OrdersService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "D0az":
/*!*******************************************!*\
  !*** ./apps/ngshop/src/app/app.module.ts ***!
  \*******************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "/KYO");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "tdpJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/header/header.component */ "sSEx");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/footer/footer.component */ "TwOB");
/* harmony import */ var _bluebits_products__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bluebits/products */ "VoFj");
/* harmony import */ var _bluebits_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @bluebits/ui */ "HYn3");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/accordion */ "7LiV");
/* harmony import */ var _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/nav/nav.component */ "zApM");
/* harmony import */ var _bluebits_orders__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @bluebits/orders */ "02PH");
/* harmony import */ var _shared_messages_messages_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/messages/messages.component */ "OGUL");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _bluebits_users__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @bluebits/users */ "qdGH");
























//import { NgxStripeModule } from 'ngx-stripe';
const routes = [
    { path: '', component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"] },
];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [primeng_api__WEBPACK_IMPORTED_MODULE_16__["MessageService"],
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _bluebits_users__WEBPACK_IMPORTED_MODULE_19__["JwtInterceptor"], multi: true }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes),
            _bluebits_products__WEBPACK_IMPORTED_MODULE_9__["ProductsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["StoreModule"].forRoot({}),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_18__["EffectsModule"].forRoot([]),
            primeng_accordion__WEBPACK_IMPORTED_MODULE_11__["AccordionModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _bluebits_ui__WEBPACK_IMPORTED_MODULE_10__["UiModule"],
            _bluebits_orders__WEBPACK_IMPORTED_MODULE_13__["OrdersModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_15__["ToastModule"],
            _bluebits_users__WEBPACK_IMPORTED_MODULE_19__["UsersModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"],
        _shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_12__["NavComponent"],
        _shared_messages_messages_component__WEBPACK_IMPORTED_MODULE_14__["MessagesComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _bluebits_products__WEBPACK_IMPORTED_MODULE_9__["ProductsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_18__["EffectsRootModule"], primeng_accordion__WEBPACK_IMPORTED_MODULE_11__["AccordionModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _bluebits_ui__WEBPACK_IMPORTED_MODULE_10__["UiModule"],
        _bluebits_orders__WEBPACK_IMPORTED_MODULE_13__["OrdersModule"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_15__["ToastModule"],
        _bluebits_users__WEBPACK_IMPORTED_MODULE_19__["UsersModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"],
                    _shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                    _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                    _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_12__["NavComponent"],
                    _shared_messages_messages_component__WEBPACK_IMPORTED_MODULE_14__["MessagesComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes),
                    _bluebits_products__WEBPACK_IMPORTED_MODULE_9__["ProductsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["StoreModule"].forRoot({}),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_18__["EffectsModule"].forRoot([]),
                    primeng_accordion__WEBPACK_IMPORTED_MODULE_11__["AccordionModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _bluebits_ui__WEBPACK_IMPORTED_MODULE_10__["UiModule"],
                    _bluebits_orders__WEBPACK_IMPORTED_MODULE_13__["OrdersModule"],
                    primeng_toast__WEBPACK_IMPORTED_MODULE_15__["ToastModule"],
                    _bluebits_users__WEBPACK_IMPORTED_MODULE_19__["UsersModule"],
                ],
                providers: [primeng_api__WEBPACK_IMPORTED_MODULE_16__["MessageService"],
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _bluebits_users__WEBPACK_IMPORTED_MODULE_19__["JwtInterceptor"], multi: true }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                exports: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "D3hr":
/*!*******************************************!*\
  !*** ./libs/users/src/lib/models/user.ts ***!
  \*******************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
}


/***/ }),

/***/ "DTYH":
/*!***************************************************!*\
  !*** ./libs/users/src/lib/state/users.effects.ts ***!
  \***************************************************/
/*! exports provided: UsersEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersEffects", function() { return UsersEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _users_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.actions */ "wxs0");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/localstorage.service */ "lkXw");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/users-service */ "FAkf");











class UsersEffects {
    constructor(actions$, localStorage, usersService) {
        this.actions$ = actions$;
        this.localStorage = localStorage;
        this.usersService = usersService;
        this.buildUserSession$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_users_actions__WEBPACK_IMPORTED_MODULE_2__["buildUserSession"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(() => {
            if (this.localStorage.isvalidToken()) {
                const userId = this.localStorage.getUserIdFromToken();
                if (userId) {
                    return this.usersService.getUser(userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((user) => {
                        return _users_actions__WEBPACK_IMPORTED_MODULE_2__["buildUserSessionSuccess"]({ user: user });
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_users_actions__WEBPACK_IMPORTED_MODULE_2__["buildUserSessionFailed"]())));
                }
                else {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_users_actions__WEBPACK_IMPORTED_MODULE_2__["buildUserSessionFailed"]());
                }
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_users_actions__WEBPACK_IMPORTED_MODULE_2__["buildUserSessionFailed"]());
            }
        })));
    }
}
UsersEffects.ɵfac = function UsersEffects_Factory(t) { return new (t || UsersEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"])); };
UsersEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersEffects, factory: UsersEffects.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"] }, { type: _services_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"] }]; }, null); })();


/***/ }),

/***/ "F+dT":
/*!**************************************************!*\
  !*** ./libs/products/src/lib/products.module.ts ***!
  \**************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _bluebits_orders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bluebits/orders */ "02PH");
/* harmony import */ var _components_products_search_products_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/products-search/products-search.component */ "yIum");
/* harmony import */ var _components_categories_banner_categories_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/categories-banner/categories-banner.component */ "9OeO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_products_item_products_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/products-item/products-item.component */ "lJew");
/* harmony import */ var _components_featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/featured-products/featured-products.component */ "aVFS");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _pages_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/products-list/products-list.component */ "bd/R");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/checkbox */ "Ji6n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pages_products_page_products_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/products-page/products-page.component */ "oYjm");
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/rating */ "Js94");
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputnumber */ "Ks7X");
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/galleria */ "2art");
/* harmony import */ var _bluebits_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @bluebits/ui */ "HYn3");



















const routes = [
    { path: 'products',
        component: _pages_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_9__["ProductsListComponent"]
    },
    { path: 'category/:categoryid',
        component: _pages_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_9__["ProductsListComponent"]
    },
    { path: 'products/:productid',
        component: _pages_products_page_products_page_component__WEBPACK_IMPORTED_MODULE_12__["ProductsPageComponent"]
    }
];
class ProductsModule {
}
ProductsModule.ɵfac = function ProductsModule_Factory(t) { return new (t || ProductsModule)(); };
ProductsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductsModule });
ProductsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _bluebits_orders__WEBPACK_IMPORTED_MODULE_2__["OrdersModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
            primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
            primeng_galleria__WEBPACK_IMPORTED_MODULE_15__["GalleriaModule"],
            primeng_inputnumber__WEBPACK_IMPORTED_MODULE_14__["InputNumberModule"],
            primeng_rating__WEBPACK_IMPORTED_MODULE_13__["RatingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            primeng_checkbox__WEBPACK_IMPORTED_MODULE_10__["CheckboxModule"],
            _bluebits_ui__WEBPACK_IMPORTED_MODULE_16__["UiModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductsModule, { declarations: [_components_products_search_products_search_component__WEBPACK_IMPORTED_MODULE_3__["ProductsSearchComponent"],
        _components_categories_banner_categories_banner_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesBannerComponent"],
        _components_products_item_products_item_component__WEBPACK_IMPORTED_MODULE_6__["ProductsItemComponent"],
        _components_featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_7__["FeaturedProductsComponent"],
        _pages_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_9__["ProductsListComponent"], _pages_products_page_products_page_component__WEBPACK_IMPORTED_MODULE_12__["ProductsPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _bluebits_orders__WEBPACK_IMPORTED_MODULE_2__["OrdersModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
        primeng_galleria__WEBPACK_IMPORTED_MODULE_15__["GalleriaModule"],
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_14__["InputNumberModule"],
        primeng_rating__WEBPACK_IMPORTED_MODULE_13__["RatingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_10__["CheckboxModule"],
        _bluebits_ui__WEBPACK_IMPORTED_MODULE_16__["UiModule"]], exports: [_components_products_search_products_search_component__WEBPACK_IMPORTED_MODULE_3__["ProductsSearchComponent"],
        _components_categories_banner_categories_banner_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesBannerComponent"], _components_products_item_products_item_component__WEBPACK_IMPORTED_MODULE_6__["ProductsItemComponent"], _components_featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_7__["FeaturedProductsComponent"], _pages_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_9__["ProductsListComponent"], _pages_products_page_products_page_component__WEBPACK_IMPORTED_MODULE_12__["ProductsPageComponent"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _bluebits_orders__WEBPACK_IMPORTED_MODULE_2__["OrdersModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                    primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
                    primeng_galleria__WEBPACK_IMPORTED_MODULE_15__["GalleriaModule"],
                    primeng_inputnumber__WEBPACK_IMPORTED_MODULE_14__["InputNumberModule"],
                    primeng_rating__WEBPACK_IMPORTED_MODULE_13__["RatingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    primeng_checkbox__WEBPACK_IMPORTED_MODULE_10__["CheckboxModule"],
                    _bluebits_ui__WEBPACK_IMPORTED_MODULE_16__["UiModule"]],
                declarations: [_components_products_search_products_search_component__WEBPACK_IMPORTED_MODULE_3__["ProductsSearchComponent"],
                    _components_categories_banner_categories_banner_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesBannerComponent"],
                    _components_products_item_products_item_component__WEBPACK_IMPORTED_MODULE_6__["ProductsItemComponent"],
                    _components_featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_7__["FeaturedProductsComponent"],
                    _pages_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_9__["ProductsListComponent"], _pages_products_page_products_page_component__WEBPACK_IMPORTED_MODULE_12__["ProductsPageComponent"]],
                exports: [_components_products_search_products_search_component__WEBPACK_IMPORTED_MODULE_3__["ProductsSearchComponent"],
                    _components_categories_banner_categories_banner_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesBannerComponent"], _components_products_item_products_item_component__WEBPACK_IMPORTED_MODULE_6__["ProductsItemComponent"], _components_featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_7__["FeaturedProductsComponent"], _pages_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_9__["ProductsListComponent"], _pages_products_page_products_page_component__WEBPACK_IMPORTED_MODULE_12__["ProductsPageComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "FAkf":
/*!******************************************************!*\
  !*** ./libs/users/src/lib/services/users-service.ts ***!
  \******************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _state_users_facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../state/users.facade */ "AYLS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "PIN6");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var i18n_iso_countries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! i18n-iso-countries */ "Lhj3");
/* harmony import */ var i18n_iso_countries__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(i18n_iso_countries__WEBPACK_IMPORTED_MODULE_5__);









class UsersService {
    constructor(http, usersfacade) {
        this.http = http;
        this.usersfacade = usersfacade;
        this.apiURLUsers = _env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'users';
        i18n_iso_countries__WEBPACK_IMPORTED_MODULE_5__["registerLocale"](__webpack_require__(/*! i18n-iso-countries/langs/en.json */ "0TwG"));
    }
    getUsers() {
        return this.http.get(this.apiURLUsers);
    }
    createUser(user) {
        return this.http.post(this.apiURLUsers, user);
    }
    registerUser(user) {
        return this.http.post(`${this.apiURLUsers}/register`, user);
    }
    getUser(userId) {
        return this.http.get(`${this.apiURLUsers}/${userId}`);
    }
    updateUser(user) {
        return this.http.put(`${this.apiURLUsers}/${user.id}`, user);
    }
    deleteUser(userId) {
        return this.http.delete(`${this.apiURLUsers}/${userId}`);
    }
    getUsersCount() {
        return this.http
            .get(`${this.apiURLUsers}/get/count`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((objectValue) => objectValue.userCount));
    }
    getCountries() {
        return Object.entries(i18n_iso_countries__WEBPACK_IMPORTED_MODULE_5__["getNames"]('en', { select: 'official' })).map((entry) => {
            return {
                id: entry[0],
                name: entry[1]
            };
        });
    }
    getCountry(countryKey) {
        return i18n_iso_countries__WEBPACK_IMPORTED_MODULE_5__["getName"](countryKey, 'en');
    }
    initAppSession() {
        this.usersfacade.buildUserSession();
    }
    observeCurrentUser() {
        return this.usersfacade.currentUser$;
    }
    isCurrentUserAuth() {
        return this.usersfacade.isAuthenticated$;
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_state_users_facade__WEBPACK_IMPORTED_MODULE_0__["UsersFacade"])); };
UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _state_users_facade__WEBPACK_IMPORTED_MODULE_0__["UsersFacade"] }]; }, null); })();


/***/ }),

/***/ "Fgct":
/*!**************************************************************!*\
  !*** ./libs/products/src/lib/services/categories.service.ts ***!
  \**************************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "PIN6");





class CategoriesService {
    constructor(http) {
        this.http = http;
        this.apiURLCategories = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'categories';
    }
    getCategories() {
        return this.http.get(this.apiURLCategories);
    }
    getCategory(categoryId) {
        return this.http.get(`${this.apiURLCategories}/${categoryId}`);
    }
    createCategory(category) {
        return this.http.post(this.apiURLCategories, category);
    }
    updateCategory(category) {
        return this.http.put(`${this.apiURLCategories}/${category.id}`, category);
    }
    deleteCategory(categoryId) {
        return this.http.delete(`${this.apiURLCategories}/${categoryId}`);
    }
}
CategoriesService.ɵfac = function CategoriesService_Factory(t) { return new (t || CategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CategoriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoriesService, factory: CategoriesService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "HYn3":
/*!******************************!*\
  !*** ./libs/ui/src/index.ts ***!
  \******************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ui-module */ "JuAo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return _lib_ui_module__WEBPACK_IMPORTED_MODULE_0__["UiModule"]; });




/***/ }),

/***/ "IroU":
/*!*****************************************************!*\
  !*** ./libs/users/src/lib/state/users.selectors.ts ***!
  \*****************************************************/
/*! exports provided: getUsersState, getUsers, getUserIsAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsersState", function() { return getUsersState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsers", function() { return getUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserIsAuth", function() { return getUserIsAuth; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _users_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.reducer */ "BALR");


// Lookup the 'Users' feature state managed by NgRx
const getUsersState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_users_reducer__WEBPACK_IMPORTED_MODULE_1__["USERS_FEATURE_KEY"]);
const getUsers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUsersState, (state) => state.user);
const getUserIsAuth = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUsersState, (state) => state.isAuthenticated);


/***/ }),

/***/ "JuAo":
/*!**************************************!*\
  !*** ./libs/ui/src/lib/ui-module.ts ***!
  \**************************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/banner/banner.component */ "+uNQ");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/gallery/gallery.component */ "Ljqp");






class UiModule {
}
UiModule.ɵfac = function UiModule_Factory(t) { return new (t || UiModule)(); };
UiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UiModule });
UiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UiModule, { declarations: [_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__["BannerComponent"], _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"]], exports: [_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__["BannerComponent"], _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__["BannerComponent"], _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"]],
                exports: [_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__["BannerComponent"], _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "Ljqp":
/*!*****************************************************************!*\
  !*** ./libs/ui/src/lib/components/gallery/gallery.component.ts ***!
  \*****************************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0) { return { "background-image": a0 }; };
function GalleryComponent_div_0_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_div_0_li_5_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const imageUrl_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.changeSelectedImage(imageUrl_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imageUrl_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, "url(" + imageUrl_r2 + ")"));
} }
function GalleryComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GalleryComponent_div_0_li_5_Template, 1, 3, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.selectedImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.images);
} }
class GalleryComponent {
    ngOnInit() {
        if (this.hasImages) {
            this.selectedImageUrl = this.images[0];
        }
    }
    changeSelectedImage(imageUrl) {
        this.selectedImageUrl = imageUrl;
    }
    get hasImages() {
        var _a;
        return ((_a = this.images) === null || _a === void 0 ? void 0 : _a.length) > 0;
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(); };
GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["ui-gallery"]], inputs: { images: "images" }, decls: 1, vars: 1, consts: [["class", "gallery", 4, "ngIf"], [1, "gallery"], [1, "main-image"], ["alt", "", 3, "src"], [1, "images"], [3, "ngStyle", "click", 4, "ngFor", "ngForOf"], [3, "ngStyle", "click"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GalleryComponent_div_0_Template, 6, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasImages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ui-gallery',
                templateUrl: './gallery.component.html',
                styles: []
            }]
    }], null, { images: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "NvDY":
/*!**********************************************!*\
  !*** ./libs/orders/src/lib/orders.module.ts ***!
  \**********************************************/
/*! exports provided: OrdersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersModule", function() { return OrdersModule; });
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/inputmask */ "CwEU");
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/inputnumber */ "Ks7X");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/cart.service */ "d6aw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_cart_icon_cart_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/cart-icon/cart-icon.component */ "661k");
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/badge */ "fqaE");
/* harmony import */ var _pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/cart-page/cart-page.component */ "cP/G");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_order_summery_order_summery_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/order-summery/order-summery.component */ "eM1+");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pages_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/check-out/check-out.component */ "Q8JK");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var _pages_thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/thank-you/thank-you.component */ "7Qtu");
/* harmony import */ var _bluebits_users__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @bluebits/users */ "qdGH");




















const routes = [
    {
        path: 'cart', component: _pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_8__["CartPageComponent"]
    },
    {
        path: 'checkout',
        canActivate: [_bluebits_users__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]],
        component: _pages_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_12__["CheckOutComponent"]
    },
    {
        path: 'success', component: _pages_thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_15__["ThankYouComponent"]
    }
];
class OrdersModule {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    constructor(cartService) {
        cartService.initialcartStroge();
    }
}
OrdersModule.ɵfac = function OrdersModule_Factory(t) { return new (t || OrdersModule)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"])); };
OrdersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: OrdersModule });
OrdersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], primeng_badge__WEBPACK_IMPORTED_MODULE_7__["BadgeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forChild(routes),
            primeng_button__WEBPACK_IMPORTED_MODULE_2__["ButtonModule"],
            primeng_inputnumber__WEBPACK_IMPORTED_MODULE_1__["InputNumberModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            primeng_inputmask__WEBPACK_IMPORTED_MODULE_0__["InputMaskModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__["InputTextModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__["DropdownModule"],
            _bluebits_users__WEBPACK_IMPORTED_MODULE_16__["UsersModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](OrdersModule, { declarations: [_components_cart_icon_cart_icon_component__WEBPACK_IMPORTED_MODULE_6__["CartIconComponent"], _pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_8__["CartPageComponent"], _components_order_summery_order_summery_component__WEBPACK_IMPORTED_MODULE_10__["OrderSummeryComponent"], _pages_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_12__["CheckOutComponent"], _pages_thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_15__["ThankYouComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], primeng_badge__WEBPACK_IMPORTED_MODULE_7__["BadgeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], primeng_button__WEBPACK_IMPORTED_MODULE_2__["ButtonModule"],
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_1__["InputNumberModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        primeng_inputmask__WEBPACK_IMPORTED_MODULE_0__["InputMaskModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__["InputTextModule"],
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__["DropdownModule"],
        _bluebits_users__WEBPACK_IMPORTED_MODULE_16__["UsersModule"]], exports: [_components_cart_icon_cart_icon_component__WEBPACK_IMPORTED_MODULE_6__["CartIconComponent"], _pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_8__["CartPageComponent"], _components_order_summery_order_summery_component__WEBPACK_IMPORTED_MODULE_10__["OrderSummeryComponent"], _pages_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_12__["CheckOutComponent"], _pages_thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_15__["ThankYouComponent"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](OrdersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], primeng_badge__WEBPACK_IMPORTED_MODULE_7__["BadgeModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forChild(routes),
                    primeng_button__WEBPACK_IMPORTED_MODULE_2__["ButtonModule"],
                    primeng_inputnumber__WEBPACK_IMPORTED_MODULE_1__["InputNumberModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                    primeng_inputmask__WEBPACK_IMPORTED_MODULE_0__["InputMaskModule"],
                    primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__["InputTextModule"],
                    primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__["DropdownModule"],
                    _bluebits_users__WEBPACK_IMPORTED_MODULE_16__["UsersModule"]
                ],
                declarations: [_components_cart_icon_cart_icon_component__WEBPACK_IMPORTED_MODULE_6__["CartIconComponent"], _pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_8__["CartPageComponent"], _components_order_summery_order_summery_component__WEBPACK_IMPORTED_MODULE_10__["OrderSummeryComponent"], _pages_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_12__["CheckOutComponent"], _pages_thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_15__["ThankYouComponent"]],
                exports: [_components_cart_icon_cart_icon_component__WEBPACK_IMPORTED_MODULE_6__["CartIconComponent"], _pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_8__["CartPageComponent"], _components_order_summery_order_summery_component__WEBPACK_IMPORTED_MODULE_10__["OrderSummeryComponent"], _pages_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_12__["CheckOutComponent"], _pages_thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_15__["ThankYouComponent"]],
            }]
    }], function () { return [{ type: _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }]; }, null); })();


/***/ }),

/***/ "O7wU":
/*!**************************************************!*\
  !*** ./libs/orders/src/lib/models/order-item.ts ***!
  \**************************************************/
/*! exports provided: OrderItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItem", function() { return OrderItem; });
class OrderItem {
}


/***/ }),

/***/ "OGUL":
/*!*******************************************************************!*\
  !*** ./apps/ngshop/src/app/shared/messages/messages.component.ts ***!
  \*******************************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _bluebits_orders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bluebits/orders */ "02PH");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/toast */ "Gxio");







class MessagesComponent {
    constructor(cartService, messageService) {
        this.cartService = cartService;
        this.messageService = messageService;
    }
    ngOnInit() {
        this.cartService.cart$.subscribe(() => {
            this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Cart Updated!'
            });
        });
    }
}
MessagesComponent.ɵfac = function MessagesComponent_Factory(t) { return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bluebits_orders__WEBPACK_IMPORTED_MODULE_1__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"])); };
MessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessagesComponent, selectors: [["ngshop-messages"]], decls: 1, vars: 0, template: function MessagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-toast");
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_3__["Toast"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngshop-messages',
                templateUrl: './messages.component.html',
                styles: []
            }]
    }], function () { return [{ type: _bluebits_orders__WEBPACK_IMPORTED_MODULE_1__["CartService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "PIN6":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://localhost:3000/api/v1/'
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

/***/ "Q8JK":
/*!********************************************************************!*\
  !*** ./libs/orders/src/lib/pages/check-out/check-out.component.ts ***!
  \********************************************************************/
/*! exports provided: CheckOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOutComponent", function() { return CheckOutComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cart.service */ "d6aw");
/* harmony import */ var _bluebits_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bluebits/users */ "qdGH");
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/orders.service */ "CkZn");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputmask */ "CwEU");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var _components_order_summery_order_summery_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/order-summery/order-summery.component */ "eM1+");




















function CheckOutComponent_small_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CheckOutComponent_small_16_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CheckOutComponent_small_16_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "email is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CheckOutComponent_small_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CheckOutComponent_small_16_span_1_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CheckOutComponent_small_16_span_2_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.checkoutForm.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.checkoutForm.email.errors.email);
} }
function CheckOutComponent_small_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "phone is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CheckOutComponent_small_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Street is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CheckOutComponent_small_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Apartment is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CheckOutComponent_small_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Zip is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CheckOutComponent_small_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "City is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CheckOutComponent_small_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Country is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
//import { StripeService } from 'ngx-stripe';
class CheckOutComponent {
    constructor(router, formBuilder, cartService, usrService, orderService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.cartService = cartService;
        this.usrService = usrService;
        this.orderService = orderService;
        this.isSubmitted = false;
        this.orderItems = [];
        this.countries = [];
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    }
    ngOnInit() {
        this.initcheckoutForm();
        this.getCartItems();
        this.getCountries();
        this.autoFillUserData();
    }
    autoFillUserData() {
        this.usrService
            .observeCurrentUser()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe$))
            .subscribe((user) => {
            if (user) {
                this.userId = user.id;
                this.checkoutForm.name.setValue(user.name);
                this.checkoutForm.email.setValue(user.email);
                this.checkoutForm.phone.setValue(user.phone);
                this.checkoutForm.city.setValue(user.city);
                this.checkoutForm.street.setValue(user.street);
                this.checkoutForm.country.setValue(user.country);
                this.checkoutForm.zip.setValue(user.zip);
                this.checkoutForm.apartment.setValue(user.apartment);
            }
        });
    }
    initcheckoutForm() {
        this.checkoutFormGroup = this.formBuilder.group({
            name: ['Name1', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            email: ['email@email.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            apartment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            street: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
    getCartItems() {
        const cart = this.cartService.getCart();
        this.orderItems = cart.items.map((item) => {
            return {
                product: item.productId,
                quantity: item.quantity
            };
        });
        console.log(this.orderItems);
    }
    getCountries() {
        this.countries = this.usrService.getCountries();
    }
    backToCart() {
        this.router.navigate(['/cart']);
    }
    get checkoutForm() {
        return this.checkoutFormGroup.controls;
    }
    placeOrder() {
        this.isSubmitted = true;
        if (this.checkoutFormGroup.invalid) {
            return;
        }
        // this.orderService.createCheckoutSession(this.orderItems).subscribe(session=>{
        // console.log(session);
        //})
        const order = {
            orderItems: this.orderItems,
            shippingAddress1: this.checkoutForm.street.value,
            shippingAddress2: this.checkoutForm.apartment.value,
            city: this.checkoutForm.city.value,
            zip: this.checkoutForm.zip.value,
            country: this.checkoutForm.country.value,
            phone: this.checkoutForm.phone.value,
            status: 0,
            user: this.userId,
            dateOrdered: ` ${new Date()}`
        };
        this.orderService.createorder(order).subscribe(() => {
            //redirect to thank u page
            this.cartService.emptyCart();
            this.router.navigate(['/success']);
        }, () => {
            //show error message
        });
    }
}
CheckOutComponent.ɵfac = function CheckOutComponent_Factory(t) { return new (t || CheckOutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_bluebits_users__WEBPACK_IMPORTED_MODULE_4__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_orders_service__WEBPACK_IMPORTED_MODULE_5__["OrdersService"])); };
CheckOutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CheckOutComponent, selectors: [["check-out"]], decls: 54, vars: 12, consts: [[1, "checkout-page"], ["label", "backToCart", "icon", "pi pi-arrow-left", 3, "onClick"], [1, "p-grid", "checkout-form"], [1, "p-col-8"], [3, "formGroup"], [1, "p-fluid", "p-formgrid", "p-grid"], [1, "p-field", "p-col-4"], ["for", "name"], ["formControlName", "name", "id", "name", "type", "text", "pInputText", ""], ["class", "p-error", 4, "ngIf"], ["for", "email"], ["formControlName", "email", "id", "email", "type", "text", "pInputText", ""], ["for", "color"], ["mask", "(999) 999-9999", "formControlName", "phone", "placeholder", "(999) 999-9999"], ["for", "street"], ["formControlName", "street", "id", "street", "type", "text", "pInputText", ""], ["formControlName", "apartment", "id", "apartment", "type", "text", "pInputText", ""], ["formControlName", "zip", "id", "zip", "type", "text", "pInputText", ""], ["for", "city"], ["formControlName", "city", "id", "city", "type", "text", "pInputText", ""], ["for", "country"], ["formControlName", "country", "optionLabel", "name", "optionValue", "id", "filterBy", "name", "placeholder", "Select a Country", 3, "options", "filter", "showClear"], [1, "p-col-4"], [1, "checkout-button"], ["label", "Place-Order", 3, "onClick"], [1, "p-error"], [4, "ngIf"]], template: function CheckOutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function CheckOutComponent_Template_p_button_onClick_2_listener() { return ctx.backToCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CheckOutComponent_small_11_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CheckOutComponent_small_16_Template, 3, 2, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "p-inputMask", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, CheckOutComponent_small_22_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Street");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, CheckOutComponent_small_28_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Apartment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, CheckOutComponent_small_33_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Zip Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, CheckOutComponent_small_38_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, CheckOutComponent_small_43_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "p-dropdown", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, CheckOutComponent_small_49_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "order-summery");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p-button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function CheckOutComponent_Template_p_button_onClick_53_listener() { return ctx.placeOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.checkoutFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkoutForm.name.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkoutForm.email.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkoutForm.phone.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkoutForm.street.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkoutForm.apartment.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkoutForm.zip.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkoutForm.city.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.countries)("filter", true)("showClear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkoutForm.country.invalid && ctx.isSubmitted);
    } }, directives: [primeng_button__WEBPACK_IMPORTED_MODULE_8__["Button"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__["InputText"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], primeng_inputmask__WEBPACK_IMPORTED_MODULE_11__["InputMask"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__["Dropdown"], _components_order_summery_order_summery_component__WEBPACK_IMPORTED_MODULE_13__["OrderSummeryComponent"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CheckOutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'check-out',
                templateUrl: './check-out.component.html',
                styles: []
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }, { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }, { type: _bluebits_users__WEBPACK_IMPORTED_MODULE_4__["UsersService"] }, { type: _services_orders_service__WEBPACK_IMPORTED_MODULE_5__["OrdersService"] }]; }, null); })();


/***/ }),

/***/ "RVbv":
/*!********************************************!*\
  !*** ./libs/users/src/lib/users.module.ts ***!
  \********************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login/login.component */ "3rLv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _state_users_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./state/users.reducer */ "BALR");
/* harmony import */ var _state_users_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./state/users.effects */ "DTYH");
/* harmony import */ var _state_users_facade__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./state/users.facade */ "AYLS");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/signup/signup.component */ "i2X9");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/card */ "QIUk");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/toolbar */ "5EWq");
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputmask */ "CwEU");




















const routes = [
    {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    {
        path: 'register',
        component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"]
    }
];
class UsersModule {
}
UsersModule.ɵfac = function UsersModule_Factory(t) { return new (t || UsersModule)(); };
UsersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UsersModule });
UsersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [_state_users_facade__WEBPACK_IMPORTED_MODULE_11__["UsersFacade"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__["InputTextModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_13__["CardModule"],
            primeng_inputmask__WEBPACK_IMPORTED_MODULE_15__["InputMaskModule"],
            primeng_toolbar__WEBPACK_IMPORTED_MODULE_14__["ToolbarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forFeature(_state_users_reducer__WEBPACK_IMPORTED_MODULE_9__["USERS_FEATURE_KEY"], _state_users_reducer__WEBPACK_IMPORTED_MODULE_9__["reducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forFeature([_state_users_effects__WEBPACK_IMPORTED_MODULE_10__["UsersEffects"]])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UsersModule, { declarations: [_pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__["InputTextModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        primeng_card__WEBPACK_IMPORTED_MODULE_13__["CardModule"],
        primeng_inputmask__WEBPACK_IMPORTED_MODULE_15__["InputMaskModule"],
        primeng_toolbar__WEBPACK_IMPORTED_MODULE_14__["ToolbarModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsFeatureModule"]], exports: [_pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__["InputTextModule"],
                    primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    primeng_card__WEBPACK_IMPORTED_MODULE_13__["CardModule"],
                    primeng_inputmask__WEBPACK_IMPORTED_MODULE_15__["InputMaskModule"],
                    primeng_toolbar__WEBPACK_IMPORTED_MODULE_14__["ToolbarModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forFeature(_state_users_reducer__WEBPACK_IMPORTED_MODULE_9__["USERS_FEATURE_KEY"], _state_users_reducer__WEBPACK_IMPORTED_MODULE_9__["reducer"]),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forFeature([_state_users_effects__WEBPACK_IMPORTED_MODULE_10__["UsersEffects"]])
                ],
                declarations: [_pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"]],
                providers: [_state_users_facade__WEBPACK_IMPORTED_MODULE_11__["UsersFacade"]],
                exports: [_pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Sx6H":
/*!********************************************!*\
  !*** ./libs/orders/src/lib/models/cart.ts ***!
  \********************************************/
/*! exports provided: cart, cartItem, cartItemDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cart", function() { return cart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartItem", function() { return cartItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartItemDetails", function() { return cartItemDetails; });
class cart {
}
class cartItem {
}
class cartItemDetails {
}


/***/ }),

/***/ "TwOB":
/*!***************************************************************!*\
  !*** ./apps/ngshop/src/app/shared/footer/footer.component.ts ***!
  \***************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() { }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["ngshop-footer"]], decls: 15, vars: 0, consts: [[1, "p-grid", "footer-wrapper"], [1, "p-col-8"], [1, "p-col-4", "social"], [1, "nav"], [1, "nav-item"], ["href", "#", 1, "nav-link"], [1, "pi", "pi-facebook"], [1, "pi", "pi-twitter"], [1, "pi", "pi-youtube"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A9 1994 - 2022 E-Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngshop-footer',
                templateUrl: './footer.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "VoFj":
/*!************************************!*\
  !*** ./libs/products/src/index.ts ***!
  \************************************/
/*! exports provided: ProductsModule, CategoriesService, ProductsService, Category, Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_products_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/products.module */ "F+dT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return _lib_products_module__WEBPACK_IMPORTED_MODULE_0__["ProductsModule"]; });

/* harmony import */ var _lib_services_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/services/categories.service */ "Fgct");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return _lib_services_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"]; });

/* harmony import */ var _lib_services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/services/products.service */ "d+1U");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return _lib_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]; });

/* harmony import */ var _lib_models_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/models/category */ "7L/a");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return _lib_models_category__WEBPACK_IMPORTED_MODULE_3__["Category"]; });

/* harmony import */ var _lib_models_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/models/product */ "Z5M5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return _lib_models_product__WEBPACK_IMPORTED_MODULE_4__["Product"]; });








/***/ }),

/***/ "Z5M5":
/*!*************************************************!*\
  !*** ./libs/products/src/lib/models/product.ts ***!
  \*************************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
class Product {
}


/***/ }),

/***/ "aVFS":
/*!*******************************************************************************************!*\
  !*** ./libs/products/src/lib/components/featured-products/featured-products.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: FeaturedProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedProductsComponent", function() { return FeaturedProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/products.service */ "d+1U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _products_item_products_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../products-item/products-item.component */ "lJew");








function FeaturedProductsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "products-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r1);
} }
class FeaturedProductsComponent {
    constructor(prodService) {
        this.prodService = prodService;
        this.featuredProducts = [];
        this.endSubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this._getFeaturedProducts();
    }
    ngOnDestroy() {
        this.endSubs$.next();
        this.endSubs$.complete();
    }
    _getFeaturedProducts() {
        this.prodService
            .getFeaturedProducts(3)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.endSubs$))
            .subscribe((products) => {
            this.featuredProducts = products;
        });
    }
}
FeaturedProductsComponent.ɵfac = function FeaturedProductsComponent_Factory(t) { return new (t || FeaturedProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"])); };
FeaturedProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeaturedProductsComponent, selectors: [["products-featured-products"]], decls: 5, vars: 1, consts: [[1, "featured-products"], [1, "p-grid"], ["class", "p-col-4", 4, "ngFor", "ngForOf"], [1, "p-col-4"], [3, "product"]], template: function FeaturedProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Featured Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FeaturedProductsComponent_div_4_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.featuredProducts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _products_item_products_item_component__WEBPACK_IMPORTED_MODULE_5__["ProductsItemComponent"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeaturedProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'products-featured-products',
                templateUrl: './featured-products.component.html',
                styles: []
            }]
    }], function () { return [{ type: _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] }]; }, null); })();


/***/ }),

/***/ "bd/R":
/*!******************************************************************************!*\
  !*** ./libs/products/src/lib/pages/products-list/products-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProductsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListComponent", function() { return ProductsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/products.service */ "d+1U");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/categories.service */ "Fgct");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/checkbox */ "Ji6n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_products_item_products_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/products-item/products-item.component */ "lJew");












function ProductsListComponent_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-checkbox", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductsListComponent_div_2_div_3_Template_p_checkbox_ngModelChange_1_listener($event) { const category_r3 = ctx.$implicit; return category_r3.checked = $event; })("onChange", function ProductsListComponent_div_2_div_3_Template_p_checkbox_onChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.categoryfilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", category_r3.checked)("inputId", category_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", category_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r3.name);
} }
function ProductsListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductsListComponent_div_2_div_3_Template, 4, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.categories);
} }
function ProductsListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "products-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r7);
} }
class ProductsListComponent {
    constructor(product, catService, route) {
        this.product = product;
        this.catService = catService;
        this.route = route;
        this.products = [];
        this.categories = [];
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            params.categoryid ? this.getproducts([params.categoryid]) : this.getproducts();
            params.categoryid ? (this.iscategoyPage = true) : (this.iscategoyPage = false);
        });
        this.getcategory();
    }
    getproducts(categoryfilter) {
        this.product.getProducts(categoryfilter).subscribe(res => {
            this.products = res;
        });
    }
    getcategory() {
        this.catService.getCategories().subscribe(res => {
            this.categories = res;
        });
    }
    categoryfilter() {
        const selectedcat = this.categories.filter((category) => category.checked).map((category) => category.id);
        console.log(selectedcat);
        this.getproducts(selectedcat);
    }
}
ProductsListComponent.ɵfac = function ProductsListComponent_Factory(t) { return new (t || ProductsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
ProductsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsListComponent, selectors: [["products-list"]], decls: 6, vars: 2, consts: [[1, "products-page"], [1, "p-grid"], ["class", "p-col-3", 4, "ngIf"], [1, "p-col-9"], ["class", "p-col-4", 4, "ngFor", "ngForOf"], [1, "p-col-3"], ["class", "p-field-checkbox", 4, "ngFor", "ngForOf"], [1, "p-field-checkbox"], ["binary", "true", 3, "ngModel", "inputId", "ngModelChange", "onChange"], [3, "for"], [1, "p-col-4"], [3, "product"]], template: function ProductsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductsListComponent_div_2_Template, 4, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductsListComponent_div_5_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.iscategoyPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _components_products_item_products_item_component__WEBPACK_IMPORTED_MODULE_7__["ProductsItemComponent"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'products-list',
                templateUrl: './products-list.component.html',
                styles: []
            }]
    }], function () { return [{ type: _services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"] }, { type: _services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "bzRM":
/*!*****************************************************!*\
  !*** ./apps/ngshop/src/environments/environment.ts ***!
  \*****************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
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

/***/ "cP/G":
/*!********************************************************************!*\
  !*** ./libs/orders/src/lib/pages/cart-page/cart-page.component.ts ***!
  \********************************************************************/
/*! exports provided: CartPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageComponent", function() { return CartPageComponent; });
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/orders.service */ "CkZn");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cart.service */ "d6aw");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_order_summery_order_summery_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/order-summery/order-summery.component */ "eM1+");
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputnumber */ "Ks7X");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");















function CartPageComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function CartPageComponent_div_10_Template_p_button_onClick_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const cartItem_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.deleteCartItem(cartItem_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p-inputNumber", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CartPageComponent_div_10_Template_p_inputNumber_ngModelChange_17_listener($event) { const cartItem_r1 = ctx.$implicit; return cartItem_r1.quantity = $event; })("onInput", function CartPageComponent_div_10_Template_p_inputNumber_onInput_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const cartItem_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.updatecartItemquantity($event, cartItem_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " SubTotal: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cartItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", cartItem_r1.product.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cartItem_r1.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 9, cartItem_r1.product.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showButtons", true)("inputId", cartItem_r1.product.id)("min", 1)("max", 100)("ngModel", cartItem_r1.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 11, cartItem_r1.product.price * cartItem_r1.quantity));
} }
class CartPageComponent {
    constructor(router, cartService, OrdersService) {
        this.router = router;
        this.cartService = cartService;
        this.OrdersService = OrdersService;
        this.cartItemsDetail = [];
        this.cartCount = 0;
        this.endsubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this._getcartDetails();
    }
    ngOnDestroy() {
        this.endsubs$.next();
        this.endsubs$.complete();
    }
    _getcartDetails() {
        this.cartService.cart$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.endsubs$)).subscribe(res => {
            this.cartItemsDetail = [];
            this.cartCount = res === null || res === void 0 ? void 0 : res.items.length;
            res.items.forEach((cartItem) => {
                this.OrdersService.getProduct(cartItem.productId).subscribe(product => {
                    this.cartItemsDetail.push({
                        product: product,
                        quantity: cartItem.quantity
                    });
                });
            });
        });
    }
    backToShop() {
        this.router.navigate(['/products']);
    }
    deleteCartItem(cartItem) {
        this.cartService.deleteCartItem(cartItem.product.id);
    }
    updatecartItemquantity(event, cartItem) {
        this.cartService.setCartItem({
            productId: cartItem.product.id,
            quantity: event.value
        }, true);
    }
}
CartPageComponent.ɵfac = function CartPageComponent_Factory(t) { return new (t || CartPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_orders_service__WEBPACK_IMPORTED_MODULE_0__["OrdersService"])); };
CartPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CartPageComponent, selectors: [["orders-cart-page"]], decls: 13, vars: 2, consts: [[1, "cart-page"], [1, "p-grid"], [1, "p-col-8"], ["label", "Continue shopping", "icon", "pi pi-arrow-left", 3, "onClick"], [1, "cart-shipping", "p-mb-5"], ["class", "cart-item p-mb-5", 4, "ngFor", "ngForOf"], [1, "p-col-4"], [1, "cart-item", "p-mb-5"], [1, "p-grid", "p-fluid"], [1, "p-col-2", "cart-item-image"], [3, "src"], [1, "p-col-7"], [1, "cart-item-name"], [1, "cart-item-price"], [1, "cart-item-remove"], ["icon", "pi pi-trash", 3, "onClick"], [1, "p-col-3"], [1, "cart-item-subtotal"], [1, "p-field", "cart-item-quantity"], ["for", "Quantity"], ["mode", "decimal", 3, "showButtons", "inputId", "min", "max", "ngModel", "ngModelChange", "onInput"], [1, "cart-item-subtotal-amount"]], template: function CartPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function CartPageComponent_Template_p_button_onClick_4_listener() { return ctx.backToShop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Shipping after the payment, Delivery time : 1 to 4 working days ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CartPageComponent_div_10_Template, 23, 13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "order-summery");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("My Cart: ", ctx.cartCount, " Item(s)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.cartItemsDetail);
    } }, directives: [primeng_button__WEBPACK_IMPORTED_MODULE_6__["Button"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _components_order_summery_order_summery_component__WEBPACK_IMPORTED_MODULE_8__["OrderSummeryComponent"], primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__["InputNumber"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CartPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'orders-cart-page',
                templateUrl: './cart-page.component.html',
                styles: []
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] }, { type: _services_orders_service__WEBPACK_IMPORTED_MODULE_0__["OrdersService"] }]; }, null); })();


/***/ }),

/***/ "d+1U":
/*!************************************************************!*\
  !*** ./libs/products/src/lib/services/products.service.ts ***!
  \************************************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "PIN6");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






class ProductsService {
    constructor(http) {
        this.http = http;
        this.apiURLProducts = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'products';
    }
    getProducts(categoryfilter) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (categoryfilter) {
            params = params.append('categories', categoryfilter.join(','));
        }
        return this.http.get(this.apiURLProducts, { params: params });
    }
    createProduct(productData) {
        return this.http.post(this.apiURLProducts, productData);
    }
    getProduct(productId) {
        return this.http.get(`${this.apiURLProducts}/${productId}`);
    }
    updateProduct(productData, productid) {
        return this.http.put(`${this.apiURLProducts}/${productid}`, productData);
    }
    deleteProduct(productId) {
        return this.http.delete(`${this.apiURLProducts}/${productId}`);
    }
    getProductsCount() {
        return this.http
            .get(`${this.apiURLProducts}/get/count`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((objectValue) => objectValue.productCount));
    }
    getFeaturedProducts(count) {
        return this.http.get(`${this.apiURLProducts}/get/featured/${count}`);
    }
}
ProductsService.ɵfac = function ProductsService_Factory(t) { return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductsService, factory: ProductsService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "d3/B":
/*!*********************************************!*\
  !*** ./libs/orders/src/lib/models/order.ts ***!
  \*********************************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
class Order {
}


/***/ }),

/***/ "d6aw":
/*!******************************************************!*\
  !*** ./libs/orders/src/lib/services/cart.service.ts ***!
  \******************************************************/
/*! exports provided: CART_KEY, CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CART_KEY", function() { return CART_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



const CART_KEY = 'cart';
class CartService {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() {
        this.cart$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.getCart());
    }
    initialcartStroge() {
        const cart = this.getCart();
        if (!cart) {
            const initialcart = {
                items: []
            };
            const initialcartJson = JSON.stringify(initialcart);
            localStorage.setItem(CART_KEY, initialcartJson);
        }
    }
    emptyCart() {
        const initialcart = {
            items: []
        };
        const initialcartJson = JSON.stringify(initialcart);
        localStorage.setItem(CART_KEY, initialcartJson);
        this.cart$.next(initialcart);
    }
    getCart() {
        const cartJsonString = localStorage.getItem(CART_KEY);
        const cart = JSON.parse(cartJsonString);
        return cart;
    }
    setCartItem(cartItem, updatecartItem) {
        const cart = this.getCart();
        const cartItemexist = cart.items.find((item) => item.productId === cartItem.productId);
        if (cartItemexist) {
            cart.items.map((item) => {
                if (item.productId === cartItem.productId) {
                    if (updatecartItem) {
                        item.quantity = cartItem.quantity;
                    }
                    else {
                        item.quantity = item.quantity + cartItem.quantity;
                    }
                    return item;
                }
            });
        }
        else {
            cart.items.push(cartItem);
        }
        const cartJson = JSON.stringify(cart);
        localStorage.setItem(CART_KEY, cartJson);
        this.cart$.next(cart);
        return cart;
    }
    deleteCartItem(productId) {
        const cart = this.getCart();
        const newCart = cart.items.filter((item) => item.productId !== productId);
        cart.items = newCart;
        const cartJsonString = JSON.stringify(cart);
        localStorage.setItem(CART_KEY, cartJsonString);
        this.cart$.next(cart);
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(); };
CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "eM1+":
/*!*********************************************************************************!*\
  !*** ./libs/orders/src/lib/components/order-summery/order-summery.component.ts ***!
  \*********************************************************************************/
/*! exports provided: OrderSummeryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSummeryComponent", function() { return OrderSummeryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cart.service */ "d6aw");
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/orders.service */ "CkZn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "jIHw");












function OrderSummeryComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function OrderSummeryComponent_div_20_Template_p_button_onClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.gotocheckout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class OrderSummeryComponent {
    constructor(cartService, orderService, router) {
        this.cartService = cartService;
        this.orderService = orderService;
        this.router = router;
        this.endsubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.ischeckout = false;
        this.router.url.includes('checkout') ? this.ischeckout = true : this.ischeckout = false;
    }
    ngOnInit() {
        this.getOrderSummery();
    }
    ngOnDestroy() {
        this.endsubs$.next();
        this.endsubs$.complete();
    }
    getOrderSummery() {
        this.cartService.cart$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.endsubs$)).subscribe(cart => {
            this.totalPrice = 0;
            if (cart) {
                cart.items.map((item) => {
                    this.orderService.getProduct(item.productId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(product => {
                        this.totalPrice += product.price * item.quantity;
                    });
                });
            }
        });
    }
    gotocheckout() {
        this.router.navigate(['/checkout']);
    }
}
OrderSummeryComponent.ɵfac = function OrderSummeryComponent_Factory(t) { return new (t || OrderSummeryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_orders_service__WEBPACK_IMPORTED_MODULE_5__["OrdersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
OrderSummeryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderSummeryComponent, selectors: [["order-summery"]], decls: 21, vars: 7, consts: [[1, "order-summery"], [1, "summery-price"], ["class", "checkout-button", 4, "ngIf"], [1, "checkout-button"], ["label", "CheckOut", 3, "onClick"]], template: function OrderSummeryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Oder Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Item Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Delivery Charges");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "free");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, OrderSummeryComponent_div_20_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 3, ctx.totalPrice));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 5, ctx.totalPrice));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.ischeckout);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], primeng_button__WEBPACK_IMPORTED_MODULE_7__["Button"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderSummeryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'order-summery',
                templateUrl: './order-summery.component.html',
                styles: []
            }]
    }], function () { return [{ type: _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] }, { type: _services_orders_service__WEBPACK_IMPORTED_MODULE_5__["OrdersService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "i2X9":
/*!*************************************************************!*\
  !*** ./libs/users/src/lib/pages/signup/signup.component.ts ***!
  \*************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _bluebits_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bluebits/users */ "qdGH");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/card */ "QIUk");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputmask */ "CwEU");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toolbar */ "5EWq");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ "jIHw");


















class SignupComponent {
    constructor(formBuilder, messageService, usersService, location, route) {
        this.formBuilder = formBuilder;
        this.messageService = messageService;
        this.usersService = usersService;
        this.location = location;
        this.route = route;
        this.editmode = false;
        this.isSubmitted = false;
    }
    ngOnInit() {
        this._initUserForm();
    }
    _initUserForm() {
        this.form = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            phone: [''],
            isAdmin: [''],
            street: [''],
            apartment: [''],
            zip: [''],
            city: [''],
            country: ['']
        });
    }
    get userForm() {
        return this.form.controls;
    }
    onSubmit() {
        this.isSubmitted = true;
        if (this.form.invalid) {
            return;
        }
        const user = {
            id: this.currentUserId,
            name: this.userForm.name.value,
            email: this.userForm.email.value,
            password: this.userForm.password.value,
            phone: this.userForm.phone.value,
            street: this.userForm.street.value,
            apartment: this.userForm.apartment.value,
            zip: this.userForm.zip.value,
            city: this.userForm.city.value,
        };
        if (this.editmode) {
            this.updateuser(user);
        }
        else {
            this._addUser(user);
        }
    }
    updateuser(user) {
    }
    _addUser(user) {
        this.usersService.registerUser(user).subscribe((user) => {
            this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: `User ${user.name} is created!`
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["timer"])(2000)
                .toPromise()
                .then(() => {
                this.location.back();
            });
        }, () => {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'User is not created!'
            });
        });
    }
    onCancle() {
        this.location.back();
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bluebits_users__WEBPACK_IMPORTED_MODULE_3__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["sign-up"]], decls: 56, vars: 1, consts: [[1, "admin-page"], [1, "p-grid"], [1, "p-col-12"], [3, "formGroup"], [1, "p-fluid", "p-formgrid", "p-grid"], [1, "p-field", "p-col-4"], ["for", "name"], ["formControlName", "name", "id", "name", "type", "text", "pInputText", ""], [1, "p-error"], ["for", "email"], ["formControlName", "email", "id", "email", "type", "text", "pInputText", ""], ["for", "password"], ["formControlName", "password", "id", "password", "type", "password", "pInputText", ""], ["for", "color"], ["mask", "(999) 999-9999", "formControlName", "phone", "placeholder", "(999) 999-9999"], ["for", "street"], ["formControlName", "street", "id", "street", "type", "text", "pInputText", ""], ["formControlName", "apartment", "id", "apartment", "type", "text", "pInputText", ""], ["formControlName", "zip", "id", "zip", "type", "text", "pInputText", ""], ["for", "city"], ["formControlName", "city", "id", "city", "type", "text", "pInputText", ""], [1, "p-toolbar-group-left"], [1, "p-toolbar-group-right"], ["styleClass", "p-button-primary p-mr-2", "label", "submit", 3, "click"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "email is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "email is invalid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Password is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "p-inputMask", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "phone is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Street");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Apartment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Zip Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p-button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_p_button_click_55_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [primeng_card__WEBPACK_IMPORTED_MODULE_7__["Card"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__["InputText"], primeng_inputmask__WEBPACK_IMPORTED_MODULE_9__["InputMask"], primeng_toolbar__WEBPACK_IMPORTED_MODULE_10__["Toolbar"], primeng_button__WEBPACK_IMPORTED_MODULE_11__["Button"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sign-up',
                templateUrl: './signup.component.html',
                styles: []
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }, { type: _bluebits_users__WEBPACK_IMPORTED_MODULE_3__["UsersService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "l0/T":
/*!********************************************************!*\
  !*** ./libs/users/src/lib/services/jwt.interceptor.ts ***!
  \********************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localstorage.service */ "lkXw");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "PIN6");





class JwtInterceptor {
    constructor(localStorage) {
        this.localStorage = localStorage;
    }
    intercept(request, next) {
        const token = this.localStorage.getToken();
        const isAPIUrl = request.url.startsWith(_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl);
        if (token && isAPIUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(request);
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_localstorage_service__WEBPACK_IMPORTED_MODULE_1__["LocalstorageService"])); };
JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _localstorage_service__WEBPACK_IMPORTED_MODULE_1__["LocalstorageService"] }]; }, null); })();


/***/ }),

/***/ "lJew":
/*!***********************************************************************************!*\
  !*** ./libs/products/src/lib/components/products-item/products-item.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ProductsItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsItemComponent", function() { return ProductsItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _bluebits_orders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bluebits/orders */ "02PH");
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/product */ "Z5M5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ "jIHw");








function ProductsItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function ProductsItemComponent_div_0_Template_p_button_onClick_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.addToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/products/" + ctx_r0.product.id)("src", ctx_r0.product.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, ctx_r0.product.price));
} }
class ProductsItemComponent {
    constructor(cartService) {
        this.cartService = cartService;
    }
    ngOnInit() { }
    addToCart() {
        const cartItem = {
            productId: this.product.id,
            quantity: 1
        };
        this.cartService.setCartItem(cartItem);
    }
}
ProductsItemComponent.ɵfac = function ProductsItemComponent_Factory(t) { return new (t || ProductsItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bluebits_orders__WEBPACK_IMPORTED_MODULE_1__["CartService"])); };
ProductsItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsItemComponent, selectors: [["products-item"]], inputs: { product: "product" }, decls: 1, vars: 1, consts: [["class", "product-item", 4, "ngIf"], [1, "product-item"], [1, "product-item-wrapper"], ["alt", "", 1, "image", 3, "routerLink", "src"], [1, "name"], [1, "price"], ["styleClass", "p-mt-3 add-to-cart", "label", "Add to cart", "icon", "pi pi-shopping-cart", 3, "onClick"]], template: function ProductsItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductsItemComponent_div_0_Template, 9, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], primeng_button__WEBPACK_IMPORTED_MODULE_5__["Button"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'products-item',
                templateUrl: './products-item.component.html',
                styles: []
            }]
    }], function () { return [{ type: _bluebits_orders__WEBPACK_IMPORTED_MODULE_1__["CartService"] }]; }, { product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "lkXw":
/*!*************************************************************!*\
  !*** ./libs/users/src/lib/services/localstorage.service.ts ***!
  \*************************************************************/
/*! exports provided: LocalstorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalstorageService", function() { return LocalstorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const TOKEN = 'jwtToken';
class LocalstorageService {
    setToken(data) {
        localStorage.setItem(TOKEN, data);
    }
    getToken() {
        return localStorage.getItem(TOKEN);
    }
    removeToken() {
        localStorage.removeItem(TOKEN);
    }
    isvalidToken() {
        const token = this.getToken();
        if (token) {
            const tokenDecode = JSON.parse(atob(token.split('.')[1]));
            return !this._tokenExpired(tokenDecode.exp);
        }
        else {
            return false;
        }
    }
    getUserIdFromToken() {
        const token = this.getToken();
        if (token) {
            const tokenDecode = JSON.parse(atob(token.split('.')[1]));
            if (tokenDecode) {
                return tokenDecode.userId;
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    }
    _tokenExpired(expiration) {
        return Math.floor(new Date().getTime() / 1000) >= expiration;
    }
}
LocalstorageService.ɵfac = function LocalstorageService_Factory(t) { return new (t || LocalstorageService)(); };
LocalstorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalstorageService, factory: LocalstorageService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalstorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "oYjm":
/*!******************************************************************************!*\
  !*** ./libs/products/src/lib/pages/products-page/products-page.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProductsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageComponent", function() { return ProductsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _bluebits_orders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bluebits/orders */ "02PH");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/products.service */ "d+1U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_src_lib_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../ui/src/lib/components/gallery/gallery.component */ "Ljqp");
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/rating */ "Js94");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputnumber */ "Ks7X");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ "jIHw");
















function ProductsPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ui-gallery", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p-rating", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductsPageComponent_div_0_Template_p_rating_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.product.rating = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p-inputNumber", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductsPageComponent_div_0_Template_p_inputNumber_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.Quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsPageComponent_div_0_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.addTocart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx_r0.product.images);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.product.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.product.rating)("cancel", false)("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 13, ctx_r0.product.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 15, ctx_r0.product.price + 100));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.Quantity)("showButtons", true)("min", 1)("max", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.product.richDescription, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class ProductsPageComponent {
    constructor(productService, route, cartService) {
        this.productService = productService;
        this.route = route;
        this.cartService = cartService;
        this.endsubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.Quantity = 1;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            if (params.productid) {
                this._getproduct(params.productid);
            }
        });
    }
    ngOnDestroy() {
        this.endsubs$.next();
        this.endsubs$.complete();
    }
    _getproduct(id) {
        this.productService.getProduct(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.endsubs$)).subscribe((product) => {
            this.product = product;
        });
    }
    addTocart() {
        const cartItem = {
            productId: this.product.id,
            quantity: this.Quantity,
        };
        this.cartService.setCartItem(cartItem);
    }
}
ProductsPageComponent.ɵfac = function ProductsPageComponent_Factory(t) { return new (t || ProductsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bluebits_orders__WEBPACK_IMPORTED_MODULE_2__["CartService"])); };
ProductsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsPageComponent, selectors: [["products-products-page"]], decls: 1, vars: 1, consts: [["class", "product-page", 4, "ngIf"], [1, "product-page"], [1, "p-grid"], [1, "p-col-6"], [3, "images"], [1, "p-col-6", "product"], [1, "product-name"], [1, "product-desc"], [1, "product-rating"], [3, "ngModel", "cancel", "disabled", "ngModelChange"], [1, "product-price"], [1, "price-before"], [1, "product-quantity"], [1, "p-field", "p-col-12", "p-md-3", "p-p-0"], ["for", "Quantity"], ["mode", "decimal", "inputId", "minmax-buttons", 3, "ngModel", "showButtons", "min", "max", "ngModelChange"], [1, "product-actions"], ["pButton", "", "pRipple", "", "type", "button", "label", "buy now", 1, "p-button-rounded", "p-mr-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Add to cart", 1, "p-button-rounded", 3, "click"], [1, "p-grid", "product-rich-desc"], [1, "p-col-12"], [3, "innerHTML"]], template: function ProductsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductsPageComponent_div_0_Template, 28, 17, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ui_src_lib_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_7__["GalleryComponent"], primeng_rating__WEBPACK_IMPORTED_MODULE_8__["Rating"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], primeng_inputnumber__WEBPACK_IMPORTED_MODULE_10__["InputNumber"], primeng_button__WEBPACK_IMPORTED_MODULE_11__["ButtonDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'products-products-page',
                templateUrl: './products-page.component.html',
                styles: []
            }]
    }], function () { return [{ type: _services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _bluebits_orders__WEBPACK_IMPORTED_MODULE_2__["CartService"] }]; }, null); })();


/***/ }),

/***/ "ofze":
/*!************************************************!*\
  !*** ./libs/orders/src/lib/order.constants.ts ***!
  \************************************************/
/*! exports provided: ORDER_STATUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER_STATUS", function() { return ORDER_STATUS; });
const ORDER_STATUS = {
    0: {
        label: 'Pending',
        color: 'primary'
    },
    1: {
        label: 'Processed',
        color: 'warning'
    },
    2: {
        label: 'Shipped',
        color: 'warning'
    },
    3: {
        label: 'Delivered',
        color: 'success'
    },
    4: {
        label: 'Failed',
        color: 'danger'
    }
};


/***/ }),

/***/ "qdGH":
/*!*********************************!*\
  !*** ./libs/users/src/index.ts ***!
  \*********************************/
/*! exports provided: buildUserSession, init, buildUserSessionSuccess, buildUserSessionFailed, USERS_FEATURE_KEY, initialUsersState, usersAdapter, reducer, getUsersState, getUsers, getUserIsAuth, UsersFacade, UsersModule, UsersService, User, AuthGuard, JwtInterceptor, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_state_users_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/state/users.actions */ "wxs0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildUserSession", function() { return _lib_state_users_actions__WEBPACK_IMPORTED_MODULE_0__["buildUserSession"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "init", function() { return _lib_state_users_actions__WEBPACK_IMPORTED_MODULE_0__["init"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildUserSessionSuccess", function() { return _lib_state_users_actions__WEBPACK_IMPORTED_MODULE_0__["buildUserSessionSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildUserSessionFailed", function() { return _lib_state_users_actions__WEBPACK_IMPORTED_MODULE_0__["buildUserSessionFailed"]; });

/* harmony import */ var _lib_state_users_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/state/users.reducer */ "BALR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "USERS_FEATURE_KEY", function() { return _lib_state_users_reducer__WEBPACK_IMPORTED_MODULE_1__["USERS_FEATURE_KEY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialUsersState", function() { return _lib_state_users_reducer__WEBPACK_IMPORTED_MODULE_1__["initialUsersState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usersAdapter", function() { return _lib_state_users_reducer__WEBPACK_IMPORTED_MODULE_1__["usersAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _lib_state_users_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"]; });

/* harmony import */ var _lib_state_users_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/state/users.selectors */ "IroU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUsersState", function() { return _lib_state_users_selectors__WEBPACK_IMPORTED_MODULE_2__["getUsersState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUsers", function() { return _lib_state_users_selectors__WEBPACK_IMPORTED_MODULE_2__["getUsers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserIsAuth", function() { return _lib_state_users_selectors__WEBPACK_IMPORTED_MODULE_2__["getUserIsAuth"]; });

/* harmony import */ var _lib_state_users_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/state/users.models */ "9K5x");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_state_users_facade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/state/users.facade */ "AYLS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersFacade", function() { return _lib_state_users_facade__WEBPACK_IMPORTED_MODULE_4__["UsersFacade"]; });

/* harmony import */ var _lib_users_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/users.module */ "RVbv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return _lib_users_module__WEBPACK_IMPORTED_MODULE_5__["UsersModule"]; });

/* harmony import */ var _lib_services_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/services/users-service */ "FAkf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return _lib_services_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"]; });

/* harmony import */ var _lib_models_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/models/user */ "D3hr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _lib_models_user__WEBPACK_IMPORTED_MODULE_7__["User"]; });

/* harmony import */ var _lib_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/services/auth-guard.service */ "x3Nr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _lib_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]; });

/* harmony import */ var _lib_services_jwt_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/services/jwt.interceptor */ "l0/T");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _lib_services_jwt_interceptor__WEBPACK_IMPORTED_MODULE_9__["JwtInterceptor"]; });

/* harmony import */ var _lib_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/services/auth.service */ "v6z4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _lib_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]; });

// export * from './lib/state/users.actions';
// export * from './lib/state/users.reducer';
// export * from './lib/state/users.selectors';
// export * from './lib/state/users.models';
// export * from './lib/state/users.facade';
// export * from './lib/users.module';
// export * from './lib/services/users-service';
// export * from './lib/models/user';
// export * from './lib/services/auth-guard.service'
// export * from './lib/services/jwt.interceptor'
// export * from './lib/services/auth.service'
//IN CASE IF ABOVE LINKS ARE NOT WORKING PLEASE ENABLE BELOW LINKS













/***/ }),

/***/ "sSEx":
/*!***************************************************************!*\
  !*** ./apps/ngshop/src/app/shared/header/header.component.ts ***!
  \***************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _libs_products_src_lib_components_products_search_products_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../libs/products/src/lib/components/products-search/products-search.component */ "yIum");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav/nav.component */ "zApM");
/* harmony import */ var _libs_orders_src_lib_components_cart_icon_cart_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../libs/orders/src/lib/components/cart-icon/cart-icon.component */ "661k");





class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["ngshop-header"]], decls: 12, vars: 0, consts: [[1, "p-grid"], [1, "p-col-3"], [1, "logo"], ["src", "assets/images/logo.png", "alt", "logo"], [1, "p-col-4", "search"], [1, "p-col-3", "p-offset-1", "navigation"], [1, "p-col-1", "tools"], [1, "pi", "pi-user"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "products-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ngshop-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "orders-cart-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_libs_products_src_lib_components_products_search_products_search_component__WEBPACK_IMPORTED_MODULE_1__["ProductsSearchComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], _libs_orders_src_lib_components_cart_icon_cart_icon_component__WEBPACK_IMPORTED_MODULE_3__["CartIconComponent"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                // eslint-disable-next-line @angular-eslint/component-selector
                selector: 'ngshop-header',
                templateUrl: './header.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "tdpJ":
/*!********************************************************************!*\
  !*** ./apps/ngshop/src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _libs_ui_src_lib_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../libs/ui/src/lib/components/banner/banner.component */ "+uNQ");
/* harmony import */ var _libs_products_src_lib_components_categories_banner_categories_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../libs/products/src/lib/components/categories-banner/categories-banner.component */ "9OeO");
/* harmony import */ var _libs_products_src_lib_components_featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../libs/products/src/lib/components/featured-products/featured-products.component */ "aVFS");





class HomePageComponent {
    constructor() { }
    ngOnInit() { }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["bluebits-home-page"]], decls: 3, vars: 0, template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ui-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "categories-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "products-featured-products");
    } }, directives: [_libs_ui_src_lib_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"], _libs_products_src_lib_components_categories_banner_categories_banner_component__WEBPACK_IMPORTED_MODULE_2__["CategoriesBannerComponent"], _libs_products_src_lib_components_featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_3__["FeaturedProductsComponent"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'bluebits-home-page',
                templateUrl: './home-page.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "v6z4":
/*!*****************************************************!*\
  !*** ./libs/users/src/lib/services/auth.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "PIN6");
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./localstorage.service */ "lkXw");









class AuthService {
    constructor(http, router, tokenservice) {
        this.http = http;
        this.router = router;
        this.tokenservice = tokenservice;
        this.apiURLUsers = _env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'users';
    }
    login(email, password) {
        return this.http.post(`${this.apiURLUsers}/login`, { email, password });
    }
    logout() {
        this.tokenservice.removeToken();
        this.router.navigate(['/login']);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"] }]; }, null); })();


/***/ }),

/***/ "wxs0":
/*!***************************************************!*\
  !*** ./libs/users/src/lib/state/users.actions.ts ***!
  \***************************************************/
/*! exports provided: buildUserSession, init, buildUserSessionSuccess, buildUserSessionFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildUserSession", function() { return buildUserSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildUserSessionSuccess", function() { return buildUserSessionSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildUserSessionFailed", function() { return buildUserSessionFailed; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const buildUserSession = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Users] build user session');
const init = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Users Page] Init');
const buildUserSessionSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Users/API] Load Users Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const buildUserSessionFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Users] Build  Users Sessions failed');


/***/ }),

/***/ "x3Nr":
/*!***********************************************************!*\
  !*** ./libs/users/src/lib/services/auth-guard.service.ts ***!
  \***********************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localstorage.service */ "lkXw");






class AuthGuard {
    constructor(router, localstorage) {
        this.router = router;
        this.localstorage = localstorage;
    }
    canActivate(route, state) {
        const token = this.localstorage.getToken();
        if (token) {
            const tokenDecode = JSON.parse(atob(token.split('.')[1]));
            if (tokenDecode.isAdmin && !this._tokenExpired(tokenDecode.exp))
                return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
    _tokenExpired(expiration) {
        return Math.floor(new Date().getTime() / 1000) >= expiration;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_localstorage_service__WEBPACK_IMPORTED_MODULE_2__["LocalstorageService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _localstorage_service__WEBPACK_IMPORTED_MODULE_2__["LocalstorageService"] }]; }, null); })();


/***/ }),

/***/ "xIsW":
/*!******************************************************************!*\
  !*** ./apps/ngshop/$$_lazy_route_resource lazy namespace object ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "xIsW";

/***/ }),

/***/ "yIum":
/*!***************************************************************************************!*\
  !*** ./libs/products/src/lib/components/products-search/products-search.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ProductsSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsSearchComponent", function() { return ProductsSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProductsSearchComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductsSearchComponent.ɵfac = function ProductsSearchComponent_Factory(t) { return new (t || ProductsSearchComponent)(); };
ProductsSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsSearchComponent, selectors: [["products-search"]], decls: 3, vars: 0, consts: [[1, "products-search"], [1, "pi", "pi-search"], ["type", "text", "placeholder", "Find products", "id", "search", "name", "search", 1, "products-search-input"]], template: function ProductsSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'products-search',
                templateUrl: './products-search.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zApM":
/*!*********************************************************!*\
  !*** ./apps/ngshop/src/app/shared/nav/nav.component.ts ***!
  \*********************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NavComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["ngshop-nav"]], decls: 13, vars: 0, consts: [[1, "nav"], ["routerLink", "/"], ["routerLink", "/products"], ["routerLink", "/contact"], ["routerLink", "/register"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngshop-nav',
                templateUrl: './nav.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map