import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from '../pages/error/error.component';
import { AdminResolverService } from './admin-resolver.service';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'admin', loadChildren: '../pages/admin/admin.module#AdminModule', pathMatch: 'full', canActivate: [AuthGuard], resolve: { items: AdminResolverService } },
  { path: 'error', component: ErrorComponent },
  { path: '404', loadChildren: '../pages/not-found/not-found.module#NotFoundModule', pathMatch: 'full' },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
