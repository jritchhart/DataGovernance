import {  PipeTransform, Pipe } from '@angular/core';
import { ISchemaTabs } from './schemaTabs';

@Pipe({
    name: 'schematabsFilterPipe'
})
export class schematabsFilterPipe implements PipeTransform {

    transform(value: ISchemaTabs[], filterBy: string): ISchemaTabs[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((schemaoTabs: ISchemaTabs) =>
            schemaoTabs.schemaName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
