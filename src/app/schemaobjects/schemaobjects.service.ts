import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { ISchemaObjects } from './schemaobjects';

@Injectable()
export class SchemaObjectsService {
    private _appType: string;
    private _schemaobjectsUrl: string;
    private _wmosodsURL = 'api/schemaobjects/wmosods.json';
    private _UsercvtURL = 'api/schemaobjects/usercvt.json';

    constructor(private _http: Http) { }

    getSchemaObjects(appType: string): Observable<ISchemaObjects[]> {
        this._appType = appType;
        switch (this._appType) {
            case 'WMOSODS':
                this._schemaobjectsUrl = this._wmosodsURL;
                break;
            case 'LEGACY':
                this._schemaobjectsUrl = this._UsercvtURL;
                break;
            default:
                this._schemaobjectsUrl = this._wmosodsURL;
                break;
        }


        return this._http.get(this._schemaobjectsUrl)
            .map((response: Response) => <ISchemaObjects[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getSchemaObject(id: string): Observable<ISchemaObjects> {
        return this.getSchemaObjects(this._appType)
            .map((schemaobjects: ISchemaObjects[]) => schemaobjects.find(p => p.tabname === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
