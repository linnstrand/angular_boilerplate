import { Injectable } from '@angular/core';
import { HttpEvent, HttpRequest, HttpResponse, HttpInterceptor, HttpHandler } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { startWith, tap } from 'rxjs/operators';
import { RequestCaching } from './request-cache.service';

@Injectable()
export class CachingInterceptor implements HttpInterceptor {
	constructor(private cache: RequestCaching) {}

	intercept(req: HttpRequest<any>, next: HttpHandler) {
		// confirm cachable call
		if (!isCachable(req)) {
			return next.handle(req);
		}

		const cachedResponse = this.cache.get(req);

		// cache-then-refresh
		if (req.headers.get('x-refresh')) {
			const results$ = sendRequest(req, next, this.cache);
			return cachedResponse ? results$.pipe(startWith(cachedResponse)) : results$;
		}
		// cache-or-fetch
		return cachedResponse ? of(cachedResponse) : sendRequest(req, next, this.cache);
	}
}

function isCachable(req: HttpRequest<any>) {
	// Only cache certain requests
	return req.method === 'GET' && req.url.indexOf('test') > -1;
}

/**
 * Get server response observable by sending request to `next()`.
 * Will add the response to the cache on the way out.
 */
function sendRequest(req: HttpRequest<any>, next: HttpHandler, cache: RequestCaching): Observable<HttpEvent<any>> {
	return next.handle(req).pipe(
		tap(response => {
			// There may be other events besides the response.
			if (response instanceof HttpResponse) {
				cache.put(req, response); // Update the cache.
			}
		})
	);
}
