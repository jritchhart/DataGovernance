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
var tablecolumns_service_1 = require("./tablecolumns.service");
var tablecolumnsListComponent = (function () {
    function tablecolumnsListComponent(_route, _router, _TableColumnsService) {
        this._route = _route;
        this._router = _router;
        this._TableColumnsService = _TableColumnsService;
        //pageTitle: string ;
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this.pageTitle = _route.snapshot.params['pageTitle'];
    }
    tablecolumnsListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    tablecolumnsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            _this.tableName = params['tableName'];
            _this.pageTitle = 'Viewing detailed information for ' + _this.tableName;
        });
        this._TableColumnsService.getTablecolumns(this.tableName)
            .subscribe(function (tablecolumns) { return _this.tablecolumns = tablecolumns; }, function (error) { return _this.errorMessage = error; });
    };
    tablecolumnsListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Schema Objects List: ' + message;
    };
    return tablecolumnsListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], tablecolumnsListComponent.prototype, "pageTitle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], tablecolumnsListComponent.prototype, "tableSchema", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], tablecolumnsListComponent.prototype, "tableName", void 0);
tablecolumnsListComponent = __decorate([
    core_1.Component({
        selector: 'tablecolumns-app',
        templateUrl: './app/tablecolumns/tablecolumns-list.component.html',
        styleUrls: ['./app/tablecolumns/tablecolumns-list.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        tablecolumns_service_1.TableColumnsService])
], tablecolumnsListComponent);
exports.tablecolumnsListComponent = tablecolumnsListComponent;
//# sourceMappingURL=tablecolumns-list.components.js.map