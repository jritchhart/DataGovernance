import {  PipeTransform, Pipe } from '@angular/core';
import { ISchemaObjects } from './schemaobjects';

@Pipe({
    name: 'schemaobjectsFilterPipe'
})
export class schemaobjectsFilterPipe implements PipeTransform {

    transform(value: ISchemaObjects[], filterBy: string): ISchemaObjects[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((schemaobjects: ISchemaObjects) =>
            schemaobjects.tabname.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
