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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
var SchemaTabsService = (function () {
    function SchemaTabsService(_http) {
        this._http = _http;
        this._wmosodsSchemasURL = 'api/schemaobjects/odsschemas.json';
        this._G2Schemas = 'api/schemaobjects/G2schemas.json';
    }
    SchemaTabsService.prototype.getSchemaTabs = function (appType, tabName) {
        this._appType = appType;
        switch (tabName.toUpperCase()) {
            case 'WMSODS':
                this._schemaTabsURL = this._wmosodsSchemasURL;
                break;
            case 'LEGACY':
                this._schemaTabsURL = this._G2Schemas;
                break;
            default:
                this._schemaTabsURL = this._G2Schemas;
                break;
        }
        return this._http.get(this._schemaTabsURL)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    SchemaTabsService.prototype.getSchemaTab = function (id, tabName) {
        return this.getSchemaTabs(this._appType, tabName)
            .map(function (schematabs) { return schematabs.find(function (p) { return p.schemaName === id; }); });
    };
    SchemaTabsService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return SchemaTabsService;
}());
SchemaTabsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SchemaTabsService);
exports.SchemaTabsService = SchemaTabsService;
//# sourceMappingURL=schemaTabs.service.js.map