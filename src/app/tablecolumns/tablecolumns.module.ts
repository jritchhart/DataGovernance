import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { tablecolumnsListComponent } from './tablecolumns-list.components';
import { TableColumnsService } from './tablecolumns.service';

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
    TableColumnsService,
  ]
})
export class TableColumnsModule {}
