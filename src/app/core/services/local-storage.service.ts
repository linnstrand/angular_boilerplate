import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  set(name: string, value: string): void {
    localStorage.setItem(name, value);
  }

  get(name: string): string {
    return localStorage.getItem(name);
  }
}
