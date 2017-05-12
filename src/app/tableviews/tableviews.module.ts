import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { tableviewsListComponent } from './tableviews-list.components';
import { TableViewsService } from './tableviews.service';

//import { ColumnDetailsComponent } from '../columndetails/columndetails.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
     // { path: 'tablecolumns', component: tablecolumnsListComponent },
        //{ path: 'columndetails/:id', component: ColumnDetailsComponent}
    ])
  ],
  declarations: [
       // ColumnDetailsComponent
  ],
  providers: [
    TableViewsService,
  ]
})
export class TableViewsModule {}
