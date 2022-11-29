import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heightFilter'
})
export class HeightFilterPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if (value >= 200) {
      return 'high';
    }
    if (value >= 100 && value <= 200) {
      return 'normal';
    }
    if (value <= 100) {
      return 'small';
    }
    return null;
  }

}
