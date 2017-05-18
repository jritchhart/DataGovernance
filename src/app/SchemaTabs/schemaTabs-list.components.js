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
var schemaTabs_service_1 = require("./schemaTabs.service");
var schemaTabsListComponent = (function () {
    function schemaTabsListComponent(_schemaTabsService, route) {
        this._schemaTabsService = _schemaTabsService;
        // @Input() SchemaName: string;
        //pageTitle: string = 'WMS ODS TABLES AND VIEWS';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this._tabName = route.snapshot.params['id'];
        this._schemaName = route.snapshot.params['id2'];
    }
    schemaTabsListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    schemaTabsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._schemaTabsService.getSchemaTabs(this.appType, this._tabName)
            .subscribe(function (schematabs) { return _this.schematabs = schematabs; }, function (error) { return _this.errorMessage = error; });
    };
    schemaTabsListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Schema Objects List: ' + message;
    };
    return schemaTabsListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], schemaTabsListComponent.prototype, "pageTitle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], schemaTabsListComponent.prototype, "appType", void 0);
schemaTabsListComponent = __decorate([
    core_1.Component({
        selector: 'schema-tabs',
        templateUrl: './app/schemaTabs/schematabs-list.component.html',
        styleUrls: ['./app/schemaTabs/schematabs-list.component.css']
    }),
    __metadata("design:paramtypes", [schemaTabs_service_1.SchemaTabsService, router_1.ActivatedRoute])
], schemaTabsListComponent);
exports.schemaTabsListComponent = schemaTabsListComponent;
//# sourceMappingURL=schemaTabs-list.components.js.map