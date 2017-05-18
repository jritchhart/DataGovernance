"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var tableviews_service_1 = require("./tableviews.service");
var tableviewsListComponent = (function () {
    function tableviewsListComponent(_route, _router, _TableViewsService) {
        this._route = _route;
        this._router = _router;
        this._TableViewsService = _TableViewsService;
        //pageTitle: string ;
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this.pageTitle = _route.snapshot.params['pageTitle'];
    }
    tableviewsListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    tableviewsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            _this.tableName = params['tableName'];
            _this.pageTitle = 'Viewing detailed information for ' + _this.tableName;
        });
        this._TableViewsService.getTableviews(this.tableName)
            .subscribe(function (tableviews) { return _this.tableviews = tableviews; }, function (error) { return _this.errorMessage = error; });
    };
    tableviewsListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Table View List: ' + message;
    };
    return tableviewsListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], tableviewsListComponent.prototype, "pageTitle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], tableviewsListComponent.prototype, "tableSchema", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], tableviewsListComponent.prototype, "tableName", void 0);
tableviewsListComponent = __decorate([
    core_1.Component({
        selector: 'tableviews-app',
        templateUrl: './app/tableviews/tableviews-list.component.html',
        styleUrls: ['./app/tableviews/tableviews-list.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        tableviews_service_1.TableViewsService])
], tableviewsListComponent);
exports.tableviewsListComponent = tableviewsListComponent;
//# sourceMappingURL=tableviews-list.components.js.map