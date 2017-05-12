import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { ITableviews } from './tableviews';

@Injectable()
export class TableViewsService {
    private _viewUrl = 'api/schemaobjects/asn_detail_Views.json';
    private _viewName: string;

    constructor(private _http: Http) { }

    getTableviews(tableName: string): Observable<ITableviews[]> {
        this._viewName = tableName;

        return this._http.get(this._viewUrl)
            .map((response: Response) => <ITableviews[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getTableview(id: string): Observable<ITableviews> {
        return this.getTableviews(this._viewName)
            .map((tableviews: ITableviews[]) => tableviews.find(p => p.ViewName === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
