"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var tablecolumns_service_1 = require("./tablecolumns.service");
//import { ColumnDetailsComponent } from '../columndetails/columndetails.component';
var TableColumnsModule = (function () {
    function TableColumnsModule() {
    }
    return TableColumnsModule;
}());
TableColumnsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule.forChild([])
        ],
        declarations: [],
        providers: [
            tablecolumns_service_1.TableColumnsService,
        ]
    })
], TableColumnsModule);
exports.TableColumnsModule = TableColumnsModule;
//# sourceMappingURL=tablecolumns.module.js.map