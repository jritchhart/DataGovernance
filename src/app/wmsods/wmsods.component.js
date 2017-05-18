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
var wmsodsComponent = (function () {
    function wmsodsComponent() {
    }
    wmsodsComponent.prototype.ngOnInit = function () {
        //        this.sub = this._route.params.subscribe(
        //    params => {
        //       this._tabName = params['SchemaName'] || '' ;
        //this.pageTitle = 'Viewing detailed information for ' + this.tableName;
    };
    ;
    return wmsodsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], wmsodsComponent.prototype, "_tabName", void 0);
wmsodsComponent = __decorate([
    core_1.Component({
        selector: 'wmsods-app',
        templateUrl: './app/wmsods/wmsods.component.html',
        styleUrls: ['./app/wmsods/wmsods.component.css']
    }),
    __metadata("design:paramtypes", [])
], wmsodsComponent);
exports.wmsodsComponent = wmsodsComponent;
//# sourceMappingURL=wmsods.component.js.map