import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { AppsettingsComponent } from './components/appsettings/appsettings.component';

import { WelcomeComponent } from "./home/welcome.component";
//import { wmsodsComponent } from './wmsods/wmsods.component';
import { databaseComponent } from './database/database.component';
import { databaseheaderComponent } from './databaseheader/databaseheader.component';

import { schemaobjectsListComponent } from "./schemaobjects/schemaobjects-list.components";
import { schemaobjectsFilterPipe } from "./schemaobjects/schemaobjects-filter.pipe";
import { SchemaObjectsModule } from "./schemaobjects/schemaobjects.module";

import { schemaTabsListComponent } from "./schemaTabs/schemaTabs-list.components";
import { SchemaTabsModule } from "./schemaTabs/schemaTabs.module";

import { TableColumnsModule } from './tablecolumns/tablecolumns.module';
import { tablecolumnsListComponent } from './tablecolumns/tablecolumns-list.components';
import { tablecolumnsFilterPipe } from './tablecolumns/tablecolumns-filter.pipe';

import { TableViewsModule } from './tableviews/tableviews.module';
import { tableviewsListComponent } from './tableviews/tableviews-list.components';
import { tableviewsFilterPipe } from './tableviews/tableviews-filter.pipe';

@NgModule({
  imports: [ 
    BrowserModule ,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'TableColumns', component: tablecolumnsListComponent },
      { path: 'TableViews', component: tableviewsListComponent },
      { path: 'SchemaObjects', component: schemaobjectsListComponent },  
        
 //     { path: 'wmsods', component: wmsodsComponent },
      { path: 'database/:id', component: databaseComponent },
      { path: 'database/:id/:id2', component: databaseComponent },
      
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
      , SchemaObjectsModule
      , SchemaTabsModule
      , TableColumnsModule
      , TableViewsModule
    ],

  declarations: [ 
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    AppsettingsComponent,
    schemaTabsListComponent,
    schemaobjectsListComponent,
    schemaobjectsFilterPipe,
  //  wmsodsComponent,
    databaseComponent,
    databaseheaderComponent,
    WelcomeComponent,
    tablecolumnsListComponent,
    tablecolumnsFilterPipe,
    tableviewsListComponent,
    tableviewsFilterPipe
   ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
