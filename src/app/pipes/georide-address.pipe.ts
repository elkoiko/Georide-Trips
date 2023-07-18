import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'georideAddress'
})
export class GeorideAddressPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const address = value.split(",");
    return (address.length >= 2) ? address[1] : "Unknown";
  }

}
