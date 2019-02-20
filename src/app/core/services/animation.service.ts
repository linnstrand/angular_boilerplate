import { Injectable } from '@angular/core';
import { Subject ,  Observable } from 'rxjs';

@Injectable()
export class AnimationService {

  animation = new Subject<any>();

  startAnimation(state: any) {
    this.animation.next(state);
  }

  getAnimation(): Observable<any> {
    return this.animation.asObservable();
  }
}
