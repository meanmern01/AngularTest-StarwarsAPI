import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lenghtFilter'
})
export class LenghtFilterPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if (value >= 1000) {
      return 'large'
    }
    if (value >= 100 && value <= 1000) {
      return 'normal'
    } else {
      return 'small'
    }
    return null;
  }

}
