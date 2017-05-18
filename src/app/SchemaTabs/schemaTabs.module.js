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
var schemaobjects_list_components_1 = require(".././schemaobjects/schemaobjects-list.components");
var schemaobjects_module_1 = require(".././schemaobjects/schemaobjects.module");
var schemaobjects_service_1 = require(".././schemaobjects/schemaobjects.service");
var schemaTabs_service_1 = require("./schemaTabs.service");
var SchemaTabsModule = (function () {
    function SchemaTabsModule() {
    }
    return SchemaTabsModule;
}());
SchemaTabsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule.forChild([
                { path: 'SchemaObjects', component: schemaobjects_list_components_1.schemaobjectsListComponent },
            ]),
            schemaobjects_module_1.SchemaObjectsModule
        ],
        declarations: [],
        providers: [
            schemaTabs_service_1.SchemaTabsService,
            schemaobjects_service_1.SchemaObjectsService
        ]
    })
], SchemaTabsModule);
exports.SchemaTabsModule = SchemaTabsModule;
//# sourceMappingURL=schemaTabs.module.js.map