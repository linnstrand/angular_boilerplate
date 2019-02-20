import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationsComponent } from './notifications.component';
import { NotificationService } from '../notification.service';
import { ChangeDetectorRef } from '../../../../node_modules/@angular/core';
import { AppNotification } from '../notifications';

describe('NotificationsComponent', () => {
  let component: NotificationsComponent;
  let fixture: ComponentFixture<NotificationsComponent>;
  let notificationService: NotificationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationsComponent],
      providers: [ChangeDetectorRef, NotificationService]
    }).compileComponents();
    fixture = TestBed.createComponent(NotificationsComponent);
    component = fixture.componentInstance;
  }));

  beforeEach(() => {
    notificationService = TestBed.get(NotificationService);
  });
  describe('set correct class', () => {
    it('should show error notification', async(() => {
    }));

    it('should show information notification', async(() => {
    }));

    it('should show success notification', async(() => {
    }));

    it('should show warning notification', async(() => {
    }));

  });

});
