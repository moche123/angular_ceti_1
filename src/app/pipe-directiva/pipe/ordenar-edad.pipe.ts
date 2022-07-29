import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenarEdad'
})
export class OrdenarEdadPipe implements PipeTransform {

  transform(personas: any, ...args: any[]): any {
    return personas.sort((a:any,b:any) => {
      return a.edad-b.edad;
    })
  }

}
