import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminResolverService {

  constructor(private router: Router) { }

  resolve(): Observable<any> {
    if (!'setup valid') {
      this.router.navigate(['/error']);
      return;
    }
    // return data
  }

}
