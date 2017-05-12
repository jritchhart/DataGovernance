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
var schemaobjects_service_1 = require("./schemaobjects.service");
var schemaobjectsListComponent = (function () {
    function schemaobjectsListComponent(_schemaobjectsService) {
        this._schemaobjectsService = _schemaobjectsService;
        //pageTitle: string = 'WMS ODS TABLES AND VIEWS';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
    }
    schemaobjectsListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    schemaobjectsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._schemaobjectsService.getSchemaObjects(this.appType)
            .subscribe(function (schemaobjects) { return _this.schemaobjects = schemaobjects; }, function (error) { return _this.errorMessage = error; });
    };
    schemaobjectsListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Schema Objects List: ' + message;
    };
    return schemaobjectsListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], schemaobjectsListComponent.prototype, "pageTitle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], schemaobjectsListComponent.prototype, "appType", void 0);
schemaobjectsListComponent = __decorate([
    core_1.Component({
        selector: 'schemaobjects-app',
        templateUrl: './app/schemaobjects/schemaobjects-list.component.html',
        styleUrls: ['./app/schemaobjects/schemaobjects-list.component.css']
    }),
    __metadata("design:paramtypes", [schemaobjects_service_1.SchemaObjectsService])
], schemaobjectsListComponent);
exports.schemaobjectsListComponent = schemaobjectsListComponent;
//# sourceMappingURL=schemaobjects-list.components.js.map