import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AnimationService } from './core/services/animation.service';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { Router } from '@angular/router';

class MockRouter {
  private subject = new Subject();
  public events = this.subject.asObservable();
}
describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  let translateServiceStub: Partial<TranslateService>;
  let animationServiceStub: Partial<AnimationService>;
  let mockRouter: MockRouter;

  beforeEach(() => {
    translateServiceStub = {
      setDefaultLang() { }
    };
    animationServiceStub = {
      getAnimation() {
        return new Observable<any>();
      }
    };
  });
  mockRouter = new MockRouter();

  beforeEach(async () => {

    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [AppComponent],
      providers: [
        { provide: TranslateService, useValue: translateServiceStub },
        { provide: AnimationService, useValue: animationServiceStub },
        { provide: Router, useValue: mockRouter },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.overrideComponent(AppComponent, {
      set: {
        template: `<app-header></app-header>
            <main class="main-content">
                <router-outlet></router-outlet>
            </main>`
      }
    }).createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(app).not.toBeNull();
  }));
});
