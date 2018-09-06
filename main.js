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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var angular_particle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-particle */ "./node_modules/angular-particle/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _chat_chat_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat/chat.module */ "./src/app/chat/chat.module.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Import ParticlesModule

// routing








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot(),
                _chat_chat_module__WEBPACK_IMPORTED_MODULE_6__["ChatModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_5__["UserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                angular_particle__WEBPACK_IMPORTED_MODULE_3__["ParticlesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], pathMatch: 'full' },
                    { path: '', redirectTo: 'login', pathMatch: 'full' },
                    { path: '*', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
                    { path: '**', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] }
                ])
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppService = /** @class */ (function () {
    function AppService(http) {
        var _this = this;
        this.http = http;
        this.url = 'http://chatapi.gajalportfolio.xyz/api/v1';
        this.getUserInfoFromLocalstorage = function () {
            return JSON.parse(localStorage.getItem('userInfo'));
        }; // end getUserInfoFromLocalstorage
        this.setUserInfoInLocalStorage = function (data) {
            localStorage.setItem('userInfo', JSON.stringify(data));
            console.log(data);
        };
        this.verifyEmail = function (data) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]()
                .set('hash', data);
            return _this.http.put(_this.url + "/users/verifyEmail", param);
        };
        this.forgotPassword = function (email) {
            var param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]()
                .set('email', email);
            return _this.http.post(_this.url + "/users/forgotPassword", param);
        };
        this.resetPassword = function (data) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]()
                .set('email', data.email)
                .set('password', data.password);
            return _this.http.put(_this.url + "/users/resetPassword", params);
        };
        this.createGroup = function (data, authToken) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]()
                .set('name', data.name)
                .set('creator', data.creator);
            return _this.http.post(_this.url + "/group/createGroup?authToken=" + authToken, params);
        };
        this.editGroup = function (data, authToken) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]()
                .set('name', data.name);
            return _this.http.put(_this.url + "/group/" + data.roomId + "/editGroup?authToken=" + authToken, params);
        };
        this.deleteGroup = function (roomId, authToken) {
            var data = {};
            return _this.http.post(_this.url + "/group/" + roomId + "/deleteGroup?authToken=" + authToken, data);
        };
        this.close = function (roomId, authToken) {
            var data = {};
            return _this.http.put(_this.url + "/group/" + roomId + "/markAsClose?authToken=" + authToken, data);
        };
        this.getChatGroup = function (authToken) {
            return _this.http.get(_this.url + "/group/getChatGroup?authToken=" + authToken);
        };
        this.shareLink = function (data, authToken) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]()
                .set('email', data.email)
                .set('roomId', data.roomId)
                .set('roomName', data.roomName);
            return _this.http.post(_this.url + "/group/shareLink?authToken=" + authToken, params);
        };
    } // end constructor
    AppService.prototype.signupFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]()
            .set('firstName', data.firstName)
            .set('lastName', data.lastName)
            .set('mobileNumber', data.mobile)
            .set('email', data.email)
            .set('password', data.password);
        return this.http.post(this.url + "/users/signup", params);
    }; // end of signupFunction function.
    AppService.prototype.logInFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]()
            .set('email', data.email)
            .set('password', data.password);
        return this.http.post(this.url + "/users/login", params);
    }; // end of signinFunction function.
    AppService.prototype.logout = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]()
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
        return this.http.post(this.url + "/users/logout", params);
    }; // end logout function
    AppService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error) {
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        } // end condition *if
        console.error(errorMessage);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(errorMessage);
    }; // END handleError
    AppService.prototype.getChatsForGroup = function (receiverId, skip) {
        return this.http.get(this.url + "/group/chat/get/for/group?receiverId=" + receiverId + "&skip=" + skip + "&authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'))
            .do(function (data) { return console.log('Data Received'); })
            .catch(this.handleError);
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/chat/chat-box/chat-box.component.css":
/*!******************************************************!*\
  !*** ./src/app/chat/chat-box/chat-box.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".online{\n\n  height: 10px;\n  width: 10px;\n  background-color:green;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.offline{\n\n  height: 10px;\n  width: 10px;\n  background-color:red;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n#btnPlace{\n  margin-top:26vmin;\n}\n\n.rightSideClass {\n    float: right;\n    background: #ddd;\n    border-radius: 0.5em;\n  }\n\n.leftSideClass {\n    float: left;\n    background: #55C1E7;\n    border-radius: 0.5em;\n  }\n\n.circle-green:before {\n    content: ' \\25CF';\n    font-size: 1em;\n    color: green;\n  }\n\n.circle-red:before {\n    content: ' \\25CF';\n    font-size: 1em;\n    color: red;\n  }\n\n.cursorPointer {\n    cursor: pointer;\n  }\n\n.textCenter {\n    text-align: center;\n  }\n\n.floatLeft {\n    float: left;\n  }\n\n*,\n  *:before,\n  *:after {\n    box-sizing: border-box;\n  }\n\nbody {\n    padding: 2.5em 0;\n    color: white;\n  }\n\n.container {\n    margin: 0 auto;\n    background: #444753;\n    border-radius: 0.3em;\n  }\n\n.people-list {\n    float: left;\n  }\n\n.people-list input {\n    border-radius: 0.2em;\n    border: none;\n    padding: 1em;\n    color: white;\n    background: #6A6C75;\n    width: 90%;\n    font-size: 1em;\n  }\n\n.people-list .fa-search {\n    position: relative;\n    left: -1.8em;\n  }\n\n.people-list ul {\n    padding: 0;\n  }\n\n.people-list ul li .userPresence {\n    float: left;\n    padding: 0.7em 0.2em;\n    color: white;\n    text-transform: capitalize;\n    width:100%;\n  }\n\n.textCapitalize {\n    text-transform: capitalize;\n    font-size: 1.2em;\n  }\n\n.people-list img {\n    float: left;\n  }\n\n.people-list .about {\n    float: left;\n  }\n\n.people-list .about {\n    padding-left: 0.4em;\n  }\n\n.people-list .status {\n    color: #92959E;\n  }\n\n.chat {\n    height: 100vh;\n    float: left;\n    background: #F2F5F8;\n    border-top-right-radius: 0.3em;\n    border-bottom-right-radius: 0.3em;\n    color: #434651;\n  }\n\n.chat .chat-header {\n    padding: 0.2em;\n    border-bottom: 0.15em solid white;\n  }\n\n.chat .chat-header img {\n    float: left;\n  }\n\n.chat .chat-header .chat-about {\n    float: left;\n    padding-left: 0.8em;\n    margin-top: 0.4em;\n  }\n\n.chat .chat-header .chat-with {\n    font-weight: bold;\n    font-size: 1.1em;\n  }\n\n.chat .chat-header .chat-num-messages {\n    color: #92959E;\n  }\n\n.chat .chat-header .fa-star {\n    float: right;\n    color: #D8DADF;\n    font-size: 1.42em;\n    margin-top: 0.85em;\n  }\n\n.chat .chat-history {\n    padding: 2em 2em 1.42em;\n    border-bottom: 0.15em solid white;\n    overflow-y: scroll;\n    height: 80vh;\n  }\n\n.chat .chat-history .message-data {\n    margin-bottom: 1em;\n  }\n\n.chat .chat-history .message-data-time {\n    color: #a8aab1;\n    padding-left: 0.4em;\n  }\n\n.chat .chat-history .message {\n    color: white;\n    padding: 0.5em 1.42em;\n    line-height: 1.9em;\n    font-size: 1.1em;\n    border-radius: 7px;\n    margin-bottom: 2em;\n    width: 90%;\n    position: relative;\n  }\n\n.chat .chat-history .message:after {\n    bottom: 100%;\n    left: 7%;\n    border: solid transparent;\n    content: \" \";\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n    border-bottom-color: #86BB71;\n    border-width: 0.8em;\n    margin-left: -0.8em;\n  }\n\n.chat .chat-history .my-message {\n    background: #86BB71;\n  }\n\n.chat .chat-history .other-message {\n    background: #94C2ED;\n  }\n\n.chat .chat-history .other-message:after {\n    border-bottom-color: #94C2ED;\n    left: 90%;\n  }\n\n.chat .chat-message textarea {\n    width: 100%;\n    border: none;\n    padding: 0.8em 1.42em;\n    margin-bottom: 0.8em;\n    border-radius: 5px;\n    resize: none;\n  }\n\n.chat .chat-message .fa-file-o,\n  .chat .chat-message .fa-file-image-o {\n    font-size: 1.1em;\n    color: gray;\n    cursor: pointer;\n  }\n\n.chat .chat-message button {\n    float: right;\n    color: #94C2ED;\n    font-size: 1.1em;\n    text-transform: uppercase;\n    border: none;\n    cursor: pointer;\n    font-weight: bold;\n    background: #F2F5F8;\n  }\n\n.chat .chat-message button:hover {\n    color: #75b1e8;\n  }\n\n.online,\n  .offline,\n  .me,\n  .warning {\n    margin-right: 3px;\n    font-size: 0.8em;\n  }\n\n.online {\n    color: #86BB71;\n  }\n\n.offline {\n    color: #E38968;\n  }\n\n.me {\n    color: #94C2ED;\n  }\n\n.warning {\n    color: #e78930;\n  }\n\n.align-left {\n    text-align: left;\n  }\n\n.align-right {\n    text-align: right;\n  }\n\n.float-right {\n    float: right;\n  }\n\n.clearfix:after {\n    visibility: hidden;\n    display: block;\n    font-size: 0;\n    content: \" \";\n    clear: both;\n    height: 0;\n  }\n\n.customButton {\n    width: 100%;\n  }\n\n.activeChat {\n    background: #393a41;\n  }\n\n.typeOfChats {\n    background: #393a41;\n    color: white;\n    margin-top: 0.2em;\n    margin-bottom: 0.2em;\n  }\n\n.blankContent{\n    height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 3rem;\n    color: #999;\n  }\n\n@media only screen and (max-width:575px) {\n    .chat .chat-history {\n      height:50vh;\n    }\n  }\n\n@media only screen and (min-width:576px) and (max-width:768px) {\n    .chat .chat-history {\n      height:50vh;\n    }\n  }\n\n@media only screen and (min-width:769px) and (max-width:992px) {\n    .chat .chat-history {\n      height:65vh;\n    }\n  }\n\n@media only screen and (min-width:993px) and (max-width:1200  px) {\n    .chat .chat-history {\n      height:50vh;\n    }\n  }\n\n/* user list items */\n\n.crop {\n  border-radius: 100%;\n  line-height: 1em;\n  padding: 1em;\n  text-align: center;\n  margin: 0em;\n  width: 3em;\n  height: 3em;\n  float: left;\n  text-transform: uppercase;\n}\n\n.about {\n  float: left;\n  padding-left: 0.4em;\n}\n\n.online,\n.offline,\n.me,\n.warning {\n  margin-right: 3px;\n  font-size: 0.8em;\n}\n\n.online {\n  color: #86BB71;\n}\n\n.offline {\n  color: #E38968;\n}\n\n.me {\n  color: #94C2ED;\n}\n\n.warning {\n  color: #00c8e7;\n}\n\n.status {\n  color: #92959E;\n}\n\n.name {\n  float: left;\n}\n"

/***/ }),

/***/ "./src/app/chat/chat-box/chat-box.component.html":
/*!*******************************************************!*\
  !*** ./src/app/chat/chat-box/chat-box.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"displayBlockMobile\" style=\"position:fixed;width:100%;z-index:1;\">\n      <div class=\"col-sm-12 p-0\">\n        <nav class=\"navbar navbar-expand-md navbar-fixed navbar-dark bg-dark\">\n          <a class=\"navbar-brand text-white\">\n            {{userInfo.firstName}} {{userInfo.lastName}}\n            <i class=\"fa fa-circle online\" *ngIf=\"disconnectedSocket == false\"></i>\n            <i class=\"fa fa-circle offline\" *ngIf=\"disconnectedSocket == true\"></i>\n          </a>\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n            aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n          </button>\n          <div class=\"collapse people-list navbar-collapse\" id=\"navbarSupportedContent\">\n            <ul class=\"list\">\n              <li class=\"p-2 typeOfChats\">\n                Chat Rooms:\n              </li>\n              <div *ngIf=\"chatRooms!==null;else noRoom\">\n                <li class=\"clearfix cursorPointer\" *ngFor=\"let room of chatRooms\" [ngClass]=\"{'activeChat': room.chatting == true}\" (click)=\"roomSelectedToChat(room.roomId,room.roomName)\">\n                  <div class=\"userPresence\">\n                    <app-user-details [userFirstName]=\"room.roomName\" [userLastName]=\"''\" [roomId]=\"room.roomId\" [userStatus]=\"'Admin - '+room.creator\"\n                      [messageRead]=\"\" [list]=\"'chatRoom'\"></app-user-details>\n                  </div>\n                </li>\n              </div>\n              <ng-template #noRoom>\n                <p class=\"text-center text-light\">No Chat Room</p>\n              </ng-template>\n            </ul>\n\n            <ul class=\"list\">\n              <li class=\"p-2 typeOfChats\">\n                Online Users:\n              </li>\n              <div *ngIf=\"userList.length>1;else noUser\">\n                <li class=\"clearfix cursorPointer\" *ngFor=\"let user of userList\">\n                  <div class=\"userPresence\" *ngIf=\"user.userId != userInfo.userId\" style=\"cursor:text\">\n                    <app-user-details [userFirstName]=\"user.name\" [userLastName]=\"''\" [userStatus]=\"'online'\" [messageRead]=\"user.unread\" [list]=\"'userList'\"></app-user-details>\n                  </div>\n                </li>\n              </div>\n              <ng-template #noUser>\n                <p class=\"text-center text-light\">No Online User</p>\n              </ng-template>\n            </ul>\n          </div>\n        </nav>\n      </div>\n    </div>\n\n    <div class=\"col-12 displayNoneMobile col-sm-4 col-md-4 people-list p-0\" id=\"people-list\">\n\n      <div class=\"p-3 text-white textCapitalize textCenter\">\n        {{userInfo.firstName}} {{userInfo.lastName}}\n        <i class=\"fa fa-circle online\" *ngIf=\"disconnectedSocket == false\"></i>\n        <i class=\"fa fa-circle offline\" *ngIf=\"disconnectedSocket == true\"></i>\n\n        <br>\n        <br>\n        <button (click)=\"logout()\" class=\"btn btn-info customButton\">Logout</button>\n      </div>\n      <div class=\"text-center mb-3\">\n        <button type=\"button\" class=\"btn btn-light btn-sm\" [routerLink]=\"['/group-chat']\">Create New Group</button>\n      </div>\n\n      <ul class=\"list\">\n\n        <li class=\"p-2 typeOfChats\">\n          Chat Rooms:\n        </li>\n        <div *ngIf=\"chatRooms!==null;else noRoom\">\n          <li class=\"clearfix cursorPointer\" *ngFor=\"let room of chatRooms\" [ngClass]=\"{'activeChat': room.chatting == true}\" (click)=\"roomSelectedToChat(room.roomId,room.roomName)\">\n            <div class=\"userPresence\">\n\n              <app-user-details [userFirstName]=\"room.roomName\" [userLastName]=\"''\" [roomId]=\"room.roomId\" [userStatus]=\"'Admin - '+room.creator\"\n                [messageRead]=\"\" [list]=\"'chatRoom'\"></app-user-details>\n            </div>\n          </li>\n        </div>\n        <ng-template #noRoom>\n          <p class=\"text-center text-light\">No Chat Room</p>\n        </ng-template>\n      </ul>\n\n      <ul class=\"list\">\n        <li class=\"p-2 typeOfChats\">\n          Online Users:\n        </li>\n        <div *ngIf=\"userList.length>1;else noUser\">\n          <li class=\"clearfix cursorPointer\" *ngFor=\"let user of userList\">\n            <div class=\"userPresence\" *ngIf=\"user.userId != userInfo.userId\" style=\"cursor:text\">\n              <app-user-details [userFirstName]=\"user.name\" [userLastName]=\"''\" [userStatus]=\"'online'\" [messageRead]=\"user.unread\" [list]=\"'userList'\"></app-user-details>\n            </div>\n          </li>\n        </div>\n        <ng-template #noUser>\n          <p class=\"text-center text-light\">No Online User</p>\n        </ng-template>\n      </ul>\n\n    </div>\n    <!-- chat room messaging center -->\n    <div class=\"col-12 col-sm-8 col-md-8 chat\" *ngIf=\"receiverId!=userInfo.userId;else mainpage\">\n      <div class=\"chat-header clearfix mobileMenu\">\n        <app-first-char [name]=\"receiverName\" [userBg]=\"'green'\" [userColor]=\"'white'\"></app-first-char>\n\n        <div class=\"chat-about\">\n          <div class=\"chat-with\">Chat in {{receiverName}} Room</div>\n\n          <div *ngIf=\"roomId==receiverId\">\n            <p *ngIf=\"typingUserName!=''\">{{typingUserName}} is typing..</p>\n          </div>\n        </div>\n      </div>\n      <!-- end chat-header -->\n      <div *ngIf=\"!joinRoomStatus(receiverId);else chatTime\">\n        <button type=\"button\" class=\"btn btn-success btn-block btn-lg\" id=\"btnPlace\" (click)=\"roomJoining(receiverId,receiverName)\">Join</button>\n      </div>\n      <ng-template #chatTime>\n\n        <div #scrollMe [scrollTop]=\"(scrollToChatTop)?0:scrollMe.scrollHeight\" class=\"chat-history\">\n\n          <ul>\n            <li class=\"textCenter\" *ngIf=\"receiverName\">\n\n              <span class=\"cursorPointer\" (click)=\"loadEarlierPageOfChat()\">Load Previous Chat</span>\n\n              <br>\n\n              <span *ngIf=\"loadingPreviousChat == true\">Loading...</span>\n\n            </li>\n            <li class=\"clearfix\" *ngFor=\"let message of messageList\">\n              <div class=\"message-data\" [ngClass]=\"{'align-right': message.senderId == userInfo.userId}\">\n                <span class=\"message-data-time\">{{message?.createdOn | date: 'medium' }}</span> &nbsp; &nbsp;\n                <span class=\"message-data-name floatLeft\" *ngIf=\"message.senderId != userInfo.userId\">\n                  <i class=\"fa fa-circle online\"></i> {{ message?.senderName }}</span>\n                <span class=\"message-data-name\" *ngIf=\"message.senderId == userInfo.userId\">{{ message?.senderName }}</span>\n                <i class=\"fa fa-circle me\" *ngIf=\"message.senderId == userInfo.userId\"></i>\n\n              </div>\n              <div class=\"message\" [ngClass]=\"{'float-right other-message': message.senderId == userInfo.userId, 'my-message': message.senderId != userInfo.userId}\">\n                {{message?.message}}\n              </div>\n            </li>\n\n\n          </ul>\n\n        </div>\n\n        <!-- end chat-history -->\n\n        <div class=\"chat-message clearfix p-2\" *ngIf=\"receiverName\">\n          <textarea name=\"message-to-send\" id=\"message-to-send\" (keydown)=\"sendMessageUsingKeypress($event)\" [(ngModel)]=\"messageText\"\n            placeholder=\"Type your message\" rows=\"3\" (keyup)=\"onTyping($event)\"></textarea>\n\n          <button (click)=\"sendMessage()\">Send</button>\n\n        </div>\n\n      </ng-template>\n      <!-- end chat-message -->\n\n    </div>\n\n    <ng-template #mainpage>\n      <div class=\"col-12 col-sm-8 col-md-8 chat\">\n        <div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n          <ul class=\"carousel-indicators\">\n            <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n            <li data-target=\"#demo\" data-slide-to=\"1\"></li>\n            <li data-target=\"#demo\" data-slide-to=\"2\"></li>\n          </ul>\n          <div class=\"carousel-inner\">\n            <div class=\"carousel-item active\">\n              <img src=\"../../../assets/slide1.jpeg\" alt=\"Whatsapp\" width=\"1100\" height=\"500\" class=\"img-fluid\">\n              <div class=\"carousel-caption\">\n                <h3>Whatsapp</h3>\n\n              </div>\n            </div>\n            <div class=\"carousel-item\">\n              <img src=\"../../../assets/slide2.jpg\" alt=\"Connecting\" width=\"1100\" height=\"500\" class=\"img-fluid\">\n              <div class=\"carousel-caption\">\n                <h3>Connecting with friends!</h3>\n\n              </div>\n            </div>\n            <div class=\"carousel-item\">\n              <img src=\"../../../assets/slide3.jpg\" alt=\"Checkout\" width=\"1100\" height=\"500\" class=\"img-fluid\">\n              <div class=\"carousel-caption\">\n                <h3>Someone messaged you</h3>\n\n              </div>\n            </div>\n          </div>\n          <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n            <span class=\"carousel-control-prev-icon\"></span>\n          </a>\n          <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n            <span class=\"carousel-control-next-icon\"></span>\n          </a>\n        </div>\n\n\n      </div>\n    </ng-template>\n\n  </div>\n  <!-- end chat -->\n\n</div>\n<!-- end container -->\n"

/***/ }),

/***/ "./src/app/chat/chat-box/chat-box.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/chat/chat-box/chat-box.component.ts ***!
  \*****************************************************/
/*! exports provided: ChatBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatBoxComponent", function() { return ChatBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatBoxComponent = /** @class */ (function () {
    function ChatBoxComponent(appService, socketService, router, _route, toastr) {
        var _this = this;
        this.appService = appService;
        this.socketService = socketService;
        this.router = router;
        this._route = _route;
        this.toastr = toastr;
        this.messageList = [];
        this.unreadMsgList = [];
        this.userList = [];
        this.chatRooms = [];
        this.joinRooms = [];
        this.pageValue = 0;
        this.loadingPreviousChat = false;
        this.scrollToChatTop = false;
        this.unreadList = [];
        this.unreadOfflineList = [];
        this.typingUserName = '';
        this.typingUserId = '';
        this.verifyUserConfirmation = function (token) {
            _this.socketService.verifyUser().subscribe(function (data) {
                _this.disconnectedSocket = false;
                _this.socketService.setUser(token);
                _this.getOnlineUserList();
            });
        }; // end
        //  Online user list methdlist start
        this.getOnlineUserList = function () {
            _this.socketService.onlineUserList()
                .subscribe(function (userList) {
                _this.userList = [];
                for (var _i = 0, userList_1 = userList; _i < userList_1.length; _i++) {
                    var i = userList_1[_i];
                    var temp = { 'userId': i.userId, 'name': i.fullName, 'unread': 0, 'chatting': false };
                    _this.userList.push(temp);
                }
                console.log(_this.userList);
            }); // end online-user-list
        }; // online userlist method end
        // Method to select a room for chatting
        this.roomSelectedToChat = function (roomId, roomName) {
            console.log('clicked');
            _this.chatRooms.map(function (room) {
                if (room.roomId === roomId) {
                    room.chatting = true;
                }
                else {
                    room.chatting = false;
                }
            });
            ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('receiverId', roomId);
            ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('receiverName', roomName);
            _this.receiverName = roomName;
            _this.receiverId = roomId;
            _this.messageList = [];
            _this.pageValue = 0;
            _this.getPreviousChatWithAUser();
        }; // end select room
        // method to check whether the user has joined chat room or not
        this.joinRoomStatus = function (roomId) {
            if (_this.joinRooms.length > 0) {
                if (_this.joinRooms.indexOf(roomId) !== -1) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false; // no room join
            }
        }; // end
        // method to start room joining process
        this.roomJoining = function (roomId, roomName) {
            console.log('clicked join room');
            var name = _this.userInfo.firstName + " " + _this.userInfo.lastName;
            _this.socketService.joinRoom(roomId, roomName, name);
        }; // end
        // method to get message from serverabout joining
        this.setJoinedRoom = function () {
            _this.socketService.setJoinedRoom().subscribe(function (data) {
                console.log(data);
                _this.joinRooms.push(data.roomId);
                _this.joinRooms = _this.joinRooms.filter(function (val, index) {
                    return _this.joinRooms.indexOf(val) === index;
                });
                console.log(data.roomId);
                var name = _this.userInfo.firstName + " " + _this.userInfo.lastName;
                if (data.joinedUser === name) {
                    _this.toastr.success("You have Joined " + data.roomName + " room");
                }
                else {
                    _this.toastr.success(data.joinedUser + " have Joined " + data.roomName + " room");
                }
                console.log(_this.joinRooms);
            });
        }; // end
        // method to send message using enter
        this.sendMessageUsingKeypress = function (event) {
            if (event.keyCode === 13) {
                _this.sendMessage();
            }
        }; // end sendMessageUsingKeypress
        // Method to send message
        this.sendMessage = function () {
            if (_this.messageText) {
                var chatMsgObject = {
                    senderName: _this.userInfo.firstName + ' ' + _this.userInfo.lastName,
                    senderId: _this.userInfo.userId,
                    receiverName: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('receiverName'),
                    receiverId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('receiverId'),
                    message: _this.messageText,
                    createdOn: new Date()
                }; // end chatMsgObject
                _this.socketService.SendChatMessage(chatMsgObject);
                _this.pushToChatWindow(chatMsgObject);
            }
            else {
                _this.toastr.warning('text message can not be empty');
            }
        }; // end sendMessage
        // Method to push your chats to chat window
        this.pushToChatWindow = function (data) {
            _this.messageText = '';
            _this.messageList.push(data);
            _this.scrollToChatTop = false;
        }; // end push to chat window
        // Method to get all messages from all users of chat Room
        this.getMessageFromAUser = function () {
            _this.socketService.chatByRoomId()
                .subscribe(function (data) {
                if (data.senderId === _this.typingUserId) {
                    _this.roomId = '';
                    _this.typingUserName = '';
                }
                (_this.receiverId === data.receiverId) ? _this.messageList.push(data) : '';
                /* this.unreadMessages();  */
                _this.toastr.success(data.senderName + " says : " + data.message);
                _this.scrollToChatTop = false;
            }); // end subscribe
        }; // end get message from a use
        // Getting previous messages f chat Room
        this.getPreviousChatWithAUser = function () {
            var previousData = (_this.messageList.length > 0 ? _this.messageList.slice() : []);
            _this.appService.getChatsForGroup(_this.receiverId, _this.pageValue * 10)
                .subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    _this.messageList = apiResponse.data.concat(previousData);
                }
                else {
                    _this.messageList = previousData;
                    _this.toastr.warning('No Messages available');
                }
                _this.loadingPreviousChat = false;
            }, function (err) {
                _this.toastr.error('some error occured');
            });
        }; // end
        // This is for typing,it notifies evry1 of room that who is typing
        this.onTyping = function (event) {
            // when enter is pressed then typing emit event should not be called
            if (event.keyCode !== 13) {
                var data = {
                    'typingUser': _this.userInfo.firstName,
                    'typingUserId': _this.userInfo.userId,
                    'roomId': _this.receiverId
                };
                // this is for when user types but clear the message text then evry1 should notify that now user is not typing
                if (_this.messageText === '') {
                    var data_1 = {
                        'typingUser': '',
                        'typingUserId': '',
                        'roomId': _this.receiverId
                    };
                    _this.socketService.typing(data_1);
                } // end
                // this is when user is typing then everyone should get notification that someone is typing
                if (_this.messageText !== '') {
                    console.log("typing");
                    _this.socketService.typing(data);
                }
            }
        }; // end onTyping function
        // function to get data of ontyping like who is typing and room Id info
        this.getOnTypingData = function () {
            _this.socketService.getTypingUser().subscribe(function (typedUserData) {
                _this.typingUserName = typedUserData.typingUser;
                _this.typingUserId = typedUserData.typingUserId;
                _this.roomId = typedUserData.roomId;
                console.log(_this.roomId);
                _this.toastr.success(_this.typingUserName + " is typing");
            });
        }; // end
        this.loadEarlierPageOfChat = function () {
            _this.loadingPreviousChat = true;
            _this.pageValue++;
            _this.scrollToChatTop = true;
            _this.getPreviousChatWithAUser();
        }; // end
        this.logout = function () {
            _this.appService.logout()
                .subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    console.log('logout called');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].delete('authtoken');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].delete('receiverId');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].delete('receiverName');
                    _this.socketService.exitSocket();
                    _this.router.navigate(['/']);
                }
                else {
                    _this.toastr.error(apiResponse.message);
                } // end condition
            }, function (err) {
                _this.toastr.error('some error occured');
            });
        }; // end logout
        this.receiverId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('receiverId');
        this.receiverName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('receiverName');
    }
    ChatBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken');
        this.receiverId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('receiverId');
        this.receiverName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('receiverName');
        console.log(this.authToken);
        this.userInfo = this.appService.getUserInfoFromLocalstorage();
        this.appService.getChatGroup(this.authToken).subscribe(function (Response) {
            _this.chatRooms = Response.data;
            _this.userList = [];
            if (_this.chatRooms !== null) {
                for (var _i = 0, _a = _this.chatRooms; _i < _a.length; _i++) {
                    var i = _a[_i];
                    i.chatting = 'false';
                }
            }
            console.log(_this.chatRooms);
        }, function (error) {
            _this.toastr.error('some error occured');
        });
        // this part is for joining room via link
        this.param1 = this._route.snapshot.paramMap.get('roomId');
        this.param2 = this._route.snapshot.paramMap.get('roomName');
        if (this.param1 && this.param2) {
            this.param2 = atob(this.param2);
            this.roomJoining(this.param1, this.param2);
            this.roomSelectedToChat(this.param1, this.param2);
        }
        // end
        if (this.receiverId != null && this.receiverId !== undefined && this.receiverId !== '') {
            this.roomSelectedToChat(this.receiverId, this.receiverName);
        }
        this.verifyUserConfirmation(this.authToken);
        this.getMessageFromAUser();
        this.getOnTypingData();
        this.setJoinedRoom();
    };
    ChatBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-box',
            template: __webpack_require__(/*! ./chat-box.component.html */ "./src/app/chat/chat-box/chat-box.component.html"),
            styles: [__webpack_require__(/*! ./chat-box.component.css */ "./src/app/chat/chat-box/chat-box.component.css")],
            providers: [_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], ChatBoxComponent);
    return ChatBoxComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat-route-guard.service.ts":
/*!**************************************************!*\
  !*** ./src/app/chat/chat-route-guard.service.ts ***!
  \**************************************************/
/*! exports provided: ChatRouteGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRouteGuardService", function() { return ChatRouteGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatRouteGuardService = /** @class */ (function () {
    function ChatRouteGuardService(router) {
        this.router = router;
    }
    ChatRouteGuardService.prototype.canActivate = function (route) {
        console.log('in guard service');
        if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken') === undefined || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken') === '' || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken') === null) {
            this.router.navigate(['/']);
            return false;
        }
        else {
            return true;
        }
    };
    ChatRouteGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ChatRouteGuardService);
    return ChatRouteGuardService;
}());



/***/ }),

/***/ "./src/app/chat/chat.module.ts":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-box/chat-box.component */ "./src/app/chat/chat-box/chat-box.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _chat_route_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat-route-guard.service */ "./src/app/chat/chat-route-guard.service.ts");
/* harmony import */ var _group_chat_group_chat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./group-chat/group-chat.component */ "./src/app/chat/group-chat/group-chat.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    { path: 'chat', component: _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_2__["ChatBoxComponent"], canActivate: [_chat_route_guard_service__WEBPACK_IMPORTED_MODULE_7__["ChatRouteGuardService"]] },
                    { path: 'chat/:roomId/:roomName', component: _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_2__["ChatBoxComponent"] },
                    { path: 'group-chat/:roomId', component: _group_chat_group_chat_component__WEBPACK_IMPORTED_MODULE_8__["GroupChatComponent"] },
                    { path: 'group-chat/:roomId/:roomName', component: _group_chat_group_chat_component__WEBPACK_IMPORTED_MODULE_8__["GroupChatComponent"] },
                    { path: 'group-chat', component: _group_chat_group_chat_component__WEBPACK_IMPORTED_MODULE_8__["GroupChatComponent"] }
                ]),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            declarations: [_chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_2__["ChatBoxComponent"], _group_chat_group_chat_component__WEBPACK_IMPORTED_MODULE_8__["GroupChatComponent"]],
            providers: [_chat_route_guard_service__WEBPACK_IMPORTED_MODULE_7__["ChatRouteGuardService"]]
        })
    ], ChatModule);
    return ChatModule;
}());



/***/ }),

/***/ "./src/app/chat/group-chat/group-chat.component.css":
/*!**********************************************************!*\
  !*** ./src/app/chat/group-chat/group-chat.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button:disabled {\n  cursor: not-allowed;\n\n}\n#my-link{\n  cursor:pointer;\n}\n"

/***/ }),

/***/ "./src/app/chat/group-chat/group-chat.component.html":
/*!***********************************************************!*\
  !*** ./src/app/chat/group-chat/group-chat.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row p-0 m-0\">\n  <div class=\"col-sm\"></div>\n   <!-- Create Group Design -->\n  <div *ngIf=\"groupChat\" class=\"col-sm p-5\">\n      <h2 class=\"form-signin-heading\">Create Group</h2>\n      <form #Group=\"ngForm\" (ngSubmit)=\"createGroup();Group.reset()\">\n          <label for=\"inputName\" class=\"sr-only\">Group Name</label>\n          <input type=\"text\" #nameGroup=\"ngModel\" name=\"groupName\"  maxlength=\"50\" class=\"form-control\" id=\"inputName\"\n              [(ngModel)]=\"groupName\" placeholder=\"Group Name\" required autofocus>\n          <br>\n          <div [hidden]=\"nameGroup.valid || nameGroup.pristine\" class=\"alert alert-danger\">\n                  <div *ngIf=\"nameGroup.errors?.maxlength\">\n                      Group Name should contain maximum 65 letters!\n                  </div>\n              <div *ngIf=\"nameGroup.errors?.required\">\n                  Group Name is required!\n              </div>\n          </div>\n          <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"!Group.form.valid\">Create</button>\n      </form>\n  </div>\n <!-- Create group end -->\n\n <!-- Edit Group Start -->\n  <div *ngIf=\"editChat\" class=\"col-sm p-5\">\n      <h2 class=\"form-signin-heading\">Edit Group</h2>\n      <form #edit=\"ngForm\" (ngSubmit)=\"editGroup();edit.reset()\">\n          <label for=\"inputName\" class=\"sr-only\">Group Name</label>\n          <input type=\"text\" #nameGroup=\"ngModel\" name=\"groupName\" pattern=\"^[A-za-z0-9- ]+$\" maxlength=\"50\" class=\"form-control\" id=\"inputName\"\n              [(ngModel)]=\"groupName\" placeholder=\"Group Name\" required autofocus>\n          <br>\n          <div [hidden]=\"nameGroup.valid || nameGroup.pristine\" class=\"alert alert-danger\">\n              <div *ngIf=\"nameGroup.errors?.pattern\">\n                  Group Name is invalid!\n                  <div *ngIf=\"nameGroup.errors?.maxlength\">\n                      Group Name should contain maximum 65 letters!\n                  </div>\n              </div>\n              <div *ngIf=\"nameGroup.errors?.required\">\n                  Group Name is required!\n              </div>\n          </div>\n\n          <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"!edit.form.valid\">Edit</button>\n      </form>\n  </div>\n\n  <!-- Delete Chat Design start -->\n  <div *ngIf=\"deleteChat\" class=\"col-sm p-5\">\n      <div class=\"row mt-5\">\n          <div class=\"col-12\">\n              <img src=\"https://fossbytes.com/wp-content/uploads/2017/10/whatsapp-delete-message-640x360.jpg\" style=\"width:70vw;height:50vh\"\n                  class=\"img-fluid d-block mx-auto\">\n          </div>\n      </div>\n  </div>\n\n  <!-- Mark as Close Start -->\n  <div *ngIf=\"markAsClose\" class=\"col-sm p-5\">\n      <div class=\"row mt-5\">\n          <div class=\"col-12\">\n              <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/CLOSED_logo.jpg/800px-CLOSED_logo.jpg\" style=\"width:70vw;height:50vmin\"\n                  class=\"img-fluid d-block mx-auto\">\n          </div>\n      </div>\n  </div>\n\n  <!-- Share email design start -->\n  <div *ngIf=\"share\" class=\"col-sm p-5\">\n      <h2 class=\"form-signin-heading\">Share Email</h2>\n      <form #share=\"ngForm\" (ngSubmit)=\"shareLink();share.reset()\">\n          <label for=\"inputName\" class=\"sr-only\">Enter Email</label>\n          <input type=\"text\" #emailId=\"ngModel\" name=\"groupName\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" class=\"form-control\"\n              id=\"inputName\" [(ngModel)]=\"email\" placeholder=\"Enter Email\" required autofocus>\n          <br>\n          <div [hidden]=\"emailId.valid || emailId.pristine\" class=\"alert alert-danger\">\n              <div *ngIf=\"emailId.errors?.pattern\">\n                  Email is invalid!\n              </div>\n              <div *ngIf=\"emailId.errors?.required\">\n                  Email is required!\n              </div>\n          </div>\n          <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"!share.form.valid\">Share</button>\n      </form>\n  </div>\n\n  <div class=\"col-sm\"></div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/chat/group-chat/group-chat.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/chat/group-chat/group-chat.component.ts ***!
  \*********************************************************/
/*! exports provided: GroupChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupChatComponent", function() { return GroupChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GroupChatComponent = /** @class */ (function () {
    function GroupChatComponent(appservice, _route, router, toastr) {
        var _this = this;
        this.appservice = appservice;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.groupChat = true;
        this.share = false;
        this.editChat = false;
        this.deleteChat = false;
        this.markAsClose = false;
        // Method to create group
        this.createGroup = function () {
            var data = {
                'name': _this.groupName,
                'creator': _this.receiverName,
            };
            _this.appservice.createGroup(data, _this.authToken).subscribe(function (Response) {
                if (Response.status === 200) {
                    _this.toastr.success('Chat Room Created');
                    setTimeout(function () {
                        _this.router.navigate(['/chat']);
                    }, 2000);
                }
                else {
                    _this.toastr.error(Response.message);
                }
            }, function (error) {
                _this.toastr.error('some error occured');
            });
        }; // end
        // Method to edit group
        this.editGroup = function () {
            var data = {
                'name': _this.groupName,
                'roomId': _this.param1
            };
            console.log(_this.param1);
            _this.appservice.editGroup(data, _this.authToken).subscribe(function (Response) {
                if (Response.status === 200) {
                    _this.toastr.success('Chat Room Edited Successfully!');
                    setTimeout(function () {
                        _this.router.navigate(['/chat']);
                    }, 2000);
                }
                else {
                    _this.toastr.error(Response.message);
                }
            }, function (error) {
                _this.toastr.error('some error occured');
            });
        }; // end
        // Method to share a link
        this.shareLink = function () {
            var data = {
                'roomId': _this.param1,
                'roomName': _this.param2,
                'email': _this.email,
            };
            _this.appservice.shareLink(data, _this.authToken).subscribe(function (Response) {
                if (Response.status === 200) {
                    _this.toastr.success('Link has been Successfully Shared!');
                    setTimeout(function () {
                        _this.router.navigate(['/chat']);
                    }, 2000);
                }
                else {
                    _this.toastr.error(Response.message);
                }
            }, function (error) {
                _this.toastr.error("Some Error Occured!");
            });
        }; // end
        // method to delete a chat.
        this.delete = function (roomId) {
            console.log(roomId);
            _this.appservice.deleteGroup(roomId, _this.authToken).subscribe(function (Response) {
                if (Response.status === 200) {
                    _this.toastr.success('Chat Room Deleted Successfully!');
                    setTimeout(function () {
                        _this.router.navigate(['/chat']);
                    }, 2000);
                }
                else {
                    _this.toastr.error(Response.message);
                }
            }, function (error) {
                _this.toastr.error('some error occured');
            });
        }; // end
        this.close = function (roomId) {
            _this.appservice.close(roomId, _this.authToken).subscribe(function (Response) {
                if (Response.status === 200) {
                    _this.toastr.success('Chat Room is Closed!');
                    setTimeout(function () {
                        _this.router.navigate(['/chat']);
                    }, 2000);
                }
                else {
                    _this.toastr.error(Response.message);
                }
            }, function (error) {
                _this.toastr.error('some error occured');
            });
        };
    }
    GroupChatComponent.prototype.ngOnInit = function () {
        this.receiverName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('receiverName');
        this.receiverId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('receiverId');
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken');
        this.param1 = this._route.snapshot.paramMap.get('roomId');
        this.param2 = this._route.snapshot.paramMap.get('roomName');
        if (this.param1 && !this.param2) {
            this.editChat = true;
            this.groupChat = false;
        }
        if (this.param1 && this.param2) {
            if (this.param1 && this.param2 === 'delete') {
                this.deleteChat = true;
                this.groupChat = false;
                this.delete(this.param1);
            }
            else if (this.param1 && this.param2 === 'close') {
                this.markAsClose = true;
                this.groupChat = false;
                this.close(this.param1);
            }
            else {
                this.share = true;
                this.groupChat = false;
            }
        }
    };
    GroupChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-group-chat',
            template: __webpack_require__(/*! ./group-chat.component.html */ "./src/app/chat/group-chat/group-chat.component.html"),
            styles: [__webpack_require__(/*! ./group-chat.component.css */ "./src/app/chat/group-chat/group-chat.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], GroupChatComponent);
    return GroupChatComponent;
}());



/***/ }),

/***/ "./src/app/shared/first-char/first-char.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/first-char/first-char.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crop {\n    border-radius: 100%;\n    line-height: 1em;\n    padding: 1em;\n    text-align: center;\n    margin: 0em;\n    width: 3em;\n    height: 3em;\n    float: left;\n    text-transform: uppercase;\n  }"

/***/ }),

/***/ "./src/app/shared/first-char/first-char.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/first-char/first-char.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div   class=\"crop\" [style.color]=\"userColor ? userColor :'white'\" [style.background]=\"userBg ? userBg :'blue'\">\n  {{firstChar}}\n</div>\n"

/***/ }),

/***/ "./src/app/shared/first-char/first-char.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/first-char/first-char.component.ts ***!
  \***********************************************************/
/*! exports provided: FirstCharComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstCharComponent", function() { return FirstCharComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FirstCharComponent = /** @class */ (function () {
    function FirstCharComponent() {
        this._name = '';
    }
    FirstCharComponent.prototype.ngOnInit = function () {
        this._name = this.name;
        this.firstChar = this._name[0];
    }; // end ngOnInit
    FirstCharComponent.prototype.ngOnChanges = function (changes) {
        var name = changes.name;
        this._name = name.currentValue;
        this.firstChar = this._name[0];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FirstCharComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FirstCharComponent.prototype, "userBg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FirstCharComponent.prototype, "userColor", void 0);
    FirstCharComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-first-char',
            template: __webpack_require__(/*! ./first-char.component.html */ "./src/app/shared/first-char/first-char.component.html"),
            styles: [__webpack_require__(/*! ./first-char.component.css */ "./src/app/shared/first-char/first-char.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FirstCharComponent);
    return FirstCharComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/shared/user-details/user-details.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _first_char_first_char_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./first-char/first-char.component */ "./src/app/shared/first-char/first-char.component.ts");
/* harmony import */ var _chat_group_chat_group_chat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chat/group-chat/group-chat.component */ "./src/app/chat/group-chat/group-chat.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([
                    { path: 'group-chat/:roomId/:roomName', component: _chat_group_chat_group_chat_component__WEBPACK_IMPORTED_MODULE_5__["GroupChatComponent"] },
                    { path: 'group-chat/:roomId', component: _chat_group_chat_group_chat_component__WEBPACK_IMPORTED_MODULE_5__["GroupChatComponent"] }
                ])
            ],
            declarations: [_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_2__["UserDetailsComponent"], _first_char_first_char_component__WEBPACK_IMPORTED_MODULE_4__["FirstCharComponent"]],
            exports: [
                _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_2__["UserDetailsComponent"],
                _first_char_first_char_component__WEBPACK_IMPORTED_MODULE_4__["FirstCharComponent"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/user-details/user-details.component.css":
/*!****************************************************************!*\
  !*** ./src/app/shared/user-details/user-details.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crop {\n    border-radius: 100%;\n    line-height: 1em;\n    padding: 1em;\n    text-align: center;\n    margin: 0em;\n    width: 3em;\n    height: 3em;\n    float: left;\n    text-transform: uppercase;\n  }\n  \n  .about {\n    float: left;\n    padding-left: 0.4em;\n  }\n  \n  .online,\n  .offline,\n  .me,\n  .warning {\n    margin-right: 3px;\n    font-size: 0.8em;\n  }\n  \n  .online {\n    color: #86BB71;\n  }\n  \n  .offline {\n    color: #E38968;\n  }\n  \n  .me {\n    color: #94C2ED;\n  }\n  \n  .warning {\n    color: #00c8e7;\n  }\n  \n  .status {\n    color: #92959E;\n  }\n  \n  .name {\n    float: left;\n  }"

/***/ }),

/***/ "./src/app/shared/user-details/user-details.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/user-details/user-details.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crop\" [style.color]=\"'white'\" [style.background]=\"'blue'\">\n  {{firstChar}}\n</div>\n<div class=\"about\">\n  <div class=\"name\">{{userFirstName}} {{userLastName}}\n    <i *ngIf=\"messageRead>0\" class=\"fa fa-circle warning\">{{messageRead}}</i>\n  </div>\n\n  <div *ngIf=\"list=='chatRoom'\" style=\"text-align:right\">\n    <span [routerLink]=\"['/group-chat',roomId,'delete']\"><i class=\"fa fa-trash-o mr-2\" title=\"Delete\"></i></span>\n    <span [routerLink]=\"['/group-chat',roomId]\"><i class=\"fa fa-edit mr-2\" title=\"Edit\"></i></span>\n    <span [routerLink]=\"['/group-chat',roomId,roomName]\"><i class=\"fa fa-share-alt mr-2\" title=\"Share\"></i></span>\n    <span [routerLink]=\"['/group-chat',roomId,'close']\"><i class=\"fa fa-close mr-2\" title=\"Mark as Close\"></i></span>\n  </div>\n  <span *ngIf=\"list!='chatRoom'\"><br/></span>\n  <div class=\"status\">\n    <i class=\"fa fa-circle\" [ngClass]=\"userStatus\" style=\"font-size:2vmin\"></i> {{userStatus}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/user-details/user-details.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/user-details/user-details.component.ts ***!
  \***************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(appService, _route, router, toastr) {
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        this.firstChar = this.userFirstName[0];
        this.roomName = btoa(this.userFirstName);
    }; // end ngOnInit
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserDetailsComponent.prototype, "userFirstName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UserDetailsComponent.prototype, "userLastName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UserDetailsComponent.prototype, "userStatus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserDetailsComponent.prototype, "messageRead", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UserDetailsComponent.prototype, "roomId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UserDetailsComponent.prototype, "list", void 0);
    UserDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/shared/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.css */ "./src/app/shared/user-details/user-details.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SocketService = /** @class */ (function () {
    function SocketService(http) {
        var _this = this;
        this.http = http;
        this.url = 'http://chatapi.gajalportfolio.xyz';
        // events to be listened
        this.verifyUser = function () {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on('verifyUser', function (data) {
                    observer.next(data);
                }); // end Socket
            }); // end Observable
        }; // end verifyUser
        // emit event
        this.setUser = function (authToken) {
            _this.socket.emit('setUser', authToken);
            console.log(authToken);
        };
        this.onlineUserList = function () {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on('online-user-list', function (userList) {
                    observer.next(userList);
                    console.log(userList);
                }); // end Socket
            }); // end Observable
        }; // end onlineUserList
        this.joinRoom = function (roomId, roomName, joinUser) {
            var data = {
                'roomId': roomId,
                'roomName': roomName,
                'joinedUser': joinUser
            };
            _this.socket.emit('joinRoom', data);
        };
        this.setJoinedRoom = function () {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on('setJoinedRoom', function (joinedRoom) {
                    observer.next(joinedRoom);
                }); // end Socket
            }); // end Observable
        };
        this.SendChatMessage = function (chatMsgObject) {
            _this.socket.emit('room-msg', chatMsgObject);
        };
        this.chatByRoomId = function () {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on('receiveMsg', function (data) {
                    observer.next(data);
                }); // end Socket
            }); // end Observable
        };
        this.typing = function (data) {
            _this.socket.emit('typing', data);
        };
        this.getTypingUser = function () {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on('userTyping', function (data) {
                    observer.next(data);
                }); // end Socket
            }); // end Observable
        };
        this.exitSocket = function () {
            _this.socket.emit('disconnect');
        };
        // connection is being created.
        // that handshake
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(this.url);
    }
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button:disabled {\n  cursor: not-allowed;\n\n}\n#my-link{\n  cursor:pointer;\n}\n"

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"/\">My Chat</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav\">\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"my-link\" (click)=\"goToSignUp()\">SIGNUP</a>\n          </li>\n      </ul>\n  </div>\n\n</nav>\n<div class=\"row p-0 m-0\">\n  <div class=\"col-sm\"></div>\n  <div class=\"col-sm p-5\">\n      <h2 class=\"form-signin-heading\">Please sign in</h2>\n      <form #signIn=\"ngForm\" (ngSubmit)=\"signinFunction(); signIn.reset()\">\n          <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n\n          <input type=\"email\" #emailId=\"ngModel\"  name=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\"\n              required autofocus>\n          <br>\n          <div [hidden]=\"emailId.valid || emailId.pristine\" class=\"alert alert-danger\">\n              <div *ngIf=\"emailId.errors?.pattern\">\n                  Email is invalid!\n                </div>\n                <div *ngIf=\"emailId.errors?.required\">\n                    Email is required!\n                </div>\n          </div>\n          <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n\n          <input type=\"password\" #pass=\"ngModel\" name=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\"\n              required>\n          <br>\n          <div [hidden]=\"pass.valid || pass.pristine\" class=\"alert alert-danger\">\n              Password is required!\n          </div>\n              <p class=\"text-danger\" style=\"cursor:pointer\" (click)=\"forgotPassword(emailId.value)\"><u>Forgot Password?</u></p>\n          <div *ngIf=\"emailNeed==0\">\n              <p class=\"text-info\">Please provide Email!</p>\n          </div>\n          <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\"  [disabled]=\"!signIn.form.valid\" >Sign in</button>\n      </form>\n  </div>\n\n  <div class=\"col-sm\"></div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(appService, router, toastr) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.emailNeed = 1;
        this.myStyle = {};
        this.myParams = {};
        this.width = 100;
        this.height = 100;
        this.goToSignUp = function () {
            _this.router.navigate(['/sign-up']);
        }; // end goToSignUp
        this.signinFunction = function () {
            if (!_this.email) {
                _this.toastr.warning('enter email');
            }
            else if (!_this.password) {
                _this.toastr.warning('enter password');
            }
            else {
                var data = {
                    email: _this.email,
                    password: _this.password
                };
                _this.appService.logInFunction(data)
                    .subscribe(function (apiResponse) {
                    if (apiResponse.status === 200) {
                        console.log(apiResponse);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('authtoken', apiResponse.data.authToken);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('receiverId', apiResponse.data.userDetails.userId);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('receiverName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);
                        _this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                        _this.router.navigate(['/chat']);
                    }
                    else {
                        _this.toastr.error(apiResponse.message);
                        console.log(apiResponse.message);
                    }
                }, function (err) {
                    _this.toastr.error('some error occured');
                });
            } // end condition
        }; // end signinFunction
        this.forgotPassword = function (email) {
            if (email === undefined) {
                _this.emailNeed = 0;
            }
            else {
                console.log(email);
                _this.appService.forgotPassword(email).subscribe(function (Response) {
                    if (Response.status === 200) {
                        _this.toastr.success('Mail has been sent.Check for further process!');
                        setTimeout(function () {
                            _this.router.navigate(['/login']);
                        }, 2000);
                    }
                    else {
                        _this.toastr.error(Response.message);
                    }
                }, function (error) {
                    _this.toastr.error("Some Error Occured!");
                });
            }
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('receiverId')) {
            this.router.navigate(['/chat']);
        }
        this.myStyle = {
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'z-index': -1,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };
        this.myParams = {
            particles: {
                number: {
                    value: 200,
                },
                color: {
                    value: '#ff0000'
                },
                shape: {
                    type: 'triangle',
                },
            }
        };
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.css":
/*!******************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button:disabled {\n  cursor: not-allowed;\n\n}\n#my-link{\n  cursor:pointer;\n}\n"

/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"/\">My Chat</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" id=\"my-link\" (click)=\"goToSignUp()\">Sign-Up</a>\n      </li>\n    </ul>\n  </div>\n\n</nav>\n\n<div class=\"row p-0 m-0\">\n  <div class=\"col-sm\"></div>\n  <div class=\"col-sm p-5\">\n    <h2 class=\"form-signin-heading\">Reset Password</h2>\n    <form #resetForm=\"ngForm\" (ngSubmit)=\"resetPassword();resetForm.reset()\">\n      <label for=\"inputPassword\" class=\"sr-only\">New Password</label>\n      <input type=\"password\" #pass=\"ngModel\" name=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\"\n        required>\n      <br>\n      <div [hidden]=\"pass.valid || pass.pristine\" class=\"alert alert-danger\">\n        <div *ngIf=\"pass.errors?.required\">\n          Password is required!\n        </div>\n      </div>\n      <label for=\"confirmPassword\" class=\"sr-only\">Confirm Password</label>\n      <input type=\"password\" #confirmpass=\"ngModel\" name=\"confirmpassword\" id=\"confirmPassword\" class=\"form-control\" [(ngModel)]=\"confirmPassword\"\n        placeholder=\"Confirm Password\" required>\n      <br>\n      <div [hidden]=\"confirmpass.valid || confirmpass.pristine\" class=\"alert alert-danger\">\n        Confirm Password is required!\n      </div>\n\n      <div *ngIf=\"notMatch==1\">\n        <p class=\"text-danger\">Password and confirm Password does not match!</p>\n      </div>\n\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"!resetForm.form.valid\">Reset</button>\n    </form>\n  </div>\n\n  <div class=\"col-sm\"></div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(_route, appservice, router, toastr) {
        var _this = this;
        this._route = _route;
        this.appservice = appservice;
        this.router = router;
        this.toastr = toastr;
        this.notMatch = 0;
        this.goToSignUp = function () {
            _this.router.navigate(['/sign-up']);
        };
        this.resetPassword = function () {
            var encodedEmail = _this._route.snapshot.paramMap.get('id');
            var decodedEmail = atob(encodedEmail);
            var finalEmail = decodedEmail.substr(0, decodedEmail.length - 17);
            if (_this.password !== _this.confirmPassword) {
                _this.notMatch = 1;
            }
            else {
                console.log(finalEmail);
                var data = {
                    'email': finalEmail,
                    'password': _this.password
                };
                _this.appservice.resetPassword(data).subscribe(function (Response) {
                    if (Response.status === 200) {
                        _this.toastr.success(Response.message);
                        setTimeout(function () {
                            _this.router.navigate(['/']);
                        }, 2000);
                    }
                    else {
                        _this.toastr.error(Response.message);
                    }
                }, function (error) {
                    _this.toastr.error("Some Error Occured!");
                });
            }
        };
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/user/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/user/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/user/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button:disabled {\n  cursor: not-allowed;\n\n}\n\n#my-link{\n  cursor:pointer;\n}\n"

/***/ }),

/***/ "./src/app/user/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"/\">My Chat</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" id=\"my-link\" (click)=\"goToSignIn()\">LOGIN</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<div class=\"row p-0 m-0\">\n  <div class=\"col-sm\"></div>\n  <div class=\"col-sm p-5\">\n    <h2 class=\"form-signin-heading\">Sign Up To Start Chat</h2>\n    <br>\n    <form #signUp=\"ngForm\" (ngSubmit)=\"signupFunction()\">\n      <span>FirstName: </span>\n      <label for=\"inputFirstName\" class=\"sr-only\">FirstName</label>\n      <input type=\"text\" #first=\"ngModel\" id=\"inputFirstName\" name=\"firstName\" class=\"form-control\" [(ngModel)]=\"firstName\" placeholder=\"FirstName\"\n        required autofocus>\n      <br>\n      <div [hidden]=\"first.pristine || first.valid\" class=\"alert alert-danger\">\n        <div *ngIf=\"first.errors?.minlength\">\n          First Name should contain mimimum 2 letters\n        </div>\n        <div *ngIf=\"first.errors?.required\">\n          First Name is required!\n        </div>\n\n      </div>\n\n      <span>LastName: </span>\n\n      <label for=\"inputLastName\" class=\"sr-only\">LastName</label>\n\n      <input type=\"text\" #last=\"ngModel\" minlength=\"2\" id=\"inputLastName\" name=\"lastName\" class=\"form-control\" [(ngModel)]=\"lastName\"\n        placeholder=\"LastName\" required>\n\n      <br>\n      <div [hidden]=\"last.pristine || last.valid\" class=\"alert alert-danger\">\n        <div *ngIf=\"last.errors?.minlength\">\n          Last Name should contain mimimum 2 letters\n        </div>\n        <div *ngIf=\"last.errors?.required\">\n          Last Name is required!\n        </div>\n\n      </div>\n      <span>Mobile: </span>\n\n      <label for=\"inputMobile\" class=\"sr-only\">Mobile</label>\n\n      <input type=\"number\" #mobileNum=\"ngModel\" id=\"inputMobile\" class=\"form-control\" name=\"mobile\" [(ngModel)]=\"mobile\" placeholder=\"Mobile\"\n        required>\n\n      <br>\n      <div [hidden]=\"mobileNum.valid || mobileNum.pristine\" class=\"alert alert-danger\">\n        <div *ngIf=\"mobileNum.errors?.required\">\n          Mobile Number is required!\n        </div>\n      </div>\n      <span>Email: </span>\n\n      <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n\n      <input type=\"email\" #emailId=\"ngModel\" id=\"inputEmail\" class=\"form-control\" name=\"emailId\" [(ngModel)]=\"email\" placeholder=\"Email address\"\n        required>\n\n      <br>\n      <div [hidden]=\"emailId.valid || emailId.pristine\" class=\"alert alert-danger\">\n        <div *ngIf=\"emailId.errors?.required\">\n          Email is required!\n        </div>\n      </div>\n      <span>Password: </span>\n\n      <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n\n      <input type=\"password\" #pass=\"ngModel\" id=\"inputPassword\" class=\"form-control\" name=\"pass\" [(ngModel)]=\"password\" placeholder=\"Password\"\n        required>\n\n      <br>\n      <div [hidden]=\"pass.valid || pass.pristine\" class=\"alert alert-danger\">\n        <div *ngIf=\"pass.errors?.required\">\n          Password is required!\n        </div>\n      </div>\n\n\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"!signUp.form.valid\">Sign Up</button>\n    </form>\n  </div>\n\n  <div class=\"col-sm\"></div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/user/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(appService, router, toastr) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.myStyle = {};
        this.myParams = {};
        this.width = 100;
        this.height = 100;
        this.goToSignIn = function () {
            _this.router.navigate(['/']);
        }; // end goToSignIn
        this.signupFunction = function () {
            if (!_this.firstName) {
                _this.toastr.warning('enter first name');
            }
            else if (!_this.lastName) {
                _this.toastr.warning('enter last name');
            }
            else if (!_this.mobile) {
                _this.toastr.warning('enter mobile');
            }
            else if (!_this.email) {
                _this.toastr.warning('enter email');
            }
            else if (!_this.password) {
                _this.toastr.warning('enter password');
            }
            else {
                var data = {
                    firstName: _this.firstName,
                    lastName: _this.lastName,
                    mobile: _this.mobile,
                    email: _this.email,
                    password: _this.password
                };
                console.log(data);
                _this.appService.signupFunction(data)
                    .subscribe(function (apiResponse) {
                    console.log(apiResponse);
                    if (apiResponse.status === 200) {
                        _this.toastr.success('Signup successful');
                        setTimeout(function () {
                            _this.goToSignIn();
                            _this.toastr.success('Please confirm your email before login.');
                        }, 2000);
                    }
                    else {
                        _this.toastr.error(apiResponse.message);
                    }
                }, function (err) {
                    _this.toastr.error('some error occured');
                });
            } // end condition
        }; // end signupFunction
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.myStyle = {
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'z-index': -1,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };
        this.myParams = {
            particles: {
                number: {
                    value: 200,
                },
                color: {
                    value: '#ff0000'
                },
                shape: {
                    type: 'star',
                },
            }
        };
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/user/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/user/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _verify_verify_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./verify/verify.component */ "./src/app/user/verify/verify.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/user/reset-password/reset-password.component.ts");
/* harmony import */ var angular_particle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-particle */ "./node_modules/angular-particle/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// Import ParticlesModule

var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(),
                angular_particle__WEBPACK_IMPORTED_MODULE_10__["ParticlesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: 'sign-up', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
                    { path: 'verify/:hash', component: _verify_verify_component__WEBPACK_IMPORTED_MODULE_8__["VerifyComponent"] },
                    { path: 'reset/:id', component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__["ResetPasswordComponent"] },
                ])
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"], _verify_verify_component__WEBPACK_IMPORTED_MODULE_8__["VerifyComponent"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__["ResetPasswordComponent"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/user/verify/verify.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/verify/verify.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/verify/verify.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/verify/verify.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"success==1\">\n    <div class=\"row mt-4\">\n      <div class=\"col-12 text-center\">\n        <h2 class=\"text-success\">Email Verified!</h2>\n        <h5 class=\"text-danger\">Thanks for signing up .Please\n          <a [routerLink]=\"['/login']\">Login</a>\n        </h5>\n      </div>\n    </div>\n  </div> <!--success end-->\n  <!---failure start-->\n  <div *ngIf=\"failure==1\">\n        <div class=\"row mt-4\">\n          <div class=\"col-12 text-center\">\n            <h2 class=\"text-success\">Email Not Verified!</h2>\n            <h5 class=\"text-danger\">Oops!Some Error Occured!.Please again\n              <a [routerLink]=\"['/sign-up']\">SignUp</a>\n            </h5>\n          </div>\n        </div>\n  </div><!-- failure end -->\n</div>\n"

/***/ }),

/***/ "./src/app/user/verify/verify.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/verify/verify.component.ts ***!
  \*************************************************/
/*! exports provided: VerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyComponent", function() { return VerifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VerifyComponent = /** @class */ (function () {
    function VerifyComponent(_route, router, appservice) {
        this._route = _route;
        this.router = router;
        this.appservice = appservice;
        this.success = 0;
        this.failure = 0;
    }
    VerifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hash = this._route.snapshot.paramMap.get('hash');
        this.appservice.verifyEmail(this.hash).subscribe(function (Response) {
            if (Response.status === 200) {
                _this.success = 1;
            }
            else {
                _this.failure = 1;
            }
        }, function (error) {
        });
    }; // end ngonit
    VerifyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-verify',
            template: __webpack_require__(/*! ./verify.component.html */ "./src/app/user/verify/verify.component.html"),
            styles: [__webpack_require__(/*! ./verify.component.css */ "./src/app/user/verify/verify.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], VerifyComponent);
    return VerifyComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gajal-pc/chat/chatfront/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map