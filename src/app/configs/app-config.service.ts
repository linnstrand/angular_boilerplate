import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAppConfig } from './app.config.interface';

@Injectable({
	providedIn: 'root'
})
export class AppConfigService {
	constructor(private http: HttpClient) {}

	getConfigFile(environment: string): Observable<IAppConfig> {
		const jsonFile = `config/${environment}/config.${environment}.json`;
		return this.http.get<IAppConfig>(jsonFile);
	}
}
