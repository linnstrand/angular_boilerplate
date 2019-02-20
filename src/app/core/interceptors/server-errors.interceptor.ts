import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiError } from '../../errors/errors';
@Injectable()
export class ServerErrorsInterceptor implements HttpInterceptor {
	url: string;
	constructor() {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const started = Date.now();
		this.url = req.url;
		return next.handle(req).pipe(
			tap(
				(event: HttpEvent<any>) => {
					if (event instanceof HttpResponse) {
						const elapsed = Date.now() - started;
						if (elapsed > 1000) {
							console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
						}
					}
				},
				(error: any) => {
					if (error instanceof HttpErrorResponse) {
						if (!error.status) {
							const elapsed = Date.now() - started;
							console.log(`Request for ${req.urlWithParams} failed after ${elapsed} ms.`);
							throw new ApiError(error, 'message', req.urlWithParams);
						}
					}
				}
			)
		);
	}
}
