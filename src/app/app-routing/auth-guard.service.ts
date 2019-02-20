import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AppConfig } from '../configs/app.config';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private appConfig: AppConfig) { }

  canActivate(): boolean {
    return !!this.appConfig.settings.isAdmin;
  }
}
