import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productname'
})
export class ProductnamePipe implements PipeTransform {

  transform(value:number,use:number): unknown {
    return value*use;
  }

}
