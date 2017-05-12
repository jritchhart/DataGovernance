import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { schemaobjectsListComponent } from './schemaobjects-list.components';


import { SchemaObjectsService } from './schemaobjects.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'schemaobjects', component: schemaobjectsListComponent },
    ])
  ],
  declarations: [
    //schemaobjectsListComponent,
    //schemaobjectsFilterPipe
  ],
  providers: [
    SchemaObjectsService,
  ]
})
export class SchemaObjectsModule {}
