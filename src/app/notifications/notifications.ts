import { HttpErrorResponse } from '@angular/common/http';

export class AppNotification {
    constructor(readonly type: NotificationType, readonly title: string, readonly message: string, readonly error?: HttpErrorResponse | Error, ) {
    }
}

export enum NotificationType {
    Success = 'SUCCESS',
    Info = 'INFO',
    Warning = 'WARNING',
    Danger = 'DANGER'
}
