import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(value: string, search?: string): any {
    if (!search || !value) { return value; }

    const filtered = value.replace(/<[^>]*>/g, '');
    return filtered.replace(new RegExp(`(${search})`, 'gi'),
      '<span class="highlight">$1</span>');
  }
}
