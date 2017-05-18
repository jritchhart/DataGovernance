import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { ISchemaTabs } from './schemaTabs';

@Injectable()
export class SchemaTabsService {
    private _appType: string;
    private _schemaTabsURL: string;
    private _wmosodsSchemasURL = 'api/schemaobjects/odsschemas.json';
    private _G2Schemas = 'api/schemaobjects/G2schemas.json';

    constructor(private _http: Http) { }

    getSchemaTabs(appType: string, tabName: string): Observable<ISchemaTabs[]> {
        this._appType = appType;
        switch (tabName.toUpperCase()) {
            case 'WMSODS':
                this._schemaTabsURL = this._wmosodsSchemasURL;
                break;
            case 'LEGACY':
                this._schemaTabsURL = this._G2Schemas;
                break;
            default:
                this._schemaTabsURL = this._G2Schemas;
                break;
        }


        return this._http.get(this._schemaTabsURL)
            .map((response: Response) => <ISchemaTabs[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getSchemaTab(id: string, tabName: string): Observable<ISchemaTabs> {
        return this.getSchemaTabs(this._appType, tabName)
            .map((schematabs: ISchemaTabs[]) => schematabs.find(p => p.schemaName === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
