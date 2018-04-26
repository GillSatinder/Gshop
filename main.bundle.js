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

/***/ "../../../../../src/app/admin-auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminAuthGuardService = /** @class */ (function () {
    function AdminAuthGuardService(auth, userService) {
        this.auth = auth;
        this.userService = userService;
    }
    AdminAuthGuardService.prototype.canActivate = function () {
        var _this = this;
        return this.auth.user$.switchMap(function (user) {
            return _this.userService.getUser();
        })
            .map(function (appUser) { return appUser.isAdmin; });
    };
    AdminAuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]])
    ], AdminAuthGuardService);
    return AdminAuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin-orders/admin-orders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-orders/admin-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  admin-orders works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-orders/admin-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminOrdersComponent; });
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

var AdminOrdersComponent = /** @class */ (function () {
    function AdminOrdersComponent() {
    }
    AdminOrdersComponent.prototype.ngOnInit = function () {
    };
    AdminOrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-orders',
            template: __webpack_require__("../../../../../src/app/admin/admin-orders/admin-orders.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin-orders/admin-orders.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminOrdersComponent);
    return AdminOrdersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin-products/admin-products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-products/admin-products.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n<a routerLink=\"/admin/products/new\" class=\"btn btn-primary\">New Product</a>\n</p>\n<p>\n  <input\n    #query\n    (keyup)=\"filter(query.value)\"\n    type=\"text\" class=\"form-control\" placeholder=\"Search. . .\">\n</p>\n\n\n<table class=\"table\">\n  <thead>\n  <tr>\n    <th>Title</th>\n    <th>Price</th>\n\n    <th></th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let p of filteredProducts\">\n    <td>{{p.title}}</td>\n    <td>{{p.price | currency: 'USD': \"true\"}}</td>\n    <td>\n      <a [routerLink]=\"['/admin/products/', p.product_id]\">Edit</a>\n    </td>\n  </tr>\n  </tbody>\n</table>\n\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-products/admin-products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminProductsComponent = /** @class */ (function () {
    function AdminProductsComponent(http) {
        var _this = this;
        this.http = http;
        this.subscription = this.http.get('http://ec2-13-236-67-227.ap-southeast-2.compute.amazonaws.com/api/products')
            .subscribe(function (res) {
            _this.filteredProducts = _this.products = Object.values(res);
        });
    }
    AdminProductsComponent.prototype.ngOnInit = function () {
    };
    AdminProductsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AdminProductsComponent.prototype.filter = function (query) {
        // this.filteredProducts = (query) ?
        //  this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : this.products;
        if (query) {
            this.filteredProducts = this.products.filter(function (p) { return p.title.toLowerCase().includes(query.toLowerCase()); });
        }
        else {
            this.filteredProducts = this.products;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], AdminProductsComponent.prototype, "products", void 0);
    AdminProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-products',
            template: __webpack_require__("../../../../../src/app/admin/admin-products/admin-products.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin-products/admin-products.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], AdminProductsComponent);
    return AdminProductsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/product-form/product-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/product-form/product-form.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form #form=\"ngForm\" (ngSubmit)=\"save(form.value)\">\n\n        <div class=\"form-group\">\n\n          <label for=\"product_id\">Product ID</label>\n          <input\n          #product_id=\"ngModel\"\n          name=\"product_id\"\n          id=\"product_id\"\n          [(ngModel)]=\"product.product_id\"\n          type=\"number\"\n          class=\"form-control\"\n          required>\n          <div class=\"alert alert-danger\" *ngIf=\"product_id.touched && product_id.invalid\">\n            Product ID is required, each product has unique ID.\n          </div>\n\n          <label for=\"title\">Title</label>\n          <input\n                 #title=\"ngModel\"\n                 name=\"title\"\n                 id=\"title\"\n                 [(ngModel)]=\"product.title\"\n                 type=\"text\"\n                 class=\"form-control\"\n                 required>\n\n          <div class=\"alert alert-danger\" *ngIf=\"title.touched && title.invalid\">\n            Title is required.\n          </div>\n\n          <label for=\"price\">Price</label>\n          <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">$</span>\n            </div>\n            <input\n              [(ngModel)]=\"product.price\"\n              type=\"number\"\n              name=\"price\"\n              #price=\"ngModel\"\n              id=\"price\"\n              class=\"form-control\"\n              required [min]=\"0\">\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\">.00</span>\n            </div>\n          </div>\n          <div class=\"alert alert-danger\" *ngIf=\"price.touched && price.invalid\">\n            <div *ngIf=\"price.errors.required\">Price is required.</div>\n            <div *ngIf=\"price.errors.min\">Price should be 0 or higher.</div>\n          </div>\n        </div>\n\n\n        <div class=\"form-group\">\n          <label for=\"category\">Category</label>\n          <select [(ngModel)]=\"product.category\" id=\"category\"\n                  name=\"category\" class=\"form-control\" #category=\"ngModel\">\n\n            <option *ngFor=\"let c of categories$\" [value]=\"c.category\">\n              {{c.category }}\n            </option>\n          </select>\n          <div class=\"alert alert-danger\"\n               *ngIf=\"category.invalid && category.touched\">\n            Category is required.\n          </div>\n        </div>\n\n\n        <div class=\"form-group\">\n          <label for=\"imageUrl\">Image Url</label>\n          <input #imageUrl=\"ngModel\" [(ngModel)]=\"product.imageUrl\" id=\"imageUrl\"\n                 type=\"text\" name=\"imageUrl\" class=\"form-control\" required>\n          <div class=\"alert alert-danger\"\n               *ngIf=\"imageUrl.invalid && imageUrl.touched\">\n            ImageUrl is required.\n          </div>\n        </div>\n        <button class=\"btn btn-primary\">Save</button>\n        <button type=\"button\" (click)=\"deleteProduct()\" class=\"btn btn-danger\">Delete</button>\n      </form>\n    </div>\n\n    <div class=\"col-md-6\">\n     <app-product-card [product]=\"product\" [showActions]=\"false\"></app-product-card>\n    </div>\n  </div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/admin/product-form/product-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json'
    })
};
var ProductFormComponent = /** @class */ (function () {
    function ProductFormComponent(http, route, router, location) {
        var _this = this;
        this.http = http;
        this.route = route;
        this.router = router;
        this.location = location;
        this.product = {};
        this.http.get('http://ec2-13-236-67-227.ap-southeast-2.compute.amazonaws.com/api/categories')
            .subscribe(function (res) {
            _this.categories$ = res;
        });
        this.product_id = this.route.snapshot.paramMap.get('product_id');
        console.log('ID ' + this.product_id);
        this.getProduct(this.product_id);
    }
    ProductFormComponent.prototype.save = function (product) {
        if (this.product_id) {
            this.update(this.product_id, this.product);
        }
        else {
            var body = {
                product_id: product.product_id,
                title: product.title,
                price: product.price,
                category: product.category,
                imageUrl: product.imageUrl
            };
            var url = 'http://ec2-13-236-67-227.ap-southeast-2.compute.amazonaws.com/api/products';
            this.http.post(url, body, httpOptions)
                .subscribe(function (res) { });
            this.router.navigate(['/admin/products']);
        }
    };
    ProductFormComponent.prototype.getProduct = function (product_id) {
        var _this = this;
        if (product_id) {
            var p = this.http
                .get('http://ec2-13-236-67-227.ap-southeast-2.compute.amazonaws.com/api/products/' + product_id + '/edit');
            p.subscribe(function (res) {
                _this.product = res;
            });
        }
        else {
            this.product = {};
        }
    };
    ProductFormComponent.prototype.update = function (product_id, product) {
        var body = {
            product_id: product.product_id,
            title: product.title,
            price: product.price,
            category: product.category,
            imageUrl: product.imageUrl
        };
        var url = 'http://ec2-13-236-67-227.ap-southeast-2.compute.amazonaws.com/api/products/' + product_id;
        this.http.put(url, body, httpOptions)
            .subscribe(function (res) {
            console.log(res);
        });
        this.router.navigate(['/admin/products']);
    };
    ProductFormComponent.prototype.deleteProduct = function () {
        var url = 'http://ec2-13-236-67-227.ap-southeast-2.compute.amazonaws.com/api/products/';
        if (!confirm('Are you sure you want to delete this product?')) {
            return;
        }
        console.log('ID ' + this.product_id);
        this.http.delete(url + this.product_id)
            .subscribe(function (res) { });
        this.router.navigate(['/admin/products']);
    };
    ProductFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-form',
            template: __webpack_require__("../../../../../src/app/admin/product-form/product-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/product-form/product-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]])
    ], ProductFormComponent);
    return ProductFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_success_order_success_component__ = __webpack_require__("../../../../../src/app/order-success/order-success.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__check_out_check_out_component__ = __webpack_require__("../../../../../src/app/check-out/check-out.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__my_orders_my_orders_component__ = __webpack_require__("../../../../../src/app/my-orders/my-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shopping_cart_shopping_cart_component__ = __webpack_require__("../../../../../src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__admin_admin_products_admin_products_component__ = __webpack_require__("../../../../../src/app/admin/admin-products/admin-products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_product_form_product_form_component__ = __webpack_require__("../../../../../src/app/admin/product-form/product-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__admin_admin_orders_admin_orders_component__ = __webpack_require__("../../../../../src/app/admin/admin-orders/admin-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












/* tslint:disable */
var routes = [
    { path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__products_products_component__["a" /* ProductsComponent */]
    },
    { path: 'products',
        component: __WEBPACK_IMPORTED_MODULE_2__products_products_component__["a" /* ProductsComponent */]
    },
    { path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */]
    },
    { path: 'shopping/cart',
        component: __WEBPACK_IMPORTED_MODULE_7__shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */],
    },
    { path: 'order/success',
        component: __WEBPACK_IMPORTED_MODULE_3__order_success_order_success_component__["a" /* OrderSuccessComponent */]
    },
    { path: 'check/out',
        component: __WEBPACK_IMPORTED_MODULE_5__check_out_check_out_component__["a" /* CheckOutComponent */]
    },
    { path: 'my/orders',
        component: __WEBPACK_IMPORTED_MODULE_6__my_orders_my_orders_component__["a" /* MyOrdersComponent */]
    },
    { path: 'user/signup',
        component: __WEBPACK_IMPORTED_MODULE_11__signup_signup_component__["a" /* SignupComponent */]
    },
    { path: 'admin/products/new',
        component: __WEBPACK_IMPORTED_MODULE_9__admin_product_form_product_form_component__["a" /* ProductFormComponent */]
    },
    { path: 'admin/products/:product_id',
        component: __WEBPACK_IMPORTED_MODULE_9__admin_product_form_product_form_component__["a" /* ProductFormComponent */]
    },
    { path: 'admin/products',
        component: __WEBPACK_IMPORTED_MODULE_8__admin_admin_products_admin_products_component__["a" /* AdminProductsComponent */]
    },
    { path: 'admin/orders',
        component: __WEBPACK_IMPORTED_MODULE_10__admin_admin_orders_admin_orders_component__["a" /* AdminOrdersComponent */]
    },
    { path: 'shopping-cart/products',
        component: __WEBPACK_IMPORTED_MODULE_7__shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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

module.exports = "\n<app-bs-navbar></app-bs-navbar>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(auth, router, userService) {
        this.auth = auth;
        this.userService = userService;
        auth.user$.subscribe(function (user) {
            if (user) {
                userService.save();
                var returnUrl = localStorage.getItem('returnUrl');
                router.navigateByUrl(returnUrl);
            }
        });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bs_navbar_bs_navbar_component__ = __webpack_require__("../../../../../src/app/bs-navbar/bs-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shopping_cart_shopping_cart_component__ = __webpack_require__("../../../../../src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__products_products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__check_out_check_out_component__ = __webpack_require__("../../../../../src/app/check-out/check-out.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__order_success_order_success_component__ = __webpack_require__("../../../../../src/app/order-success/order-success.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__my_orders_my_orders_component__ = __webpack_require__("../../../../../src/app/my-orders/my-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__admin_admin_products_admin_products_component__ = __webpack_require__("../../../../../src/app/admin/admin-products/admin-products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__admin_admin_orders_admin_orders_component__ = __webpack_require__("../../../../../src/app/admin/admin-orders/admin-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__auth_guard_service__ = __webpack_require__("../../../../../src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__admin_auth_guard_service__ = __webpack_require__("../../../../../src/app/admin-auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__admin_product_form_product_form_component__ = __webpack_require__("../../../../../src/app/admin/product-form/product-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__category_service__ = __webpack_require__("../../../../../src/app/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__product_service__ = __webpack_require__("../../../../../src/app/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__products_product_filter_product_filter_component__ = __webpack_require__("../../../../../src/app/products/product-filter/product-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__product_card_product_card_component__ = __webpack_require__("../../../../../src/app/product-card/product-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__shopping_cart_service__ = __webpack_require__("../../../../../src/app/shopping-cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_28__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__bs_navbar_bs_navbar_component__["a" /* BsNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */],
                __WEBPACK_IMPORTED_MODULE_9__products_products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__check_out_check_out_component__["a" /* CheckOutComponent */],
                __WEBPACK_IMPORTED_MODULE_11__order_success_order_success_component__["a" /* OrderSuccessComponent */],
                __WEBPACK_IMPORTED_MODULE_12__my_orders_my_orders_component__["a" /* MyOrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_13__admin_admin_products_admin_products_component__["a" /* AdminProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__admin_admin_orders_admin_orders_component__["a" /* AdminOrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_15__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_22__admin_product_form_product_form_component__["a" /* ProductFormComponent */],
                __WEBPACK_IMPORTED_MODULE_29__products_product_filter_product_filter_component__["a" /* ProductFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_30__product_card_product_card_component__["a" /* ProductCardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */],
                __WEBPACK_IMPORTED_MODULE_32__signup_signup_component__["a" /* SignupComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_16__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_26_ng2_validation__["CustomFormsModule"],
                __WEBPACK_IMPORTED_MODULE_27__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_17__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_18__auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_19__auth_guard_service__["a" /* AuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_20__user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_21__admin_auth_guard_service__["a" /* AdminAuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_23__category_service__["a" /* CategoryService */],
                __WEBPACK_IMPORTED_MODULE_27__angular_common_http__["a" /* HttpClient */],
                __WEBPACK_IMPORTED_MODULE_31__shopping_cart_service__["a" /* ShoppingCartService */],
                __WEBPACK_IMPORTED_MODULE_25__product_service__["a" /* ProductService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(user, router) {
        this.user = user;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (next, state) {
        this.router.navigate(['login']);
        return this.user.getUserLoggedIn();
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = /** @class */ (function () {
    function AuthService(afAuth, route, userService) {
        this.afAuth = afAuth;
        this.route = route;
        this.userService = userService;
        this.user$ = afAuth.authState;
    }
    AuthService.prototype.login = function () {
        var returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        localStorage.setItem('returnUrl', returnUrl);
        var x = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider();
        this.afAuth.auth.signInWithRedirect(x);
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    Object.defineProperty(AuthService.prototype, "appUser$", {
        get: function () {
            return this.user$.switchMap(function (user) {
                if (user) {
                    // return this.userService.getUser(user.uid);
                }
                return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].of(null);
            });
        },
        enumerable: true,
        configurable: true
    });
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/bs-navbar/bs-navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropdown-toggle {\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bs-navbar/bs-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-top\">\n  <a class=\"navbar-brand\"\n     routerLink=\"/\">Gshop</a>\n  <button class=\"navbar-toggler\"\n          type=\"button\" data-toggle=\"collapse\"\n          data-target=\"#navbarsExampleDefault\"\n          aria-controls=\"navbarsExampleDefault\"\n          aria-expanded=\"false\"\n          aria-label=\"Toggle navigation\">\n\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/login\">Login/Signup</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/shopping/cart\">\n          Shopping Cart\n          <span class=\"badge badge-warning badge-pill\">\n          {{ tQ1 }}</span>\n        </a>\n      </li>\n      <li  ngbDropdown class=\"nav-item dropdown\">\n        <a ngbDropdownToggle\n           class=\"nav-link dropdown-toggle\"\n           id=\"dropdown01\" data-toggle=\"dropdown\"\n           aria-haspopup=\"true\" aria-expanded=\"false\"></a>\n        <div ngbDropdownMenu\n             class=\"dropdown-menu\"\n             aria-labelledby=\"dropdown01\">\n          <a class=\"dropdown-item\"\n             routerLink=\"/my/orders\">My Orders</a>\n          <a class=\"dropdown-item\"\n             routerLink=\"/admin/orders\">Manage Orders</a>\n          <a class=\"dropdown-item\"\n             routerLink=\"/admin/products\">Manage Products</a>\n          <a class=\"dropdown-item\" >Logout</a>\n          <a class=\"dropdown-item\"\n             routerLink=\"/shopping-cart/products\">Shopping Cart Demo</a>\n        </div>\n      </li>\n    </ul>\n\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/bs-navbar/bs-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* tslint:disable */
var BsNavbarComponent = /** @class */ (function () {
    function BsNavbarComponent(userService) {
        this.userService = userService;
    }
    BsNavbarComponent.prototype.ngOnInit = function () {
        this.tQ1 = JSON.parse(localStorage.getItem('totalQuantity'));
    };
    BsNavbarComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.getLoggedUser()
            .subscribe(function (res) {
            _this.loggedUser = Object.values(res)[1];
        });
        console.log(this.loggedUser);
    };
    BsNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bs-navbar',
            template: __webpack_require__("../../../../../src/app/bs-navbar/bs-navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/bs-navbar/bs-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]])
    ], BsNavbarComponent);
    return BsNavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryService = /** @class */ (function () {
    function CategoryService(http) {
        this.http = http;
    }
    // getAllCategories() {
    //   return this.http.get('http://localhost:8000/api/categories');
    // }
    CategoryService.prototype.getAllCategories = function () {
        return this.http.get('http://ec2-13-236-67-227.ap-southeast-2.compute.amazonaws.com/api/categories');
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "../../../../../src/app/check-out/check-out.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/check-out/check-out.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  check-out works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/check-out/check-out.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckOutComponent; });
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

var CheckOutComponent = /** @class */ (function () {
    function CheckOutComponent() {
    }
    CheckOutComponent.prototype.ngOnInit = function () {
    };
    CheckOutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-check-out',
            template: __webpack_require__("../../../../../src/app/check-out/check-out.component.html"),
            styles: [__webpack_require__("../../../../../src/app/check-out/check-out.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckOutComponent);
    return CheckOutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form\n  #f=\"ngForm\"\n  (ngSubmit)=\"loginUser(f.value)\">\n  <h2>Please sign in</h2>\n\n  <div *ngIf=\"invalidLogin\" class=\"alert alert-danger\">\n    Invalid username and/or password.\n  </div>\n  <div class=\"form-group\">\n    <label\n      for=\"emailId\">\n      Email address\n    </label>\n    <input\n      type=\"email\"\n      ngModel\n      name=\"emailId\"\n      #emailId=\"ngModel\"\n      class=\"form-control\"\n      id=\"emailId\"\n      aria-describedby=\"emailHelp\"\n      placeholder=\"Enter email\"\n      autocomplete=\"off\">\n  </div>\n\n  <div class=\"form-group\">\n    <label\n      for=\"password\">\n      Password\n    </label>\n    <input\n      type=\"password\"\n      class=\"form-control\"\n      id=\"password\"\n      placeholder=\"Password\"\n      ngModel\n      name=\"password\"\n      #password=\"ngModel\"\n      autocomplete=\"off\">\n  </div>\n  <button\n     type=\"submit\"\n     class=\"btn btn-primary\">\n     Submit\n  </button>\n  <br>\n  <p>Don't have an account? SignUp </p>\n\n <a [routerLink]=\"['/user/signup']\">Sign up</a>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/* tslint:disable */
var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LoginComponent.prototype.loginUser = function (f) {
        var _this = this;
        var email = Object.values(f)[0];
        var password = Object.values(f)[1];
        var x = this.userService.checkUser(email, password);
        x.subscribe(function (res) {
            _this.user = res;
        });
        if (this.user) {
            this.router.navigate(['/']);
            this.userService.setUserLoggedIn();
        }
        else {
            this.router.navigate(['/login']);
            this.invalidLogin = true;
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/my-orders/my-orders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/my-orders/my-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  my-orders works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/my-orders/my-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyOrdersComponent; });
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

var MyOrdersComponent = /** @class */ (function () {
    function MyOrdersComponent() {
    }
    MyOrdersComponent.prototype.ngOnInit = function () {
    };
    MyOrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-my-orders',
            template: __webpack_require__("../../../../../src/app/my-orders/my-orders.component.html"),
            styles: [__webpack_require__("../../../../../src/app/my-orders/my-orders.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MyOrdersComponent);
    return MyOrdersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/order-success/order-success.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/order-success/order-success.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  order-success works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/order-success/order-success.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderSuccessComponent; });
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

var OrderSuccessComponent = /** @class */ (function () {
    function OrderSuccessComponent() {
    }
    OrderSuccessComponent.prototype.ngOnInit = function () {
    };
    OrderSuccessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order-success',
            template: __webpack_require__("../../../../../src/app/order-success/order-success.component.html"),
            styles: [__webpack_require__("../../../../../src/app/order-success/order-success.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderSuccessComponent);
    return OrderSuccessComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product-card/product-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-footer {\n  padding: 0;\n}\n.card {\n  margin-bottom: 30px;\n}\n.card-footer button {\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-card/product-card.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n<div class=\"card\"  *ngIf=\"product.title\">\n\n<img *ngIf=\"product.imageUrl\"\n     class=\"card-img-top\"\n     [src]=\"product.imageUrl\"\n     alt=\"{{product.title}}\">\n\n<div class=\"card-body\">\n  <h4 class=\"card-title\">{{product.title}}</h4><h6>Product ID : {{product.product_id}}</h6>\n  <p class=\"card-text\">{{product.price | currency: 'USD': 'true'}}</p>\n</div>\n\n<div class=\"card-footer\" *ngIf=\"showActions\">\n  <button\n    *ngIf=\"getQuantity(product.product_id) === 0; else updateQuantity\"\n    (click)=\"addToCart(product)\"\n    class=\"btn btn-secondary btn-block\">Add to Cart</button>\n\n  <ng-template #updateQuantity>\n    <div class=\"row no-gutters\">\n      <div class=\"col-2\">\n        <button class=\"btn btn-secondary btn-block\" (click)=\"deleteFromCart(product)\">-</button>\n      </div>\n      <div class=\"col text-center\">\n        {{getQuantity(product.product_id)}} in cart\n      </div>\n      <div class=\"col-2\">\n        <button class=\"btn btn-secondary btn-block\" (click)=\"addToCart(product)\">+</button>\n      </div>\n    </div>\n  </ng-template>\n\n</div>\n</div>\n\n\n<!--THIS IS WORKING AND IS USED IN ALL THE PAGES AS CARD BODY-->\n\n\n"

/***/ }),

/***/ "../../../../../src/app/product-card/product-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopping_cart_service__ = __webpack_require__("../../../../../src/app/shopping-cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductCardComponent = /** @class */ (function () {
    function ProductCardComponent(cartService) {
        this.cartService = cartService;
        this.showActions = true;
    }
    ProductCardComponent.prototype.addToCart = function (product) {
        this.cartService.addToCart(product);
    };
    ProductCardComponent.prototype.deleteFromCart = function (product) {
        this.cartService.deleteFromCart(product);
    };
    ProductCardComponent.prototype.ngOnInit = function () { };
    ProductCardComponent.prototype.getQuantity = function (id) {
        var cart = JSON.parse(localStorage.getItem('cart'));
        if (id && cart) {
            for (var x = 0; x < cart.length; ++x) {
                var item = JSON.parse(cart[x]);
                if (item.product.product_id === id) {
                    return item.quantity;
                }
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductCardComponent.prototype, "product", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductCardComponent.prototype, "showActions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Array)
    ], ProductCardComponent.prototype, "items", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductCardComponent.prototype, "shoppingCart", void 0);
    ProductCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-card',
            template: __webpack_require__("../../../../../src/app/product-card/product-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product-card/product-card.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shopping_cart_service__["a" /* ShoppingCartService */]])
    ], ProductCardComponent);
    return ProductCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json'
    })
};
var ProductService = /** @class */ (function () {
    function ProductService(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
    }
    ProductService.prototype.getAllProducts = function () {
        return this.http.get('http://ec2-13-236-67-227.ap-southeast-2.compute.amazonaws.com/api/products');
    };
    ProductService.prototype.getProductById = function (id) {
        var _this = this;
        if (id) {
            this.http.get('http://localhost:8000/api/products/' + id)
                .subscribe(function (result) {
                _this.product = result;
            });
            console.log('Here is the product' + this.product.title);
            return this.product;
        }
        else {
            this.product = null;
            return this.product;
        }
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "../../../../../src/app/products/product-filter/product-filter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sticky-top {\n  top:80px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/product-filter/product-filter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sticky-top\">\n\n  <div class=\"list-group\">\n    <a\n      class=\"list-group-item list-group-item-action\"\n      [class.active]=\"!category\"\n      routerLink=\"/\"\n    >All Categories</a>\n    <a\n      *ngFor=\"let c of categories\"\n      routerLink=\"/\"\n      [queryParams]=\"{category: c.category}\"\n      class=\"list-group-item list-group-item-action\"\n      [class.active]=\"category === c.category\">\n      {{c.category}}\n    </a>\n  </div>\n\n\n\n</div>\n\n\n\n\n <!--THIS IS TO FILTER THE PRODUCTS BASED ON THE CATEGORIES-->\n <!--IN OTHER WORDS IT IS THE SIDE OF THE MAIN PAGE ON HOME PAGE-->\n"

/***/ }),

/***/ "../../../../../src/app/products/product-filter/product-filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__category_service__ = __webpack_require__("../../../../../src/app/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductFilterComponent = /** @class */ (function () {
    function ProductFilterComponent(categoryService) {
        this.categoryService = categoryService;
    }
    ProductFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryService.getAllCategories()
            .subscribe(function (res) {
            _this.categories = res;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductFilterComponent.prototype, "categories", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductFilterComponent.prototype, "category", void 0);
    ProductFilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-filter',
            template: __webpack_require__("../../../../../src/app/products/product-filter/product-filter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/products/product-filter/product-filter.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__category_service__["a" /* CategoryService */]])
    ], ProductFilterComponent);
    return ProductFilterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/products/products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"row\">\n  <div class=\"col-3\">\n <app-product-filter [category]=\"category\"></app-product-filter>\n  </div>\n\n\n  <div class=\"col\">\n    <div class=\"row\">\n      <ng-container *ngFor=\"let p of filteredProducts; let i = index\">\n      <div class=\"col\">\n        <app-product-card [product]=\"p\" [shoppingCart]=\"cart\"></app-product-card>\n      </div>\n        <div *ngIf=\"(i + 1) % 3 === 0\" class=\"w-100\"></div>\n      </ng-container>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_service__ = __webpack_require__("../../../../../src/app/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shopping_cart_service__ = __webpack_require__("../../../../../src/app/shopping-cart.service.ts");
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
    function ProductsComponent(route, productService, shoppingCartService) {
        var _this = this;
        this.route = route;
        this.productService = productService;
        this.shoppingCartService = shoppingCartService;
        this.products = [];
        this.productService.getAllProducts()
            .switchMap(function (products) {
            _this.products = Object.values(products);
            return route.queryParamMap;
        })
            .subscribe(function (params) {
            _this.category = params.get('category');
            _this.filteredProducts = (_this.category) ?
                _this.products.filter(function (p) { return p.category === _this.category; }) : _this.products;
        });
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.cart = localStorage.getItem('cart');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductsComponent.prototype, "categories", void 0);
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-products',
            template: __webpack_require__("../../../../../src/app/products/products.component.html"),
            styles: [__webpack_require__("../../../../../src/app/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_4__shopping_cart_service__["a" /* ShoppingCartService */]])
    ], ProductsComponent);
    return ProductsComponent;
}());

// this.http.get('http://localhost:8000/api/products')
//   .switchMap(products => {this.products = Object.values(products);
//   return route.queryParamMap; })
//   .subscribe(params => {
//       this.category = params.get('category');
//
//       this.filteredProducts = (this.category) ?
//         this.products.filter(p => p.category === this.category) : this.products;
//   });
//
// this.http.get('http://localhost:8000/api/categories')
//   .subscribe(res => {
//     this.categories = res;
//   });


/***/ }),

/***/ "../../../../../src/app/shopping-cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* tslint:disable */
var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json'
    })
};
var ShoppingCartService = /** @class */ (function () {
    function ShoppingCartService() {
        this.showActions = true;
        this.items = [];
        this.totalQuantity = 0;
        this.total = 0;
        console.log('These are the items ' + this.items);
    }
    ShoppingCartService.prototype.loadCart = function () {
        this.items = [];
        this.total = 0;
        this.totalQuantity = 0;
        var cart = JSON.parse(localStorage.getItem('cart'));
        for (var i = 0; i < cart.length; ++i) {
            var item = JSON.parse(cart[i]);
            this.items.push({
                product: item.product,
                quantity: item.quantity
            });
            this.total += item.product.price * item.quantity;
            this.totalQuantity += item.quantity;
            localStorage.setItem('totalQuantity', JSON.stringify(this.totalQuantity));
        }
    };
    ShoppingCartService.prototype.addToCart = function (product) {
        var product_id = product.product_id;
        if (product_id) {
            var item = {
                product: product,
                quantity: 1
            };
            if (localStorage.getItem('cart') == null) {
                var cart = [];
                cart.push(JSON.stringify(item));
                localStorage.setItem('cart', JSON.stringify(cart));
            }
            else {
                var cart = JSON.parse(localStorage.getItem('cart'));
                var index = -1;
                for (var i = 0; i < cart.length; i++) {
                    var citem = JSON.parse(cart[i]);
                    if (citem.product.product_id === product_id) {
                        index = i;
                        break;
                    }
                }
                if (index === -1) {
                    cart.push(JSON.stringify(item));
                    localStorage.setItem('cart', JSON.stringify(cart));
                }
                else {
                    item = JSON.parse(cart[index]);
                    item.quantity = item.quantity + 1;
                    cart[index] = JSON.stringify(item);
                    localStorage.setItem('cart', JSON.stringify(cart));
                }
            }
            this.loadCart();
        }
        else {
            this.loadCart();
        }
    };
    ShoppingCartService.prototype.deleteFromCart = function (product) {
        var product_id = product.product_id;
        if (product_id) {
            var item = {
                product: product,
                quantity: -1
            };
            if (localStorage.getItem('cart') == null) {
                var cart = [];
                cart.push(JSON.stringify(item));
                localStorage.setItem('cart', JSON.stringify(cart));
            }
            else {
                var cart = JSON.parse(localStorage.getItem('cart'));
                var index = -1;
                for (var i = 0; i < cart.length; i++) {
                    var citem = JSON.parse(cart[i]);
                    if (citem.product.product_id === product_id) {
                        index = i;
                        break;
                    }
                }
                if (index === -1) {
                    cart.push(JSON.stringify(item));
                    localStorage.setItem('cart', JSON.stringify(cart));
                }
                else {
                    item = JSON.parse(cart[index]);
                    item.quantity = item.quantity - 1;
                    cart[index] = JSON.stringify(item);
                    localStorage.setItem('cart', JSON.stringify(cart));
                }
            }
            this.loadCart();
        }
        else {
            this.loadCart();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ShoppingCartService.prototype, "product", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ShoppingCartService.prototype, "showActions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Array)
    ], ShoppingCartService.prototype, "items", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ShoppingCartService.prototype, "shoppingCart", void 0);
    ShoppingCartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ShoppingCartService);
    return ShoppingCartService;
}());



/***/ }),

/***/ "../../../../../src/app/shopping-cart/shopping-cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopping-cart/shopping-cart.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Cart Info ! !</h3>\n\n<table class=\"table\">\n  <thead>\n  <tr>\n    <th scope=\"col\">Title</th>\n    <th scope=\"col\">Product Price</th>\n    <th scope=\"col\">Product Quantity</th>\n    <th scope=\"col\">Total Price</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let item of items\">\n    <td>{{item.product.title}}</td>\n    <td>{{item.product.price}}</td>\n    <td>{{item.quantity}}</td>\n    <td>{{item.product.price * item.quantity}}</td>\n  </tr>\n <tr>\n   <td colspan=\"5\" align=\"right\">\n     Total Price\n   </td>\n   <td>{{total}}</td>\n </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/shopping-cart/shopping-cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartComponent; });
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

/* tslint:disable */
var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent() {
        this.showActions = true;
        this.items = [];
        this.cart = [];
        this.total = 0;
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        if (this.cart.length)
            console.log('Whats is this ' + this.cart.length);
        this.cart = JSON.parse(localStorage.getItem('cart'));
        for (var x = 0; x < this.cart.length; ++x) {
            this.items[x] = JSON.parse(this.cart[x]);
            this.total += this.items[x].quantity * this.items[x].product.price;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ShoppingCartComponent.prototype, "product", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ShoppingCartComponent.prototype, "showActions", void 0);
    ShoppingCartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__("../../../../../src/app/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shopping-cart/shopping-cart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<form\n  #form=\"ngForm\"\n  (ngSubmit)=\"signUp(form.value)\">\n  <h2>Please sign in</h2>\n\n  <div class=\"form-group\">\n    <label\n      for=\"firstname\">\n      First Name\n    </label>\n    <input\n      type=\"text\"\n      ngModel\n      [(ngModel)]=\"user.firstname\"\n      name=\"firstname\"\n      #firstname=\"ngModel\"\n      class=\"form-control\"\n      id=\"firstname\"\n      placeholder=\"Enter firstname\"\n      autocomplete=\"off\"\n      required>\n  </div>\n  <div class=\"form-group\">\n    <label\n      for=\"lastname\">\n      Last Name\n    </label>\n    <input\n      type=\"text\"\n      ngModel\n      name=\"lastname\"\n      #lastName=\"ngModel\"\n      class=\"form-control\"\n      id=\"lastname\"\n      placeholder=\"Enter lastname\"\n      [(ngModel)]=\"user.lastname\"\n      autocomplete=\"off\"\n      required>\n  </div>\n\n  <div class=\"form-group\">\n    <label\n      for=\"email\">\n      Email address\n    </label>\n    <input\n      type=\"email\"\n      ngModel\n      name=\"email\"\n      #email=\"ngModel\"\n      class=\"form-control\"\n      id=\"email\"\n      placeholder=\"Enter email\"\n      [(ngModel)]=\"user.email\"\n      autocomplete=\"off\">\n  </div>\n  <div class=\"form-group\">\n    <label\n      for=\"password\">\n      Password\n    </label>\n    <input\n      type=\"password\"\n      class=\"form-control\"\n      id=\"password\"\n      placeholder=\"Password\"\n      ngModel\n      name=\"password\"\n      #password=\"ngModel\"\n      [(ngModel)]=\"user.password\"\n     autocomplete=\"off\">\n  </div>\n  <div class=\"form-check\">\n    <input\n      type=\"checkbox\"\n      class=\"form-check-input\"\n      id=\"isAdmin\"\n      ngModel\n      name=\"isAdmin\"\n      [(ngModel)]=\"user.isAdmin\"\n      #isAdmin=\"ngModel\"\n      >\n    <label class=\"form-check-label\" for=\"isAdmin\">Want to Sign in as Admin (with Additional features)</label>\n  </div>\n  <button\n    type=\"submit\"\n    class=\"btn btn-primary\">\n    Submit\n  </button>\n  <a [routerLink]=\"['/login']\">Login</a>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = /** @class */ (function () {
    function SignupComponent(userService) {
        this.userService = userService;
        this.user = {};
    }
    SignupComponent.prototype.signUp = function (user) {
        this.userService.saveUser(user);
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/* tslint:disable */
var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json'
    })
};
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.isUserLoggedIn = false;
    }
    UserService.prototype.saveUser = function (user) {
        var body = {
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            password: user.password,
            isAdmin: user.isAdmin
        };
        var url = 'http://localhost:8000/api/users';
        this.http.post(url, body, httpOptions)
            .subscribe(function (res) { });
    };
    UserService.prototype.checkUser = function (email, password) {
        var url = 'http://localhost:8000/api/auth';
        var body = { email: email, password: password };
        this.userInformation = this.http.post(url, body, httpOptions);
        return this.http.post(url, body, httpOptions);
    };
    UserService.prototype.setUserLoggedIn = function () {
        this.isUserLoggedIn = true;
    };
    UserService.prototype.getUserLoggedIn = function () {
        return this.isUserLoggedIn;
    };
    UserService.prototype.getLoggedUser = function () {
        return this.userInformation;
    };
    UserService.prototype.getUser = function () {
        return this.getLoggedUser();
    };
    UserService.prototype.save = function () {
        return null;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
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
    production: false,
    firebase: {
        apiKey: 'AIzaSyD3n3I9Amj0Ch6KZMbPUVGINWw7Dapy_2U',
        authDomain: 'gshop-e2765.firebaseapp.com',
        databaseURL: 'https://gshop-e2765.firebaseio.com',
        projectId: 'gshop-e2765',
        storageBucket: 'gshop-e2765.appspot.com',
        messagingSenderId: '684167814156'
    }
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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