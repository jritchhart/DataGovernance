import { Component, OnInit , Input }  from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription }       from 'rxjs/Subscription';

import { ITablecolumns } from './tablecolumns';
import { TableColumnsService } from './tablecolumns.service';

@Component({
    selector: 'tablecolumns-app',
    templateUrl: './app/tablecolumns/tablecolumns-list.component.html',
    styleUrls: ['./app/tablecolumns/tablecolumns-list.component.css']
})
export class tablecolumnsListComponent implements OnInit {
    //pageTitle: string = 'ASN_DETAIL'

    @Input() pageTitle: string;
    @Input() tableSchema: string;
    @Input() tableName: string;
    //pageTitle: string ;
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;
    listFilter: string;
    errorMessage: string;
    private sub: Subscription;

    tablecolumns: ITablecolumns[];

    constructor(private _route: ActivatedRoute
                , private _router: Router
                , private _TableColumnsService: TableColumnsService)
    {
                this.pageTitle = _route.snapshot.params['pageTitle'];
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {

            this.sub = this._route.params.subscribe(
            params => {
               this.tableName = params['tableName'] ;
               this.pageTitle = 'Viewing detailed information for ' + this.tableName;

        });

        this._TableColumnsService.getTablecolumns(this.tableName)
                .subscribe(tablecolumns => this.tablecolumns = tablecolumns,
                           error => this.errorMessage = <any>error);


    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Schema Objects List: ' + message;
    }
}
