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
var schemaobjects_list_components_1 = require("./schemaobjects-list.components");
var schemaobjects_service_1 = require("./schemaobjects.service");
var SchemaObjectsModule = (function () {
    function SchemaObjectsModule() {
    }
    return SchemaObjectsModule;
}());
SchemaObjectsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule.forChild([
                { path: 'schemaobjects', component: schemaobjects_list_components_1.schemaobjectsListComponent },
            ])
        ],
        declarations: [],
        providers: [
            schemaobjects_service_1.SchemaObjectsService,
        ]
    })
], SchemaObjectsModule);
exports.SchemaObjectsModule = SchemaObjectsModule;
//# sourceMappingURL=schemaobjects.module.js.map