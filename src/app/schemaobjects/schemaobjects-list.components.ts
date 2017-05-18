import { Component, OnInit , Input }  from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ISchemaObjects } from './schemaobjects';
import { SchemaObjectsService } from './schemaobjects.service';

@Component({
    selector: 'schemaobjects-app',
    templateUrl: './app/schemaobjects/schemaobjects-list.component.html',
    styleUrls:  ['./app/schemaobjects/schemaobjects-list.component.css']
})
export class schemaobjectsListComponent implements OnInit {
    
    @Input() pageTitle: string;
    @Input() appType: string;

    //pageTitle: string = 'WMS ODS TABLES AND VIEWS';
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;
    listFilter: string;
    errorMessage: string;
    _tabName: string;
    _schemaName: string;

    schemaobjects: ISchemaObjects[];

    constructor(private _schemaobjectsService: SchemaObjectsService, route: ActivatedRoute ) {
        this._tabName = route.snapshot.params['id'];
        this._schemaName = route.snapshot.params['id2'];
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {

        this._schemaobjectsService.getSchemaObjects(this.appType, this._tabName, this._schemaName)
                .subscribe(schemaobjects => this.schemaobjects = schemaobjects,
                           error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Schema Objects List: ' + message;
    }
}
