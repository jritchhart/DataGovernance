import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'wmsods-app',
  templateUrl: './app/wmsods/wmsods.component.html',
  styleUrls: ['./app/wmsods/wmsods.component.css']

})
export class wmsodsComponent implements OnInit {

  @Input() _tabName: String;

  constructor() { }

  ngOnInit() {
        //        this.sub = this._route.params.subscribe(
        //    params => {
        //       this._tabName = params['SchemaName'] || '' ;
               //this.pageTitle = 'Viewing detailed information for ' + this.tableName;

        });

  }

}
