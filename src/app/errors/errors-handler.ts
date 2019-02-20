import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from '../notifications/notification.service';
import { AppNotification, NotificationType } from '../notifications/notifications';
import { FormError } from './errors';
import { LoggingService } from '../core/services/logging.service';

@Injectable()
export class ErrorsHandler implements ErrorHandler {
	constructor(private injector: Injector, private loggingService: LoggingService) {}

	handleError(error: any) {
		const notificationService = this.injector.get(NotificationService);
		error = error.rejection || error;
		if (error instanceof HttpErrorResponse) {
			if (!navigator.onLine) {
				notificationService.notify(new AppNotification(NotificationType.Danger, 'Title', 'message'));
			}
			error = error;
			return notificationService.notify(new AppNotification(NotificationType.Danger, 'Title', 'message', error));
		}
		if (error instanceof FormError) {
			console.error(error);
			return notificationService.notify(new AppNotification(NotificationType.Danger, 'Title', 'message', error));
		}
		if (error instanceof TypeError) {
			console.error(error);
			return notificationService.notify(new AppNotification(NotificationType.Danger, 'Title', 'message', error));
		}
		if (error instanceof Error) {
			console.error(error);
			return notificationService.notify(new AppNotification(NotificationType.Danger, 'Title', 'message'));
		}
	}
}
