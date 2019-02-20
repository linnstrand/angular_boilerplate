// export for convenience.
export { ActivatedRoute } from '@angular/router';

import { convertToParamMap, ParamMap, Params, Data, ActivatedRouteSnapshot } from '@angular/router';
import { ReplaySubject } from 'rxjs';

/**
 * An ActivateRoute test double with a `paramMap` observable.
 * Use the `setParamMap()` method to add the next `paramMap` value.
 */
export class ActivatedRouteStub {
  // Use a ReplaySubject to share previous values with subscribers
  // and pump new values into the `paramMap` observable
  private paramMapSubject = new ReplaySubject<ParamMap>();
  private data = new ReplaySubject<Data>();

  constructor(initialParams?: Params) {
    this.setParamMap(initialParams);
  }

  /** The mock paramMap observable */
  readonly paramMap = this.paramMapSubject.asObservable();

  /** Set the paramMap observables's next value */
  setParamMap(params?: Params) {
    this.paramMapSubject.next(convertToParamMap(params));
  }

  setData(d: Data) {
    this.data.next(d);
  }
}
