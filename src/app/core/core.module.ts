import { registerLocaleData, CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppConfig } from '../configs/app.config';
import { NgModule, APP_INITIALIZER, LOCALE_ID, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { CustomTranslateLoader } from '../configs/custom-translate-loader';
import { DataService } from './services/data.service';
import { AppConfigService } from '../configs/app-config.service';
import { LoggingService } from './services/logging.service';
import { NotificationService } from '../notifications/notification.service';
import { AnimationService } from './services/animation.service';
import { CachingInterceptor } from './caching/caching.interceptor';

import localeSE from '@angular/common/locales/sv';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RequestCaching, RequestCacheWithMap } from './caching/request-cache.service';
import { throwifAlreadyLoaded } from './module-import.guard';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

registerLocaleData(localeSE);

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const loadConfig = (appConfig: AppConfig) => {
  return () => {
    return appConfig.load();
  };
};

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: CustomTranslateLoader
      }
    }),
  ],
  providers: [
    AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfig,
      deps: [AppConfig],
      multi: true
    },
    DataService,
    AppConfigService,
    LoggingService,
    NotificationService,
    AnimationService,
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'sv' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: RequestCaching, useClass: RequestCacheWithMap },
  ]

})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwifAlreadyLoaded(parentModule, 'CoreModule');
  }
}
