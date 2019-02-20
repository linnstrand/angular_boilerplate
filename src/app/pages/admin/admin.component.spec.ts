// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { AdminComponent } from './admin.component';
// import { CustomTranslateLoader } from '../../configs/custom-translate-loader';
// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { ActivatedRouteStub, ActivatedRoute } from '../../../testing/activated-route-stub';
// import { Item } from '../../shared/models/items';
// import { ViewService } from '../../core/services/views.service';
// import { DataService } from '../../core/services/data.service';

// describe('AdminComponent', () => {
//   let component: AdminComponent;
//   let fixture: ComponentFixture<AdminComponent>;
//   let activatedRoute: ActivatedRouteStub;
//   const items = fakeItems as Item[];
//   const data = { items: items };

//   beforeEach(() => {
//     activatedRoute = new ActivatedRouteStub();
//     activatedRoute.setData(data);
//   });

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       schemas: [NO_ERRORS_SCHEMA],
//       imports: [
//         TranslateModule.forRoot({
//           loader: {
//             provide: TranslateLoader,
//             useClass: CustomTranslateLoader
//           }
//         })
//       ],
//       declarations: [AdminComponent],
//       providers: [
//         { provide: ActivatedRoute, useValue: activatedRoute },
//         { provide: DataService, useValue: {} },
//         ViewService
//       ]
//     })
//       .compileComponents()
//       .then(() => {
//         fixture = TestBed.createComponent(AdminComponent);
//         component = fixture.componentInstance;
//         // change detection triggers ngOnInit
//         fixture.detectChanges();
//         return fixture.whenStable().then(() => {
//           // 2nd change detection displays the async-fetched hero
//           fixture.detectChanges();
//         });
//       });
//   }));


//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
