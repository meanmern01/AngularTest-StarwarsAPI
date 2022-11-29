import { Pipe, PipeTransform } from '@angular/core';
import axios from 'axios'
import { DataService } from './../services/data.service';


@Pipe({
  name: 'characters'
})
export class CharactersPipe implements PipeTransform {
  async transform(value: any, ...args: unknown[]): Promise<any> {
    console.log(value);
    value.map(async (d: any) => {
      const data = axios.get(d).then(res => res.data)
      const name = await data
      console.log(name.name);

      return name.name
    })

    if (value === null) {
      return 'unknown'
    }


    // return name.name
  }

}
