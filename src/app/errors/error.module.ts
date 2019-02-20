import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorsHandler } from './errors-handler';
 import { ServerErrorsInterceptor } from '../core/interceptors/server-errors.interceptor';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  providers: [
    { provide: ErrorHandler, useClass: ErrorsHandler },
    { provide: HTTP_INTERCEPTORS, useClass: ServerErrorsInterceptor, multi: true },
  ]
})
export class ErrorModule { }
