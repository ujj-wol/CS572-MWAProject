import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value) return [];
    return value.filter(post => post.title.includes(args) || post.body.includes(args));
  }

}
