import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ObjectIteration'
})
export class ObjectIteration implements PipeTransform {

  transform(obj): any {
    const keys = [];
    for (const key in obj) {
      if (!key) { continue; }
      keys.push({key: key, value: obj[key]});
    }
    return keys;
  }
}
