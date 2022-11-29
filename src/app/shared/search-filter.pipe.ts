import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, args: any) {
    console.log(value, args)
    if (args === undefined || args === null || args === '') {
      return value
    }
    return value?.filter((val: any) => val?.title ? val?.title?.toLowerCase().includes(args?.toLowerCase()) : val?.name?.toLowerCase().includes(args?.toLowerCase()))

  }

}
