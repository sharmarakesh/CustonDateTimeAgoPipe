import { PipeTransform, Pipe } from '@angular/core';
@Pipe({
  name: 'currencyformater'
})
export class CurrencyFormaterPipe implements PipeTransform {
  transform(value: any) {
    if ( value.toString().length > 3 ) {
      const thousand_separator = ',';

      const	reverse   = value.toString().split('').reverse().slice(0, 3).join(''),
        thousands = reverse.match(/\d{1,3}/g);
        const result 	  = thousands.join(thousand_separator).split('').reverse().join('');

      const	reverse1   = value.toString().split('').reverse().slice(3, value.length).join(''),
        thousands1 = reverse1.match(/\d{1,2}/g);
        const result1 	  = thousands1.join(thousand_separator).split('').reverse().join('');
        console.log(value);
      return result1 + ',' + result;
    } else {
      return value;
    }
  }
}
