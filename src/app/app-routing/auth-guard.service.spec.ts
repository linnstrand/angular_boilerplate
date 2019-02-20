import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth-guard.service';
import { AppConfig } from '../configs/app.config';

let authGuard: AuthGuard;

describe('AuthGuardService admin', () => {
  const appConfigStub = {
    settings: {}
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AppConfig, useValue: appConfigStub }
      ]
    });
    authGuard = TestBed.get(AuthGuard);
  });

  it('can instantiate service via DI', () => {
    expect(authGuard instanceof AuthGuard).toBe(true);
  });

  it('it should resolve true for admin', () => {
    expect(authGuard.canActivate()).toBe(true);
  });

});

describe('AuthGuardService non-admin', () => {
  const appConfigStub = {
    settings: {}
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AppConfig, useValue: appConfigStub }
      ]
    });
    authGuard = TestBed.get(AuthGuard);
  });

  it('it should resolve false for non-admin', () => {
    expect(authGuard.canActivate()).toBe(false);
  });
});
