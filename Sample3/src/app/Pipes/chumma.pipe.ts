import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chumma'
})
export class ChummaPipe implements PipeTransform {

  transform(value:string, len:number): unknown {
    if (!len)
      len = 20;
    return value.substring(0, len);
  }

}
