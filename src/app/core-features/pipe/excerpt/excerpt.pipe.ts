import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excerpt'
})
export class ExcerptPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let words=value.split(' ')
    let wordsCount=words.length
    if(wordsCount>args){
      return words.slice(0,args).join(' ')
    }
    else{
      return value;
    }
  }

}
