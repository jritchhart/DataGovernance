import {  PipeTransform, Pipe } from '@angular/core';
import { ITableviews } from './tableviews';

@Pipe({
    name: 'tableviewsFilterPipe'
})
export class tableviewsFilterPipe implements PipeTransform {

    transform(value: ITableviews[], filterBy: string): ITableviews[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((tableviews: ITableviews) =>
            tableviews.ViewName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
