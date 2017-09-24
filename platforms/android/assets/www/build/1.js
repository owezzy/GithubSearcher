webpackJsonp([1],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSearchResultsPageModule", function() { return ProfileSearchResultsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_search_results__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfileSearchResultsPageModule = (function () {
    function ProfileSearchResultsPageModule() {
    }
    return ProfileSearchResultsPageModule;
}());
ProfileSearchResultsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__profile_search_results__["a" /* ProfileSearchResultsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile_search_results__["a" /* ProfileSearchResultsPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
        ],
        schemas: [
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]
        ],
    })
], ProfileSearchResultsPageModule);

//# sourceMappingURL=profile-search-results.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_results_search_results__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__repository_repository__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__search_results_search_results__["a" /* SearchResultsComponent */],
            __WEBPACK_IMPORTED_MODULE_3__repository_repository__["a" /* RepositoryComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__search_results_search_results__["a" /* SearchResultsComponent */],
            __WEBPACK_IMPORTED_MODULE_3__repository_repository__["a" /* RepositoryComponent */]]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchResultsComponent = (function () {
    function SearchResultsComponent() {
    }
    return SearchResultsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], SearchResultsComponent.prototype, "user", void 0);
SearchResultsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'search-results',template:/*ion-inline-start:"/home/owen_adira/WebstormProjects/GithubSearcher/githubSearch/src/components/search-results/search-results.html"*/'<ion-item *ngIf="user" text-wrap>\n<ion-avatar item-left>\n<img [src]="user.avatar_url" alt="">\n</ion-avatar>\n  <h2>{{user.name}}</h2>\n  <h2>{{user.email}}</h2>\n  <h2>{{user.company}}</h2>\n  <p>{{user.location}}</p>\n  <p text-wrap>{{user.bio}}</p>\n</ion-item>\n'/*ion-inline-end:"/home/owen_adira/WebstormProjects/GithubSearcher/githubSearch/src/components/search-results/search-results.html"*/
    })
], SearchResultsComponent);

//# sourceMappingURL=search-results.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepositoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the RepositoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var RepositoryComponent = (function () {
    function RepositoryComponent() {
    }
    return RepositoryComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], RepositoryComponent.prototype, "repository", void 0);
RepositoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'repository',template:/*ion-inline-start:"/home/owen_adira/WebstormProjects/GithubSearcher/githubSearch/src/components/repository/repository.html"*/'<ion-card>\n  <ion-card-header>\n    <ion-card-title> {{repository.name}}</ion-card-title>\n  </ion-card-header>\n<ion-card-content>\n  {{repository.description}}\n</ion-card-content>\n</ion-card>\n'/*ion-inline-end:"/home/owen_adira/WebstormProjects/GithubSearcher/githubSearch/src/components/repository/repository.html"*/
    })
], RepositoryComponent);

//# sourceMappingURL=repository.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileSearchResultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_github_service_github_service__ = __webpack_require__(196);
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
 * Generated class for the ProfileSearchResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfileSearchResultsPage = (function () {
    function ProfileSearchResultsPage(github, navParams) {
        this.github = github;
        this.navParams = navParams;
    }
    ProfileSearchResultsPage.prototype.getUserInformation = function () {
        var _this = this;
        this.github.getUserInformation(this.username).subscribe(function (data) { return _this.user = data; });
        this.github.getRepositoryInformation(this.username).subscribe(function (data) { return _this.repositories = data; });
        // this.github.mockGetUserInformation(this.username).subscribe((data : User)=> this.user = data);
        //this.github.mockGetRepositoryInformation(this.username).subscribe((data: Repository[])=> this.repositories = data)
    };
    ProfileSearchResultsPage.prototype.ionViewWillLoad = function () {
        this.username = this.navParams.get("username");
        if (this.username) {
            this.getUserInformation();
        }
    };
    return ProfileSearchResultsPage;
}());
ProfileSearchResultsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])({
        segment: 'profile/results/:username'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile-search-results',template:/*ion-inline-start:"/home/owen_adira/WebstormProjects/GithubSearcher/githubSearch/src/pages/profile-search-results/profile-search-results.html"*/'<!--\n  Generated template for the ProfileSearchResultsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Search Results</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding >\n<search-results [user]="user"></search-results>\n<repository *ngFor="let repo  of repositories" [repository]="repo" ></repository>\n</ion-content>\n'/*ion-inline-end:"/home/owen_adira/WebstormProjects/GithubSearcher/githubSearch/src/pages/profile-search-results/profile-search-results.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_github_service_github_service__["a" /* GithubServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ProfileSearchResultsPage);

//# sourceMappingURL=profile-search-results.js.map

/***/ })

});
//# sourceMappingURL=1.js.map