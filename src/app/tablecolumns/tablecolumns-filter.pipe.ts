import {  PipeTransform, Pipe } from '@angular/core';
import { ITablecolumns } from './tablecolumns';

@Pipe({
    name: 'tablecolumnsFilterPipe'
})
export class tablecolumnsFilterPipe implements PipeTransform {

    transform(value: ITablecolumns[], filterBy: string): ITablecolumns[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((tablecolumns: ITablecolumns) =>
            tablecolumns.ColumnName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
