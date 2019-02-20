import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/observable/throw';
import { AppConfig } from '../../configs/app.config';

@Injectable()
export class LoggingService {
  constructor(private http: HttpClient, private appConfig: AppConfig) {}

  logError(msg: string) {
    this.log(msg, '/error');
  }

  logEvent(msg: string) {
    this.log(msg, '/info');
  }

  log(msg: string, type: string) {
    const body = JSON.stringify({ message: msg });
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post('url', body, httpOptions).subscribe((response: any) => {
      console.log('Success: ', response);
    });
  }
}
