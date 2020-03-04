import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'digit'
})
export class DigitPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
