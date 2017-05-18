import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IDatabaseData } from './databaseData';

@Component({
  selector: 'database-app',
  templateUrl: './app/database/database.component.html',
  styleUrls: ['./app/database/database.component.css']

})
export class databaseComponent implements OnInit {

  //databaseData: EventEmitter ;
  _tabName: String;
  _schemaName: String;

  constructor( route: ActivatedRoute ) { 

    this._tabName = route.snapshot.params['id'];
    this._schemaName = route.snapshot.params['id2'];
   // @Output() databaseData = new EventEmitter();
   // databasaeData.emit(this_tabName);

  }

  ngOnInit() {

  }

}
