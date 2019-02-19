import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safePipe'
})
export class SafePipePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer){}

  transform(html: string): any {
    return this.sanitizer.bypassSecurityTrustHtml(html)
  }

}
