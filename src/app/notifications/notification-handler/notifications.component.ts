import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { AppNotification, NotificationType } from '../notifications';
import { NotificationService } from '../notification.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-notifications',
	templateUrl: './notifications.component.html'
})
export class NotificationsComponent implements OnInit, OnDestroy {
	notification: AppNotification;
	alertType: string;
	showDetails: boolean;
	error: any;
	subscription: Subscription;
	constructor(private changeDetector: ChangeDetectorRef, private notificationService: NotificationService) {}

	ngOnInit() {
		this.subscription = this.notificationService.notifications$.subscribe(notification => {
			if (!notification) {
				return;
			}
			this.notification = notification;
			this.error = notification.error;
			this.alertType = this.setNotificationType(notification.type);
			this.changeDetector.detectChanges();
		});
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	setNotificationType(type) {
		switch (type) {
			case NotificationType.Danger:
				return 'alert--danger';
			case NotificationType.Info:
				return 'alert--info';
			case NotificationType.Success:
				return 'alert--success';
			case NotificationType.Warning:
				return 'alert--warning';
			default:
				break;
		}
	}

	close() {
		this.notification = undefined;
		this.notificationService.removeLast();
		this.changeDetector.detectChanges();
	}
}
