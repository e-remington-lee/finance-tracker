(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account/account.component.html":
/*!************************************************!*\
  !*** ./src/app/account/account.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  account works!\n</p>\n"

/***/ }),

/***/ "./src/app/account/account.component.scss":
/*!************************************************!*\
  !*** ./src/app/account/account.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/account/account.component.ts":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AccountComponent = /** @class */ (function () {
    function AccountComponent() {
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.scss */ "./src/app/account/account.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _buy_sell_buy_sell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buy-sell/buy-sell.component */ "./src/app/buy-sell/buy-sell.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");








var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'buySell', component: _buy_sell_buy_sell_component__WEBPACK_IMPORTED_MODULE_4__["BuySellComponent"] },
    { path: 'portfolio', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioComponent"] },
    { path: 'account', component: _account_account_component__WEBPACK_IMPORTED_MODULE_6__["AccountComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav>\n</app-nav>\n\n\n<section>\n<router-outlet></router-outlet>\n</section>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _buy_sell_buy_sell_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./buy-sell/buy-sell.component */ "./src/app/buy-sell/buy-sell.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                _buy_sell_buy_sell_component__WEBPACK_IMPORTED_MODULE_9__["BuySellComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_10__["PortfolioComponent"],
                _account_account_component__WEBPACK_IMPORTED_MODULE_11__["AccountComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/buy-sell/buy-sell.component.html":
/*!**************************************************!*\
  !*** ./src/app/buy-sell/buy-sell.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class='container'>\n  <div class='row' id='stocks'>\n      <div class='card' >\n          <div class='card-body'>\n            <div class='col-3' *ngFor='let stock of TSLA'>\n                <b>{{stock.company}} : {{stock.symbol}}</b>\n            </div>\n            <div class='col-7' *ngFor='let stock of TSLA'>\n                <p><b>Current Price:</b> ${{stock.price}}</p>\n                <p><b>Percent Change:</b> {{stock.changePercent}}% </p>\n                <p><b>Daily Gain/Loss:</b> ${{stock.change}} </p>       \n            </div>\n            <div class='col-2'>\n                <button type='button' class='btn btn-primary' data-toggle='modal' data-target='#buyTSLA'>Buy</button>\n                <button type='button' class='btn btn-primary' data-toggle='' data-target=''>Sell</button>\n            </div>\n          </div>\n        </div>\n        <div class='card' >\n          <div class='card-body'>\n            <div class='col-3' *ngFor='let stock of AMZN'>\n                <b>{{stock.company}} : {{stock.symbol}}</b>\n            </div>\n            <div class='col-7' *ngFor='let stock of AMZN'>\n                <p><b>Current Price:</b> ${{stock.price}}</p>\n                <p><b>Percent Change:</b> {{stock.changePercent}}% </p>\n                <p><b>Daily Gain/Loss:</b> ${{stock.change}} </p>       \n            </div>\n            <div class='col-2'>\n                <button type='button' class='btn btn-primary' data-toggle='modal' data-target='#buyAMZN'>Buy</button>\n                <button type='button' class='btn btn-primary' data-toggle='' data-target=''>Sell</button>\n            </div>\n          </div>\n        </div>\n        <div class='card' >\n          <div class='card-body'>\n            <div class='col-3' *ngFor='let stock of FB'>\n                <b>{{stock.company}} : {{stock.symbol}}</b>\n            </div>\n            <div class='col-7' *ngFor='let stock of FB'>\n                <p><b>Current Price:</b> ${{stock.price}}</p>\n                <p><b>Percent Change:</b> {{stock.changePercent}}% </p>\n                <p><b>Daily Gain/Loss:</b> ${{stock.change}} </p>       \n            </div>\n            <div class='col-2'>\n                <button type='button' class='btn btn-primary' data-toggle='modal' data-target='#buyFB'>Buy</button>\n                <button type='button' class='btn btn-primary' data-toggle='' data-target=''>Sell</button>\n            </div>\n          </div>\n        </div>\n  </div>\n</body>\n\n\n\n\n\n\n<div class=\"modal fade\" id=\"buyTSLA\" tabindex='-1'>\n  <div class=\"modal-dialog\" role=\"document\">    \n    <div class=\"modal-content\">\n      <div class=\"modal-header\" *ngFor='let stocks of TSLA'>\n        <h5 class=\"modal-title\" >Buy {{stocks.company}}</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n          <form>\n              <div class=\"form-group\">\n                <label for=\"email\" class=\"col-form-label\" *ngFor='let stocks of TSLA'>Number of shares at: ${{stocks.price}}</label>\n                <input id='buyForm' type=\"number\" [(ngModel)]='shares' class=\"form-control\" name='bob' required>\n              </div>\n            </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)='buyStockButton2(\"TSLA\")'>Buy</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n  <div class=\"modal fade\" id=\"buyAMZN\" tabindex='-1'>\n    <div class=\"modal-dialog\" role=\"document\">    \n      <div class=\"modal-content\">\n        <div class=\"modal-header\" *ngFor='let stocks of AMZN'>\n          <h5 class=\"modal-title\" >Buy {{stocks.company}}</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n            <form>\n                <div class=\"form-group\">\n                  <label for=\"email\" class=\"col-form-label\" *ngFor='let stocks of AMZN'>Number of shares at: ${{stocks.price}}</label>\n                  <input id='buyForm' type=\"number\" [(ngModel)]='shares' class=\"form-control\" name='bob' required>\n                </div>\n              </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)='buyStockButton2(\"AMZN\")'>Buy</button>\n        </div>\n      </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"buyFB\" tabindex='-1'>\n  <div class=\"modal-dialog\" role=\"document\">    \n    <div class=\"modal-content\">\n      <div class=\"modal-header\" *ngFor='let stocks of FB'>\n        <h5 class=\"modal-title\" >Buy {{stocks.company}}</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n          <form>\n              <div class=\"form-group\">\n                <label for=\"email\" class=\"col-form-label\" *ngFor='let stocks of FB'>Number of shares at: ${{stocks.price}}</label>\n                <input id='buyForm' type=\"number\" [(ngModel)]='shares' class=\"form-control\" name='bob' required>\n              </div>\n            </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)='buyStockButton2(\"FB\")'>Buy</button>\n      </div>\n    </div>\n  </div>\n  </div>\n\n\n\n  \n\n"

/***/ }),

/***/ "./src/app/buy-sell/buy-sell.component.scss":
/*!**************************************************!*\
  !*** ./src/app/buy-sell/buy-sell.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#stocks {\n  margin: 10px 0 0 0; }\n\nbody div {\n  display: flex;\n  width: 100%; }\n\nbody div p {\n  margin: 0 20px 0 0; }\n\nbutton {\n  margin: 0 5px 0 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnV5LXNlbGwvRDpcXE1hc3Rlcm1pbmRcXEZpbmFuY2UtdHJhY2tpbmdcXGFuZ3VsYXIvc3JjXFxhcHBcXGJ1eS1zZWxsXFxidXktc2VsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGFBQWE7RUFDYixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxrQkFBa0IsRUFBQTs7QUFJdEI7RUFDSSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2J1eS1zZWxsL2J1eS1zZWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3N0b2Nrc3tcclxuICAgIG1hcmdpbjogMTBweCAwIDAgMDtcclxufVxyXG5cclxuYm9keSBkaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkgZGl2IHAge1xyXG4gICAgbWFyZ2luOiAwIDIwcHggMCAwO1xyXG5cclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMCA1cHggMCAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/buy-sell/buy-sell.component.ts":
/*!************************************************!*\
  !*** ./src/app/buy-sell/buy-sell.component.ts ***!
  \************************************************/
/*! exports provided: BuySellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuySellComponent", function() { return BuySellComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stocks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stocks.service */ "./src/app/stocks.service.ts");



var BuySellComponent = /** @class */ (function () {
    function BuySellComponent(stocks) {
        this.stocks = stocks;
        this.TSLA = [];
        this.AMZN = [];
        this.FB = [];
        this.username = 'Remington';
        this.stockPrice = 200.92;
    }
    BuySellComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stocks.returnStocks('TSLA').subscribe(function (data) {
            _this.TSLA = data;
            console.log(data);
        });
        this.stocks.returnStocks('AMZN').subscribe(function (data) {
            _this.AMZN = data;
            console.log(data);
        });
        this.stocks.returnStocks('FB').subscribe(function (data) {
            _this.FB = data;
            console.log(data);
        });
    };
    BuySellComponent.prototype.buyStockButton2 = function (symbol) {
        if (Number.isInteger(this.shares) != true || this.shares == 0 || Math.sign(this.shares) == -1) {
            alert('Must be a positive whole number');
            return false;
        }
        else {
            this.stocks.buyStock2(symbol, this.username, this.shares).subscribe(function (data) {
                console.log(data);
            });
            this.stocks.updateBalance(symbol, this.username, this.shares).subscribe(function (data) {
            });
            this.shares = 0;
        }
    };
    BuySellComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buy-sell',
            template: __webpack_require__(/*! ./buy-sell.component.html */ "./src/app/buy-sell/buy-sell.component.html"),
            styles: [__webpack_require__(/*! ./buy-sell.component.scss */ "./src/app/buy-sell/buy-sell.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_stocks_service__WEBPACK_IMPORTED_MODULE_2__["StocksService"]])
    ], BuySellComponent);
    return BuySellComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id='showcase'>\n  <div class='card'>\n      <h1>Fantasy Stock Trading App</h1>\n      <p>Create an account to test your trading skills on the live market</p>\n        <button type='button' class='btn btn-primary' data-toggle='modal' data-target='#Login'>Login/Signup</button>\n    </div>\n</header>\n  <div class=\"modal fade\" id=\"Login\" tabindex='-1'>\n    <div class=\"modal-dialog\" role=\"document\">    \n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Login/Signup</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n            <form>\n                <div class=\"form-group\">\n                  <label for=\"email\" class=\"col-form-label\">Email</label>\n                  <input type=\"email\" class=\"form-control\" id=\"email\" required>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"password\" class=\"col-form-label\">Password: 8 character minimum</label>\n                  <input type='password' class=\"form-control\" id=\"password\" minlength=\"8\" required>\n                </div>\n              </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\">Login</button>\n        </div>\n      </div>\n    </div>\n  </div>\n<div>\n    <h3>GitHub Repository</h3>\n    <p>Link to it</p>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#showcase {\n  background: url(\"https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  height: 100vh;\n  justify-content: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center; }\n\nheader div {\n  width: 50%;\n  background-color: rgba(137, 137, 146, 0.5);\n  align-items: center;\n  justify-content: center;\n  font-size: 20px; }\n\ndiv button {\n  font-size: 20px;\n  margin: 0 5px 5px 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcTWFzdGVybWluZFxcRmluYW5jZS10cmFja2luZ1xcYW5ndWxhci9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdKQUF3SjtFQUV4Siw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLFVBQVU7RUFDViwwQ0FBMEM7RUFDMUMsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksZUFBYztFQUNkLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Nob3djYXNlIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MzUzMjA5MDM3MTAtZDk5M2QzZDc3ZDI5P2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz03NTAmcT04MCcpO1xyXG4gICAgLy8gYmFja2dyb3VuZDogdXJsKCcuLi8uLi9sYW5kaW5nSW1hZ2UuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5oZWFkZXIgZGl2IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzNywgMTM3LCAxNDYsIDAuNSk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbmRpdiBidXR0b24ge1xyXG4gICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICBtYXJnaW46IDAgNXB4IDVweCA1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<body>\n<nav class='navbar navbar-light navbar-expand-lg fixed-top' id='top-nav'>\n  <a routerLink =\"/\" class='navbar-brand' id='header'>Finance App</a>\n    <button class='navbar-toggler' data-toggle='collapse' data-target=\"#containerLinks\">\n      <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class='collapse navbar-collapse' id='containerLinks'>\n    <ul class ='navbar-nav ml-auto'>\n      <li class='navbar-item'><a class='nav-link' routerLink='/buySell'>Buy & Sell</a></li>\n      <li class='navbar-item'><a class='nav-link' routerLink='/portfolio'>Portfolio</a></li>\n      <li class='navbar-item'><a class='nav-link' routerLink='/account'>Account</a></li>\n    </ul>\n  </div>\n</nav>\n</body>\n</html>"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n  height: 100%; }\n\nbody {\n  padding-bottom: 70px; }\n\n#header {\n  font-size: 30px;\n  font-style: bold; }\n\nnav a {\n  font-size: 20px; }\n\n#top-nav {\n  background-color: #2bb41f; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L0Q6XFxNYXN0ZXJtaW5kXFxGaW5hbmNlLXRyYWNraW5nXFxhbmd1bGFyL3NyY1xcYXBwXFxuYXZcXG5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVcsRUFBQTs7QUFHZjtFQUNJLG9CQUFvQixFQUFBOztBQUd4QjtFQUNJLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0kseUJBQWtDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCB7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNzBweDtcclxufVxyXG5cclxuI2hlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXN0eWxlOiBib2xkO1xyXG59XHJcblxyXG5uYXYgYSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbiN0b3AtbmF2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MywgMTgwLCAzMSk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class='container' id='container'>\n    <div class='card' id='graph'>\n        <div class='card-body'>\n            <p>\n               Big graph showing the historical stock prices in your portfolio over the past 12 months\n            </p>\n        </div>\n      </div>\n  <div id='portfolio'>\n    <div class='card' id='card'>\n      <div class='card-body'>\n          <p>\n            ngfor* each stock--- Tesla: TSLA ---- Bought price ---- current price -----  BUY SELL buttons\n          </p>\n          <a class=\"btn btn-lg btn-secondary\">Buy</a>\n          <a routerLink='/buySell' class=\"btn btn-lg btn-secondary\">Sell</a>\n      </div>\n    </div>\n    <div class='card' id='card'>\n        <div class='card-body'>\n            <p>\n            ngfor* each stock--- Tesla: TSLA ---- Bought price ---- current price -----  BUY SELL buttons\n            </p>\n            <a routerLink='/buySell' class=\"btn btn-lg btn-secondary\">Buy</a>\n            <a routerLink='/buySell' class=\"btn btn-lg btn-secondary\">Sell</a>\n        </div>\n      </div>\n    <div class='card' id='card'>\n        <div class='card-body'>\n            <p>\n            ngfor* each stock--- Tesla: TSLA ---- Bought price ---- current price -----  BUY SELL buttons\n            </p>\n            <a routerLink='/buySell' class=\"btn btn-lg btn-secondary\">Buy</a>\n            <a routerLink='/buySell' class=\"btn btn-lg btn-secondary\">Sell</a>\n        </div>\n      </div>  \n  </div>\n</body>\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.scss":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#portfolio {\n  margin: 10px 0 10px 0; }\n\n#graph {\n  margin: 10px 0 0 0;\n  height: 350px;\n  width: 120%; }\n\nbody div a {\n  margin: 0 5px 0 0;\n  justify-content: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL0Q6XFxNYXN0ZXJtaW5kXFxGaW5hbmNlLXRyYWNraW5nXFxhbmd1bGFyL3NyY1xcYXBwXFxwb3J0Zm9saW9cXHBvcnRmb2xpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FDSixFQUFBOztBQUdBO0VBQ0ksaUJBQWlCO0VBQ2pCLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuI3BvcnRmb2xpbyB7XHJcbiAgICBtYXJnaW46IDEwcHggMCAxMHB4IDA7IFxyXG59XHJcblxyXG4jZ3JhcGgge1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xyXG4gICAgaGVpZ2h0OiAzNTBweDtcclxuICAgIHdpZHRoOiAxMjAlXHJcbn1cclxuXHJcblxyXG5ib2R5IGRpdiBhIHtcclxuICAgIG1hcmdpbjogMCA1cHggMCAwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stocks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stocks.service */ "./src/app/stocks.service.ts");



var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(stocks) {
        this.stocks = stocks;
        this.stockSearch = 'TSLA';
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    // searchStock() {
    //   this.stocks.retrieveStockList(this.stockSearch).subscribe(data => {
    //     console.log(data)
    //   });
    // }
    PortfolioComponent.prototype.buyStock = function () {
        this.stocks.returnStocks(this.stockSearch).subscribe(function (data) {
            console.log(data);
        });
    };
    PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/portfolio/portfolio.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_stocks_service__WEBPACK_IMPORTED_MODULE_2__["StocksService"]])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/stocks.service.ts":
/*!***********************************!*\
  !*** ./src/app/stocks.service.ts ***!
  \***********************************/
/*! exports provided: StocksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksService", function() { return StocksService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var StocksService = /** @class */ (function () {
    function StocksService(http) {
        this.http = http;
    }
    StocksService.prototype.returnStocks = function (symbol) {
        var params = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('symbol', symbol) };
        return this.http.get('http://localhost:7000/api/stockData', params);
    };
    ;
    StocksService.prototype.buyStock2 = function (symbol, username, shares) {
        var params = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('symbol', symbol).set('username', username).set('shares', shares) };
        return this.http.get('http://localhost:7000/api/latestPrice', params);
    };
    StocksService.prototype.updateBalance = function (symbol, username, shares) {
        var params = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('symbol', symbol).set('username', username).set('shares', shares) };
        return this.http.get('http://localhost:7000/api/balance', params);
    };
    StocksService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StocksService);
    return StocksService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Mastermind\Finance-tracking\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map