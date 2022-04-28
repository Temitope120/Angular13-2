import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdInr'
})
export class UsdInrPipe implements PipeTransform {
  title = "Custom Pipes"
  transform(value: number, ...args: number[]): unknown {
    const [price] = args;
    return value * price;


    // For passing the second parameter
    // const [price, pricce] = args;
    // return value * price / pricce;
  }

}
