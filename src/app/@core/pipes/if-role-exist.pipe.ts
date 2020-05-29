import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ifRoleExist',
})
export class IfRoleExistPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
