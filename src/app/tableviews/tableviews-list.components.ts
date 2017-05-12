import { Component, OnInit , Input }  from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription }       from 'rxjs/Subscription';

import { ITableviews } from './tableviews';
import { TableViewsService } from './tableviews.service';

@Component({
    selector: 'tableviews-app',
    templateUrl: './app/tableviews/tableviews-list.component.html',
    styleUrls: ['./app/tableviews/tableviews-list.component.css']
})
export class tableviewsListComponent implements OnInit {
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

    tableviews: ITableviews[];

    constructor(private _route: ActivatedRoute
                , private _router: Router
                , private _TableViewsService: TableViewsService)
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

        this._TableViewsService.getTableviews(this.tableName)
                .subscribe(tableviews => this.tableviews = tableviews,
                           error => this.errorMessage = <any>error);


    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Table View List: ' + message;
    }
}
