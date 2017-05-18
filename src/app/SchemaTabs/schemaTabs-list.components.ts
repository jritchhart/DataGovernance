import { Component, OnInit , Input }  from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ISchemaTabs } from './schemaTabs';
import { SchemaTabsService } from './schemaTabs.service';

@Component({
    selector: 'schema-tabs',
    templateUrl: './app/schemaTabs/schematabs-list.component.html',
    styleUrls:  ['./app/schemaTabs/schematabs-list.component.css']
})
export class schemaTabsListComponent implements OnInit {
    @Input() pageTitle: string;
    @Input() appType: string;
   // @Input() SchemaName: string;

    //pageTitle: string = 'WMS ODS TABLES AND VIEWS';
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;
    listFilter: string;
    errorMessage: string;
    selectedTab: string;
    _tabName: string;
    _schemaName: string;

    schematabs: ISchemaTabs[];

    constructor(private _schemaTabsService: SchemaTabsService, route: ActivatedRoute) {
        this._tabName = route.snapshot.params['id'];
        this._schemaName = route.snapshot.params['id2'];
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {

        this._schemaTabsService.getSchemaTabs(this.appType, this._tabName)
                .subscribe(schematabs => this.schematabs = schematabs,
                           error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Schema Objects List: ' + message;
    }
}
