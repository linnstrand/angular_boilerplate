import { Injectable } from '@angular/core';
import { Item } from '../../shared/models/item';

@Injectable({ providedIn: 'root' })
export class HelperService {

  setFocusOn(elementId: string): boolean {
    const elem = document.getElementById(elementId);
    if (elem) {
      setTimeout(function () { elem.focus(); }, 10);
      return true;
    }
    return false;
  }

  markContentOf(elementId: string): boolean {
    const elem = document.getElementById(elementId) as HTMLInputElement;
    if (elem && elem.select) {
      setTimeout(function () { elem.select(); }, 10);
      return true;
    }
    return false;
  }

  sort(items: Item[]): Item[] {
    return items.sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return a.name < b.name ? -1 : 1;
    });
  }

}
