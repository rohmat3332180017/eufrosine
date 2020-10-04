import {Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'LockFilter',
    pure: false
})

export class LockFilter implements PipeTransform{
    transform(items : any[], LockFilter : (item: any) => boolean){
        if (!items || !LockFilter){
            return items;
        }
        return items.filter(item => LockFilter(item))
    };
}