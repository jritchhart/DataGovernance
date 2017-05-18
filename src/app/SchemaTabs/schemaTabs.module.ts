import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { schemaTabsListComponent } from './schemaTabs-list.components';

import { schemaobjectsListComponent } from ".././schemaobjects/schemaobjects-list.components";
import { schemaobjectsFilterPipe } from ".././schemaobjects/schemaobjects-filter.pipe";
import { SchemaObjectsModule } from ".././schemaobjects/schemaobjects.module";
import { SchemaObjectsService } from ".././schemaobjects/schemaobjects.service";

import { SchemaTabsService } from './schemaTabs.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'SchemaObjects', component: schemaobjectsListComponent },
    ])
    , SchemaObjectsModule
  ],
  declarations: [
  //  schemaobjectsListComponent,
  //  schemaTabsListComponent,
   // schemaobjectsFilterPipe,
  ],
  providers: [
    SchemaTabsService,
    SchemaObjectsService
  ]
})
export class SchemaTabsModule {}
