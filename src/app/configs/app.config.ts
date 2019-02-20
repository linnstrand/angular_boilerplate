import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IAppConfig } from './app.config.interface';
import { Observable, forkJoin } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { NotificationService } from '../notifications/notification.service';
import { AppNotification, NotificationType } from '../notifications/notifications';
import { UserError } from '../errors/errors';
import { AppConfigService } from './app-config.service';

@Injectable({ providedIn: 'root' })
export class AppConfig {
	public settings: IAppConfig;
	hostname: string;
	environmentName: string;
	constructor(private configService: AppConfigService, private notificationService: NotificationService) {
		this.hostname = location.hostname;
		this.environmentName = environment.name;
	}

	load(): Promise<any> {
		return this.getConfigFile();
		//     .then((config: IAppConfig) => {

		//     .catch(() => {
		//         this.notificationService.notify(new AppNotification(NotificationType.Danger, 'Åtkomst vägrad', ''));
		//       });
	}

	getConfigFile(): Promise<IAppConfig> {
		return this.configService.getConfigFile(this.environmentName).toPromise();
	}
}
