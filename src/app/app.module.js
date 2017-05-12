"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var appheader_component_1 = require("./components/appheader/appheader.component");
var appfooter_component_1 = require("./components/appfooter/appfooter.component");
var appmenu_component_1 = require("./components/appmenu/appmenu.component");
var appsettings_component_1 = require("./components/appsettings/appsettings.component");
var welcome_component_1 = require("./home/welcome.component");
var wmsods_component_1 = require("./wmsods/wmsods.component");
var schemaobjects_list_components_1 = require("./schemaobjects/schemaobjects-list.components");
var schemaobjects_filter_pipe_1 = require("./schemaobjects/schemaobjects-filter.pipe");
var schemaobjects_module_1 = require("./schemaobjects/schemaobjects.module");
var tablecolumns_module_1 = require("./tablecolumns/tablecolumns.module");
var tablecolumns_list_components_1 = require("./tablecolumns/tablecolumns-list.components");
var tablecolumns_filter_pipe_1 = require("./tablecolumns/tablecolumns-filter.pipe");
var tableviews_module_1 = require("./tableviews/tableviews.module");
var tableviews_list_components_1 = require("./tableviews/tableviews-list.components");
var tableviews_filter_pipe_1 = require("./tableviews/tableviews-filter.pipe");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                { path: 'TableColumns', component: tablecolumns_list_components_1.tablecolumnsListComponent },
                { path: 'TableViews', component: tableviews_list_components_1.tableviewsListComponent },
                { path: 'wmsods', component: wmsods_component_1.wmsodsComponent },
                { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
            ]),
            schemaobjects_module_1.SchemaObjectsModule,
            tablecolumns_module_1.TableColumnsModule,
            tableviews_module_1.TableViewsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            appheader_component_1.AppheaderComponent,
            appfooter_component_1.AppfooterComponent,
            appmenu_component_1.AppmenuComponent,
            appsettings_component_1.AppsettingsComponent,
            schemaobjects_list_components_1.schemaobjectsListComponent,
            schemaobjects_filter_pipe_1.schemaobjectsFilterPipe,
            wmsods_component_1.wmsodsComponent,
            welcome_component_1.WelcomeComponent,
            tablecolumns_list_components_1.tablecolumnsListComponent,
            tablecolumns_filter_pipe_1.tablecolumnsFilterPipe,
            tableviews_list_components_1.tableviewsListComponent,
            tableviews_filter_pipe_1.tableviewsFilterPipe
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map