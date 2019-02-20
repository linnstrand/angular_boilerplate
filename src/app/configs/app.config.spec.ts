import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { AppConfig } from './app.config';
import { NotificationService } from '../notifications/notification.service';
import { AppConfigService } from './app-config.service';
import { TestAppConfigService } from './test-app-config.service';
import { IAppConfig } from './app.config.interface';


describe('AppConfig', () => {
  let appConfig: AppConfig;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppConfig,
        { provide: AppConfigService, useClass: TestAppConfigService },
        { provide: NotificationService, useValue: {} }
      ]
    });
    appConfig = TestBed.get(AppConfig);
  });

  describe('get production settings', () => {
    beforeEach(() => {
      appConfig.hostname = 'production';
      appConfig.environmentName = 'production';
    });

    // it('can instantiate service via DI', () => {
    //   expect(appConfig instanceof AppConfig).toBe(true);
    // });

    it('should load appconfig correctly', fakeAsync(() => {
      appConfig.load().then((config: any) => {
        expect(config).toBeDefined();
      });
    }));

    it('should get config file', fakeAsync(() => {
      appConfig.getConfigFile().then((config: IAppConfig) => {
        expect(config).toBeDefined();
      });
    }));

    it('should create app settings', fakeAsync(() => {
      appConfig.getConfigFile().then((config: IAppConfig) => {
        appConfig.settings = config;
        let settings;
        appConfig.getProdSettings().subscribe(s => { settings = s; });
        tick(100);
        expect(settings.userId).toBe('12345');
      });
    }));

  });

  describe('get local settings', () => {
    beforeEach(() => {
      appConfig.hostname = 'localhost';
      appConfig.environmentName = '127.0.0.1';
    });

    it('should load appconfig correctly', fakeAsync(() => {
      appConfig.load().then((config: any) => {
        expect(config).toBeDefined();
      });
    }));


    it('should get config file', fakeAsync(() => {
      appConfig.getConfigFile().then((config: IAppConfig) => {
        expect(config).toBeDefined();
      });
    }));
  }
  );
});

