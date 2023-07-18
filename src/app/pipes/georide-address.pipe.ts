import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'georideAddress'
})
export class GeorideAddressPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.substring(1).replaceAll(",", ", ");
  }

}
