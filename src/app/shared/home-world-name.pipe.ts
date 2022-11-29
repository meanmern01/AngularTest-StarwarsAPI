import { DataService } from './../services/data.service';
import { Pipe, PipeTransform } from '@angular/core';
import axios from 'axios'
@Pipe({
  name: 'homeWorldName'
})
export class HomeWorldNamePipe implements PipeTransform {
  constructor(private data: DataService) {

  }
  async transform(value: any, ...args: unknown[]): Promise<any> {
    if (value === null) {
      return 'unknown'
    }
    const data = axios.get(value).then(res => res.data)
    const name = await data
    return name.name
  }

}
