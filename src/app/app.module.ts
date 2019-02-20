import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { ErrorModule } from './errors/error.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { ErrorComponent } from './pages/error/error.component';
import { HeaderComponent } from './header/header.component';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog/confirm-dialog.component';
import { SettingsComponent } from './pages/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConfirmDialogComponent,
    ErrorComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    ErrorModule,
    SettingsComponent,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  entryComponents: [ConfirmDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
