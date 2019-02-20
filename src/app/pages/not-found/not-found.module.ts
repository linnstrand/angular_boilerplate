import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found.component';
import { SharedModule} from '../../shared/shared.module';

const routes: Routes = [
  { path: '', component: NotFoundComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    NotFoundComponent
  ]
})
export class NotFoundModule { }
