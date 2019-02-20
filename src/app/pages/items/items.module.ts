import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsComponent } from './items.component';
import { SharedModule } from '../../shared/shared.module';

import { TimeValidationDirective } from '../../shared/directives/time-validation.directive';
import { NumberOnlyDirective } from '../../shared/directives/number-only.directive';
import { ItemComponent } from './form/item.component';

const routes: Routes = [
  { path: '', component: ItemsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    ItemsComponent,
    ItemComponent,
    TimeValidationDirective,
    NumberOnlyDirective
  ]
})
export class ItemsModule { }
