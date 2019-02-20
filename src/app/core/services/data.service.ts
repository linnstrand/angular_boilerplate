import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppConfig } from '../../configs/app.config';
import { Item } from 'src/app/shared/models/item';

@Injectable({ providedIn: 'root' })
export class DataService {


  notValidService = false;

  constructor(
    private http: HttpClient,
    private appConfig: AppConfig
  ) {
    try {
    } catch (error) {
      this.notValidService = true;
    }
  }

  getAll() {
    return this.http.get<any>('url');
  }

  getItem(): any {
    return this.http.get<any>('url').pipe(
      map(result => this.validateResult())
    );
  }

  validateResult() { }


  getWithJoin() {
    return forkJoin(['call1', 'call2']).pipe(
      map(([]) => {
        ///
      }));
  }

  replaceItem(newItem: Item, id: string): Observable<any> {
    const item = Object.assign({}, newItem);
    item.id = id;
    return this.save();
  }

  save(): any {
    throw new Error('Method not implemented.');
  }

}
