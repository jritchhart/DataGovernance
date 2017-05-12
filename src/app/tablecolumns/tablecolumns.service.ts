import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { ITablecolumns } from './tablecolumns';

@Injectable()
export class TableColumnsService {
    private _tablecolumnsUrl = 'api/schemaobjects/asn_detail.json';
    private _tableName: string;

    constructor(private _http: Http) { }

    getTablecolumns(tableName: string): Observable<ITablecolumns[]> {
        this._tableName = tableName;

        this._tablecolumnsUrl = 'api/schemaobjects/' + this._tableName.toLowerCase().trim() + '.json';

        return this._http.get(this._tablecolumnsUrl)
            .map((response: Response) => <ITablecolumns[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getTablecolumn(id: string): Observable<ITablecolumns> {
        return this.getTablecolumns(this._tableName)
            .map((tablecolumns: ITablecolumns[]) => tablecolumns.find(p => p.ColumnName === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
