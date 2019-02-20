import { refCount, publish } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AppNotification } from './notifications';

@Injectable()
export class NotificationService {
  private notificationSubject: BehaviorSubject<AppNotification>;
  notifications$: Observable<AppNotification>;

  constructor() {
    this.notificationSubject = new BehaviorSubject<AppNotification>(null);

    this.notifications$ = this.notificationSubject.asObservable().pipe(
      publish(),
      refCount()
    );
  }

  notify(message: AppNotification) {
    // add notification to list and submit the last one.
    this.notificationSubject.next(message);
  }

  // remove the latest notification and submit the last
  removeLast() {
    this.notificationSubject = new BehaviorSubject<AppNotification>(null);
    this.notifications$ = this.notificationSubject.asObservable().pipe(
      publish(),
      refCount()
    );
  }
}
